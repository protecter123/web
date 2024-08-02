'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "166cc2b9da43a705f729e38318d8600a",
"assets/AssetManifest.bin.json": "f41ec6da7472b876231f8586100c2a4e",
"assets/AssetManifest.json": "44ee571c041ea6ebe7d9fded58cbbb96",
"assets/assets/1.png": "259a5a36d6a5ba5684f58cd57a9bd551",
"assets/assets/10.png": "b0d9783eccb4b564da3aaa728499df15",
"assets/assets/11.jpg": "603b7dcbe304f116ceeaafe9d162a6e0",
"assets/assets/11.png": "516228cde4db485099339dcafb3fafac",
"assets/assets/111.jpg": "26faca7636044d40db35c2287353b8a5",
"assets/assets/12.png": "1275b6a0e313693ea766168254adb5b5",
"assets/assets/13.png": "64c572381a67a2128b928c9bcb5fb61b",
"assets/assets/14.png": "605629afe08c22392464d55684e52a64",
"assets/assets/15.png": "9748f2d19e5144e3fc74f56f84d72b4c",
"assets/assets/2.png": "99fde35a221d15a853d599b9ad2f0d57",
"assets/assets/3.png": "99ff8fcf334fe4856712d6241ec0c8ea",
"assets/assets/4.png": "6cef65298c073b2335cf0031a6dedaa1",
"assets/assets/5.png": "5427b0f4bc6f020e97e9e9bba546a195",
"assets/assets/6.png": "93232548802478e7a1c0d1d8fd3d955b",
"assets/assets/7.png": "2891e080a40498e9e48da1bdba16f5d8",
"assets/assets/8.png": "2ecb9d772041e4468093ad142dbaaf64",
"assets/assets/9.png": "fe790792abb3af9924376f366949f052",
"assets/assets/aapka.png": "39ee0f3b5d67a8d68c522ebdcf0f0a84",
"assets/assets/aapka50.png": "448447d1334556073e2fefdae2f3f682",
"assets/assets/aapka80.png": "aeb1df08121a6470dea50dca03ad5963",
"assets/assets/acd/1.png": "94804d9f559f95ee53f554f5132cd049",
"assets/assets/acd/2.png": "1e10fc5bb18bf382f687e9f2c431dd70",
"assets/assets/acd/3.jpg": "459e9534765a31af42997795ef9db927",
"assets/assets/acd/4.jpg": "692a337641a4ade5c227a17fc7e36071",
"assets/assets/acd/5.jpg": "c52507f2dc67e64dfa685503f62122c5",
"assets/assets/appendicitis/cough.jpg": "8ba28431382363b13c000132d9eeae70",
"assets/assets/appendicitis/diarrhea.jpg": "6bb3831c5eaec2d646d42e24010a035b",
"assets/assets/appendicitis/i.jpg": "72ab18eb5911ac6786943dcb3031beed",
"assets/assets/appendicitis/multiple.jpg": "bd5c4eb196d524927452599995675fd5",
"assets/assets/appendicitis/pregnant.jpg": "b1ffdf4d74d97e10d205cf4a63507ef2",
"assets/assets/appendicitis/surgery.jpg": "01b97180a9c149e894020740465e0b10",
"assets/assets/appendicitis/weight.jpg": "04ad4487c1a5214f4de170c85f2eeea6",
"assets/assets/appendicitis/woman.jpg": "e8881f10c8f6634f69731bd50154bb66",
"assets/assets/b1.png": "13b033aeb5e115e9cb6b61274e5237a6",
"assets/assets/b2.png": "ff05ea80f6a3d297c496e777beafa9af",
"assets/assets/b3.png": "418446e6a1cd02b2cc21d3c75f334dfa",
"assets/assets/bg2.jpg": "2dfacc8517e4a3fa5b17ec03401da54f",
"assets/assets/cataract1.png": "d7e29809bda27d421fbb3ea9525a6f7a",
"assets/assets/cataracts/1.jpg": "58b8994a4c605fe2040a6f1dab8663df",
"assets/assets/cataracts/2.png": "0d9150d191b703e2ad87996ac2092b45",
"assets/assets/cataracts/3.png": "a23bfe0145d8d6f16820eafdd135dabb",
"assets/assets/cataracts/4.png": "dfc5af80ae295deed62e2db07ba9f169",
"assets/assets/cataracts/cataract.png": "cfb18eaaa7c48260b6e7d388030e6ad8",
"assets/assets/cataracts/causes1.png": "a85cebaf8be58553f13427b65700cda1",
"assets/assets/cataracts/causes2.png": "aa28a1473b923aeb137f80d74cc1b548",
"assets/assets/cataracts/causes3.png": "c92f7ed1c4b51bd0da099efbd052f4e3",
"assets/assets/cataracts/causes4.png": "2171a5e8ab89e64440eae030f22e72da",
"assets/assets/cataracts/causes5.png": "47c9934d3cbca27fe688dd4f0dd708c3",
"assets/assets/cataracts/causes6.png": "6f8c908c2f2a099c843983f8609cd036",
"assets/assets/cataracts/eye2.png": "a7ecde1cdf6c1237c95932d45cebe172",
"assets/assets/cataracts/Signs1.png": "c1bde7365fa302149701fb98eb33d3e1",
"assets/assets/cataracts/Signs3.png": "396cce250b9dfe4c2e93b85d8030d568",
"assets/assets/cataracts/Signs4.png": "1a2296759beb94520360bd3788f57091",
"assets/assets/cataracts/Signs5.png": "1deb95dc3e3c43b73bf4aba2d155854f",
"assets/assets/cataracts/womans.jpeg": "500dcc2b3010834d5750ae92443ded70",
"assets/assets/circumcision/1.png": "51b11d3aa6ecf659221e81a2622fc91d",
"assets/assets/circumcision/10.png": "028820ce66c510645f541dd178f62755",
"assets/assets/circumcision/2.png": "d31ce3b91af254a77812aa76bb2c56cc",
"assets/assets/circumcision/3.png": "dc90ce5eae6d89c17ec82e8a009cb236",
"assets/assets/circumcision/4.png": "5abccc33311141d54cc2d84e4501650d",
"assets/assets/circumcision/5.png": "70624a6eab2e4c4624268a48fb1dfb7e",
"assets/assets/circumcision/6.png": "f185e96c07a2e757596bfb0ab05c2af1",
"assets/assets/circumcision/7.png": "44bc97d4d06e1bad5145438bca32778e",
"assets/assets/circumcision/8.png": "d754bd7c45669c4bb21619a61c19b632",
"assets/assets/circumcision/9.png": "47b203a32dd604f1048d498b25cf06ad",
"assets/assets/circumcision/Benefits.jpg": "5ea235f90db2196c3a0250841ac82ecc",
"assets/assets/Civil.png": "935c50446758c00f56abbd3bc04a7e3f",
"assets/assets/consultation.jpg": "b31327476cac157ed04774e49bd14f9b",
"assets/assets/d1.png": "0e6577da0ebb70cc3c769788db453353",
"assets/assets/d2.png": "30adf83e0a7def6f2c3e5a76585a0c46",
"assets/assets/d3.png": "e7ec2c7b5eb73b3f0890cd60f82444f4",
"assets/assets/d4.png": "9c7f9685f538d347b48c127000b38d18",
"assets/assets/d5.png": "499c0fdd85435e3b956a1ae3cb02d11d",
"assets/assets/d6.png": "23b910a549fb4f3a5a32ae383ba1b2c7",
"assets/assets/d7.png": "0929b0b6fe962eb3046dd2e530f270af",
"assets/assets/d8.png": "d5708faf8247a29775411581c17fb4c3",
"assets/assets/d9.png": "93cb1aeeb89871f837954daeae836b74",
"assets/assets/doc.png": "3327a65cbcff13783315efff11b02109",
"assets/assets/doci.png": "ac31c6127cf3f37c663723ba508fb9bd",
"assets/assets/doctor.png": "2a6b76671a2c9e65fd34831e8ab9122d",
"assets/assets/doctors.jpg": "a4433d6ba63c8deb3cfc3edf5cf72073",
"assets/assets/download.jpeg": "f607f575b22614e2d1897a593d1aaedc",
"assets/assets/ExpertCare.png": "28826804343effdb68619fd935649f0e",
"assets/assets/eye1.png": "bca219e20f385ab6b722e7ec07e33bfb",
"assets/assets/eye2.png": "a7ecde1cdf6c1237c95932d45cebe172",
"assets/assets/eye3.png": "eaa6c9d9385e92e77fd8ae2deea73395",
"assets/assets/f/1.png": "565b9a0599348717749a2b82aa8ed9f1",
"assets/assets/f/10.jpg": "19af9309ebd8b6e4c00737b407e03287",
"assets/assets/f/11.jpg": "e93314fb1c2cf3355504fa9b05ff471b",
"assets/assets/f/12.jpg": "7ddcbd6d2c2dd4d0de29ac98ba50a7cf",
"assets/assets/f/13.png": "4ac9333b3a7cdc857c33ee04556801f0",
"assets/assets/f/14.png": "e67bd1440e494420879db8f83e7d50e3",
"assets/assets/f/15.png": "b8179177b1014c99cc81d4d51935cf7e",
"assets/assets/f/16.png": "cb57c4c66a60b9c79801713170189217",
"assets/assets/f/17.png": "1cb532cae3d3ea6a72b178b697d3efce",
"assets/assets/f/18.png": "b0bc3960b1933634e2abe183b6d43ecb",
"assets/assets/f/19.png": "e98a1067d3765a15b4be2869213fa14c",
"assets/assets/f/2.png": "e0a33c0b197175bd4cbd9de1233d8acc",
"assets/assets/f/20.png": "bec4b93f53ba68e894c77038591b47bb",
"assets/assets/f/21.png": "0339bbe65288d999b6b718d56b1defc9",
"assets/assets/f/22.jpg": "33a2474d025ba56ea2cd9937b7289b8e",
"assets/assets/f/3.png": "59e16978541236a0c7f8ec8faa96e134",
"assets/assets/f/4.png": "d2e351dfe06733dfad92ad832a31dd49",
"assets/assets/f/6.png": "d0c80dac3a75e803d1f74f2cde5a37ad",
"assets/assets/f/7.png": "15d3cf1ffe810ecbfb299d8b1e7a02f9",
"assets/assets/f/8.png": "f0f23b0e933f9bb05c042170377ba274",
"assets/assets/f/9.jpg": "8ba1e4a9ee9b18b8e44583141c94a983",
"assets/assets/FreeInsurance.png": "44997ba8c1034587afdf5d9da42dfaa2",
"assets/assets/fu.png": "df3c8cf654a1b3ef1d01004ce40d03a7",
"assets/assets/gallbladder/bladder.jpg": "923ef875cf2d1d549897539ac557db25",
"assets/assets/gallbladder/gallstone2.png": "dff803b5e2c27f42c7e305ec9f66c750",
"assets/assets/gallbladder/i.png": "9e5994c9bf1e42ee221cdd7a9dae199e",
"assets/assets/gallbladder/i2.png": "94804d9f559f95ee53f554f5132cd049",
"assets/assets/gallbladder/i3.jpg": "3c886d791efd6ce8cd4baa7a10c82c5c",
"assets/assets/gallbladder/i4.jpg": "b59e8dbbac957b55c134ff95580b78d3",
"assets/assets/gallbladder/i6.png": "316951c3a93fd798f20838e15128c95b",
"assets/assets/gynecomastia/1.png": "e36dd0f334e6efbfae74ceabe9cbd1e8",
"assets/assets/gynecomastia/2.png": "e54e66149281a9530d0802042531e413",
"assets/assets/gynecomastia/3.png": "09d83432c8ddf760370d967d6f545059",
"assets/assets/gynecomastia/4.png": "d6463eaee741e35e864bc92dc2b6e5ec",
"assets/assets/gynecomastia/5.png": "af61c7ec3781772f73a17104bc60cea0",
"assets/assets/gynecomastia/6.png": "5cc52aa8b61139603fbad9a029737c0e",
"assets/assets/gynecomastia/7.png": "80a8df6dd4aa14a6aedf7073f5478297",
"assets/assets/gynecomastia/8.png": "49079d72624ddf7c2f29c01eb847dbab",
"assets/assets/headache.png": "755bc6b844293bc3e55e2a3c9a850e40",
"assets/assets/healthcare.jpg": "c9d36da46e8e525105206a26fe866a22",
"assets/assets/hernia/hernia.png": "37bbdb2e3eea651e009363951a1aae23",
"assets/assets/hernia/p1.png": "2ab124d23eb3477caa4b1be21ede9298",
"assets/assets/hernia/p10.jpg": "04ad4487c1a5214f4de170c85f2eeea6",
"assets/assets/hernia/p2.png": "16d7cfc1bd65d15aea1cb439b74e4bc3",
"assets/assets/hernia/p3.jpg": "6bb3831c5eaec2d646d42e24010a035b",
"assets/assets/hernia/p4.png": "10848fa06318af74e5fe590df069f8f8",
"assets/assets/hernia/p5.jpg": "8ba28431382363b13c000132d9eeae70",
"assets/assets/hernia/p6.jpg": "bd5c4eb196d524927452599995675fd5",
"assets/assets/hernia/p7.png": "71ea55ad819853588b93551cb4be57b6",
"assets/assets/hernia/p8.jpg": "b1ffdf4d74d97e10d205cf4a63507ef2",
"assets/assets/hernia/p9.jpg": "01b97180a9c149e894020740465e0b10",
"assets/assets/hiring.png": "effdc9075974f7a8ff8d617dd76a9264",
"assets/assets/hl1.jpeg": "8f2e1253bf1753147fe11619cf6508bc",
"assets/assets/hl1.png": "123fb8bf0f1f12cb4c1d6d95167ebe68",
"assets/assets/hl10.png": "ea7742d5e340fc96e9982cfbe7072f54",
"assets/assets/hl11.png": "6a98a255a5aa1257ceebaa2c46c917da",
"assets/assets/hl13.png": "50112a3038ba0b7a513de6d0cbfd90a0",
"assets/assets/hl2.png": "ff33cafc3ed323f17c3a2ed430cc93f6",
"assets/assets/hl3.jpg": "df5f40f685a3f1ae016d1354661bb0c0",
"assets/assets/hl3.png": "379818e42f7a02083e6a3378ef69dd1e",
"assets/assets/hl4.png": "a7ac49c67767143ee5346f30759615fb",
"assets/assets/hl5.jpeg": "bfd0caa5e8d8d385c9abbf66caa31864",
"assets/assets/hl5.png": "85b8aff6392a64b09b3e3d3c8eff759f",
"assets/assets/hl7.png": "f54fd0edc7e83d5c59eb1d2734a01fff",
"assets/assets/hl8.png": "21e0aa2214cc45d195f3fc185d886062",
"assets/assets/hl9.png": "b275267873c33dc3b17f9985a1426b11",
"assets/assets/hospitals.jpg": "00e2e1a08e138018693b31b06780b008",
"assets/assets/Hospital_logo/apex.png": "11ccc255b416ed46ffe0bd92f17fb264",
"assets/assets/Hospital_logo/mcp.png": "1d2f81ba1b094d569c4a56fec6ea483a",
"assets/assets/Hospital_logo/nayanam.png": "54ed86b3b39545df1c72f05253e2b676",
"assets/assets/Hospital_logo/sankalpa.png": "f94d49a2d665aa7459a6b5716f78fcb9",
"assets/assets/Hospital_logo/shah.png": "35c9b40f8ec35e24c4bbedc85aeccb38",
"assets/assets/Hospital_logo/sharvari.png": "02a2d11bd09ec95bd2ccd71cbb7a20af",
"assets/assets/hydrocele/1.jpg": "cd3a736716567aeef2bfcc9db4f8ea1d",
"assets/assets/hydrocele/2.jpg": "d39c814dd6193816a1feb64455751701",
"assets/assets/hydrocele/3.png": "94804d9f559f95ee53f554f5132cd049",
"assets/assets/hydrocele/4.png": "decf5710865697f3aac9fe23bc847151",
"assets/assets/i5.jpg": "39b0f1909bd254c561bb148b9d7982ef",
"assets/assets/i7.jpg": "a7e89a3f3359af95ca3951a020748756",
"assets/assets/images/aapka.png": "09bceb05a10b984fc848114c44f6f8df",
"assets/assets/images/aapkaLogo.png": "f4cc6fd3a3183607e4b6324a3424e8f6",
"assets/assets/images/adsnewlogo.jpeg": "eae9b439e31ce7e1900d9eabc03969d3",
"assets/assets/images/google_play.png": "b825d7db06064b64109c278edfb2ab12",
"assets/assets/images/logo.png": "57d8a1c3950bb2018cc8f60afeb5e437",
"assets/assets/images/masterLogo.png": "f9449556cbbe53a05ea66651c597855e",
"assets/assets/images/visa.png": "4f815262b70f01a86ae56192ef02657a",
"assets/assets/images/visaLogo.png": "231583b97227def1c9cafbe7274138be",
"assets/assets/indiamart.jpg": "949d72dfe2e0007dee2d3aff208841cc",
"assets/assets/kidney/1.png": "d6dc264ee232c7dc71ae928d990442b4",
"assets/assets/kidney/10.png": "7605d874921b620299212ee2dc80d4de",
"assets/assets/kidney/11.png": "6c55b73cfbc88f16fdaf28fdaf2dc655",
"assets/assets/kidney/12.png": "f499b413a31c11f61d27627f8233682c",
"assets/assets/kidney/13.png": "6c5f66b7aaec85e185296ca4a4f040aa",
"assets/assets/kidney/14.png": "d60f6b023e426552a773e84f9243a248",
"assets/assets/kidney/15.jpg": "74c33a5aa54f62c8235e70e7a2a225a4",
"assets/assets/kidney/16.jpg": "8eda67b24f996fbef7c4e5534aa0507f",
"assets/assets/kidney/17.jpg": "6fb56e8675d4b8a9d42d84ca2bcfb885",
"assets/assets/kidney/18.png": "e8b9ce78996d9a555a46a1b6c0b610b7",
"assets/assets/kidney/19.jpg": "50a8d5991b60298f0e5aa54b6e91f05a",
"assets/assets/kidney/2.png": "61448e8990df15283018cac81c9fb05c",
"assets/assets/kidney/20.jpg": "5ee0bc26569b90451592b17a1268ac5c",
"assets/assets/kidney/21.jpg": "5a773c61f985a20d9a5f6843e657b4f6",
"assets/assets/kidney/22.jpg": "8450e8ae7411f9b871f5f4993fa8da3b",
"assets/assets/kidney/23.jpg": "64f986e55324e05cb4cfee2bff909808",
"assets/assets/kidney/24.jpg": "684421318266f51b8da8f2a1963d0b82",
"assets/assets/kidney/25.jpg": "e35d896454bc29521e54105305a3acff",
"assets/assets/kidney/3.png": "aad62bb428b3b463e31c918c803dc713",
"assets/assets/kidney/4.png": "64bb06cb44e8672f5f8924afe1439af6",
"assets/assets/kidney/5.png": "4285252d970e25ac093f86437a0745db",
"assets/assets/kidney/6.png": "2bfe7f9bec1fd5596dc59bc3251ca9a6",
"assets/assets/kidney/7.png": "5cdf155e36ce39540a7e09d6b78ced51",
"assets/assets/kidney/8.png": "bb09b0910a06f54f9e9e0ba7803ae93a",
"assets/assets/kidney/9.png": "da1a05bdd62e1de3353c97048add0d92",
"assets/assets/lasik-desk.png": "2bff30f6b87f5e41ae44c84f12a9d826",
"assets/assets/LASIKphoto.jpg": "456b1baf0cf6f48b410ec203c2161225",
"assets/assets/lense_age.png": "674b1e7c8e3f18e048d2f10d3929c098",
"assets/assets/lipoma/1.png": "4801cfceb3f1d4858358158c3a1b0002",
"assets/assets/lipoma/2.png": "920374c9d07fae11a49751111265a364",
"assets/assets/lipoma/3.jpg": "1eb92d8b357a7d405fe412e17fc369f6",
"assets/assets/lipoma/4.png": "33be57227db648ddb2768e69ada77c0d",
"assets/assets/lipoma/5.png": "af5d2b168cf55d8a1caeac5ad67cadc5",
"assets/assets/lipoma/6.png": "b623cf4183af07942c536c3664aa265c",
"assets/assets/lipoma/7.png": "10980447649233a59124dd7e0e473dd7",
"assets/assets/lipoma/8.png": "c760541e60abd7c2507300f88179239c",
"assets/assets/lipoma/9.png": "c98991bd6d081319900293b68b2265d3",
"assets/assets/mole/1.png": "fc33b39f0491066c44854bc0709ee5ba",
"assets/assets/mole/2.jpg": "dac15ccc775ae61ba68a7d322acba6de",
"assets/assets/mole/3.png": "ca180cf35838e2858b83764c726a2377",
"assets/assets/mole/4.png": "83f8d212adb3011d378cc6703c189de0",
"assets/assets/mole/5.png": "d48653886404ea634af364fe5b3c8b0b",
"assets/assets/mole/6.png": "1155b7759aa9849a68aa3e6ff48bf0ef",
"assets/assets/mole/7.png": "430bba6b5488463bad8dbdfae61920be",
"assets/assets/mole/8.jpg": "6422ff8b3d9120a40176bce2df3ea2e4",
"assets/assets/n1.png": "a7bec6af725e89f632f0b9c72a4c0e0e",
"assets/assets/n2.png": "1509a0480986cade06331ed86a24e6a9",
"assets/assets/n3.png": "744e0ffff0135e8e3a8ab23267e87eae",
"assets/assets/noi.png": "9438ba84221e20491c57260b875c1c76",
"assets/assets/noimage.png": "6a18f9cb39ee0c93e5fedde7f10c83c4",
"assets/assets/PaperWork.png": "f240020c8f90f1c2c17ccf23a84c42b6",
"assets/assets/patient.jpg": "a1abb515b7abea02f7ff5205b8ede90e",
"assets/assets/PieceOfMind.png": "583f5c80892ac20d9da2a2e34ec2e529",
"assets/assets/piles/1.jpg": "8070cb5296b3783053ab6b1cc3291d79",
"assets/assets/piles/2.jpg": "96493390f3cc086cfdfba9337bcd0422",
"assets/assets/piles/3.jpg": "9d2a28fc996f1023cb22b745b3cb805f",
"assets/assets/piles/4.jpg": "95d528f551eb7481b359f86f294d1569",
"assets/assets/piles/5.jpg": "f9cf585fb1beece1e5e0e3fbd55026f7",
"assets/assets/piles/6.jpg": "364a099cef8083280ba377856b7cb527",
"assets/assets/piles/7.png": "3f730de67319a03525e0ada10a8012f7",
"assets/assets/piles/8.png": "5b0aec2b02b3dc973d8ff5c70a646885",
"assets/assets/piles/9.png": "0479f05723323d0edf37db2bcb41c7bf",
"assets/assets/problematic.png": "65e2bf9b0309757df62c90e106218104",
"assets/assets/road_sign.png": "35cd87c2ff21e15efd8f821e859137dd",
"assets/assets/s1.jpeg": "9ff74fe732dc3c91ffbd2be5cd4709d6",
"assets/assets/s1.jpg": "609aad004526d1408d71add00684c0c5",
"assets/assets/s2.jpeg": "2b5ef6f614487e0c3449785c20c699c0",
"assets/assets/s2.jpg": "700c897de3da0b3598d6f062adeea7ca",
"assets/assets/s3.jpeg": "dd20b02f6544f1121c38b2ece0bb08ce",
"assets/assets/s3.jpg": "f98cef2da58f34fb7ca400481b77f736",
"assets/assets/s4.jpeg": "1d689824999abd2fea80b8ba908fd0f0",
"assets/assets/s4.jpg": "3be2429b81360731c2c23c932d84b0ee",
"assets/assets/s5.jpeg": "1c03f7209d790963e4f7b66478233328",
"assets/assets/s5.jpg": "76a6a2dfc5717e2a00d6237de0c3e4a8",
"assets/assets/s6.jpeg": "c053547879cbc819cb1f79d0212c8fbb",
"assets/assets/s6.jpg": "2170aafa4fe88b0aad19d0641edd06da",
"assets/assets/success.json": "a0e14fea6a5054e69158924b34a4270a",
"assets/assets/SuccessfullAppointment.json": "1ea05eb9e7041bff2aefc1ecc64e7a59",
"assets/assets/surgeries.jpg": "1e5cd30feff88810e17591c68916b417",
"assets/assets/v/1.png": "98a8c76b7f880e1e5ccaae1611f47e52",
"assets/assets/v/2.png": "f1c4fcd0d2abd3a7c622d0b9ec1cfacf",
"assets/assets/v/3.png": "1227c48d3c48c690988f83fcce49e4d3",
"assets/assets/v/4.png": "7d8703d787f3d347d74145bd7e4db543",
"assets/assets/v/5.png": "19f7bf71169e42b4acfe4f6274ec164c",
"assets/assets/v/6.png": "31a6dafcce04758f8561ac36335ba5ca",
"assets/assets/v/7.jpg": "29892f777d3652e4af3ed121a1ad5b14",
"assets/assets/v/8.png": "9cbb1b129a88c0acecc8319c0cbed0ae",
"assets/assets/w1.jpg": "0ae6d047736a4a1f3359eea3a3e60ea0",
"assets/assets/w2.jpg": "38b6c2495c5ac65f538443b73704a806",
"assets/assets/w3.jpg": "d39c814dd6193816a1feb64455751701",
"assets/assets/w4.jpg": "c1a8463df13c424a30a08ae6a49e4e2e",
"assets/assets/Waiting.png": "3363ee3147db3554f36f4202ebe8d521",
"assets/assets/what.jpg": "96d37faa5723b0e53284c2a15403141c",
"assets/FontManifest.json": "6a84e6c28a318c1ef29352d8cf66d39c",
"assets/fonts/MaterialIcons-Regular.otf": "31c748c73ae2f9fc15c671c0679fe21c",
"assets/NOTICES": "c6304046d67227761fdf1fed70742174",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "68d0701627de7347759accc24822d94e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4e71de61e5d1d77aa847978e5b33cc46",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "40e38499163599a8cb98814bc1855d93",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c7ac9e1c26d41eaf271a933052d7e33f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ebaf3b92cafc39372fdeeee506b4e40",
"/": "1ebaf3b92cafc39372fdeeee506b4e40",
"main.dart.js": "8fdfa9d796063fe4e409ec5d5e51b6ee",
"manifest.json": "ed68b919568f8013ae84f72d1f7cbf86",
"version.json": "5fde6445dec58ac6c5b3ab3755a1d34b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
