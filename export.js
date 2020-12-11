
// TARGET
// ------
// GET /provinsi.json
// GET /:id_provinsi/kota-kab.json
// GET /:id_provinsi/:id_kota_kab/kecamatan.json
// GET /:id_provinsi/:id_kota_kab/:id_kecamatan/kelurahan.json

var fs = require('fs');
var path = require('path');

function bufferFile(relPath) {
  const buffer_utf8 = fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf8' });
  return buffer_utf8.split(/\r\n/).filter(x => x).map(x => x.split(/\,/));
}

var provinces = bufferFile('./provinces.csv');
var regencies = bufferFile('./regencies.csv');
var districs = bufferFile('./districts.csv');
var villages = bufferFile('./villages.csv');

fs.mkdirSync('dist');
fs.writeFileSync('./dist/provinsi.json', JSON.stringify(provinces.map(x => ({
    id: parseInt(x[0]),
    value: x[1]
}))));
var province_keys = provinces.map(x => x[0]);
for (let i = 0; i < province_keys.length; i++) {
    console.log(`progress: ${i + 1}/${province_keys.length} (${provinces[i][1]})`);
    var province_key = province_keys[i];
    var province_regencies = regencies.filter(x => x[1] == province_key);
    fs.mkdirSync(`dist/${province_key}`);
    fs.writeFileSync(`./dist/${province_key}/kota-kab.json`, JSON.stringify(province_regencies.map(x => ({
        id: parseInt(x[0]),
        province_id: parseInt(province_key),
        value: x[2]
    }))) + '\n');
    var regency_keys = province_regencies.map(x => x[0]);
    for (let j = 0; j < regency_keys.length; j++) {
        var regency_key = regency_keys[j];
        regency_districs = districs.filter(x => x[1] == regency_key);
        fs.mkdirSync(`dist/${province_key}/${regency_key}`);
        fs.writeFileSync(`./dist/${province_key}/${regency_key}/kecamatan.json`, JSON.stringify(regency_districs.map(x => ({
            id: parseInt(x[0]),
            province_id: parseInt(province_key),
            regency_id: parseInt(regency_key),
            value: x[2]
        }))) + '\n');
        var district_keys = regency_districs.map(x => x[0]);
        for (let k = 0; k < district_keys.length; k++) {
            var district_key = district_keys[k];
            district_villages = villages.filter(x => x[1] == district_key);
            fs.mkdirSync(`dist/${province_key}/${regency_key}/${district_key}`);
            fs.writeFileSync(`./dist/${province_key}/${regency_key}/${district_key}/kelurahan.json`, JSON.stringify(district_villages.map(x => ({
                id: parseInt(x[0]),
                province_id: parseInt(province_key),
                regency_id: parseInt(regency_key),
                district_id: parseInt(district_key),
                value: x[2]
            }))) + '\n');
        }
    }
}
