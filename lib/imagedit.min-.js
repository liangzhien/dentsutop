(function() {
    (function() {
        function b(m) {
            var o = this;
            var E = Math.round;
            var M = Math.floor;
            var i = new Array(64);
            var L = new Array(64);
            var T = new Array(64);
            var aa = new Array(64);
            var C;
            var j;
            var s;
            var W;
            var K = new Array(65535);
            var n = new Array(65535);
            var R = new Array(64);
            var U = new Array(64);
            var k = [];
            var D = 0;
            var c = 7;
            var F = new Array(64);
            var f = new Array(64);
            var X = new Array(64);
            var g = new Array(256);
            var G = new Array(2048);
            var B;
            var P = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63];
            var h = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
            var d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            var A = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125];
            var u = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250];
            var z = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
            var ab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            var p = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119];
            var w = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
            function N(aj) {
                var ai = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];
                for (var ah = 0; ah < 64; ah++) {
                    var am = M((ai[ah] * aj + 50) / 100);
                    if (am < 1) {
                        am = 1
                    } else {
                        if (am > 255) {
                            am = 255
                        }
                    }
                    i[P[ah]] = am
                }
                var ak = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
                for (var ag = 0; ag < 64; ag++) {
                    var al = M((ak[ag] * aj + 50) / 100);
                    if (al < 1) {
                        al = 1
                    } else {
                        if (al > 255) {
                            al = 255
                        }
                    }
                    L[P[ag]] = al
                }
                var af = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379];
                var ae = 0;
                for (var an = 0; an < 8; an++) {
                    for (var ad = 0; ad < 8; ad++) {
                        T[ae] = (1 / (i[P[ae]] * af[an] * af[ad] * 8));
                        aa[ae] = (1 / (L[P[ae]] * af[an] * af[ad] * 8));
                        ae++
                    }
                }
            }
            function J(ah, ai) {
                var ag = 0;
                var aj = 0;
                var af = new Array();
                for (var ad = 1; ad <= 16; ad++) {
                    for (var ae = 1; ae <= ah[ad]; ae++) {
                        af[ai[aj]] = [];
                        af[ai[aj]][0] = ag;
                        af[ai[aj]][1] = ad;
                        aj++;
                        ag++
                    }
                    ag *= 2
                }
                return af
            }
            function Z() {
                C = J(h, d);
                j = J(z, ab);
                s = J(A, u);
                W = J(p, w)
            }
            function x() {
                var ae = 1;
                var ag = 2;
                for (var ad = 1; ad <= 15; ad++) {
                    for (var af = ae; af < ag; af++) {
                        n[32767 + af] = ad;
                        K[32767 + af] = [];
                        K[32767 + af][1] = ad;
                        K[32767 + af][0] = af
                    }
                    for (var ah = -(ag - 1); ah <= -ae; ah++) {
                        n[32767 + ah] = ad;
                        K[32767 + ah] = [];
                        K[32767 + ah][1] = ad;
                        K[32767 + ah][0] = ag - 1 + ah
                    }
                    ae <<= 1;
                    ag <<= 1
                }
            }
            function Y() {
                for (var ad = 0; ad < 256; ad++) {
                    G[ad] = 19595 * ad;
                    G[(ad + 256) >> 0] = 38470 * ad;
                    G[(ad + 512) >> 0] = 7471 * ad + 32768;
                    G[(ad + 768) >> 0] = -11059 * ad;
                    G[(ad + 1024) >> 0] = -21709 * ad;
                    G[(ad + 1280) >> 0] = 32768 * ad + 8421375;
                    G[(ad + 1536) >> 0] = -27439 * ad;
                    G[(ad + 1792) >> 0] = -5329 * ad
                }
            }
            function ac(ae) {
                var af = ae[0];
                var ad = ae[1] - 1;
                while (ad >= 0) {
                    if (af & (1 << ad)) {
                        D |= (1 << c)
                    }
                    ad--;
                    c--;
                    if (c < 0) {
                        if (D == 255) {
                            t(255);
                            t(0)
                        } else {
                            t(D)
                        }
                        c = 7;
                        D = 0
                    }
                }
            }
            function t(ad) {
                k.push(g[ad])
            }
            function I(ad) {
                t((ad >> 8) & 255);
                t((ad) & 255)
            }
            function O(a1, ay) {
                var aP, aO, aN, aM, aL, aJ, aI, aG;
                var aS = 0;
                var aU;
                const ax = 8;
                const aq = 64;
                for (aU = 0; aU < ax; ++aU) {
                    aP = a1[aS];
                    aO = a1[aS + 1];
                    aN = a1[aS + 2];
                    aM = a1[aS + 3];
                    aL = a1[aS + 4];
                    aJ = a1[aS + 5];
                    aI = a1[aS + 6];
                    aG = a1[aS + 7];
                    var a2 = aP + aG;
                    var aR = aP - aG;
                    var a0 = aO + aI;
                    var aT = aO - aI;
                    var aZ = aN + aJ;
                    var aV = aN - aJ;
                    var aY = aM + aL;
                    var aW = aM - aL;
                    var av = a2 + aY;
                    var ar = a2 - aY;
                    var au = a0 + aZ;
                    var at = a0 - aZ;
                    a1[aS] = av + au;
                    a1[aS + 4] = av - au;
                    var aD = (at + ar) * 0.707106781;
                    a1[aS + 2] = ar + aD;
                    a1[aS + 6] = ar - aD;
                    av = aW + aV;
                    au = aV + aT;
                    at = aT + aR;
                    var az = (av - at) * 0.382683433;
                    var aC = 0.5411961 * av + az;
                    var aA = 1.306562965 * at + az;
                    var aB = au * 0.707106781;
                    var an = aR + aB;
                    var am = aR - aB;
                    a1[aS + 5] = am + aC;
                    a1[aS + 3] = am - aC;
                    a1[aS + 1] = an + aA;
                    a1[aS + 7] = an - aA;
                    aS += 8
                }
                aS = 0;
                for (aU = 0; aU < ax; ++aU) {
                    aP = a1[aS];
                    aO = a1[aS + 8];
                    aN = a1[aS + 16];
                    aM = a1[aS + 24];
                    aL = a1[aS + 32];
                    aJ = a1[aS + 40];
                    aI = a1[aS + 48];
                    aG = a1[aS + 56];
                    var ap = aP + aG;
                    var aw = aP - aG;
                    var ak = aO + aI;
                    var aE = aO - aI;
                    var ah = aN + aJ;
                    var aH = aN - aJ;
                    var ae = aM + aL;
                    var aX = aM - aL;
                    var ao = ap + ae;
                    var ad = ap - ae;
                    var aj = ak + ah;
                    var ag = ak - ah;
                    a1[aS] = ao + aj;
                    a1[aS + 32] = ao - aj;
                    var al = (ag + ad) * 0.707106781;
                    a1[aS + 16] = ad + al;
                    a1[aS + 48] = ad - al;
                    ao = aX + aH;
                    aj = aH + aE;
                    ag = aE + aw;
                    var aQ = (ao - ag) * 0.382683433;
                    var ai = 0.5411961 * ao + aQ;
                    var a4 = 1.306562965 * ag + aQ;
                    var af = aj * 0.707106781;
                    var a3 = aw + af;
                    var aF = aw - af;
                    a1[aS + 40] = aF + ai;
                    a1[aS + 24] = aF - ai;
                    a1[aS + 8] = a3 + a4;
                    a1[aS + 56] = a3 - a4;
                    aS++
                }
                var aK;
                for (aU = 0; aU < aq; ++aU) {
                    aK = a1[aU] * ay[aU];
                    R[aU] = (aK > 0) ? ((aK + 0.5) | 0) : ((aK - 0.5) | 0)
                }
                return R
            }
            function V() {
                I(65504);
                I(16);
                t(74);
                t(70);
                t(73);
                t(70);
                t(0);
                t(1);
                t(1);
                t(0);
                I(1);
                I(1);
                t(0);
                t(0)
            }
            function H(ae, ad) {
                I(65472);
                I(17);
                t(8);
                I(ad);
                I(ae);
                t(3);
                t(1);
                t(17);
                t(0);
                t(2);
                t(17);
                t(1);
                t(3);
                t(17);
                t(1)
            }
            function v() {
                I(65499);
                I(132);
                t(0);
                for (var ae = 0; ae < 64; ae++) {
                    t(i[ae])
                }
                t(1);
                for (var ad = 0; ad < 64; ad++) {
                    t(L[ad])
                }
            }
            function r() {
                I(65476);
                I(418);
                t(0);
                for (var ah = 0; ah < 16; ah++) {
                    t(h[ah + 1])
                }
                for (var ag = 0; ag <= 11; ag++) {
                    t(d[ag])
                }
                t(16);
                for (var af = 0; af < 16; af++) {
                    t(A[af + 1])
                }
                for (var ae = 0; ae <= 161; ae++) {
                    t(u[ae])
                }
                t(1);
                for (var ad = 0; ad < 16; ad++) {
                    t(z[ad + 1])
                }
                for (var ak = 0; ak <= 11; ak++) {
                    t(ab[ak])
                }
                t(17);
                for (var aj = 0; aj < 16; aj++) {
                    t(p[aj + 1])
                }
                for (var ai = 0; ai <= 161; ai++) {
                    t(w[ai])
                }
            }
            function q() {
                I(65498);
                I(12);
                t(3);
                t(1);
                t(0);
                t(2);
                t(17);
                t(3);
                t(17);
                t(0);
                t(63);
                t(0)
            }
            function l(ah, ad, an, at, ar) {
                var aj = ar[0];
                var af = ar[240];
                var ag;
                const au = 16;
                const ak = 63;
                const ai = 64;
                var av = O(ah, ad);
                for (var ao = 0; ao < ai; ++ao) {
                    U[P[ao]] = av[ao]
                }
                var aq = U[0] - an;
                an = U[0];
                if (aq == 0) {
                    ac(at[0])
                } else {
                    ag = 32767 + aq;
                    ac(at[n[ag]]);
                    ac(K[ag])
                }
                var ae = 63;
                for (; (ae > 0) && (U[ae] == 0); ae--) {}
                if (ae == 0) {
                    ac(aj);
                    return an
                }
                var ap = 1;
                var ax;
                while (ap <= ae) {
                    var am = ap;
                    for (; (U[ap] == 0) && (ap <= ae); ++ap) {}
                    var al = ap - am;
                    if (al >= au) {
                        ax = al >> 4;
                        for (var aw = 1; aw <= ax; ++aw) {
                            ac(af)
                        }
                        al = al & 15
                    }
                    ag = 32767 + U[ap];
                    ac(ar[(al << 4) + n[ag]]);
                    ac(K[ag]);
                    ap++
                }
                if (ae != ak) {
                    ac(aj)
                }
                return an
            }
            function y() {
                var ae = String.fromCharCode;
                for (var ad = 0; ad < 256; ad++) {
                    g[ad] = ae(ad)
                }
            }
            this.encode = function(at, an) {
                var af = new Date().getTime();
                if (an) {
                    e(an)
                }
                k = new Array();
                D = 0;
                c = 7;
                I(65496);
                V();
                v();
                H(at.width, at.height);
                r();
                q();
                var ao = 0;
                var av = 0;
                var ar = 0;
                D = 0;
                c = 7;
                this.encode.displayName = "_encode_";
                var aA = at.data;
                var ax = at.width;
                var aq = at.height;
                var aw = ax * 4;
                var ae = ax * 3;
                var am, al = 0;
                var ap, az, aB;
                var ag, au, ai, ak, aj;
                while (al < aq) {
                    am = 0;
                    while (am < aw) {
                        ag = aw * al + am;
                        au = ag;
                        ai = -1;
                        ak = 0;
                        for (aj = 0; aj < 64; aj++) {
                            ak = aj >> 3;
                            ai = (aj & 7) * 4;
                            au = ag + (ak * aw) + ai;
                            if (al + ak >= aq) {
                                au -= (aw * (al + 1 + ak - aq))
                            }
                            if (am + ai >= aw) {
                                au -= ((am + ai) - aw + 4)
                            }
                            ap = aA[au++];
                            az = aA[au++];
                            aB = aA[au++];
                            F[aj] = ((G[ap] + G[(az + 256) >> 0] + G[(aB + 512) >> 0]) >> 16) - 128;
                            f[aj] = ((G[(ap + 768) >> 0] + G[(az + 1024) >> 0] + G[(aB + 1280) >> 0]) >> 16) - 128;
                            X[aj] = ((G[(ap + 1280) >> 0] + G[(az + 1536) >> 0] + G[(aB + 1792) >> 0]) >> 16) - 128
                        }
                        ao = l(F, T, ao, C, s);
                        av = l(f, aa, av, j, W);
                        ar = l(X, aa, ar, j, W);
                        am += 32
                    }
                    al += 8
                }
                if (c >= 0) {
                    var ay = [];
                    ay[1] = c + 1;
                    ay[0] = (1 << (c + 1)) - 1;
                    ac(ay)
                }
                I(65497);
                var ah = "data:image/png;base64," + btoa(k.join(""));
                k = [];
                var ad = new Date().getTime() - af;
                return ah
            }
            ;
            function e(ae) {
                if (ae <= 0) {
                    ae = 1
                }
                if (ae > 100) {
                    ae = 100
                }
                if (B == ae) {
                    return
                }
                var ad = 0;
                if (ae < 50) {
                    ad = Math.floor(5000 / ae)
                } else {
                    ad = Math.floor(200 - ae * 2)
                }
                N(ad);
                B = ae;
            }
            function S() {
                var ae = new Date().getTime();
                if (!m) {
                    m = 50
                }
                y();
                Z();
                x();
                Y();
                e(m);
                var ad = new Date().getTime() - ae;
            }
            S()
        }
        function a(d) {
            var e = (typeof (d) == "string") ? document.getElementById(d) : d;
            var f = document.createElement("canvas");
            f.width = e.width;
            f.height = e.height;
            var c = f.getContext("2d");
            c.drawImage(e, 0, 0);
             e.crossOrigin = '';
            return ( c.getImageData(0, 0, f.width, f.height)) 
        }
        window.JPEGEncoder = b
    })();
    (function() {
        window.EXIF = {};
        (function() {
            var h = false;
            EXIF.Tags = {
                36864: "ExifVersion",
                40960: "FlashpixVersion",
                40961: "ColorSpace",
                40962: "PixelXDimension",
                40963: "PixelYDimension",
                37121: "ComponentsConfiguration",
                37122: "CompressedBitsPerPixel",
                37500: "MakerNote",
                37510: "UserComment",
                40964: "RelatedSoundFile",
                36867: "DateTimeOriginal",
                36868: "DateTimeDigitized",
                37520: "SubsecTime",
                37521: "SubsecTimeOriginal",
                37522: "SubsecTimeDigitized",
                33434: "ExposureTime",
                33437: "FNumber",
                34850: "ExposureProgram",
                34852: "SpectralSensitivity",
                34855: "ISOSpeedRatings",
                34856: "OECF",
                37377: "ShutterSpeedValue",
                37378: "ApertureValue",
                37379: "BrightnessValue",
                37380: "ExposureBias",
                37381: "MaxApertureValue",
                37382: "SubjectDistance",
                37383: "MeteringMode",
                37384: "LightSource",
                37385: "Flash",
                37396: "SubjectArea",
                37386: "FocalLength",
                41483: "FlashEnergy",
                41484: "SpatialFrequencyResponse",
                41486: "FocalPlaneXResolution",
                41487: "FocalPlaneYResolution",
                41488: "FocalPlaneResolutionUnit",
                41492: "SubjectLocation",
                41493: "ExposureIndex",
                41495: "SensingMethod",
                41728: "FileSource",
                41729: "SceneType",
                41730: "CFAPattern",
                41985: "CustomRendered",
                41986: "ExposureMode",
                41987: "WhiteBalance",
                41988: "DigitalZoomRation",
                41989: "FocalLengthIn35mmFilm",
                41990: "SceneCaptureType",
                41991: "GainControl",
                41992: "Contrast",
                41993: "Saturation",
                41994: "Sharpness",
                41995: "DeviceSettingDescription",
                41996: "SubjectDistanceRange",
                40965: "InteroperabilityIFDPointer",
                42016: "ImageUniqueID"
            };
            EXIF.TiffTags = {
                256: "ImageWidth",
                257: "ImageHeight",
                34665: "ExifIFDPointer",
                34853: "GPSInfoIFDPointer",
                40965: "InteroperabilityIFDPointer",
                258: "BitsPerSample",
                259: "Compression",
                262: "PhotometricInterpretation",
                274: "Orientation",
                277: "SamplesPerPixel",
                284: "PlanarConfiguration",
                530: "YCbCrSubSampling",
                531: "YCbCrPositioning",
                282: "XResolution",
                283: "YResolution",
                296: "ResolutionUnit",
                273: "StripOffsets",
                278: "RowsPerStrip",
                279: "StripByteCounts",
                513: "JPEGInterchangeFormat",
                514: "JPEGInterchangeFormatLength",
                301: "TransferFunction",
                318: "WhitePoint",
                319: "PrimaryChromaticities",
                529: "YCbCrCoefficients",
                532: "ReferenceBlackWhite",
                306: "DateTime",
                270: "ImageDescription",
                271: "Make",
                272: "Model",
                305: "Software",
                315: "Artist",
                33432: "Copyright"
            };
            EXIF.GPSTags = {
                0: "GPSVersionID",
                1: "GPSLatitudeRef",
                2: "GPSLatitude",
                3: "GPSLongitudeRef",
                4: "GPSLongitude",
                5: "GPSAltitudeRef",
                6: "GPSAltitude",
                7: "GPSTimeStamp",
                8: "GPSSatellites",
                9: "GPSStatus",
                10: "GPSMeasureMode",
                11: "GPSDOP",
                12: "GPSSpeedRef",
                13: "GPSSpeed",
                14: "GPSTrackRef",
                15: "GPSTrack",
                16: "GPSImgDirectionRef",
                17: "GPSImgDirection",
                18: "GPSMapDatum",
                19: "GPSDestLatitudeRef",
                20: "GPSDestLatitude",
                21: "GPSDestLongitudeRef",
                22: "GPSDestLongitude",
                23: "GPSDestBearingRef",
                24: "GPSDestBearing",
                25: "GPSDestDistanceRef",
                26: "GPSDestDistance",
                27: "GPSProcessingMethod",
                28: "GPSAreaInformation",
                29: "GPSDateStamp",
                30: "GPSDifferential"
            };
            EXIF.StringValues = {
                ExposureProgram: {
                    0: "Not defined",
                    1: "Manual",
                    2: "Normal program",
                    3: "Aperture priority",
                    4: "Shutter priority",
                    5: "Creative program",
                    6: "Action program",
                    7: "Portrait mode",
                    8: "Landscape mode"
                },
                MeteringMode: {
                    0: "Unknown",
                    1: "Average",
                    2: "CenterWeightedAverage",
                    3: "Spot",
                    4: "MultiSpot",
                    5: "Pattern",
                    6: "Partial",
                    255: "Other"
                },
                LightSource: {
                    0: "Unknown",
                    1: "Daylight",
                    2: "Fluorescent",
                    3: "Tungsten (incandescent light)",
                    4: "Flash",
                    9: "Fine weather",
                    10: "Cloudy weather",
                    11: "Shade",
                    12: "Daylight fluorescent (D 5700 - 7100K)",
                    13: "Day white fluorescent (N 4600 - 5400K)",
                    14: "Cool white fluorescent (W 3900 - 4500K)",
                    15: "White fluorescent (WW 3200 - 3700K)",
                    17: "Standard light A",
                    18: "Standard light B",
                    19: "Standard light C",
                    20: "D55",
                    21: "D65",
                    22: "D75",
                    23: "D50",
                    24: "ISO studio tungsten",
                    255: "Other"
                },
                Flash: {
                    0: "Flash did not fire",
                    1: "Flash fired",
                    5: "Strobe return light not detected",
                    7: "Strobe return light detected",
                    9: "Flash fired, compulsory flash mode",
                    13: "Flash fired, compulsory flash mode, return light not detected",
                    15: "Flash fired, compulsory flash mode, return light detected",
                    16: "Flash did not fire, compulsory flash mode",
                    24: "Flash did not fire, auto mode",
                    25: "Flash fired, auto mode",
                    29: "Flash fired, auto mode, return light not detected",
                    31: "Flash fired, auto mode, return light detected",
                    32: "No flash function",
                    65: "Flash fired, red-eye reduction mode",
                    69: "Flash fired, red-eye reduction mode, return light not detected",
                    71: "Flash fired, red-eye reduction mode, return light detected",
                    73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                    77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                    79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                    89: "Flash fired, auto mode, red-eye reduction mode",
                    93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                    95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                },
                SensingMethod: {
                    1: "Not defined",
                    2: "One-chip color area sensor",
                    3: "Two-chip color area sensor",
                    4: "Three-chip color area sensor",
                    5: "Color sequential area sensor",
                    7: "Trilinear sensor",
                    8: "Color sequential linear sensor"
                },
                SceneCaptureType: {
                    0: "Standard",
                    1: "Landscape",
                    2: "Portrait",
                    3: "Night scene"
                },
                SceneType: {
                    1: "Directly photographed"
                },
                CustomRendered: {
                    0: "Normal process",
                    1: "Custom process"
                },
                WhiteBalance: {
                    0: "Auto white balance",
                    1: "Manual white balance"
                },
                GainControl: {
                    0: "None",
                    1: "Low gain up",
                    2: "High gain up",
                    3: "Low gain down",
                    4: "High gain down"
                },
                Contrast: {
                    0: "Normal",
                    1: "Soft",
                    2: "Hard"
                },
                Saturation: {
                    0: "Normal",
                    1: "Low saturation",
                    2: "High saturation"
                },
                Sharpness: {
                    0: "Normal",
                    1: "Soft",
                    2: "Hard"
                },
                SubjectDistanceRange: {
                    0: "Unknown",
                    1: "Macro",
                    2: "Close view",
                    3: "Distant view"
                },
                FileSource: {
                    3: "DSC"
                },
                Components: {
                    0: "",
                    1: "Y",
                    2: "Cb",
                    3: "Cr",
                    4: "R",
                    5: "G",
                    6: "B"
                }
            };
            function d(j, l, k) {
                if (j.addEventListener) {
                    j.addEventListener(l, k, false)
                } else {
                    if (j.attachEvent) {
                        j.attachEvent("on" + l, k)
                    }
                }
            }
            function c(j) {
                return !!(j.exifdata)
            }
            function e(k, j) {
                BinaryAjax(k.src, function(l) {
                    var m = a(l.binaryResponse);
                    k.exifdata = m || {};
                    if (j) {
                        j()
                    }
                })
            }
            function a(m) {
                var j = [];
                if (m.getByteAt(0) != 255 || m.getByteAt(1) != 216) {
                    return false
                }
                var l = 2;
                var k = m.getLength();
                while (l < k) {
                    if (m.getByteAt(l) != 255) {
                        if (h) {
                            console.log("Not a valid marker at offset " + l + ", found: " + m.getByteAt(l))
                        }
                        return false
                    }
                    var n = m.getByteAt(l + 1);
                    if (n == 22400) {
                        if (h) {
                            console.log("Found 0xFFE1 marker")
                        }
                        return g(m, l + 4, m.getShortAt(l + 2, true) - 2);
                        l += 2 + m.getShortAt(l + 2, true)
                    } else {
                        if (n == 225) {
                            if (h) {
                                console.log("Found 0xFFE1 marker")
                            }
                            return g(m, l + 4, m.getShortAt(l + 2, true) - 2)
                        } else {
                            l += 2 + m.getShortAt(l + 2, true)
                        }
                    }
                }
            }
            function f(q, n, s, k, p) {
                var j = q.getShortAt(s, p);
                var o = {};
                for (var l = 0; l < j; l++) {
                    var r = s + l * 12 + 2;
                    var m = k[q.getShortAt(r, p)];
                    if (!m && h) {
                        console.log("Unknown tag: " + q.getShortAt(r, p))
                    }
                    o[m] = b(q, r, n, s, p)
                }
                return o
            }
            function b(t, v, o, u, q) {
                var r = t.getShortAt(v + 2, q);
                var s = t.getLongAt(v + 4, q);
                var l = t.getLongAt(v + 8, q) + o;
                switch (r) {
                case 1:
                case 7:
                    if (s == 1) {
                        return t.getByteAt(v + 8, q)
                    } else {
                        var j = s > 4 ? l : (v + 8);
                        var p = [];
                        for (var k = 0; k < s; k++) {
                            p[k] = t.getByteAt(j + k)
                        }
                        return p
                    }
                    break;
                case 2:
                    var m = s > 4 ? l : (v + 8);
                    return t.getStringAt(m, s - 1);
                    break;
                case 3:
                    if (s == 1) {
                        return t.getShortAt(v + 8, q)
                    } else {
                        var j = s > 2 ? l : (v + 8);
                        var p = [];
                        for (var k = 0; k < s; k++) {
                            p[k] = t.getShortAt(j + 2 * k, q)
                        }
                        return p
                    }
                    break;
                case 4:
                    if (s == 1) {
                        return t.getLongAt(v + 8, q)
                    } else {
                        var p = [];
                        for (var k = 0; k < s; k++) {
                            p[k] = t.getLongAt(l + 4 * k, q)
                        }
                        return p
                    }
                    break;
                case 5:
                    if (s == 1) {
                        return t.getLongAt(l, q) / t.getLongAt(l + 4, q)
                    } else {
                        var p = [];
                        for (var k = 0; k < s; k++) {
                            p[k] = t.getLongAt(l + 8 * k, q) / t.getLongAt(l + 4 + 8 * k, q)
                        }
                        return p
                    }
                    break;
                case 9:
                    if (s == 1) {
                        return t.getSLongAt(v + 8, q)
                    } else {
                        var p = [];
                        for (var k = 0; k < s; k++) {
                            p[k] = t.getSLongAt(l + 4 * k, q)
                        }
                        return p
                    }
                    break;
                case 10:
                    if (s == 1) {
                        return t.getSLongAt(l, q) / t.getSLongAt(l + 4, q)
                    } else {
                        var p = [];
                        for (var k = 0; k < s; k++) {
                            p[k] = t.getSLongAt(l + 8 * k, q) / t.getSLongAt(l + 4 + 8 * k, q)
                        }
                        return p
                    }
                    break
                }
            }
            function g(r, j, l) {
                if (r.getStringAt(j, 4) != "Exif") {
                    if (h) {
                        console.log("Not valid EXIF data! " + r.getStringAt(j, 4))
                    }
                    return false
                }
                var p;
                var m = j + 6;
                if (r.getShortAt(m) == 18761) {
                    p = false
                } else {
                    if (r.getShortAt(m) == 19789) {
                        p = true
                    } else {
                        if (h) {
                            console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)")
                        }
                        return false
                    }
                }
                if (r.getShortAt(m + 2, p) != 42) {
                    if (h) {
                        console.log("Not valid TIFF data! (no 0x002A)")
                    }
                    return false
                }
                if (r.getLongAt(m + 4, p) != 8) {
                    if (h) {
                        console.log("Not valid TIFF data! (First offset not 8)", r.getShortAt(m + 4, p))
                    }
                    return false
                }
                var o = f(r, m, m + 8, EXIF.TiffTags, p);
                if (o.ExifIFDPointer) {
                    var q = f(r, m, m + o.ExifIFDPointer, EXIF.Tags, p);
                    for (var n in q) {
                        switch (n) {
                        case "LightSource":
                        case "Flash":
                        case "MeteringMode":
                        case "ExposureProgram":
                        case "SensingMethod":
                        case "SceneCaptureType":
                        case "SceneType":
                        case "CustomRendered":
                        case "WhiteBalance":
                        case "GainControl":
                        case "Contrast":
                        case "Saturation":
                        case "Sharpness":
                        case "SubjectDistanceRange":
                        case "FileSource":
                            q[n] = EXIF.StringValues[n][q[n]];
                            break;
                        case "ExifVersion":
                        case "FlashpixVersion":
                            q[n] = String.fromCharCode(q[n][0], q[n][1], q[n][2], q[n][3]);
                            break;
                        case "ComponentsConfiguration":
                            q[n] = EXIF.StringValues.Components[q[n][0]] + EXIF.StringValues.Components[q[n][1]] + EXIF.StringValues.Components[q[n][2]] + EXIF.StringValues.Components[q[n][3]];
                            break
                        }
                        o[n] = q[n]
                    }
                }
                if (o.GPSInfoIFDPointer) {
                    var k = f(r, m, m + o.GPSInfoIFDPointer, EXIF.GPSTags, p);
                    for (var n in k) {
                        switch (n) {
                        case "GPSVersionID":
                            k[n] = k[n][0] + "." + k[n][1] + "." + k[n][2] + "." + k[n][3];
                            break
                        }
                        o[n] = k[n]
                    }
                }
                return o
            }
            EXIF.getData = function(k, j) {
                if (!k.complete) {
                    return false
                }
                if (!c(k)) {
                    e(k, j)
                } else {
                    if (j) {
                        j()
                    }
                }
                return true
            }
            ;
            EXIF.getTag = function(k, j) {
                if (!c(k)) {
                    return
                }
                return k.exifdata[j]
            }
            ;
            EXIF.getAllTags = function(l) {
                if (!c(l)) {
                    return {}
                }
                var m = l.exifdata;
                var k = {};
                for (var j in m) {
                    if (m.hasOwnProperty(j)) {
                        k[j] = m[j]
                    }
                }
                return k
            }
            ;
            EXIF.pretty = function(l) {
                if (!c(l)) {
                    return ""
                }
                var m = l.exifdata;
                var k = "";
                for (var j in m) {
                    if (m.hasOwnProperty(j)) {
                        if (typeof m[j] == "object") {
                            k += j + " : [" + m[j].length + " values]\r\n"
                        } else {
                            k += j + " : " + m[j] + "\r\n"
                        }
                    }
                }
                return k
            }
            ;
            EXIF.readFromBinaryFile = function(j) {
                return a(j)
            }
            ;
            function i() {
                var k = document.getElementsByTagName("img");
                for (var j = 0; j < k.length; j++) {
                    if (k[j].getAttribute("exif") == "true") {
                        if (!k[j].complete) {
                            d(k[j], "load", function() {
                                EXIF.getData(this)
                            })
                        } else {
                            EXIF.getData(k[j])
                        }
                    }
                }
            }
            d(window, "load", i)
        })()
    })();
    (function() {
        window.BinaryFile = function(g, d, c) {
            var e = g;
            var b = d || 0;
            var f = 0;
            this.getRawData = function() {
                return e
            }
            ;
            if (typeof g == "string") {
                f = c || e.length;
                this.getByteAt = function(h) {
                    return e.charCodeAt(h + b) & 255
                }
                ;
                this.getBytesAt = function(l, k) {
                    var h = [];
                    for (var j = 0; j < k; j++) {
                        h[j] = e.charCodeAt((l + j) + b) & 255
                    }
                    return h
                }
            } else {
                if (typeof g == "unknown") {
                    f = c || IEBinary_getLength(e);
                    this.getByteAt = function(h) {
                        return IEBinary_getByteAt(e, h + b)
                    }
                    ;
                    this.getBytesAt = function(i, h) {
                        return new VBArray(IEBinary_getBytesAt(e, i + b, h)).toArray()
                    }
                }
            }
            this.getLength = function() {
                return f
            }
            ;
            this.getSByteAt = function(i) {
                var h = this.getByteAt(i);
                if (h > 127) {
                    return h - 256
                } else {
                    return h
                }
            }
            ;
            this.getShortAt = function(j, h) {
                var i = h ? (this.getByteAt(j) << 8) + this.getByteAt(j + 1) : (this.getByteAt(j + 1) << 8) + this.getByteAt(j);
                if (i < 0) {
                    i += 65536
                }
                return i
            }
            ;
            this.getSShortAt = function(j, i) {
                var h = this.getShortAt(j, i);
                if (h > 32767) {
                    return h - 65536
                } else {
                    return h
                }
            }
            ;
            this.getLongAt = function(m, i) {
                var l = this.getByteAt(m)
                  , k = this.getByteAt(m + 1)
                  , j = this.getByteAt(m + 2)
                  , h = this.getByteAt(m + 3);
                var n = i ? (((((l << 8) + k) << 8) + j) << 8) + h : (((((h << 8) + j) << 8) + k) << 8) + l;
                if (n < 0) {
                    n += 4294967296
                }
                return n
            }
            ;
            this.getSLongAt = function(j, h) {
                var i = this.getLongAt(j, h);
                if (i > 2147483647) {
                    return i - 4294967296
                } else {
                    return i
                }
            }
            ;
            this.getStringAt = function(m, l) {
                var i = [];
                var h = this.getBytesAt(m, l);
                for (var k = 0; k < l; k++) {
                    i[k] = String.fromCharCode(h[k])
                }
                return i.join("")
            }
            ;
            this.getCharAt = function(h) {
                return String.fromCharCode(this.getByteAt(h))
            }
            ;
            this.toBase64 = function() {
                return window.btoa(e)
            }
            ;
            this.fromBase64 = function(h) {
                e = window.atob(h)
            }
        }
        ;
        var a = (function() {
            function c() {
                var e = null ;
                if (window.ActiveXObject) {
                    e = new ActiveXObject("Microsoft.XMLHTTP")
                } else {
                    if (window.XMLHttpRequest) {
                        e = new XMLHttpRequest()
                    }
                }
                return e
            }
            function d(h, e, g) {
                var f = c();
                if (f) {
                    if (e) {
                        if (typeof (f.onload) != "undefined") {
                            f.onload = function() {
                                if (f.status == "200") {
                                    e(this)
                                } else {
                                    if (g) {
                                        g()
                                    }
                                }
                                f = null 
                            }
                        } else {
                            f.onreadystatechange = function() {
                                if (f.readyState == 4) {
                                    if (f.status == "200") {
                                        e(this)
                                    } else {
                                        if (g) {
                                            g()
                                        }
                                    }
                                    f = null 
                                }
                            }
                        }
                    }
                    f.open("HEAD", h, true);
                    f.send(null )
                } else {
                    if (g) {
                        g()
                    }
                }
            }
            function b(f, i, h, e, j, k) {
                var g = c();
                if (g) {
                    var l = 0;
                    if (e && !j) {
                        l = e[0]
                    }
                    var m = 0;
                    if (e) {
                        m = e[1] - e[0] + 1
                    }
                    if (i) {
                        if (typeof (g.onload) != "undefined") {
                            g.onload = function() {
                                if (g.status == "200" || g.status == "206" || g.status == "0") {
                                    g.binaryResponse = new BinaryFile(g.responseText,l,m);
                                    g.fileSize = k || g.getResponseHeader("Content-Length");
                                    i(g)
                                } else {
                                    if (h) {
                                        h()
                                    }
                                }
                                g = null 
                            }
                        } else {
                            g.onreadystatechange = function() {
                                if (g.readyState == 4) {
                                    if (g.status == "200" || g.status == "206" || g.status == "0") {
                                        var n = {
                                            status: g.status,
                                            binaryResponse: new BinaryFile(typeof g.responseBody == "unknown" ? g.responseBody : g.responseText,l,m),
                                            fileSize: k || g.getResponseHeader("Content-Length")
                                        };
                                        i(n)
                                    } else {
                                        if (h) {
                                            h()
                                        }
                                    }
                                    g = null 
                                }
                            }
                        }
                    }
                    g.open("GET", f, true);
                    if (g.overrideMimeType) {
                        g.overrideMimeType("text/plain; charset=x-user-defined")
                    }
                    if (e && j) {
                        g.setRequestHeader("Range", "bytes=" + e[0] + "-" + e[1])
                    }
                    g.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT");
                    g.send(null )
                } else {
                    if (h) {
                        h()
                    }
                }
            }
            return function(h, e, g, f) {
                if (f) {
                    d(h, function(k) {
                        var m = parseInt(k.getResponseHeader("Content-Length"), 10);
                        var l = k.getResponseHeader("Accept-Ranges");
                        var j, i;
                        j = f[0];
                        if (f[0] < 0) {
                            j += m
                        }
                        i = j + f[1] - 1;
                        b(h, e, g, [j, i], (l == "bytes"), m)
                    })
                } else {
                    b(h, e, g)
                }
            }
        }());
        document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n	IEBinary_getByteAt = AscB(MidB(strBinary, iOffset + 1, 1))\r\nEnd Function\r\nFunction IEBinary_getBytesAt(strBinary, iOffset, iLength)\r\n  Dim aBytes()\r\n  ReDim aBytes(iLength - 1)\r\n  For i = 0 To iLength - 1\r\n   aBytes(i) = IEBinary_getByteAt(strBinary, iOffset + i)\r\n  Next\r\n  IEBinary_getBytesAt = aBytes\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n	IEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n<\/script>\r\n")
    })();
    (function() {
        (function(d) {
            var e = d.Quark = d.Quark || {
                global: d
            };
            var a = function() {}
            ;
            e.inherit = function(f, g) {
                a.prototype = g.prototype;
                f.superClass = g.prototype;
                f.prototype = new a();
                f.prototype.constructor = f
            }
            ;
            e.merge = function(i, h, f) {
                for (var g in h) {
                    if (!f || i.hasOwnProperty(g) || i[g] !== undefined) {
                        i[g] = h[g]
                    }
                }
                return i
            }
            ;
            e.delegate = function(i, f) {
                var h = f || d;
                if (arguments.length > 2) {
                    var g = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var j = Array.prototype.concat.apply(g, arguments);
                        return i.apply(h, j)
                    }
                } else {
                    return function() {
                        return i.apply(h, arguments)
                    }
                }
            }
            ;
            e.getDOM = function(f) {
                return document.getElementById(f)
            }
            ;
            e.createDOM = function(h, g) {
                var k = document.createElement(h);
                for (var i in g) {
                    var j = g[i];
                    if (i == "style") {
                        for (var f in j) {
                            k.style[f] = j[f]
                        }
                    } else {
                        k[i] = j
                    }
                }
                return k
            }
            ;
            e.use = function(f) {
                var k = f.split(".")
                  , j = d;
                for (var g = 0; g < k.length; g++) {
                    var h = k[g];
                    j = j[h] || (j[h] = {})
                }
                return j
            }
            ;
            function b(g) {
                var f = g.ua = navigator.userAgent;
                g.isWebKit = (/webkit/i).test(f);
                g.isMozilla = (/mozilla/i).test(f);
                g.isIE = (/msie/i).test(f);
                g.isFirefox = (/firefox/i).test(f);
                g.isChrome = (/chrome/i).test(f);
                g.isSafari = (/safari/i).test(f) && !this.isChrome;
                g.isMobile = (/mobile/i).test(f);
                g.isOpera = (/opera/i).test(f);
                g.isIOS = (/ios/i).test(f);
                g.isIpad = (/ipad/i).test(f);
                g.isIpod = (/ipod/i).test(f);
                g.isIphone = (/iphone/i).test(f) && !this.isIpod;
                g.isAndroid = (/android/i).test(f);
                g.supportStorage = "localStorage" in d;
                g.supportOrientation = "orientation" in d;
                g.supportDeviceMotion = "ondevicemotion" in d;
                g.supportTouch = "ontouchstart" in d;
                g.supportCanvas = document.createElement("canvas").getContext != null ;
                g.cssPrefix = g.isWebKit ? "webkit" : g.isFirefox ? "Moz" : g.isOpera ? "O" : g.isIE ? "ms" : ""
            }
            b(e);
            e.getElementOffset = function(f) {
                var h = f.offsetLeft
                  , g = f.offsetTop;
                while ((f = f.offsetParent) && f != document.body && f != document) {
                    h += f.offsetLeft;
                    g += f.offsetTop
                }
                return {
                    left: h,
                    top: g
                }
            }
            ;
            e.createDOMDrawable = function(f, g) {
                var q = f.tagName || "div";
                var j = g.image;
                var o = f.width || (j && j.width);
                var k = f.height || (j && j.height);
                var i = e.createDOM(q);
                if (f.id) {
                    i.id = f.id
                }
                i.style.position = "absolute";
                i.style.left = (f.left || 0) + "px";
                i.style.top = (f.top || 0) + "px";
                i.style.width = o + "px";
                i.style.height = k + "px";
                if (q == "canvas") {
                    i.width = o;
                    i.height = k;
                    if (j) {
                        var p = i.getContext("2d");
                        var n = g.rect || [0, 0, o, k];
                        p.drawImage(j, n[0], n[1], n[2], n[3], (f.x || 0), (f.y || 0), (f.width || n[2]), (f.height || n[3]))
                    }
                } else {
                    i.style.opacity = f.alpha != undefined ? f.alpha : 1;
                    i.style.overflow = "hidden";
                    if (j && j.src) {
                        i.style.backgroundImage = "url(" + j.src + ")";
                        var m = f.rectX || 0
                          , l = f.rectY || 0;
                        i.style.backgroundPosition = (-m) + "px " + (-l) + "px"
                    }
                }
                return i
            }
            ;
            e.DEG_TO_RAD = Math.PI / 180;
            e.RAD_TO_DEG = 180 / Math.PI;
            e.hitTestPoint = function(o, u, r, j) {
                var s = o.getBounds()
                  , q = s.length;
                var g = u >= s.x && u <= s.x + s.width && r >= s.y && r <= s.y + s.height;
                if (g && j) {
                    var t = 0, k = false, m, h, l, f;
                    for (var n = 0; n < q; n++) {
                        var w = s[n]
                          , v = s[(n + 1) % q];
                        if (w.y == v.y && r == w.y) {
                            w.x > v.x ? (m = v.x,
                            h = w.x) : (m = w.x,
                            h = v.x);
                            if (u >= m && u <= h) {
                                k = true;
                                continue
                            }
                        }
                        w.y > v.y ? (l = v.y,
                        f = w.y) : (l = w.y,
                        f = v.y);
                        if (r < l || r > f) {
                            continue
                        }
                        var p = (r - w.y) * (v.x - w.x) / (v.y - w.y) + w.x;
                        if (p > u) {
                            t++
                        } else {
                            if (p == u) {
                                k = true
                            }
                        }
                    }
                    if (k) {
                        return 0
                    } else {
                        if (t % 2 == 1) {
                            return 1
                        }
                    }
                    return -1
                }
                return g ? 1 : -1
            }
            ;
            e.hitTestObject = function(k, j, h) {
                var g = k.getBounds()
                  , f = j.getBounds();
                var i = g.x <= f.x + f.width && f.x <= g.x + g.width && g.y <= f.y + f.height && f.y <= g.y + g.height;
                if (i && h) {
                    i = e.polygonCollision(f, f);
                    return i !== false
                }
                return i
            }
            ;
            e.polygonCollision = function(g, h) {
                var f = c(g, h, {
                    overlap: -Infinity,
                    normal: {
                        x: 0,
                        y: 0
                    }
                });
                if (f) {
                    return c(h, g, f)
                }
                return false
            }
            ;
            function c(o, n, x) {
                var l = o.length, h = n.length, u, r, g, w, t, v, q, f, s, p = {
                    x: 0,
                    y: 0
                };
                for (var m = 0; m < l; m++) {
                    u = o[m];
                    r = o[(m < l - 1 ? m + 1 : 0)];
                    p.x = u.y - r.y;
                    p.y = r.x - u.x;
                    g = Math.sqrt(p.x * p.x + p.y * p.y);
                    p.x /= g;
                    p.y /= g;
                    w = t = o[0].x * p.x + o[0].y * p.y;
                    for (var k = 1; k < l; k++) {
                        f = o[k].x * p.x + o[k].y * p.y;
                        if (f > t) {
                            t = f
                        } else {
                            if (f < w) {
                                w = f
                            }
                        }
                    }
                    v = q = n[0].x * p.x + n[0].y * p.y;
                    for (k = 1; k < h; k++) {
                        f = n[k].x * p.x + n[k].y * p.y;
                        if (f > q) {
                            q = f
                        } else {
                            if (f < v) {
                                v = f
                            }
                        }
                    }
                    if (w < v) {
                        s = v - t;
                        p.x = -p.x;
                        p.y = -p.y
                    } else {
                        s = w - q
                    }
                    if (s >= 0) {
                        return false
                    } else {
                        if (s > x.overlap) {
                            x.overlap = s;
                            x.normal.x = p.x;
                            x.normal.y = p.y
                        }
                    }
                }
                return x
            }
            e.toString = function() {
                return "Quark"
            }
            ;
            e.trace = function() {
                var f = Array.prototype.slice.call(arguments);
                if (typeof (console) != "undefined" && typeof (console.log) != "undefined") {
                    console.log(f.join(" "))
                }
            }
            ;
            if (d.Q == undefined) {
                d.Q = e
            }
            if (d.trace == undefined) {
                d.trace = e.trace
            }
        })(window);
        (function() {
            var a = Quark.Matrix = function(h, f, j, i, g, e) {
                this.a = h;
                this.b = f;
                this.c = j;
                this.d = i;
                this.tx = g;
                this.ty = e
            }
            ;
            a.prototype.concat = function(e) {
                var d = this.a;
                var f = this.c;
                var b = this.tx;
                this.a = d * e.a + this.b * e.c;
                this.b = d * e.b + this.b * e.d;
                this.c = f * e.a + this.d * e.c;
                this.d = f * e.b + this.d * e.d;
                this.tx = b * e.a + this.ty * e.c + e.tx;
                this.ty = b * e.b + this.ty * e.d + e.ty;
                return this
            }
            ;
            a.prototype.rotate = function(g) {
                var f = Math.cos(g);
                var e = Math.sin(g);
                var d = this.a;
                var h = this.c;
                var b = this.tx;
                this.a = d * f - this.b * e;
                this.b = d * e + this.b * f;
                this.c = h * f - this.d * e;
                this.d = h * e + this.d * f;
                this.tx = b * f - this.ty * e;
                this.ty = b * e + this.ty * f;
                return this
            }
            ;
            a.prototype.scale = function(c, b) {
                this.a *= c;
                this.d *= b;
                this.tx *= c;
                this.ty *= b;
                return this
            }
            ;
            a.prototype.translate = function(c, b) {
                this.tx += c;
                this.ty += b;
                return this
            }
            ;
            a.prototype.identity = function() {
                this.a = this.d = 1;
                this.b = this.c = this.tx = this.ty = 0;
                return this
            }
            ;
            a.prototype.invert = function() {
                var g = this.a;
                var e = this.b;
                var k = this.c;
                var j = this.d;
                var f = this.tx;
                var h = g * j - e * k;
                this.a = j / h;
                this.b = -e / h;
                this.c = -k / h;
                this.d = g / h;
                this.tx = (k * this.ty - j * f) / h;
                this.ty = -(g * this.ty - e * f) / h;
                return this
            }
            ;
            a.prototype.transformPoint = function(c, e, d) {
                var b = c.x * this.a + c.y * this.c + this.tx;
                var f = c.x * this.b + c.y * this.d + this.ty;
                if (e) {
                    b = b + 0.5 >> 0;
                    f = f + 0.5 >> 0
                }
                if (d) {
                    return {
                        x: b,
                        y: f
                    }
                }
                c.x = b;
                c.y = f;
                return c
            }
            ;
            a.prototype.clone = function() {
                return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)
            }
            ;
            a.prototype.toString = function() {
                return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
            }
        })();
        (function() {
            var a = Quark.Rectangle = function(c, e, d, b) {
                this.x = c;
                this.y = e;
                this.width = d;
                this.height = b
            }
            ;
            a.prototype.intersects = function(b) {
                return ( this.x <= b.x + b.width && b.x <= this.x + this.width && this.y <= b.y + b.height && b.y <= this.y + this.height) 
            }
            ;
            a.prototype.intersection = function(f) {
                var c = Math.max(this.x, f.x);
                var b = Math.min(this.x + this.width, f.x + f.width);
                if (c <= b) {
                    var e = Math.max(this.y, f.y);
                    var d = Math.min(this.y + this.height, f.y + f.height);
                    if (e <= d) {
                        return new a(c,e,b - c,d - e)
                    }
                }
                return null 
            }
            ;
            a.prototype.union = function(h, d) {
                var f = Math.max(this.x + this.width, h.x + h.width);
                var e = Math.max(this.y + this.height, h.y + h.height);
                var c = Math.min(this.x, h.x);
                var i = Math.min(this.y, h.y);
                var g = f - c;
                var b = e - i;
                if (d) {
                    return new a(c,i,g,b)
                } else {
                    this.x = c;
                    this.y = i;
                    this.width = g;
                    this.height = b
                }
            }
            ;
            a.prototype.containsPoint = function(b, c) {
                return ( this.x <= b && b <= this.x + this.width && this.y <= c && c <= this.y + this.height) 
            }
            ;
            a.prototype.clone = function() {
                return new a(this.x,this.y,this.width,this.height)
            }
            ;
            a.prototype.toString = function() {
                return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
            }
        })();
        (function() {
            Quark.KEY = {
                MOUSE_LEFT: 1,
                MOUSE_MID: 2,
                MOUSE_RIGHT: 3,
                BACKSPACE: 8,
                TAB: 9,
                NUM_CENTER: 12,
                ENTER: 13,
                RETURN: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                PAUSE: 19,
                CAPS_LOCK: 20,
                ESC: 27,
                ESCAPE: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                PRINT_SCREEN: 44,
                INSERT: 45,
                DELETE: 46,
                ZERO: 48,
                ONE: 49,
                TWO: 50,
                THREE: 51,
                FOUR: 52,
                FIVE: 53,
                SIX: 54,
                SEVEN: 55,
                EIGHT: 56,
                NINE: 57,
                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                H: 72,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                M: 77,
                N: 78,
                O: 79,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                U: 85,
                V: 86,
                W: 87,
                X: 88,
                Y: 89,
                Z: 90,
                CONTEXT_MENU: 93,
                NUM_ZERO: 96,
                NUM_ONE: 97,
                NUM_TWO: 98,
                NUM_THREE: 99,
                NUM_FOUR: 100,
                NUM_FIVE: 101,
                NUM_SIX: 102,
                NUM_SEVEN: 103,
                NUM_EIGHT: 104,
                NUM_NINE: 105,
                NUM_MULTIPLY: 106,
                NUM_PLUS: 107,
                NUM_MINUS: 109,
                NUM_PERIOD: 110,
                NUM_DIVISION: 111,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123
            }
        })();
        (function() {
            var a = Quark.EventManager = function() {
                this.keyState = {};
                this._evtHandlers = {}
            }
            ;
            a.prototype.registerStage = function(d, e, c, b) {
                this.register(d.context.canvas, e, {
                    host: d,
                    func: d.dispatchEvent
                }, c, b)
            }
            ;
            a.prototype.unregisterStage = function(b, c) {
                this.unregister(b.context.canvas, c, b.dispatchEvent)
            }
            ;
            a.prototype.register = function(f, q, o, g, l) {
                if (o == null  || (typeof o == "function")) {
                    o = {
                        host: null ,
                        func: o
                    }
                }
                var b = {
                    prevent: g,
                    stop: l
                };
                var k = this
                  , p = function(i) {
                    k._onEvent(i, b, o)
                }
                ;
                for (var d = 0; d < q.length; d++) {
                    var h = q[d]
                      , e = this._evtHandlers[h] || (this._evtHandlers[h] = []);
                    for (var c = 0, n = false; c < e.length; c++) {
                        var m = e[c];
                        if (m.target == f && m.callback.func == o.func) {
                            trace("duplicate callback");
                            n = true;
                            break
                        }
                    }
                    if (!n) {
                        e.push({
                            target: f,
                            callback: o,
                            handler: p
                        });
                        f.addEventListener(h, p, false)
                    }
                }
            }
            ;
            a.prototype.unregister = function(h, e, k) {
                for (var d = 0; d < e.length; d++) {
                    var f = e[d]
                      , g = this._evtHandlers[f];
                    for (var c = 0; c < g.length; c++) {
                        var b = g[c];
                        if (b.target == h && (b.callback.func == k || k == null )) {
                            h.removeEventListener(f, b.handler);
                            g.splice(c, 1);
                            break
                        }
                    }
                }
            }
            ;
            a.prototype._onEvent = function(f, g, h) {
                var d = f
                  , c = f.type
                  , b = f.type.indexOf("touch") == 0;
                if (b) {
                    d = (f.touches && f.touches.length > 0) ? f.touches[0] : (f.changedTouches && f.changedTouches.length > 0) ? f.changedTouches[0] : f;
                    d.type = c;
                    d.rawEvent = f
                }
                if (c == "keydown" || c == "keyup" || c == "keypress") {
                    this.keyState[f.keyCode] = c
                }
                if (h.func != null ) {
                    h.func.call(h.host, d)
                }
                a.stop(f, !g.prevent, !g.stop)
            }
            ;
            a.stop = function(b, d, c) {
                if (!d) {
                    b.preventDefault()
                }
                if (!c) {
                    b.stopPropagation();
                    if (b.stopImmediatePropagation) {
                        b.stopImmediatePropagation()
                    }
                }
            }
        })();
        (function() {
            var a = Quark.EventDispatcher = function() {
                this._eventMap = {}
            }
            ;
            a.prototype.addEventListener = function(b, c) {
                var d = this._eventMap[b];
                if (d == null ) {
                    d = this._eventMap[b] = []
                }
                if (d.indexOf(c) == -1) {
                    d.push(c);
                    return true
                }
                return false
            }
            ;
            a.prototype.removeEventListener = function(d, e) {
                if (arguments.length == 1) {
                    return this.removeEventListenerByType(d)
                }
                var f = this._eventMap[d];
                if (f == null ) {
                    return false
                }
                for (var c = 0; c < f.length; c++) {
                    var b = f[c];
                    if (b === e) {
                        f.splice(c, 1);
                        if (f.length == 0) {
                            delete this._eventMap[d]
                        }
                        return true
                    }
                }
                return false
            }
            ;
            a.prototype.removeEventListenerByType = function(b) {
                var c = this._eventMap[b];
                if (c != null ) {
                    delete this._eventMap[b];
                    return true
                }
                return false
            }
            ;
            a.prototype.removeAllEventListeners = function() {
                this._eventMap = {}
            }
            ;
            a.prototype.dispatchEvent = function(c) {
                var e = this._eventMap[c.type];
                if (e == null ) {
                    return false
                }
                if (!c.target) {
                    c.target = this
                }
                e = e.slice();
                for (var b = 0; b < e.length; b++) {
                    var d = e[b];
                    if (typeof (d) == "function") {
                        d.call(this, c)
                    }
                }
                return true
            }
            ;
            a.prototype.hasEventListener = function(b) {
                var c = this._eventMap[b];
                return c != null  && c.length > 0
            }
            ;
            a.prototype.on = a.prototype.addEventListener;
            a.prototype.un = a.prototype.removeEventListener;
            a.prototype.fire = a.prototype.dispatchEvent
        })();
        (function() {
            var a = Quark.Context = function(b) {
                if (b.canvas == null ) {
                    throw "Quark.Context Error: canvas is required."
                }
                this.canvas = null ;
                Quark.merge(this, b)
            }
            ;
            a.prototype.startDraw = function() {}
            ;
            a.prototype.draw = function() {}
            ;
            a.prototype.endDraw = function() {}
            ;
            a.prototype.transform = function() {}
            ;
            a.prototype.remove = function(b) {}
        })();
        (function() {
            var a = Quark.CanvasContext = function(b) {
                a.superClass.constructor.call(this, b);
                this.context = this.canvas.getContext("2d")
            }
            ;
            Quark.inherit(a, Quark.Context);
            a.prototype.startDraw = function() {
                this.context.save()
            }
            ;
            a.prototype.draw = function(g) {
                if (g.parent != null  && g.parent.mask != null ) {
                    return
                }
                if (g.mask != null ) {
                    var i = g.width
                      , f = g.height;
                    var c = Q._helpContext
                      , d = c.canvas
                      , j = c.context;
                    d.width = 0;
                    d.width = i;
                    d.height = f;
                    c.startDraw();
                    g.mask._render(c);
                    j.globalCompositeOperation = "source-in";
                    var k = g.mask;
                    g.mask = null ;
                    if (g instanceof Quark.DisplayObjectContainer) {
                        var b = g._cache || Quark.cacheObject(g);
                        j.drawImage(b, 0, 0, i, f, 0, 0, i, f)
                    } else {
                        g.render(c)
                    }
                    c.endDraw();
                    g.mask = k;
                    arguments[0] = d;
                    this.context.drawImage.apply(this.context, arguments)
                } else {
                    if (g._cache != null ) {
                        this.context.drawImage(g._cache, 0, 0)
                    } else {
                        if (g instanceof Quark.Graphics || g instanceof Quark.Text) {
                            g._draw(this.context)
                        } else {
                            var e = g.getDrawable(this);
                            if (e != null ) {
                                arguments[0] = e;
                                this.context.drawImage.apply(this.context, arguments)
                            }
                        }
                    }
                }
            }
            ;
            a.prototype.endDraw = function() {
                this.context.restore()
            }
            ;
            a.prototype.transform = function(c) {
                var b = this.context;
                if (c instanceof Q.Stage) {
                    if (c._scaleX != c.scaleX) {
                        c._scaleX = c.scaleX;
                        this.canvas.style.width = c._scaleX * c.width + "px"
                    }
                    if (c._scaleY != c.scaleY) {
                        c._scaleY = c.scaleY;
                        this.canvas.style.height = c._scaleY * c.height + "px"
                    }
                } else {
                    if (c.x != 0 || c.y != 0) {
                        b.translate(c.x, c.y)
                    }
                    if (c.rotation % 360 != 0) {
                        b.rotate(c.rotation % 360 * Quark.DEG_TO_RAD)
                    }
                    if (c.scaleX != 1 || c.scaleY != 1) {
                        b.scale(c.scaleX, c.scaleY)
                    }
                    if (c.regX != 0 || c.regY != 0) {
                        b.translate(-c.regX, -c.regY)
                    }
                }
                if (c.alpha > 0) {
                    b.globalAlpha *= c.alpha
                }
            }
            ;
            a.prototype.clear = function(c, e, d, b) {
                this.context.clearRect(c, e, d, b)
            }
        })();
        (function() {
            var e = document.createElement("div");
            var b = e.style[Quark.cssPrefix + "Transform"] != undefined;
            var g = e.style[Quark.cssPrefix + "Perspective"] != undefined;
            var a = document.documentElement;
            if (g && "webkitPerspective" in a.style) {
                e.id = "test3d";
                var d = document.createElement("style");
                d.textContent = "@media (-webkit-transform-3d){#test3d{height:3px}}";
                document.head.appendChild(d);
                a.appendChild(e);
                g = e.offsetHeight === 3;
                d.parentNode.removeChild(d);
                e.parentNode.removeChild(e)
            }
            Quark.supportTransform = b;
            Quark.supportTransform3D = g;
            if (!b) {
                trace("Warn: DOMContext requires css transfrom support.");
                return
            }
            var f = Quark.DOMContext = function(h) {
                f.superClass.constructor.call(this, h)
            }
            ;
            Quark.inherit(f, Quark.Context);
            f.prototype.draw = function(j) {
                if (!j._addedToDOM) {
                    var h = j.parent;
                    var i = j.getDrawable(this);
                    if (h != null ) {
                        var k = h.getDrawable(this);
                        if (i.parentNode != k) {
                            k.appendChild(i)
                        }
                        if (k.parentNode == null  && h instanceof Quark.Stage) {
                            this.canvas.appendChild(k);
                            h._addedToDOM = true
                        }
                        j._addedToDOM = true
                    }
                }
            }
            ;
            f.prototype.transform = function(n) {
                var m = n.getDrawable(this);
                if (!n.transformEnabled && n._addedToDOM) {
                    return
                }
                var l = Quark.cssPrefix
                  , h = l + "TransformOrigin"
                  , i = l + "Transform"
                  , k = m.style;
                if (!k.display || n.propChanged("visible", "alpha")) {
                    k.display = (!n.visible || n.alpha <= 0) ? "none" : ""
                }
                if (!k.opacity || n.propChanged("alpha")) {
                    k.opacity = n.alpha
                }
                if (!k.backgroundPosition || n.propChanged("rectX", "rectY")) {
                    k.backgroundPosition = (-n.rectX) + "px " + (-n.rectY) + "px"
                }
                if (!k.width || n.propChanged("width", "height")) {
                    k.width = n.width + "px";
                    k.height = n.height + "px"
                }
                if (!k[h] || n.propChanged("regX", "regY")) {
                    k[h] = n.regX + "px " + n.regY + "px"
                }
                if (!k[i] || n.propChanged("x", "y", "regX", "regY", "scaleX", "scaleY", "rotation")) {
                    var j = Quark.supportTransform3D ? c(n, true) : c(n, false);
                    k[i] = j
                }
                if (!k.zIndex || n.propChanged("_depth")) {
                    k.zIndex = n._depth
                }
                if (n.mask != null ) {
                    k[Q.cssPrefix + "MaskImage"] = n.mask.getDrawable(this).style.backgroundImage;
                    k[Q.cssPrefix + "MaskRepeat"] = "no-repeat";
                    k[Q.cssPrefix + "MaskPosition"] = n.mask.x + "px " + n.mask.y + "px"
                }
                k.pointerEvents = n.eventEnabled ? "auto" : "none"
            }
            ;
            function c(j, i) {
                var h = "";
                if (i) {
                    h += "translate3d(" + (j.x - j.regX) + "px, " + (j.y - j.regY) + "px, 0px)rotate3d(0, 0, 1, " + j.rotation + "deg)scale3d(" + j.scaleX + ", " + j.scaleY + ", 1)"
                } else {
                    h += "translate(" + (j.x - j.regX) + "px, " + (j.y - j.regY) + "px)rotate(" + j.rotation + "deg)scale(" + j.scaleX + ", " + j.scaleY + ")"
                }
                return h
            }
            f.prototype.hide = function(h) {
                h.getDrawable(this).style.display = "none"
            }
            ;
            f.prototype.remove = function(j) {
                var i = j.getDrawable(this);
                var h = i.parentNode;
                if (h != null ) {
                    h.removeChild(i)
                }
                j._addedToDOM = false
            }
        })();
        (function() {
            var a = Quark.UIDUtil = {
                _counter: 0
            };
            a.createUID = function(c) {
                var b = c.charCodeAt(c.length - 1);
                if (b >= 48 && b <= 57) {
                    c += "_"
                }
                return c + this._counter++
            }
            ;
            a.displayObjectToString = function(e) {
                var b;
                for (var d = e; d != null ; d = d.parent) {
                    var c = d.id != null  ? d.id : d.name;
                    b = b == null  ? c : (c + "." + b);
                    if (d == d.parent) {
                        break
                    }
                }
                return b
            }
        })();
        (function() {
            Quark.getUrlParams = function() {
                var m = {};
                var j = window.location.href;
                var e = j.indexOf("?");
                if (e > 0) {
                    var l = j.substring(e + 1);
                    var h = l.split("&");
                    for (var k = 0, f, g; f = h[k]; k++) {
                        g = h[k] = f.split("=");
                        m[g[0]] = g.length > 1 ? g[1] : true
                    }
                }
                return m
            }
            ;
            var a = document.getElementsByTagName("head")[0];
            var d = a.getElementsByTagName("meta");
            var b = d.length > 0 ? d[d.length - 1].nextSibling : a.childNodes[0];
            Quark.addMeta = function(e) {
                var g = document.createElement("meta");
                for (var f in e) {
                    g.setAttribute(f, e[f])
                }
                a.insertBefore(g, b)
            }
            ;
            Quark.toggleDebugRect = function(e) {
                e.debug = !e.debug;
                if (e.debug) {
                    e._render = function(g) {
                        if (g.clear != null ) {
                            g.clear(0, 0, e.width, e.height)
                        }
                        Quark.Stage.superClass._render.call(e, g);
                        var f = e.context.context;
                        if (f != null ) {
                            f.save();
                            f.lineWidth = 1;
                            f.strokeStyle = "#f00";
                            f.globalAlpha = 0.5
                        }
                        c(e, f);
                        if (f != null ) {
                            f.restore()
                        }
                    }
                } else {
                    e._render = function(f) {
                        if (f.clear != null ) {
                            f.clear(0, 0, e.width, e.height)
                        }
                        Quark.Stage.superClass._render.call(e, f)
                    }
                }
            }
            ;
            function c(l, f) {
                for (var h = 0; h < l.children.length; h++) {
                    var n = l.children[h];
                    if (n.children) {
                        c(n, f)
                    } else {
                        if (f != null ) {
                            var e = n.getBounds();
                            f.globalAlpha = 0.2;
                            f.beginPath();
                            var m = e[0];
                            f.moveTo(m.x - 0.5, m.y - 0.5);
                            for (var g = 1; g < e.length; g++) {
                                var k = e[g];
                                f.lineTo(k.x - 0.5, k.y - 0.5)
                            }
                            f.lineTo(m.x - 0.5, m.y - 0.5);
                            f.stroke();
                            f.closePath();
                            f.globalAlpha = 0.5;
                            f.beginPath();
                            f.rect((e.x >> 0) - 0.5, (e.y >> 0) - 0.5, e.width >> 0, e.height >> 0);
                            f.stroke();
                            f.closePath()
                        } else {
                            if (n.drawable.domDrawable) {
                                n.drawable.domDrawable.style.border = "1px solid #f00"
                            }
                        }
                    }
                }
            }
            Quark.cacheObject = function(j, e, l) {
                var m = j.width
                  , k = j.height
                  , n = j.mask;
                var g = Quark.createDOM("canvas", {
                    width: m,
                    height: k
                });
                var f = new Quark.CanvasContext({
                    canvas: g
                });
                j.mask = null ;
                j.render(f);
                j.mask = n;
                if (e) {
                    var i = new Image();
					i.crossOrigin = '';
                    i.width = m;
                    i.height = k;
                    i.src = g.toDataURL(l || "image/png");
                    return i
                }
                return g
            }
            ;
            Quark._helpContext = new Quark.CanvasContext({
                canvas: Quark.createDOM("canvas")
            })
        })();
        (function() {
            var a = Quark.Timer = function(b) {
                this.interval = b || 50;
                this.paused = false;
                this.info = {
                    lastTime: 0,
                    currentTime: 0,
                    deltaTime: 0,
                    realDeltaTime: 0
                };
                this._startTime = 0;
                this._intervalID = null ;
                this._listeners = []
            }
            ;
            a.prototype.start = function() {
                if (this._intervalID != null ) {
                    return
                }
                this._startTime = this.info.lastTime = this.info.currentTime = Date.now();
                var b = this;
                var c = function() {
                    b._intervalID = setTimeout(c, b.interval);
                    b._run()
                }
                ;
                c()
            }
            ;
            a.prototype.stop = function() {
                clearTimeout(this._intervalID);
                this._intervalID = null ;
                this._startTime = 0
            }
            ;
            a.prototype.pause = function() {
                this.paused = true
            }
            ;
            a.prototype.resume = function() {
                this.paused = false
            }
            ;
            a.prototype._run = function() {
                if (this.paused) {
                    return
                }
                var g = this.info;
                var f = g.currentTime = Date.now();
                g.deltaTime = g.realDeltaTime = f - g.lastTime;
                for (var d = 0, b = this._listeners.length, e, c; d < b; d++) {
                    e = this._listeners[d];
                    c = e.__runTime || 0;
                    if (c == 0) {
                        e.step(this.info)
                    } else {
                        if (f > c) {
                            e.step(this.info);
                            this._listeners.splice(d, 1);
                            d--;
                            b--
                        }
                    }
                }
                g.lastTime = f
            }
            ;
            a.prototype.delay = function(d, c) {
                var b = {
                    step: d,
                    __runTime: Date.now() + c
                };
                this.addListener(b)
            }
            ;
            a.prototype.addListener = function(b) {
                if (b == null  || typeof (b.step) != "function") {
                    throw "Timer Error: The listener object must implement a step() method!"
                }
                this._listeners.push(b)
            }
            ;
            a.prototype.removeListener = function(c) {
                var b = this._listeners.indexOf(c);
                if (b > -1) {
                    this._listeners.splice(b, 1)
                }
            }
        })();
        (function() {
            var a = Quark.ImageLoader = function(b) {
                a.superClass.constructor.call(this);
                this.loading = false;
                this._index = -1;
                this._loaded = 0;
                this._images = {};
                this._totalSize = 0;
                this._loadHandler = Quark.delegate(this._loadHandler, this);
                this._addSource(b)
            }
            ;
            Quark.inherit(a, Quark.EventDispatcher);
            a.prototype.load = function(b) {
                this._addSource(b);
                if (!this.loading) {
                    this._loadNext()
                }
            }
            ;
            a.prototype._addSource = function(c) {
                if (!c) {
                    return
                }
                c = (c instanceof Array) ? c : [c];
                for (var b = 0; b < c.length; b++) {
                    this._totalSize += c[b].size || 0
                }
                if (!this._source) {
                    this._source = c
                } else {
                    this._source = this._source.concat(c)
                }
            }
            ;
            a.prototype._loadNext = function() {
                this._index++;
                if (this._index >= this._source.length) {
                    this.dispatchEvent({
                        type: "complete",
                        target: this,
                        images: this._images
                    });
                    this._source = [];
                    this.loading = false;
                    this._index = -1;
                    return
                }
                var b = new Image();
				b.crossOrigin = '';
                b.onload = this._loadHandler;
                b.src = this._source[this._index].src;
                this.loading = true
            }
            ;
            a.prototype._loadHandler = function(c) {
                this._loaded++;
                var b = this._source[this._index];
                b.image = c.target;
                var d = b.id || b.src;
                this._images[d] = b;
                this.dispatchEvent({
                    type: "loaded",
                    target: this,
                    image: b
                });
                this._loadNext()
            }
            ;
            a.prototype.getLoaded = function() {
                return this._loaded
            }
            ;
            a.prototype.getTotal = function() {
                return this._source.length
            }
            ;
            a.prototype.getLoadedSize = function() {
                var b = 0;
                for (var d in this._images) {
                    var c = this._images[d];
                    b += c.size || 0
                }
                return b
            }
            ;
            a.prototype.getTotalSize = function() {
                return this._totalSize
            }
        })();
        (function() {
            var b = Quark.Tween = function(g, e, h) {
                this.target = g;
                this.time = 0;
                this.delay = 0;
                this.paused = false;
                this.loop = false;
                this.reverse = false;
                this.interval = 0;
                this.ease = a.Linear.EaseNone;
                this.next = null ;
                this.onStart = null ;
                this.onUpdate = null ;
                this.onComplete = null ;
                this._oldProps = {};
                this._newProps = {};
                this._deltaProps = {};
                this._startTime = 0;
                this._lastTime = 0;
                this._pausedTime = 0;
                this._pausedStartTime = 0;
                this._reverseFlag = 1;
                this._frameTotal = 0;
                this._frameCount = 0;
                for (var f in e) {
                    var c = g[f]
                      , d = e[f];
                    if (c !== undefined) {
                        if (typeof (c) == "number" && typeof (d) == "number") {
                            this._oldProps[f] = c;
                            this._newProps[f] = d;
                            this._deltaProps[f] = d - c
                        }
                    }
                }
                for (var f in h) {
                    this[f] = h[f]
                }
            }
            ;
            b.prototype.setProps = function(c, d) {
                for (var e in c) {
                    this.target[e] = this._oldProps[e] = c[e]
                }
                for (var e in d) {
                    this._newProps[e] = d[e];
                    this._deltaProps[e] = d[e] - this.target[e]
                }
            }
            ;
            b.prototype._init = function() {
                this._startTime = Date.now() + this.delay;
                this._pausedTime = 0;
                if (this.interval > 0) {
                    this._frameTotal = Math.round(this.time / this.interval)
                }
                b.add(this)
            }
            ;
            b.prototype.start = function() {
                this._init();
                this.paused = false
            }
            ;
            b.prototype.stop = function() {
                b.remove(this)
            }
            ;
            b.prototype.pause = function() {
                this.paused = true;
                this._pausedStartTime = Date.now()
            }
            ;
            b.prototype.resume = function() {
                this.paused = false;
                this._pausedTime += Date.now() - this._pausedStartTime
            }
            ;
            b.prototype._update = function() {
                if (this.paused) {
                    return
                }
                var e = Date.now();
                var d = e - this._startTime - this._pausedTime;
                if (d < 0) {
                    return
                }
                if (this._lastTime == 0 && this.onStart != null ) {
                    this.onStart(this)
                }
                this._lastTime = e;
                var h = this._frameTotal > 0 ? (++this._frameCount / this._frameTotal) : (d / this.time);
                if (h > 1) {
                    h = 1
                }
                var i = this.ease(h);
                for (var j in this._oldProps) {
                    this.target[j] = this._oldProps[j] + this._deltaProps[j] * this._reverseFlag * i
                }
                if (this.onUpdate != null ) {
                    this.onUpdate(this, i)
                }
                if (h >= 1) {
                    if (this.reverse) {
                        var f = this._oldProps;
                        this._oldProps = this._newProps;
                        this._newProps = f;
                        this._startTime = Date.now();
                        this._frameCount = 0;
                        this._reverseFlag *= -1;
                        if (!this.loop) {
                            this.reverse = false
                        }
                    } else {
                        if (this.loop) {
                            for (var j in this._oldProps) {
                                this.target[j] = this._oldProps[j]
                            }
                            this._startTime = Date.now();
                            this._frameCount = 0
                        } else {
                            b.remove(this);
                            var g = this.next, c;
                            if (g != null ) {
                                if (g instanceof b) {
                                    c = g;
                                    g = null 
                                } else {
                                    c = g.shift()
                                }
                                if (c != null ) {
                                    c.next = g;
                                    c.start()
                                }
                            }
                        }
                    }
                    if (this.onComplete != null ) {
                        this.onComplete(this)
                    }
                }
            }
            ;
            b._tweens = [];
            b.step = function() {
                var d = this._tweens
                  , c = d.length;
                while (--c >= 0) {
                    d[c]._update()
                }
            }
            ;
            b.add = function(c) {
                if (this._tweens.indexOf(c) == -1) {
                    this._tweens.push(c)
                }
                return this
            }
            ;
            b.remove = function(d) {
                var e = this._tweens
                  , c = e.indexOf(d);
                if (c > -1) {
                    e.splice(c, 1)
                }
                return this
            }
            ;
            b.to = function(d, f, e) {
                var c = new b(d,f,e);
                c._init();
                return c
            }
            ;
            b.from = function(g, e, h) {
                var d = new b(g,e,h);
                var c = d._oldProps;
                d._oldProps = d._newProps;
                d._newProps = c;
                d._reverseFlag = -1;
                for (var f in d._oldProps) {
                    g[f] = d._oldProps[f]
                }
                d._init();
                return d
            }
            ;
            var a = Quark.Easing = {
                Linear: {},
                Quadratic: {},
                Cubic: {},
                Quartic: {},
                Quintic: {},
                Sinusoidal: {},
                Exponential: {},
                Circular: {},
                Elastic: {},
                Back: {},
                Bounce: {}
            };
            a.Linear.EaseNone = function(c) {
                return c
            }
            ;
            a.Quadratic.EaseIn = function(c) {
                return c * c
            }
            ;
            a.Quadratic.EaseOut = function(c) {
                return -c * (c - 2)
            }
            ;
            a.Quadratic.EaseInOut = function(c) {
                if ((c *= 2) < 1) {
                    return 0.5 * c * c
                }
                return -0.5 * (--c * (c - 2) - 1)
            }
            ;
            a.Cubic.EaseIn = function(c) {
                return c * c * c
            }
            ;
            a.Cubic.EaseOut = function(c) {
                return --c * c * c + 1
            }
            ;
            a.Cubic.EaseInOut = function(c) {
                if ((c *= 2) < 1) {
                    return 0.5 * c * c * c
                }
                return 0.5 * ((c -= 2) * c * c + 2)
            }
            ;
            a.Quartic.EaseIn = function(c) {
                return c * c * c * c
            }
            ;
            a.Quartic.EaseOut = function(c) {
                return -(--c * c * c * c - 1)
            }
            ;
            a.Quartic.EaseInOut = function(c) {
                if ((c *= 2) < 1) {
                    return 0.5 * c * c * c * c
                }
                return -0.5 * ((c -= 2) * c * c * c - 2)
            }
            ;
            a.Quintic.EaseIn = function(c) {
                return c * c * c * c * c
            }
            ;
            a.Quintic.EaseOut = function(c) {
                return (c = c - 1) * c * c * c * c + 1
            }
            ;
            a.Quintic.EaseInOut = function(c) {
                if ((c *= 2) < 1) {
                    return 0.5 * c * c * c * c * c
                }
                return 0.5 * ((c -= 2) * c * c * c * c + 2)
            }
            ;
            a.Sinusoidal.EaseIn = function(c) {
                return -Math.cos(c * Math.PI / 2) + 1
            }
            ;
            a.Sinusoidal.EaseOut = function(c) {
                return Math.sin(c * Math.PI / 2)
            }
            ;
            a.Sinusoidal.EaseInOut = function(c) {
                return -0.5 * (Math.cos(Math.PI * c) - 1)
            }
            ;
            a.Exponential.EaseIn = function(c) {
                return c == 0 ? 0 : Math.pow(2, 10 * (c - 1))
            }
            ;
            a.Exponential.EaseOut = function(c) {
                return c == 1 ? 1 : -Math.pow(2, -10 * c) + 1
            }
            ;
            a.Exponential.EaseInOut = function(c) {
                if (c == 0) {
                    return 0
                }
                if (c == 1) {
                    return 1
                }
                if ((c *= 2) < 1) {
                    return 0.5 * Math.pow(2, 10 * (c - 1))
                }
                return 0.5 * (-Math.pow(2, -10 * (c - 1)) + 2)
            }
            ;
            a.Circular.EaseIn = function(c) {
                return -(Math.sqrt(1 - c * c) - 1)
            }
            ;
            a.Circular.EaseOut = function(c) {
                return Math.sqrt(1 - --c * c)
            }
            ;
            a.Circular.EaseInOut = function(c) {
                if ((c /= 0.5) < 1) {
                    return -0.5 * (Math.sqrt(1 - c * c) - 1)
                }
                return 0.5 * (Math.sqrt(1 - (c -= 2) * c) + 1)
            }
            ;
            a.Elastic.EaseIn = function(d) {
                var e, c = 0.1, f = 0.4;
                if (d == 0) {
                    return 0
                } else {
                    if (d == 1) {
                        return 1
                    } else {
                        if (!f) {
                            f = 0.3
                        }
                    }
                }
                if (!c || c < 1) {
                    c = 1;
                    e = f / 4
                } else {
                    e = f / (2 * Math.PI) * Math.asin(1 / c)
                }
                return -(c * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * (2 * Math.PI) / f))
            }
            ;
            a.Elastic.EaseOut = function(d) {
                var e, c = 0.1, f = 0.4;
                if (d == 0) {
                    return 0
                } else {
                    if (d == 1) {
                        return 1
                    } else {
                        if (!f) {
                            f = 0.3
                        }
                    }
                }
                if (!c || c < 1) {
                    c = 1;
                    e = f / 4
                } else {
                    e = f / (2 * Math.PI) * Math.asin(1 / c)
                }
                return ( c * Math.pow(2, -10 * d) * Math.sin((d - e) * (2 * Math.PI) / f) + 1) 
            }
            ;
            a.Elastic.EaseInOut = function(d) {
                var e, c = 0.1, f = 0.4;
                if (d == 0) {
                    return 0
                } else {
                    if (d == 1) {
                        return 1
                    } else {
                        if (!f) {
                            f = 0.3
                        }
                    }
                }
                if (!c || c < 1) {
                    c = 1;
                    e = f / 4
                } else {
                    e = f / (2 * Math.PI) * Math.asin(1 / c)
                }
                if ((d *= 2) < 1) {
                    return -0.5 * (c * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * (2 * Math.PI) / f))
                }
                return c * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * (2 * Math.PI) / f) * 0.5 + 1
            }
            ;
            a.Back.EaseIn = function(c) {
                var d = 1.70158;
                return c * c * ((d + 1) * c - d)
            }
            ;
            a.Back.EaseOut = function(c) {
                var d = 1.70158;
                return (c = c - 1) * c * ((d + 1) * c + d) + 1
            }
            ;
            a.Back.EaseInOut = function(c) {
                var d = 1.70158 * 1.525;
                if ((c *= 2) < 1) {
                    return 0.5 * (c * c * ((d + 1) * c - d))
                }
                return 0.5 * ((c -= 2) * c * ((d + 1) * c + d) + 2)
            }
            ;
            a.Bounce.EaseIn = function(c) {
                return 1 - a.Bounce.EaseOut(1 - c)
            }
            ;
            a.Bounce.EaseOut = function(c) {
                if ((c /= 1) < (1 / 2.75)) {
                    return 7.5625 * c * c
                } else {
                    if (c < (2 / 2.75)) {
                        return 7.5625 * (c -= (1.5 / 2.75)) * c + 0.75
                    } else {
                        if (c < (2.5 / 2.75)) {
                            return 7.5625 * (c -= (2.25 / 2.75)) * c + 0.9375
                        } else {
                            return 7.5625 * (c -= (2.625 / 2.75)) * c + 0.984375
                        }
                    }
                }
            }
            ;
            a.Bounce.EaseInOut = function(c) {
                if (c < 0.5) {
                    return a.Bounce.EaseIn(c * 2) * 0.5
                }
                return a.Bounce.EaseOut(c * 2 - 1) * 0.5 + 0.5
            }
        })();
        (function() {
            var a = Quark.Audio = function(e, c, d, b) {
                a.superClass.constructor.call(this);
                this.src = e;
                this.autoPlay = c && d;
                this.loop = b;
                this._loaded = false;
                this._playing = false;
                this._evtHandler = Quark.delegate(this._evtHandler, this);
                this._element = document.createElement("audio");
                this._element.preload = c;
                this._element.src = e;
                if (c) {
                    this.load()
                }
            }
            ;
            Quark.inherit(a, Quark.EventDispatcher);
            a.prototype.load = function() {
                this._element.addEventListener("progress", this._evtHandler, false);
                this._element.addEventListener("ended", this._evtHandler, false);
                this._element.addEventListener("error", this._evtHandler, false);
                try {
                    this._element.load()
                } catch (b) {
                    trace(b)
                }
            }
            ;
            a.prototype._evtHandler = function(g) {
                if (g.type == "progress") {
                    var c = 0
                      , d = 0
                      , b = g.target.buffered;
                    if (b && b.length > 0) {
                        for (c = b.length - 1; c >= 0; c--) {
                            d = (b.end(c) - b.start(c))
                        }
                    }
                    var f = d / g.target.duration;
                    if (f >= 1) {
                        this._element.removeEventListener("progress", this._evtHandler);
                        this._element.removeEventListener("error", this._evtHandler);
                        this._loaded = true;
                        this.dispatchEvent({
                            type: "loaded",
                            target: this
                        });
                        if (this.autoPlay) {
                            this.play()
                        }
                    }
                } else {
                    if (g.type == "ended") {
                        this.dispatchEvent({
                            type: "ended",
                            target: this
                        });
                        if (this.loop) {
                            this.play()
                        } else {
                            this._playing = false
                        }
                    } else {
                        if (g.type == "error") {
                            trace("Quark.Audio Error: " + g.target.src)
                        }
                    }
                }
            }
            ;
            a.prototype.play = function() {
                if (this._loaded) {
                    this._element.play();
                    this._playing = true
                } else {
                    this.autoPlay = true;
                    this.load()
                }
            }
            ;
            a.prototype.stop = function() {
                if (this._playing) {
                    this._element.pause();
                    this._playing = false
                }
            }
            ;
            a.prototype.loaded = function() {
                return this._loaded
            }
            ;
            a.prototype.playing = function() {
                return this._playing
            }
        })();
        (function() {
            var b = Quark.Drawable = function(c, d) {
                this.rawDrawable = null ;
                this.domDrawable = null ;
                this.set(c, d)
            }
            ;
            b.prototype.get = function(d, c) {
                if (c == null  || c.canvas.getContext != null ) {
                    return this.rawDrawable
                } else {
                    if (this.domDrawable == null ) {
                        this.domDrawable = Quark.createDOMDrawable(d, {
                            image: this.rawDrawable
                        })
                    }
                    return this.domDrawable
                }
            }
            ;
            b.prototype.set = function(c, d) {
                if (a(c)) {
                    this.rawDrawable = c
                }
                if (d === true) {
                    this.domDrawable = c
                } else {
                    if (this.domDrawable) {
                        this.domDrawable.style.backgroundImage = "url(" + this.rawDrawable.src + ")"
                    }
                }
            }
            ;
            function a(c) {
                if (c == null ) {
                    return false
                }
                return (c instanceof HTMLImageElement) || (c instanceof HTMLCanvasElement) || (c instanceof HTMLVideoElement)
            }
        })();
        (function() {
            var a = Quark.DisplayObject = function(b) {
                this.id = Quark.UIDUtil.createUID("DisplayObject");
                this.name = null ;
                this.x = 0;
                this.y = 0;
                this.regX = 0;
                this.regY = 0;
                this.width = 0;
                this.height = 0;
                this.alpha = 1;
                this.scaleX = 1;
                this.scaleY = 1;
                this.rotation = 0;
                this.visible = true;
                this.eventEnabled = true;
                this.transformEnabled = true;
                this.useHandCursor = false;
                this.polyArea = null ;
                this.mask = null ;
                this.drawable = null ;
                this.parent = null ;
                this.context = null ;
                this._depth = 0;
                this._lastState = {};
                this._stateList = ["x", "y", "regX", "regY", "width", "height", "alpha", "scaleX", "scaleY", "rotation", "visible", "_depth"];
                Quark.merge(this, b, true);
                if (b.mixin) {
                    Quark.merge(this, b.mixin, false)
                }
                a.superClass.constructor.call(this, b)
            }
            ;
            Quark.inherit(a, Quark.EventDispatcher);
            a.prototype.setDrawable = function(b) {
                if (this.drawable == null ) {
                    this.drawable = new Quark.Drawable(b)
                } else {
                    if (this.drawable.rawDrawable != b) {
                        this.drawable.set(b)
                    }
                }
            }
            ;
            a.prototype.getDrawable = function(b) {
                return this._cache || this.drawable && this.drawable.get(this, b)
            }
            ;
            a.prototype._update = function(b) {
                this.update(b)
            }
            ;
            a.prototype.update = function(b) {
                return true
            }
            ;
            a.prototype._render = function(c) {
                var b = this.context || c;
                if (!this.visible || this.alpha <= 0) {
                    if (b.hide != null ) {
                        b.hide(this)
                    }
                    this.saveState(["visible", "alpha"]);
                    return
                }
                b.startDraw();
                b.transform(this);
                this.render(b);
                b.endDraw();
                this.saveState()
            }
            ;
            a.prototype.render = function(b) {
                b.draw(this, 0, 0, this.width, this.height, 0, 0, this.width, this.height)
            }
            ;
            a.prototype.saveState = function(e) {
                e = e || this._stateList;
                var d = this._lastState;
                for (var c = 0, b = e.length; c < b; c++) {
                    var f = e[c];
                    d["last" + f] = this[f]
                }
            }
            ;
            a.prototype.getState = function(b) {
                return this._lastState["last" + b]
            }
            ;
            a.prototype.propChanged = function(f) {
                var d = arguments.length > 0 ? arguments : this._stateList;
                for (var c = 0, b = d.length; c < b; c++) {
                    var e = d[c];
                    if (this._lastState["last" + e] != this[e]) {
                        return true
                    }
                }
                return false
            }
            ;
            a.prototype.hitTestPoint = function(b, d, c) {
                return Quark.hitTestPoint(this, b, d, c)
            }
            ;
            a.prototype.hitTestObject = function(b, c) {
                return Quark.hitTestObject(this, b, c)
            }
            ;
            a.prototype.localToGlobal = function(c, d) {
                var b = this.getConcatenatedMatrix();
                return {
                    x: b.tx + c,
                    y: b.ty + d
                }
            }
            ;
            a.prototype.globalToLocal = function(c, d) {
                var b = this.getConcatenatedMatrix().invert();
                return {
                    x: b.tx + c,
                    y: b.ty + d
                }
            }
            ;
            a.prototype.localToTarget = function(b, e, d) {
                var c = this.localToGlobal(b, e);
                return d.globalToLocal(c.x, c.y)
            }
            ;
            a.prototype.getConcatenatedMatrix = function(c) {
                var d = new Quark.Matrix(1,0,0,1,0,0);
                if (c == this) {
                    return d
                }
                for (var g = this; g.parent != null  && g.parent != c; g = g.parent) {
                    var f = 1
                      , b = 0;
                    if (g.rotation % 360 != 0) {
                        var e = g.rotation * Quark.DEG_TO_RAD;
                        f = Math.cos(e);
                        b = Math.sin(e)
                    }
                    if (g.regX != 0) {
                        d.tx -= g.regX
                    }
                    if (g.regY != 0) {
                        d.ty -= g.regY
                    }
                    d.concat(new Quark.Matrix(f * g.scaleX,b * g.scaleX,-b * g.scaleY,f * g.scaleY,g.x,g.y))
                }
                return d
            }
            ;
            a.prototype.getBounds = function() {
                var n = this.width
                  , l = this.height;
                var e = this.getConcatenatedMatrix();
                var d = this.polyArea || [{
                    x: 0,
                    y: 0
                }, {
                    x: n,
                    y: 0
                }, {
                    x: n,
                    y: l
                }, {
                    x: 0,
                    y: l
                }];
                var f = [], m = d.length, o, j, c, g, b;
                o = e.transformPoint(d[0], true, true);
                j = c = o.x;
                g = b = o.y;
                f[0] = o;
                for (var k = 1; k < m; k++) {
                    var o = e.transformPoint(d[k], true, true);
                    if (j > o.x) {
                        j = o.x
                    } else {
                        if (c < o.x) {
                            c = o.x
                        }
                    }
                    if (g > o.y) {
                        g = o.y
                    } else {
                        if (b < o.y) {
                            b = o.y
                        }
                    }
                    f[k] = o
                }
                f.x = j;
                f.y = g;
                f.width = c - j;
                f.height = b - g;
                return f
            }
            ;
            a.prototype.getCurrentWidth = function() {
                return Math.abs(this.width * this.scaleX)
            }
            ;
            a.prototype.getCurrentHeight = function() {
                return Math.abs(this.height * this.scaleY)
            }
            ;
            a.prototype.getStage = function() {
                var b = this;
                while (b.parent) {
                    b = b.parent
                }
                if (b instanceof Quark.Stage) {
                    return b
                }
                return null 
            }
            ;
            Quark.DisplayObject.prototype.cache = function(b, c) {
                return this._cache = Quark.cacheObject(this, b, c)
            }
            ;
            Quark.DisplayObject.prototype.uncache = function() {
                this._cache = null 
            }
            ;
            Quark.DisplayObject.prototype.toImage = function(b) {
                return Quark.cacheObject(this, true, b)
            }
            ;
            a.prototype.toString = function() {
                return Quark.UIDUtil.displayObjectToString(this)
            }
        })();
        (function() {
            var a = Quark.DisplayObjectContainer = function(c) {
                this.eventChildren = true;
                this.autoSize = false;
                this.children = [];
                c = c || {};
                a.superClass.constructor.call(this, c);
                this.id = c.id || Quark.UIDUtil.createUID("DisplayObjectContainer");
                this.setDrawable(c.drawable || c.image || null );
                if (c.children) {
                    for (var b = 0; b < c.children.length; b++) {
                        this.addChild(c.children[b])
                    }
                }
            }
            ;
            Quark.inherit(a, Quark.DisplayObject);
            a.prototype.addChildAt = function(f, b) {
                if (b < 0) {
                    b = 0
                } else {
                    if (b > this.children.length) {
                        b = this.children.length
                    }
                }
                var e = this.getChildIndex(f);
                if (e != -1) {
                    if (e == b) {
                        return this
                    }
                    this.children.splice(e, 1)
                } else {
                    if (f.parent) {
                        f.parent.removeChild(f)
                    }
                }
                this.children.splice(b, 0, f);
                f.parent = this;
                if (this.autoSize) {
                    var d = new Quark.Rectangle(0,0,this.rectWidth || this.width,this.rectHeight || this.height);
                    var c = new Quark.Rectangle(f.x,f.y,f.rectWidth || f.width,f.rectHeight || f.height);
                    d.union(c);
                    this.width = d.width;
                    this.height = d.height
                }
                return this
            }
            ;
            a.prototype.addChild = function(d) {
                var c = this.children.length;
                for (var b = 0; b < arguments.length; b++) {
                    var d = arguments[b];
                    this.addChildAt(d, c + b)
                }
                return this
            }
            ;
            a.prototype.removeChildAt = function(c) {
                if (c < 0 || c >= this.children.length) {
                    return false
                }
                var d = this.children[c];
                if (d != null ) {
                    var b = this.getStage();
                    if (b != null ) {
                        b.context.remove(d)
                    }
                    d.parent = null 
                }
                this.children.splice(c, 1);
                return true
            }
            ;
            a.prototype.removeChild = function(b) {
                return this.removeChildAt(this.children.indexOf(b))
            }
            ;
            a.prototype.removeAllChildren = function() {
                while (this.children.length > 0) {
                    this.removeChildAt(0)
                }
            }
            ;
            a.prototype.getChildAt = function(b) {
                if (b < 0 || b >= this.children.length) {
                    return null 
                }
                return this.children[b]
            }
            ;
            a.prototype.getChildIndex = function(b) {
                return this.children.indexOf(b)
            }
            ;
            a.prototype.setChildIndex = function(d, b) {
                if (d.parent != this) {
                    return
                }
                var c = this.children.indexOf(d);
                if (b == c) {
                    return
                }
                this.children.splice(c, 1);
                this.children.splice(b, 0, d)
            }
            ;
            a.prototype.swapChildren = function(c, b) {
                var e = this.getChildIndex(c)
                  , d = this.getChildIndex(b);
                this.children[e] = b;
                this.children[d] = c
            }
            ;
            a.prototype.swapChildrenAt = function(e, d) {
                var c = this.getChildAt(e)
                  , b = this.getChildAt(d);
                this.children[e] = b;
                this.children[d] = c
            }
            ;
            a.prototype.getChildById = function(e) {
                for (var c = 0, b = this.children.length; c < b; c++) {
                    var d = this.children[c];
                    if (d.id == e) {
                        return d
                    }
                }
                return null 
            }
            ;
            a.prototype.removeChildById = function(d) {
                for (var c = 0, b = this.children.length; c < b; c++) {
                    if (this.children[c].id == d) {
                        return this.removeChildAt(c)
                    }
                }
                return null 
            }
            ;
            a.prototype.sortChildren = function(d) {
                var c = d;
                if (typeof (c) == "string") {
                    var b = c;
                    c = function(f, e) {
                        return e[b] - f[b]
                    }
                }
                this.children.sort(c)
            }
            ;
            a.prototype.contains = function(b) {
                return this.getChildIndex(b) != -1
            }
            ;
            a.prototype.getNumChildren = function() {
                return this.children.length
            }
            ;
            a.prototype._update = function(g) {
                var c = true;
                if (this.update != null ) {
                    c = this.update(g)
                }
                if (c === false) {
                    return
                }
                var f = this.children.slice(0);
                for (var d = 0, b = f.length; d < b; d++) {
                    var e = f[d];
                    e._depth = d + 1;
                    e._update(g)
                }
            }
            ;
            a.prototype.render = function(d) {
                a.superClass.render.call(this, d);
                for (var c = 0, b = this.children.length; c < b; c++) {
                    var e = this.children[c];
                    e._render(d)
                }
            }
            ;
            a.prototype.getObjectUnderPoint = function(c, j, f, d) {
                if (d) {
                    var b = []
                }
                for (var e = this.children.length - 1; e >= 0; e--) {
                    var h = this.children[e];
                    if (h == null  || (!h.eventEnabled && h.children == undefined) || !h.visible || h.alpha <= 0) {
                        continue
                    }
                    if (h.children != undefined && h.eventChildren && h.getNumChildren() > 0) {
                        var g = h.getObjectUnderPoint(c, j, f, d);
                        if (g) {
                            if (d) {
                                if (g.length > 0) {
                                    b = b.concat(g)
                                }
                            } else {
                                return g
                            }
                        } else {
                            if (h.hitTestPoint(c, j, f) >= 0) {
                                if (d) {
                                    b.push(h)
                                } else {
                                    return h
                                }
                            }
                        }
                    } else {
                        if (h.hitTestPoint(c, j, f) >= 0) {
                            if (d) {
                                b.push(h)
                            } else {
                                return h
                            }
                        }
                    }
                }
                if (d) {
                    return b
                }
                return null 
            }
        })();
        (function() {
            var a = Quark.Stage = function(b) {
                this.stageX = 0;
                this.stageY = 0;
                this.paused = false;
                this._eventTarget = null ;
                b = b || {};
                a.superClass.constructor.call(this, b);
                this.id = b.id || Quark.UIDUtil.createUID("Stage");
                if (this.context == null ) {
                    throw "Quark.Stage Error: context is required."
                }
                this.updatePosition()
            }
            ;
            Quark.inherit(a, Quark.DisplayObjectContainer);
            a.prototype.step = function(b) {
                if (this.paused) {
                    return
                }
                this._update(b);
                this._render(this.context)
            }
            ;
            a.prototype._update = function(f) {
                var e = this.children.slice(0);
                for (var c = 0, b = e.length; c < b; c++) {
                    var d = e[c];
                    d._depth = c + 1;
                    d._update(f)
                }
                if (this.update != null ) {
                    this.update(f)
                }
            }
            ;
            a.prototype._render = function(b) {
                if (b.clear != null ) {
                    b.clear(0, 0, this.width, this.height)
                }
                a.superClass._render.call(this, b)
            }
            ;
            a.prototype.dispatchEvent = function(h) {
                var b = h.pageX || h.clientX
                  , j = h.pageY || h.clientY;
                b = (b - this.stageX) / this.scaleX;
                j = (j - this.stageY) / this.scaleY;
                var g = this.getObjectUnderPoint(b, j, true)
                  , f = this._eventTarget;
                h.eventX = b;
                h.eventY = j;
                var d = h.type == "mouseout" && !this.context.canvas.contains(h.relatedTarget);
                if (f != null  && (f != g || d)) {
                    h.lastEventTarget = f;
                    var c = (d || g == null  || h.type == "mousemove") ? "mouseout" : h.type == "touchmove" ? "touchout" : null ;
                    if (c) {
                        f.dispatchEvent({
                            type: c
                        })
                    }
                    this._eventTarget = null 
                }
                if (g != null  && g.eventEnabled && h.type != "mouseout") {
                    h.eventTarget = f = this._eventTarget = g;
                    g.dispatchEvent(h)
                }
                if (!Quark.supportTouch) {
                    var i = (f && f.useHandCursor && f.eventEnabled) ? "pointer" : "";
                    this.context.canvas.style.cursor = i
                }
                if (d || h.type != "mouseout") {
                    a.superClass.dispatchEvent.call(this, h)
                }
            }
            ;
            a.prototype.updatePosition = function() {
                var b = Quark.getElementOffset(this.context.canvas);
                this.stageX = b.left;
                this.stageY = b.top
            }
        })();
        (function() {
            var a = Quark.Bitmap = function(b) {
                this.image = null ;
                this.rectX = 0;
                this.rectY = 0;
                this.rectWidth = 0;
                this.rectHeight = 0;
                b = b || {};
                a.superClass.constructor.call(this, b);
                this.id = b.id || Quark.UIDUtil.createUID("Bitmap");
                this.setRect(b.rect || [0, 0, this.image.width, this.image.height]);
                this.setDrawable(this.image);
                this._stateList.push("rectX", "rectY", "rectWidth", "rectHeight")
            }
            ;
            Quark.inherit(a, Quark.DisplayObject);
            a.prototype.setRect = function(b) {
                this.rectX = b[0];
                this.rectY = b[1];
                this.rectWidth = this.width = b[2];
                this.rectHeight = this.height = b[3]
            }
            ;
            a.prototype.render = function(b) {
                b.draw(this, this.rectX, this.rectY, this.rectWidth, this.rectHeight, 0, 0, this.width, this.height)
            }
        })();
        (function() {
            var a = Quark.MovieClip = function(b) {
                this.interval = 0;
                this.paused = false;
                this.useFrames = false;
                this.currentFrame = 0;
                this._frames = [];
                this._frameLabels = {};
                this._frameDisObj = null ;
                this._displayedCount = 0;
                b = b || {};
                a.superClass.constructor.call(this, b);
                this.id = b.id || Quark.UIDUtil.createUID("MovieClip");
                if (b.frames) {
                    this.addFrame(b.frames)
                }
            }
            ;
            Quark.inherit(a, Quark.Bitmap);
            a.prototype.addFrame = function(c) {
                var d = this._frames.length;
                if (c instanceof Array) {
                    for (var b = 0; b < c.length; b++) {
                        this.setFrame(c[b], d + b)
                    }
                } else {
                    this.setFrame(c, d)
                }
                return this
            }
            ;
            a.prototype.setFrame = function(c, b) {
                if (b == undefined || b > this._frames.length) {
                    b = this._frames.length
                } else {
                    if (b < 0) {
                        b = 0
                    }
                }
                this._frames[b] = c;
                if (c.label) {
                    this._frameLabels[c.label] = c
                }
                if (c.interval == undefined) {
                    c.interval = this.interval
                }
                if (b == 0 && this.currentFrame == 0) {
                    this.setRect(c.rect)
                }
            }
            ;
            a.prototype.getFrame = function(b) {
                if (typeof (b) == "number") {
                    return this._frames[b]
                }
                return this._frameLabels[b]
            }
            ;
            a.prototype.play = function() {
                this.paused = false
            }
            ;
            a.prototype.stop = function() {
                this.paused = true
            }
            ;
            a.prototype.gotoAndStop = function(b) {
                this.currentFrame = this.getFrameIndex(b);
                this.paused = true
            }
            ;
            a.prototype.gotoAndPlay = function(b) {
                this.currentFrame = this.getFrameIndex(b);
                this.paused = false
            }
            ;
            a.prototype.getFrameIndex = function(c) {
                if (typeof (c) == "number") {
                    return c
                }
                var e = this._frameLabels[c]
                  , d = this._frames;
                for (var b = 0; b < d.length; b++) {
                    if (e == d[b]) {
                        return b
                    }
                }
                return -1
            }
            ;
            a.prototype.nextFrame = function(b) {
                var d = this._frames[this.currentFrame];
                if (d.interval > 0) {
                    var c = this._displayedCount + b;
                    this._displayedCount = d.interval > c ? c : 0
                }
                if (d.jump >= 0 || typeof (d.jump) == "string") {
                    if (this._displayedCount == 0 || !d.interval) {
                        return this.currentFrame = this.getFrameIndex(d.jump)
                    }
                }
                if (d.interval > 0 && this._displayedCount > 0) {
                    return this.currentFrame
                } else {
                    if (this.currentFrame >= this._frames.length - 1) {
                        return this.currentFrame = 0
                    } else {
                        return ++this.currentFrame
                    }
                }
            }
            ;
            a.prototype.getNumFrames = function() {
                return this._frames.length
            }
            ;
            a.prototype._update = function(d) {
                var b = this._frames[this.currentFrame];
                if (b.stop) {
                    this.stop();
                    return
                }
                if (!this.paused) {
                    var c = this.useFrames ? 1 : d && d.deltaTime;
                    b = this._frames[this.nextFrame(c)]
                }
                this.setRect(b.rect);
                a.superClass._update.call(this, d)
            }
            ;
            a.prototype.render = function(b) {
                var d = this._frames[this.currentFrame]
                  , c = d.rect;
                b.draw(this, c[0], c[1], c[2], c[3], 0, 0, this.width, this.height)
            }
        })();
        (function() {
            var a = Quark.Button = function(b) {
                this.state = a.UP;
                this.enabled = true;
                b = b || {};
                a.superClass.constructor.call(this, b);
                this.id = b.id || Quark.UIDUtil.createUID("Button");
                this._skin = new Quark.MovieClip({
                    id: "skin",
                    image: b.image
                });
                this.addChild(this._skin);
                this._skin.stop();
                this.eventChildren = false;
                if (b.useHandCursor === undefined) {
                    this.useHandCursor = true
                }
                if (b.up) {
                    this.setUpState(b.up)
                }
                if (b.over) {
                    this.setOverState(b.over)
                }
                if (b.down) {
                    this.setDownState(b.down)
                }
                if (b.disabled) {
                    this.setDisabledState(b.disabled)
                }
            }
            ;
            Quark.inherit(a, Quark.DisplayObjectContainer);
            a.UP = "up";
            a.OVER = "over";
            a.DOWN = "down";
            a.DISABLED = "disabled";
            a.prototype.setUpState = function(b) {
                b.label = a.UP;
                this._skin.setFrame(b, 0);
                this.upState = b;
                return this
            }
            ;
            a.prototype.setOverState = function(b) {
                b.label = a.OVER;
                this._skin.setFrame(b, 1);
                this.overState = b;
                return this
            }
            ;
            a.prototype.setDownState = function(b) {
                b.label = a.DOWN;
                this._skin.setFrame(b, 2);
                this.downState = b;
                return this
            }
            ;
            a.prototype.setDisabledState = function(b) {
                b.label = a.DISABLED;
                this._skin.setFrame(b, 3);
                this.disabledState = b;
                return this
            }
            ;
            a.prototype.setEnabled = function(b) {
                if (this.enabled == b) {
                    return this
                }
                this.eventEnabled = this.enabled = b;
                if (!b) {
                    if (this.disabledState) {
                        this._skin.gotoAndStop(a.DISABLED)
                    } else {
                        this._skin.gotoAndStop(a.UP)
                    }
                } else {
                    if (this._skin.currentFrame == 3) {
                        this._skin.gotoAndStop(a.UP)
                    }
                }
                return this
            }
            ;
            a.prototype.changeState = function(b) {
                if (this.state == b) {
                    return
                }
                this.state = b;
                switch (b) {
                case a.OVER:
                case a.DOWN:
                case a.UP:
                    if (!this.enabled) {
                        this.eventEnabled = this.enabled = true
                    }
                    this._skin.gotoAndStop(b);
                    break;
                case a.DISABLED:
                    this.setEnabled(false);
                    break
                }
                return this
            }
            ;
            a.prototype.dispatchEvent = function(b) {
                if (!this.enabled) {
                    return
                }
                switch (b.type) {
                case "mousemove":
                    if (this.overState) {
                        this.changeState(a.OVER)
                    }
                    break;
                case "mousedown":
                case "touchstart":
                case "touchmove":
                    if (this.downState) {
                        this.changeState(a.DOWN)
                    }
                    break;
                case "mouseup":
                    if (this.overState) {
                        this.changeState(a.OVER)
                    } else {
                        this.changeState(a.UP)
                    }
                    break;
                case "mouseout":
                case "touchout":
                case "touchend":
                    if (this.upState) {
                        this.changeState(a.UP)
                    }
                    break
                }
                a.superClass.dispatchEvent.call(this, b)
            }
            ;
            a.prototype.setDrawable = function(b) {
                a.superClass.setDrawable.call(this, null )
            }
        })();
        (function() {
            var a = Quark.Graphics = function(b) {
                this.lineWidth = 1;
                this.strokeStyle = "0";
                this.lineAlpha = 1;
                this.lineCap = null ;
                this.lineJoin = null ;
                this.miterLimit = 10;
                this.hasStroke = false;
                this.hasFill = false;
                this.fillStyle = "0";
                this.fillAlpha = 1;
                b = b || {};
                a.superClass.constructor.call(this, b);
                this.id = Quark.UIDUtil.createUID("Graphics");
                this._actions = [];
                this._cache = null 
            }
            ;
            Quark.inherit(a, Quark.DisplayObject);
            a.prototype.lineStyle = function(d, f, e, g, b, c) {
                this._addAction(["lineWidth", (this.lineWidth = d || 1)]);
                this._addAction(["strokeStyle", (this.strokeStyle = f || "0")]);
                this._addAction(["lineAlpha", (this.lineAlpha = e || 1)]);
                if (g != undefined) {
                    this._addAction(["lineCap", (this.lineCap = g)])
                }
                if (b != undefined) {
                    this._addAction(["lineJoin", (this.lineJoin = b)])
                }
                if (c != undefined) {
                    this._addAction(["miterLimit", (this.miterLimit = c)])
                }
                this.hasStroke = true;
                return this
            }
            ;
            a.prototype.beginFill = function(c, b) {
                this._addAction(["fillStyle", (this.fillStyle = c)]);
                this._addAction(["fillAlpha", (this.fillAlpha = b || 1)]);
                this.hasFill = true;
                return this
            }
            ;
            a.prototype.endFill = function() {
                if (this.hasStroke) {
                    this._addAction(["stroke"])
                }
                if (this.hasFill) {
                    this._addAction(["fill"])
                }
                return this
            }
            ;
            a.prototype.beginLinearGradientFill = function(d, k, c, j, b, f) {
                var h = a._getContext().createLinearGradient(d, k, c, j);
                for (var e = 0, g = b.length; e < g; e++) {
                    h.addColorStop(f[e], b[e])
                }
                return this._addAction(["fillStyle", (this.fillStyle = h)])
            }
            ;
            a.prototype.beginRadialGradientFill = function(d, m, f, c, l, e, b, h) {
                var k = a._getContext().createRadialGradient(d, m, f, c, l, e);
                for (var g = 0, j = b.length; g < j; g++) {
                    k.addColorStop(h[g], b[g])
                }
                return this._addAction(["fillStyle", (this.fillStyle = k)])
            }
            ;
            a.prototype.beginBitmapFill = function(d, b) {
                var c = a._getContext().createPattern(d, b || "");
                return this._addAction(["fillStyle", (this.fillStyle = c)])
            }
            ;
            a.prototype.beginPath = function() {
                return this._addAction(["beginPath"])
            }
            ;
            a.prototype.closePath = function() {
                return this._addAction(["closePath"])
            }
            ;
            a.prototype.drawRect = function(c, e, d, b) {
                return this._addAction(["rect", c, e, d, b])
            }
            ;
            a.prototype.drawRoundRectComplex = function(c, i, f, b, d, g, e, h) {
                this._addAction(["moveTo", c + d, i]);
                this._addAction(["lineTo", c + f - g, i]);
                this._addAction(["arc", c + f - g, i + g, g, -Math.PI / 2, 0, false]);
                this._addAction(["lineTo", c + f, i + b - e]);
                this._addAction(["arc", c + f - e, i + b - e, e, 0, Math.PI / 2, false]);
                this._addAction(["lineTo", c + h, i + b]);
                this._addAction(["arc", c + h, i + b - h, h, Math.PI / 2, Math.PI, false]);
                this._addAction(["lineTo", c, i + d]);
                this._addAction(["arc", c + d, i + d, d, Math.PI, Math.PI * 3 / 2, false]);
                return this
            }
            ;
            a.prototype.drawRoundRect = function(d, f, e, c, b) {
                return this.drawRoundRectComplex(d, f, e, c, b, b, b, b)
            }
            ;
            a.prototype.drawCircle = function(c, d, b) {
                return this._addAction(["arc", c + b, d + b, b, 0, Math.PI * 2, 0])
            }
            ;
            a.prototype.drawEllipse = function(i, g, c, k) {
                if (c == k) {
                    return this.drawCircle(i, g, c)
                }
                var j = c / 2
                  , f = k / 2
                  , b = 0.5522847498307933
                  , e = b * j
                  , d = b * f;
                i = i + j;
                g = g + f;
                this._addAction(["moveTo", i + j, g]);
                this._addAction(["bezierCurveTo", i + j, g - d, i + e, g - f, i, g - f]);
                this._addAction(["bezierCurveTo", i - e, g - f, i - j, g - d, i - j, g]);
                this._addAction(["bezierCurveTo", i - j, g + d, i - e, g + f, i, g + f]);
                this._addAction(["bezierCurveTo", i + e, g + f, i + j, g + d, i + j, g]);
                return this
            }
            ;
            a.prototype.drawSVGPath = function(h) {
                var f = h.split(/,| (?=[a-zA-Z])/);
                this._addAction(["beginPath"]);
                for (var c = 0, b = f.length; c < b; c++) {
                    var g = f[c]
                      , d = g[0].toUpperCase()
                      , e = g.substring(1).split(/,| /);
                    if (e[0].length == 0) {
                        e.shift()
                    }
                    switch (d) {
                    case "M":
                        this._addAction(["moveTo", e[0], e[1]]);
                        break;
                    case "L":
                        this._addAction(["lineTo", e[0], e[1]]);
                        break;
                    case "C":
                        this._addAction(["bezierCurveTo", e[0], e[1], e[2], e[3], e[4], e[5]]);
                        break;
                    case "Z":
                        this._addAction(["closePath"]);
                        break;
                    default:
                        break
                    }
                }
                return this
            }
            ;
            a.prototype._draw = function(e) {
                e.beginPath();
                for (var d = 0, b = this._actions.length; d < b; d++) {
                    var h = this._actions[d]
                      , g = h[0]
                      , c = h.length > 1 ? h.slice(1) : null ;
                    if (typeof (e[g]) == "function") {
                        e[g].apply(e, c)
                    } else {
                        e[g] = h[1]
                    }
                }
            }
            ;
            a.prototype.getDrawable = function(b) {
                if (this.drawable == null ) {
                    this.setDrawable(this.toImage())
                }
                return this.drawable.get(this, b)
            }
            ;
            a.prototype.cache = function(b) {
                var c = Quark.createDOM("canvas", {
                    width: this.width,
                    height: this.height
                });
                this._draw(c.getContext("2d"));
                this._cache = c;
                if (b) {
                    this._cache = this.toImage()
                }
                return this._cache
            }
            ;
            a.prototype.uncache = function() {
                this._cache = null 
            }
            ;
            a.prototype.toImage = function(d) {
                var c = this._cache || this.cache(true);
                if (c instanceof HTMLImageElement) {
                    return c
                }
                var b = new Image();
				b.crossOrigin = '';
                b.src = c.toDataURL(d || "image/png");
                b.width = this.width;
                b.height = this.height;
                return b
            }
            ;
            a.prototype.clear = function() {
                this._actions.length = 0;
                this._cache = null ;
                this.lineWidth = 1;
                this.strokeStyle = "0";
                this.lineAlpha = 1;
                this.lineCap = null ;
                this.lineJoin = null ;
                this.miterLimit = 10;
                this.hasStroke = false;
                this.fillStyle = "0";
                this.fillAlpha = 1
            }
            ;
            a.prototype._addAction = function(b) {
                this._actions.push(b);
                return this
            }
            ;
            a._getContext = function() {
                var b = Quark.createDOM("canvas").getContext("2d");
                this._getContext = function() {
                    return b
                }
                ;
                return b
            }
        })();
        (function() {
            var a = Quark.Text = function(b) {
                this.text = "";
                this.font = "12px arial";
                this.color = "#000";
                this.textAlign = "start";
                this.outline = false;
                this.maxWidth = 10000;
                this.lineWidth = null ;
                this.lineSpacing = 0;
                this.fontMetrics = null ;
                b = b || {};
                a.superClass.constructor.call(this, b);
                this.id = Quark.UIDUtil.createUID("Text");
                if (this.fontMetrics == null ) {
                    this.fontMetrics = a.getFontMetrics(this.font)
                }
            }
            ;
            Quark.inherit(a, Quark.DisplayObject);
            a.prototype._draw = function(d) {
                if (!this.text || this.text.length == 0) {
                    return
                }
                d.font = this.font;
                d.textAlign = this.textAlign;
                d.textBaseline = "top";
                if (this.outline) {
                    d.strokeStyle = this.color
                } else {
                    d.fillStyle = this.color
                }
                var p = this.text.split(/\r\n|\r|\n|<br(?:[ \/])*>/);
                var n = 0
                  , o = this.fontMetrics.height + this.lineSpacing;
                this.width = this.lineWidth || 0;
                for (var g = 0, k = p.length; g < k; g++) {
                    var q = p[g]
                      , c = d.measureText(q).width;
                    if (this.lineWidth == null  || c < this.lineWidth) {
                        if (c > this.width) {
                            this.width = c
                        }
                        this._drawTextLine(d, q, n);
                        n += o;
                        continue
                    }
                    var m = q.split(/([^\x00-\xff]|\b)/)
                      , l = m[0];
                    for (var e = 1, h = m.length; e < h; e++) {
                        var b = m[e];
                        if (!b || b.length == 0) {
                            continue
                        }
                        var f = d.measureText(l + b).width;
                        if (f > this.lineWidth) {
                            this._drawTextLine(d, l, n);
                            n += o;
                            l = b
                        } else {
                            l += b
                        }
                    }
                    this._drawTextLine(d, l, n);
                    n += o
                }
                this.height = n
            }
            ;
            a.prototype._drawTextLine = function(c, d, e) {
                var b = 0;
                switch (this.textAlign) {
                case "center":
                    b = this.width * 0.5;
                    break;
                case "right":
                case "end":
                    b = this.width;
                    break
                }
                if (this.outline) {
                    c.strokeText(d, b, e, this.maxWidth)
                } else {
                    c.fillText(d, b, e, this.maxWidth)
                }
            }
            ;
            a.prototype.setFont = function(b, c) {
                if (this.font == b) {
                    return
                }
                this.font = b;
                if (!c) {
                    this.fontMetrics = a.getFontMetrics(this.font)
                }
            }
            ;
            a.prototype.render = function(b) {
                if (b instanceof Quark.DOMContext) {
                    var d = this.getDrawable(b)
                      , c = d.style;
                    c.font = this.font;
                    c.textAlign = this.textAlign;
                    c.color = this.color;
                    c.width = this.width + "px";
                    c.height = this.height + "px";
                    c.lineHeight = (this.fontMetrics.height + this.lineSpacing) + "px";
                    d.innerHTML = this.text
                }
                a.superClass.render.call(this, b)
            }
            ;
            a.prototype.getDrawable = function(b) {
                if (this.drawable == null ) {
                    this.setDrawable(Quark.createDOM("div"), true)
                }
                return this.drawable.get(this, b)
            }
            ;
            a.getFontMetrics = function(b) {
                var c = {};
                var e = Quark.createDOM("div", {
                    style: {
                        font: b,
                        position: "absolute"
                    },
                    innerHTML: "M"
                });
                document.body.appendChild(e);
                c.height = e.offsetHeight;
                e.innerHTML = '<div style="display:inline-block; width:1px; height:1px;"></div>';
                var d = e.childNodes[0];
                c.ascent = d.offsetTop + d.offsetHeight;
                c.descent = c.height - c.ascent;
                document.body.removeChild(e);
                return c
            }
        })()
    })();
    (function() {
        (function() {
            if (window.Motion) {
                return
            }
            var a = {
                version: "1.1",
                add: function(c, j) {
                    var l = window;
                    var m = arguments.callee;
                    var n = null ;
                    var g = /^([\w\.]+)(?:\:([\w\.]+))?\s*$/.test(c);
                    var b = RegExp.$1.split(".");
                    var k = RegExp.$2.split(".");
                    var c = b.pop();
                    var e = /[A-Z]/.test(c.substr(0, 1));
                    var f = function() {
                        var i = arguments.callee.prototype.init;
                        if (typeof (i) == "function" && arguments.callee.caller != m) {
                            i && i.apply(this, arguments)
                        }
                    }
                    ;
                    for (var h = 0; h < b.length; h++) {
                        var d = b[h];
                        l = l[d] || (l[d] = {})
                    }
                    if (k[0] != "") {
                        n = window;
                        for (var h = 0; h < k.length; h++) {
                            n = n[k[h]];
                            if (!n) {
                                n = null ;
                                break
                            }
                        }
                    }
                    if (e && typeof (j) == "function") {
                        if (n) {
                            f.prototype = new n();
                            f.prototype.superClass = n
                        }
                        l[c] = f;
                        f.prototype.constructor = f;
                        j.call(l[c].prototype)
                    } else {
                        l[c] = j
                    }
                }
            };
            window.Motion = window.mo = a
        })()
    })();
    (function() {
        Motion.add("mo.Base", function() {
            var b = this;
            var c = this.constructor;
            var a = {};
            b.constructor = function() {
                var d = {}
            }
            ;
            b.on = function(d, e) {
                box = jQuery(this);
                return box.on.apply(box, arguments)
            }
            ;
            b.off = function(d, e) {
                box = jQuery(this);
                return box.off.apply(box, arguments)
            }
            ;
            b.trigger = function(d, f) {
                var e = jQuery(this);
                return e.triggerHandler.apply(e, arguments)
            }
        })
    })();
    (function() {
        Motion.add("mo.ImageEditor:mo.Base", function() {
            var a = this;
            var c = {};
            var b = this.constructor;
            b.config = {
                width: 320,
                height: 320,
                fps: 60
            };
            a.init = function(f) {
                this.config = jQuery.extend(true, {}, b.config, f);
                var d = this;
                var f = d.config;
                d.effect && d.on(d.effect);
                f.event && d.on(f.event);
                if (d.trigger("beforeinit") === false) {
                    return
                }
                var e = Quark.createDOM("canvas", {
                    width: f.width,
                    height: f.height
                });
                e = $(e).appendTo(f.container)[0];
                var i = new Quark.CanvasContext({
                    canvas: e
                });
                d.stage = new Quark.Stage({
                    width: f.width,
                    height: f.height,
                    context: i
                });
                d.canvas = e;
                d.context = i;
                var h = this.em = new Quark.EventManager();
                h.registerStage(d.stage, ["touchstart", "touchmove", "touchend"], true, true);
                d.stage.stageX = f.stageX !== window.undefined ? f.stageX : d.stage.stageX;
                d.stage.stageY = f.stageY !== window.undefined ? f.stageY : d.stage.stageY;
                var j = new Quark.Timer(1000 / f.fps);
                j.addListener(d.stage);
                j.addListener(Quark.Tween);
                j.start();
                var g = new Q.Graphics({
                    width: f.width,
                    height: f.height
                });
                g.beginFill(f.backgroundColor || "#fff").drawRect(0, 0, f.width, f.height).endFill().cache();
                d.stage.addChild(g);
                c.attach.call(d)
            }
            ;
            c.attach = function() {
                var d = this;
                var e = d.config;
                e.trigger.on("change", function(h) {
                    d.trigger("beforechange");
                    var g = this.files[0];
                    if (g.type && !/image\/\w+/.test(g.type)) {
                        alert("请选择图片文件！");
                        return false
                    }
                    var f = new FileReader();
                    f.readAsDataURL(g);
                    f.onload = function(m) {
                        var i = this.result;
                        var l = new Image();
						l.crossOrigin = '';
                        var n;
                        l.onload = function() {
                            d.addImage({
                                img: l,
                                exif: n
                            });
                            d.trigger("change")
                        }
                        ;
                        var k = i.replace(/^.*?,/, "");
                        var o = atob(k);
                        var j = new BinaryFile(o);
                        n = EXIF.readFromBinaryFile(j);
                        l.src = i
                    }
                });
                d.stage.addEventListener("touchstart", function(g) {
                    if (d.imgs) {
                        for (var f = 0; f < d.imgs.length; f++) {
                            d.imgs[f].disable()
                        }
                    }
                    if (g.eventTarget && g.eventTarget.parent.enEditable) {
                        g.eventTarget.parent.enEditable();
                        d.activeTarget = g.eventTarget.parent
                    }
                });
                d.stage.addEventListener("touchmove", function(f) {});
                d.stage.addEventListener("touchend", function(f) {
                    if (d.activeTarget && d.activeTarget.mcScale) {
                        delete d.activeTarget.mcScale.touchDis
                    }
                })
            }
            ;
            a.addImage = function(v) {
                var o = this;
                var y = o.config;
                var A = v.img;
                var z = v.exif;
                var q;
                var t;
                var m;
                var n = A.width;
                var u = A.height;

                var d = 0;
                var x = 0;
                var w = 0;
                var f = 0;
                var e = 0;
                var l = v.pos ? v.pos[0] : 0;
                var k = v.pos ? v.pos[1] : 0;
                var r = 1;
                var g = z ? z.Orientation : 1;
                var s = function(F) {
                    if (/png$/i.test(F.src)) {
                        return 1
                    }
                    var C = F.naturalWidth
                      , K = F.naturalHeight;
                    var B = document.createElement("canvas");
                    B.width = 1;
                    B.height = K;
                    var L = B.getContext("2d");
                    L.drawImage(F, 0, 0);
                    var E = L.getImageData(0, 0, 1, K).data;
                    var I = 0;
                    var G = K;
                    var J = K;
                    while (J > I) {
                        var D = E[(J - 1) * 4 + 3];
                        if (D === 0) {
                            G = J
                        } else {
                            I = J
                        }
                        J = (G + I) >> 1
                    }
                    var H = (J / K);
                    return (H === 0) ? 1 : H
                }
                ;
                var j = s(A);
                if (typeof A == "string") {
                    var h = A;
                    A = new Image();
					A.crossOrigin = '';
                    A.src = h
                }
                switch (g) {
                case 3:
                    d = 180;
                    x = n;
                    w = u * j;
                    break;
                case 6:
                    d = 90;
                    n = A.height;
                    u = A.width;
                    w = n * j;
                    break;
                case 8:
                    d = 270;
                    n = A.height;
                    u = A.width;
                    x = u * j;
                    if (/iphone|ipod|ipad/i.test(navigator.userAgent)) {
                        alert("苹果系统下暂不支持你以这么萌！萌！达！姿势拍照！");
                        return
                    }
                    break
                }
                n *= j;
                u *= j;
                if (n > o.stage.width) {
                    r = o.stage.width / n
                }
                n = n * r;
                u = u * r;
                q = new Quark.DisplayObjectContainer({
                    width: n,
                    height: u
                });
                q.x = l;
                q.y = k;
                A = new Quark.Bitmap({
                    image: A,
                    regX: x,
                    regY: w
                });
                A.rotation = d;
                A.x = f;
                A.y = 0;
                A.scaleX = r * j;
                A.scaleY = r;
                var p = new Q.Graphics({
                    width: n + 10,
                    height: u + 10,
                    x: -5,
                    y: -5
                });
                p.lineStyle(5, "#aaa").beginFill("#fff").drawRect(5, 5, n, u).endFill().cache();
                p.alpha = 0.5;
                p.visible = false;
                q.addChild(p);
                if (y.iconClose) {
                    var i = new Image();
					i.crossOrigin = '';
                    i.onload = function() {
                        var B = y.iconClose.rect;
                        m = new Quark.MovieClip({
                            image: i
                        });
                        m.addFrame([{
                            rect: B
                        }]);
                        m.x = 0;
                        m.y = 0;
                        m.alpha = 0.5;
                        m.visible = false;
                        m.addEventListener("touchstart", function(C) {
                            m.alpha = 0.8
                        });
                        m.addEventListener("touchend", function(C) {
                            o.stage.removeChild(q)
                        });
                        o.stage.addEventListener("touchend", function(C) {
                            m.alpha = 0.5
                        });
                        q.addChild(m)
                    }
                    ;
                    i.src = y.iconClose.url
                }
                if (!v.disable) {
                    A.fnStart = function(K) {
                        var C = K.rawEvent && K.rawEvent.touches[1];
                        if (!C) {
                            A.curW = q.getCurrentWidth();
                            A.curH = q.getCurrentHeight();
                            A.moveabled = true;
                            A.touchStart = [{
                                x: K.eventX,
                                y: K.eventY
                            }];
                            delete A.startScaleDistance
                        } else {
                            var L = K.rawEvent.touches[0];
                            var I = K.rawEvent.touches[1];
                            A.startScaleDistance = Math.sqrt(Math.pow(I.pageX - L.pageX, 2) + Math.pow(I.pageY - L.pageY, 2));
                            A.touchStart = [{
                                x: L.pageX,
                                y: L.pageY
                            }, {
                                x: I.pageX,
                                y: I.pageY
                            }];
                            A.touchStartScale = [{
                                x: L.pageX,
                                y: L.pageY
                            }, {
                                x: I.pageX,
                                y: I.pageY
                            }];
                            A.imgContainerStartRotation = q.rotation;
                            var G = A.touchStart;
                            var J = {
                                x: 0,
                                y: 0
                            };
                            for (var F = 0; F < G.length; F++) {
                                J.x += G[F].x;
                                J.y += G[F].y
                            }
                            J.x /= G.length;
                            J.y /= G.length;
                            J.x -= o.canvas.offsetLeft;
                            J.y -= o.canvas.offsetTop;
                            var H = {
                                x: 0,
                                y: 0
                            };
                            var M = Math.sqrt(Math.pow(q.regX * q.scaleX, 2) + Math.pow(q.regY * q.scaleY, 2));
                            var B = Math.atan2(q.regY, q.regX);
                            B = 180 / Math.PI * B;
                            H.x = q.x - Math.cos(Math.PI * (q.rotation + B) / 180) * M;
                            H.y = q.y - Math.sin(Math.PI * (q.rotation + B) / 180) * M;
                            J.x -= H.x;
                            J.y -= H.y;
                            var M = Math.sqrt(Math.pow(J.x, 2) + Math.pow(J.y, 2));
                            var B = Math.atan2(J.y, J.x);
                            B = 180 / Math.PI * B;
                            var E = M * Math.cos(Math.PI * (B - q.rotation) / 180) / q.scaleX;
                            var D = M * Math.sin(Math.PI * (B - q.rotation) / 180) / q.scaleY;
                            var O = E - q.regX;
                            var N = D - q.regY;
                            q.regX += O;
                            q.regY += N;
                            var M = Math.sqrt(Math.pow(O, 2) + Math.pow(N, 2));
                            var B = Math.atan2(N, O);
                            B = 180 / Math.PI * B;
                            q.x += M * Math.cos(Math.PI * (q.rotation + B) / 180) * q.scaleX;
                            q.y += M * Math.sin(Math.PI * (q.rotation + B) / 180) * q.scaleY
                        }
                    }
                    ;
                    A.fnMove = function(I) {
                        var G = [];
                        var B = A.touchStart.length > 1 ? true : false;
                        if (!B) {
                            G = [{
                                x: I.eventX,
                                y: I.eventY
                            }]
                        } else {
                            G = [{
                                x: I.rawEvent.touches[0].pageX,
                                y: I.rawEvent.touches[0].pageY
                            }, {
                                x: I.rawEvent.touches[1].pageX,
                                y: I.rawEvent.touches[1].pageY
                            }]
                        }
                        if (!v.disScale && B) {
                            var E = Math.sqrt(Math.pow(G[1].x - G[0].x, 2) + Math.pow(G[1].y - G[0].y, 2));
                            if (A.startScaleDistance) {
                                var H = E * q.scaleX / A.startScaleDistance;
                                q.scaleX = H;
                                q.scaleY = H
                            }
                            A.startScaleDistance = E
                        }
                        if (!v.disMove && A.moveabled) {
                            var K = 0
                              , J = 0;
                            for (var F = 0; F < G.length; F++) {
                                K += G[F].x - A.touchStart[F].x;
                                J += G[F].y - A.touchStart[F].y
                            }
                            K = K / G.length;
                            J = J / G.length;
                            q.x += K;
                            q.y += J;
                            A.touchStart = G
                        }
                        if (B) {
                            var M = A.touchStartScale[1].x - A.touchStartScale[0].x;
                            var L = A.touchStartScale[1].y - A.touchStartScale[0].y;
                            var D = Math.atan2(L, M);
                            D = 180 / Math.PI * D;
                            var M = G[1].x - G[0].x;
                            var L = G[1].y - G[0].y;
                            var C = Math.atan2(L, M);
                            C = 180 / Math.PI * C;
                            q.rotation = A.imgContainerStartRotation + C - D
                        }
                    }
                    ;
                    A.fnEnd = function(E) {
                        A.moveabled = false;
                        var D = E.rawEvent && E.rawEvent.touches[1];
                        if (!D) {
                            A.curW = q.getCurrentWidth();
                            A.curH = q.getCurrentHeight();
                            A.moveabled = true;
                            A.touchStart = [{
                                x: E.eventX,
                                y: E.eventY
                            }];
                            delete A.startScaleDistance
                        } else {
                            var C = E.rawEvent.touches[0];
                            var B = E.rawEvent.touches[1];
                            A.startScaleDistance = Math.sqrt(Math.pow(B.pageX - C.pageX, 2) + Math.pow(B.pageY - C.pageY, 2));
                            A.touchStart = [{
                                x: C.pageX,
                                y: C.pageY
                            }, {
                                x: B.pageX,
                                y: B.pageY
                            }]
                        }
                    }
                    ;
                    A.addEventListener("touchstart", function(B) {
                        A.fnStart(B)
                    });
                    A.addEventListener("touchmove", function(B) {
                        A.fnMove(B)
                    });
                    A.addEventListener("touchend", function(B) {
                        A.fnEnd(B)
                    })
                }
                q.enEditable = function() {
                    if (v.disable) {
                        return
                    }
                    p.visible = true;
                    if (m) {
                        m.visible = true
                    }
                }
                ;
                q.disable = function() {
                    p.visible = false;
                    if (m) {
                        m.visible = false
                    }
                }
                ;
                A.update = function() {
                    if (q && q.scaleX) {
                        if (m && m.scaleX) {
                            m.scaleX = 1 / q.scaleX;
                            m.scaleY = 1 / q.scaleY;
                            m.x = 0
                        }
                    }
                }
                ;
                q.addChild(A);
                o.stage.update = function() {}
                ;
                q.update = function() {}
                ;
                o.stage.addChild(q);
                if (o.imgs) {
                    o.imgs.push(q)
                } else {
                    o.imgs = [q]
                }
                return q
            }
            ;
            a.clear = function() {
                if (this.imgs) {
                    for (var d = 0; d < this.imgs.length; d++) {
                        this.stage.removeChild(this.imgs[d])
                    }
                }
            }
            ;
            a.unSelect = function() {
                var e = this.imgs;
                if (e) {
                    for (var d = 0; d < e.length; d++) {
                        e[d].disable()
                    }
                }
            }
            ;
            a.toDataURL = function(e) {
                var d = this;
                d.unSelect();
                window.setTimeout(function() {
                    var f = new JPEGEncoder();
                    var g = f.encode(d.canvas.getContext("2d").getImageData(0, 0, d.stage.width, d.stage.height), 90);
                    e.call(d, g)
                }, 1000 / d.config.fps)
            }
        })
    })()
})();
