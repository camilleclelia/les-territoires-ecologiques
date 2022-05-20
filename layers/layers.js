var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_parcours2_1 = new ol.format.GeoJSON();
var features_parcours2_1 = format_parcours2_1.readFeatures(json_parcours2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcours2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcours2_1.addFeatures(features_parcours2_1);
var lyr_parcours2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcours2_1, 
                style: style_parcours2_1,
                interactive: true,
                title: '<img src="styles/legend/parcours2_1.png" /> parcours 2'
            });
var format_couchezoneecobonne_2 = new ol.format.GeoJSON();
var features_couchezoneecobonne_2 = format_couchezoneecobonne_2.readFeatures(json_couchezoneecobonne_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couchezoneecobonne_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couchezoneecobonne_2.addFeatures(features_couchezoneecobonne_2);
var lyr_couchezoneecobonne_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_couchezoneecobonne_2, 
                style: style_couchezoneecobonne_2,
                interactive: true,
                title: '<img src="styles/legend/couchezoneecobonne_2.png" /> couche zone eco bonne'
            });
var format_couchezoneeco_3 = new ol.format.GeoJSON();
var features_couchezoneeco_3 = format_couchezoneeco_3.readFeatures(json_couchezoneeco_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couchezoneeco_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couchezoneeco_3.addFeatures(features_couchezoneeco_3);
var lyr_couchezoneeco_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_couchezoneeco_3, 
                style: style_couchezoneeco_3,
                interactive: true,
                title: '<img src="styles/legend/couchezoneeco_3.png" /> couche zone eco'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_parcours2_1.setVisible(true);lyr_couchezoneecobonne_2.setVisible(true);lyr_couchezoneeco_3.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_parcours2_1,lyr_couchezoneecobonne_2,lyr_couchezoneeco_3];
lyr_parcours2_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'descriptio': 'descriptio', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_couchezoneecobonne_2.set('fieldAliases', {'id': 'id', 'note': 'note', 'haie': 'haie', 'arbres_bra': 'arbres_bra', 'enherbé': 'enherbé', 'talus': 'talus', 'fleurs': 'fleurs', });
lyr_couchezoneeco_3.set('fieldAliases', {'id': 'id', 'note': 'note', 'haie': 'haie', 'arbres\br': 'arbres\br', 'herbes': 'herbes', 'talus\foss': 'talus\foss', 'fleurs': 'fleurs', });
lyr_parcours2_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'TextEdit', 'comment': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_couchezoneecobonne_2.set('fieldImages', {'id': '', 'note': '', 'haie': '', 'arbres_bra': '', 'enherbé': '', 'talus': '', 'fleurs': '', });
lyr_couchezoneeco_3.set('fieldImages', {'id': '', 'note': '', 'haie': '', 'arbres\br': '', 'herbes': '', 'talus\foss': '', 'fleurs': '', });
lyr_parcours2_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'descriptio': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_couchezoneecobonne_2.set('fieldLabels', {'id': 'no label', 'note': 'no label', 'haie': 'no label', 'arbres_bra': 'no label', 'enherbé': 'no label', 'talus': 'no label', 'fleurs': 'no label', });
lyr_couchezoneeco_3.set('fieldLabels', {'id': 'no label', 'note': 'no label', 'haie': 'no label', 'arbres\br': 'no label', 'herbes': 'no label', 'talus\foss': 'no label', 'fleurs': 'no label', });
lyr_couchezoneeco_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});