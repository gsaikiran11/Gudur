function hasClass(el, cls) {
  return el.className && new RegExp('(\\s|^)' + cls + '(\\s|$)').test(el.className);
}
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

class SearchLayer extends ol.control.Control {
  constructor(optOptions) {
    const selectRef = { current: null };
    const highlightOverlayRef = { current: null };
    const options = optOptions || {};
    if (!options.layer) {
      throw new Error('Missing layer in options');
    }
    
    let source;
    if (options.layer instanceof ol.layer.Image &&
        options.layer.getSource() instanceof ol.source.ImageVector) {
      source = options.layer.getSource().getSource();
    } else if (options.layer instanceof ol.layer.Vector) {
      source = options.layer.getSource();
    }
    if (source instanceof ol.source.Cluster) {
      source = source.getSource();
    }

    console.log('Total features:', source.getFeatures().length);

    // 🔍 DEBUG: Check actual property names
    const sampleProps = source.getFeatures().slice(0, 3).map(f => {
      const props = f.getProperties();
      return {
        VILL_Name: props.VILL_Name,
        'Old Sy.No.': props['Old Sy.No.'],
        'LP_No.': props['LP_No.'],
        'khata No': props['khata No'],
        'Katha_No': props['Katha_No'],
        allKeys: Object.keys(props).filter(k => k.toLowerCase().includes('khat'))
      };
    });
    console.log('Sample feature properties:', sampleProps);

    // Extract ALL data with multiple property name attempts
    const villageData = {};
    const allKhataNosRaw = [];
    const allLpmNosRaw = [];
    const allSyNosRaw = [];

    source.getFeatures().forEach(f => {
      const props = f.getProperties();
      
      const village = (props.VILL_Name || '').toString().trim();
      const syNo = (props['Old Sy.No.'] || '').toString().trim();
      const lpmNo = (props['LP_No.'] || '').toString().trim();
      
      // TRY ALL POSSIBLE KHATA PROPERTY NAMES
      let khataNo = (props['khata No'] || '').toString().trim();
      if (!khataNo) khataNo = (props['Katha_No'] || '').toString().trim();
      if (!khataNo) khataNo = (props['Khata_No'] || '').toString().trim();
      if (!khataNo) khataNo = (props['Khata No'] || '').toString().trim();
      if (!khataNo) {
        Object.keys(props).forEach(key => {
          if (key.toLowerCase().includes('khat') || key.toLowerCase().includes('katha')) {
            khataNo = (props[key] || '').toString().trim();
          }
        });
      }

      allSyNosRaw.push(syNo);
      allLpmNosRaw.push(lpmNo);
      allKhataNosRaw.push(khataNo);

      if (village) {
        if (!villageData[village]) {
          villageData[village] = { syNos: new Set(), lpmNos: new Set(), khataNos: new Set() };
        }
        if (syNo) villageData[village].syNos.add(syNo);
        if (lpmNo) villageData[village].lpmNos.add(lpmNo);
        if (khataNo) villageData[village].khataNos.add(khataNo);
      }
    });

    console.log('Khata data found:', allKhataNosRaw.filter(k => k).length, 'unique:', [...new Set(allKhataNosRaw.filter(k => k))].length);

    const villages = Object.keys(villageData).sort();
    const allSyNos = [...new Set(allSyNosRaw.filter(s => s))].sort((a, b) => {
      const numA = parseFloat(a.match(/^\d+/)?.[0] || 0);
      const numB = parseFloat(b.match(/^\d+/)?.[0] || 0);
      return numA - numB || a.localeCompare(b);
    });
    const allLpmNos = [...new Set(allLpmNosRaw.filter(l => l))].sort((a, b) => {
      const numA = parseFloat(a.match(/^\d+/)?.[0] || 0);
      const numB = parseFloat(b.match(/^\d+/)?.[0] || 0);
      return numA - numB || a.localeCompare(b);
    });
    const allKhataNos = [...new Set(allKhataNosRaw.filter(k => k))].sort((a, b) => {
      const numA = parseFloat(a.match(/^\d+/)?.[0] || 0);
      const numB = parseFloat(b.match(/^\d+/)?.[0] || 0);
      return numA - numB || a.localeCompare(b);
    });

    const button = document.createElement('button');
    const toggleHideShowInput = () => {
      const container = document.querySelector('.search-layer-input-container');
      if (hasClass(container, 'search-layer-collapsed')) {
        removeClass(container, 'search-layer-collapsed');
      } else {
        clearAllInputs();
        addClass(container, 'search-layer-collapsed');
        clearHighlights();
      }
    };
    button.addEventListener('click', toggleHideShowInput);

    const form = document.createElement('form');
    form.id = 'search-form';
    const inputContainer = document.createElement('div');
    inputContainer.className = 'search-layer-input-container search-layer-input-search search-layer-collapsed';

    // ✅ REMOVED: General 'Search ...' input field

    const villageContainer = document.createElement('div');
    villageContainer.className = 'village-dropdown-container';
    const villageSelect = document.createElement('select');
    villageSelect.className = 'village-input';
    villageSelect.innerHTML = '<option value="">Select Village</option>';
    villages.forEach(village => {
      const option = document.createElement('option');
      option.value = village;
      option.textContent = village;
      villageSelect.appendChild(option);
    });
    villageContainer.appendChild(villageSelect);
    
    const syNoContainer = document.createElement('div');
    syNoContainer.className = 'sy-no-container';
    const syNoInput = document.createElement('input');
    syNoInput.type = 'text';
    syNoInput.placeholder = 'Old Sy.No.';
    syNoInput.className = 'sy-no-input autocomplete-input';
    const syNoDropdown = document.createElement('div');
    syNoDropdown.className = 'autocomplete-dropdown';
    syNoDropdown.style.display = 'none';
    syNoContainer.appendChild(syNoInput);
    syNoContainer.appendChild(syNoDropdown);
    
    const lpmContainer = document.createElement('div');
    lpmContainer.className = 'lpm-container';
    const lpmInput = document.createElement('input');
    lpmInput.type = 'text';
    lpmInput.placeholder = 'LP_No.';
    lpmInput.className = 'lpm-input autocomplete-input';
    const lpmDropdown = document.createElement('div');
    lpmDropdown.className = 'autocomplete-dropdown';
    lpmDropdown.style.display = 'none';
    lpmContainer.appendChild(lpmInput);
    lpmContainer.appendChild(lpmDropdown);
    
    const khataContainer = document.createElement('div');
    khataContainer.className = 'khata-container';
    const khataInput = document.createElement('input');
    khataInput.type = 'text';
    khataInput.placeholder = 'khata No';
    khataInput.className = 'khata-input autocomplete-input';
    const khataDropdown = document.createElement('div');
    khataDropdown.className = 'autocomplete-dropdown';
    khataDropdown.style.display = 'none';
    khataContainer.appendChild(khataInput);
    khataContainer.appendChild(khataDropdown);
    
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.type = 'submit';
    searchButton.className = 'search-btn';

    // ✅ REMOVED general input, only specific fields now
    inputContainer.appendChild(villageContainer);
    inputContainer.appendChild(syNoContainer);
    inputContainer.appendChild(lpmContainer);
    inputContainer.appendChild(khataContainer);
    inputContainer.appendChild(searchButton);
    form.appendChild(inputContainer);

    const element = document.createElement('div');
    element.className = 'search-layer ol-unselectable ol-control';
    element.appendChild(button);
    element.appendChild(form);

    super({ element: element, target: options.target });

    const select = new ol.interaction.Select({
      layers: [options.layer],
      condition: ol.events.condition.never
    });
    selectRef.current = select;
    options.map.addInteraction(select);

    const highlightStyle = new ol.style.Style({
      stroke: new ol.style.Stroke({ color: '#ff0000', width: 4 }),
      fill: new ol.style.Fill({ color: 'rgba(255, 0, 0, 0.4)' })
    });
    const highlightSource = new ol.source.Vector();
    const highlightLayer = new ol.layer.Vector({
      source: highlightSource,
      style: highlightStyle,
      zIndex: 1000
    });
    options.map.addLayer(highlightLayer);
    highlightOverlayRef.current = highlightLayer;

    let currentSyNos = allSyNos;
    let currentLpmNos = allLpmNos;
    let currentKhataNos = allKhataNos;

    function clearAllInputs() {
      villageSelect.value = '';
      syNoInput.value = '';
      lpmInput.value = '';
      khataInput.value = '';
      syNoDropdown.style.display = 'none';
      lpmDropdown.style.display = 'none';
      khataDropdown.style.display = 'none';
      currentSyNos = allSyNos;
      currentLpmNos = allLpmNos;
      currentKhataNos = allKhataNos;
    }

    function clearHighlights() {
      if (selectRef.current) selectRef.current.getFeatures().clear();
      if (highlightOverlayRef.current) highlightOverlayRef.current.getSource().clear();
    }

    function updateDropdown(input, dropdown, availableItems) {
      const query = input.value;
      dropdown.innerHTML = '';
      if (!query || query.length < 1) {
        dropdown.style.display = 'none';
        return;
      }
      
      const matches = availableItems.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      ).sort((a, b) => {
        const numA = parseFloat(a.match(/^\d+/)?.[0] || 0);
        const numB = parseFloat(b.match(/^\d+/)?.[0] || 0);
        return numA - numB || Math.abs(a.length - query.length) - Math.abs(b.length - query.length);
      });
      
      matches.slice(0, 8).forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.className = 'autocomplete-item';
        div.addEventListener('click', () => {
          input.value = item;
          dropdown.style.display = 'none';
          performSearch();
        });
        dropdown.appendChild(div);
      });
      dropdown.style.display = matches.length > 0 ? 'block' : 'none';
    }

    const updateSyNoDropdown = () => {
      const availableSyNos = villageSelect.value && villageData[villageSelect.value] 
        ? Array.from(villageData[villageSelect.value].syNos).filter(Boolean)
        : currentSyNos;
      updateDropdown(syNoInput, syNoDropdown, availableSyNos);
    };

    const updateLpmDropdown = () => {
      const availableLpmNos = villageSelect.value && villageData[villageSelect.value] 
        ? Array.from(villageData[villageSelect.value].lpmNos).filter(Boolean)
        : currentLpmNos;
      updateDropdown(lpmInput, lpmDropdown, availableLpmNos);
    };

    const updateKhataDropdown = () => {
      const availableKhataNos = villageSelect.value && villageData[villageSelect.value] 
        ? Array.from(villageData[villageSelect.value].khataNos).filter(Boolean)
        : currentKhataNos;
      console.log('Khata available:', availableKhataNos.slice(0, 3));
      updateDropdown(khataInput, khataDropdown, availableKhataNos);
    };

    villageSelect.addEventListener('change', (e) => {
      const selectedVillage = e.target.value;
      if (selectedVillage && villageData[selectedVillage]) {
        currentSyNos = Array.from(villageData[selectedVillage].syNos).sort((a, b) => {
          const numA = parseFloat(a.match(/^\d+/)?.[0] || 0);
          const numB = parseFloat(b.match(/^\d+/)?.[0] || 0);
          return numA - numB || a.localeCompare(b);
        }).filter(Boolean);
        currentLpmNos = Array.from(villageData[selectedVillage].lpmNos).sort((a, b) => {
          const numA = parseFloat(a.match(/^\d+/)?.[0] || 0);
          const numB = parseFloat(b.match(/^\d+/)?.[0] || 0);
          return numA - numB || a.localeCompare(b);
        }).filter(Boolean);
        currentKhataNos = Array.from(villageData[selectedVillage].khataNos).sort((a, b) => {
          const numA = parseFloat(a.match(/^\d+/)?.[0] || 0);
          const numB = parseFloat(b.match(/^\d+/)?.[0] || 0);
          return numA - numB || a.localeCompare(b);
        }).filter(Boolean);
      } else {
        currentSyNos = allSyNos;
        currentLpmNos = allLpmNos;
        currentKhataNos = allKhataNos;
      }
      syNoInput.value = lpmInput.value = khataInput.value = '';
    });

    function performSearch() {
      const village = villageSelect.value.trim();
      const syNo = syNoInput.value.trim();
      const lpm = lpmInput.value.trim();
      const khata = khataInput.value.trim();

      console.log('🔍 SEARCH:', { village, syNo, lpm, khata });

      if (!village && !syNo && !lpm && !khata) {
        clearHighlights();
        return;
      }

      const features = source.getFeatures();
      const matchedFeatures = features.filter(f => {
        const props = f.getProperties();
        const propVillage = (props.VILL_Name || '').toString().trim();
        const propSyNo = (props['Old Sy.No.'] || '').toString().trim();
        const propLpm = (props['LP_No.'] || '').toString().trim();
        
        // ✅ FIXED: Multiple property checks for khata
        let propKhata = (props['khata No'] || '').toString().trim();
        if (!propKhata) propKhata = (props['Katha_No'] || '').toString().trim();
        if (!propKhata) propKhata = (props['Khata_No'] || '').toString().trim();
        if (!propKhata) propKhata = (props['Khata No'] || '').toString().trim();

        const villageMatch = !village || propVillage.toLowerCase() === village.toLowerCase();
        const syNoMatch = !syNo || propSyNo === syNo;
        const lpmMatch = !lpm || propLpm === lpm;
        const khataMatch = !khata || propKhata === khata;

        const isMatch = villageMatch && syNoMatch && lpmMatch && khataMatch;
        
        if (isMatch && khata) {
          console.log('✅ KHATA MATCH!', { khata, propKhata, featureId: f.ol_uid });
        }
        
        return isMatch;
      });

      console.log(`🎯 FOUND ${matchedFeatures.length} matches`);

      clearHighlights();
      
      if (matchedFeatures.length > 0) {
        matchedFeatures.forEach((feature, i) => {
          console.log(`✨ Highlighting ${i}:`, feature.ol_uid);
          selectRef.current.getFeatures().push(feature);
          const clone = feature.clone();
          highlightOverlayRef.current.getSource().addFeature(clone);
        });

        if (syNo || lpm || khata) {
          let totalExtent = null;
          matchedFeatures.forEach(feature => {
            const geom = feature.getGeometry();
            if (geom && !ol.extent.isEmpty(geom.getExtent())) {
              const extent = geom.getExtent();
              ol.extent.buffer(extent, 20, extent);
              totalExtent = totalExtent ? ol.extent.extend(totalExtent, extent) : extent;
            }
          });
          
          if (totalExtent && !ol.extent.isEmpty(totalExtent)) {
            console.log('📍 ZOOMING:', totalExtent);
            const mapSize = options.map.getSize();
            options.map.getView().fit(totalExtent, {
              size: mapSize,
              padding: [20, 20, 20, 20],
              duration: 1000,
              maxZoom: 22,
              constrainResolution: false
            });
          } else {
            console.warn('⚠️ No geometry for zoom');
          }
        }
      } else {
        console.warn('❌ No matches found');
      }
    }

    // Event handlers
    syNoInput.addEventListener('input', updateSyNoDropdown);
    syNoInput.addEventListener('focus', updateSyNoDropdown);
    lpmInput.addEventListener('input', updateLpmDropdown);
    lpmInput.addEventListener('focus', updateLpmDropdown);
    khataInput.addEventListener('input', updateKhataDropdown);
    khataInput.addEventListener('focus', updateKhataDropdown);

    [syNoInput, lpmInput, khataInput].forEach((input, i) => {
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          performSearch();
        } else if (e.key === 'Escape') {
          [syNoDropdown, lpmDropdown, khataDropdown][i].style.display = 'none';
        }
      });
    });

    document.addEventListener('click', e => {
      if (!syNoContainer.contains(e.target)) syNoDropdown.style.display = 'none';
      if (!lpmContainer.contains(e.target)) lpmDropdown.style.display = 'none';
      if (!khataContainer.contains(e.target)) khataDropdown.style.display = 'none';
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      performSearch();
    });

    button.addEventListener('click', toggleHideShowInput);
  }
}
