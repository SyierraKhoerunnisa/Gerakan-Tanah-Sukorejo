var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GerakanTanah_1 = new ol.format.GeoJSON();
var features_GerakanTanah_1 = format_GerakanTanah_1.readFeatures(json_GerakanTanah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GerakanTanah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GerakanTanah_1.addFeatures(features_GerakanTanah_1);
var lyr_GerakanTanah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GerakanTanah_1, 
                style: style_GerakanTanah_1,
                interactive: true,
    title: 'GerakanTanah<br />\
    <img src="styles/legend/GerakanTanah_1_0.png" /> Menengah<br />\
    <img src="styles/legend/GerakanTanah_1_1.png" /> Rendah<br />\
    <img src="styles/legend/GerakanTanah_1_2.png" /> Sangat Rendah<br />\
    <img src="styles/legend/GerakanTanah_1_3.png" /> Tinggi<br />\
    <img src="styles/legend/GerakanTanah_1_4.png" /> <br />'
        });
var format_BatasAdministrasi_2 = new ol.format.GeoJSON();
var features_BatasAdministrasi_2 = format_BatasAdministrasi_2.readFeatures(json_BatasAdministrasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_2.addFeatures(features_BatasAdministrasi_2);
var lyr_BatasAdministrasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasi_2, 
                style: style_BatasAdministrasi_2,
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_2.png" /> Batas Administrasi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GerakanTanah_1.setVisible(true);lyr_BatasAdministrasi_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GerakanTanah_1,lyr_BatasAdministrasi_2];
lyr_GerakanTanah_1.set('fieldAliases', {'unsur': 'unsur', 'tahun': 'tahun', 'lcode': 'lcode', 'keterangan': 'keterangan', 'zona': 'zona', 'sumber_dat': 'sumber_dat', 'Jenis': 'Jenis', });
lyr_BatasAdministrasi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Shape_Leng': 'Shape_Leng', });
lyr_GerakanTanah_1.set('fieldImages', {'unsur': 'TextEdit', 'tahun': 'Range', 'lcode': 'TextEdit', 'keterangan': 'TextEdit', 'zona': 'TextEdit', 'sumber_dat': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_BatasAdministrasi_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_GerakanTanah_1.set('fieldLabels', {'unsur': 'no label', 'tahun': 'no label', 'lcode': 'no label', 'keterangan': 'no label', 'zona': 'no label', 'sumber_dat': 'no label', 'Jenis': 'no label', });
lyr_BatasAdministrasi_2.set('fieldLabels', {'OBJECTID': 'no label', 'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', 'Shape_Leng': 'no label', });
lyr_BatasAdministrasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});