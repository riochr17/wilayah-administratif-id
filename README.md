# API Wilayah Administratif Indonesia

## Table of Contents

1. [Provinsi](#provinsi)
2. [Kota/Kabupaten](#kota-kabupaten)
3. [Kecamatan](#kecamatan)
4. [Kelurahan](#kelurahan)
5. [How to](#how-to)
6. [Credits](#credits)
7. [Acknowledgments](#acknowledgments)

<a name="provinsi"></a>

## Provinsi

```
GET https://riochr17.github.io/wilayah-administratif-id/provinsi.json
```

<a name="kota-kabupaten"></a>

## Kota/Kabupaten

```
GET https://riochr17.github.io/wilayah-administratif-id/<id-provinsi>/kota-kab.json
```

<a name="kecamatan"></a>

## Kecamatan

```
GET https://riochr17.github.io/wilayah-administratif-id/<id-provinsi>/<id-kota-kab>/kecamatan.json
```

<a name="kelurahan"></a>

## Kelurahan

```
GET https://riochr17.github.io/wilayah-administratif-id/<id-provinsi>/<id-kota-kab>/<id-kecamatan>/kelurahan.json
```

<a name="how-to"></a>

## [How to] Generate JSON

```nodejs
node export.js
```

<a name="credits"></a>

## Credits

* [edwardsamuel/Wilayah-Administratif-Indonesia](https://github.com/edwardsamuel/Wilayah-Administratif-Indonesia) - Data Provinsi, Kota/Kabupaten, Kecamatan, dan Kelurahan/Desa di Indonesia.

<a name="acknowledgments"></a>

## Acknowledgments

* Viva Functional Programming!!
