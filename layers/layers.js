ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([801717.229068, 1752464.557804, 802824.117911, 1752993.031394]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_cadastral_india_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bhuvan-vec1.nrsc.gov.in:443/bhuvan/ows",
                              attributions: ' ',
                              params: {
                                "LAYERS": "cadastral:cadastral_india",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'cadastral_india',
                            popuplayertitle: 'cadastral_india',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_cadastral_india_1, 0]);
var format_GUDUR_MANDAL_2 = new ol.format.GeoJSON();
var features_GUDUR_MANDAL_2 = format_GUDUR_MANDAL_2.readFeatures(json_GUDUR_MANDAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_GUDUR_MANDAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUDUR_MANDAL_2.addFeatures(features_GUDUR_MANDAL_2);
var lyr_GUDUR_MANDAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUDUR_MANDAL_2, 
                style: style_GUDUR_MANDAL_2,
                popuplayertitle: 'GUDUR_MANDAL',
                interactive: true,
                title: '<img src="styles/legend/GUDUR_MANDAL_2.png" /> GUDUR_MANDAL'
            });
var format_Penchikalapadu_3 = new ol.format.GeoJSON();
var features_Penchikalapadu_3 = format_Penchikalapadu_3.readFeatures(json_Penchikalapadu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Penchikalapadu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penchikalapadu_3.addFeatures(features_Penchikalapadu_3);
var lyr_Penchikalapadu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Penchikalapadu_3, 
                style: style_Penchikalapadu_3,
                popuplayertitle: 'Penchikalapadu',
                interactive: true,
                title: '<img src="styles/legend/Penchikalapadu_3.png" /> Penchikalapadu'
            });
var format_KNagulapuram_4 = new ol.format.GeoJSON();
var features_KNagulapuram_4 = format_KNagulapuram_4.readFeatures(json_KNagulapuram_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_KNagulapuram_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KNagulapuram_4.addFeatures(features_KNagulapuram_4);
var lyr_KNagulapuram_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KNagulapuram_4, 
                style: style_KNagulapuram_4,
                popuplayertitle: 'K. Nagulapuram',
                interactive: true,
                title: '<img src="styles/legend/KNagulapuram_4.png" /> K. Nagulapuram'
            });
var format_Julakallu_5 = new ol.format.GeoJSON();
var features_Julakallu_5 = format_Julakallu_5.readFeatures(json_Julakallu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Julakallu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Julakallu_5.addFeatures(features_Julakallu_5);
var lyr_Julakallu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Julakallu_5, 
                style: style_Julakallu_5,
                popuplayertitle: 'Julakallu',
                interactive: true,
                title: '<img src="styles/legend/Julakallu_5.png" /> Julakallu'
            });
var format_Mallapuram_6 = new ol.format.GeoJSON();
var features_Mallapuram_6 = format_Mallapuram_6.readFeatures(json_Mallapuram_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Mallapuram_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mallapuram_6.addFeatures(features_Mallapuram_6);
var lyr_Mallapuram_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mallapuram_6, 
                style: style_Mallapuram_6,
                popuplayertitle: 'Mallapuram',
                interactive: true,
                title: '<img src="styles/legend/Mallapuram_6.png" /> Mallapuram'
            });
var format_Budidapadu_7 = new ol.format.GeoJSON();
var features_Budidapadu_7 = format_Budidapadu_7.readFeatures(json_Budidapadu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Budidapadu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Budidapadu_7.addFeatures(features_Budidapadu_7);
var lyr_Budidapadu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Budidapadu_7, 
                style: style_Budidapadu_7,
                popuplayertitle: 'Budidapadu',
                interactive: true,
                title: '<img src="styles/legend/Budidapadu_7.png" /> Budidapadu'
            });
var format_RKhanapuram_8 = new ol.format.GeoJSON();
var features_RKhanapuram_8 = format_RKhanapuram_8.readFeatures(json_RKhanapuram_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_RKhanapuram_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKhanapuram_8.addFeatures(features_RKhanapuram_8);
var lyr_RKhanapuram_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RKhanapuram_8, 
                style: style_RKhanapuram_8,
                popuplayertitle: 'R. Khanapuram',
                interactive: true,
                title: '<img src="styles/legend/RKhanapuram_8.png" /> R. Khanapuram'
            });
var format_Chanugondla_9 = new ol.format.GeoJSON();
var features_Chanugondla_9 = format_Chanugondla_9.readFeatures(json_Chanugondla_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Chanugondla_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chanugondla_9.addFeatures(features_Chanugondla_9);
var lyr_Chanugondla_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chanugondla_9, 
                style: style_Chanugondla_9,
                popuplayertitle: 'Chanugondla',
                interactive: true,
                title: '<img src="styles/legend/Chanugondla_9.png" /> Chanugondla'
            });
var format_Gudipadu_10 = new ol.format.GeoJSON();
var features_Gudipadu_10 = format_Gudipadu_10.readFeatures(json_Gudipadu_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Gudipadu_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gudipadu_10.addFeatures(features_Gudipadu_10);
var lyr_Gudipadu_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gudipadu_10, 
                style: style_Gudipadu_10,
                popuplayertitle: 'Gudipadu',
                interactive: true,
                title: '<img src="styles/legend/Gudipadu_10.png" /> Gudipadu'
            });
var format_Ponakallu_11 = new ol.format.GeoJSON();
var features_Ponakallu_11 = format_Ponakallu_11.readFeatures(json_Ponakallu_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Ponakallu_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponakallu_11.addFeatures(features_Ponakallu_11);
var lyr_Ponakallu_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ponakallu_11, 
                style: style_Ponakallu_11,
                popuplayertitle: 'Ponakallu',
                interactive: true,
                title: '<img src="styles/legend/Ponakallu_11.png" /> Ponakallu'
            });
var format_Munagala_12 = new ol.format.GeoJSON();
var features_Munagala_12 = format_Munagala_12.readFeatures(json_Munagala_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Munagala_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Munagala_12.addFeatures(features_Munagala_12);
var lyr_Munagala_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Munagala_12, 
                style: style_Munagala_12,
                popuplayertitle: 'Munagala',
                interactive: true,
                title: '<img src="styles/legend/Munagala_12.png" /> Munagala'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_cadastral_india_1.setVisible(true);lyr_GUDUR_MANDAL_2.setVisible(false);lyr_Penchikalapadu_3.setVisible(false);lyr_KNagulapuram_4.setVisible(false);lyr_Julakallu_5.setVisible(false);lyr_Mallapuram_6.setVisible(false);lyr_Budidapadu_7.setVisible(false);lyr_RKhanapuram_8.setVisible(false);lyr_Chanugondla_9.setVisible(false);lyr_Gudipadu_10.setVisible(false);lyr_Ponakallu_11.setVisible(false);lyr_Munagala_12.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_cadastral_india_1,lyr_GUDUR_MANDAL_2,lyr_Penchikalapadu_3,lyr_KNagulapuram_4,lyr_Julakallu_5,lyr_Mallapuram_6,lyr_Budidapadu_7,lyr_RKhanapuram_8,lyr_Chanugondla_9,lyr_Gudipadu_10,lyr_Ponakallu_11,lyr_Munagala_12];
lyr_GUDUR_MANDAL_2.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', 'VILL_Name': 'VILL_Name', });
lyr_Penchikalapadu_3.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_KNagulapuram_4.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_Julakallu_5.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_Mallapuram_6.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_Budidapadu_7.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_RKhanapuram_8.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_Chanugondla_9.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_Gudipadu_10.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_Ponakallu_11.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_Munagala_12.set('fieldAliases', {'bhucode': 'bhucode', 'LP_No.': 'LP_No.', 'Old Sy.No.': 'Old Sy.No.', 'LP Extent': 'LP Extent', 'Nature': 'Nature', 'Sub Nature': 'Sub Nature', 'Classifica': 'Classifica', 'Sub Classi': 'Sub Classi', 'Khata No': 'Khata No', 'Pattadar N': 'Pattadar N', 'How Acquir': 'How Acquir', 'Enjoyeer N': 'Enjoyeer N', 'Search': 'Search', });
lyr_GUDUR_MANDAL_2.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', 'VILL_Name': '', });
lyr_Penchikalapadu_3.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_KNagulapuram_4.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_Julakallu_5.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_Mallapuram_6.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_Budidapadu_7.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_RKhanapuram_8.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_Chanugondla_9.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_Gudipadu_10.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_Ponakallu_11.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_Munagala_12.set('fieldImages', {'bhucode': 'TextEdit', 'LP_No.': 'TextEdit', 'Old Sy.No.': 'TextEdit', 'LP Extent': 'TextEdit', 'Nature': 'TextEdit', 'Sub Nature': 'TextEdit', 'Classifica': 'TextEdit', 'Sub Classi': 'TextEdit', 'Khata No': 'TextEdit', 'Pattadar N': 'TextEdit', 'How Acquir': 'TextEdit', 'Enjoyeer N': 'TextEdit', 'Search': 'TextEdit', });
lyr_GUDUR_MANDAL_2.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'hidden field', 'Classifica': 'inline label - always visible', 'Sub Classi': 'hidden field', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'hidden field', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', 'VILL_Name': 'inline label - always visible', });
lyr_Penchikalapadu_3.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_KNagulapuram_4.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Julakallu_5.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Mallapuram_6.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Budidapadu_7.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_RKhanapuram_8.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Chanugondla_9.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Gudipadu_10.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Ponakallu_11.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Munagala_12.set('fieldLabels', {'bhucode': 'hidden field', 'LP_No.': 'inline label - always visible', 'Old Sy.No.': 'inline label - always visible', 'LP Extent': 'inline label - always visible', 'Nature': 'inline label - always visible', 'Sub Nature': 'inline label - always visible', 'Classifica': 'inline label - always visible', 'Sub Classi': 'inline label - always visible', 'Khata No': 'inline label - always visible', 'Pattadar N': 'inline label - always visible', 'How Acquir': 'inline label - always visible', 'Enjoyeer N': 'inline label - always visible', 'Search': 'hidden field', });
lyr_Munagala_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});