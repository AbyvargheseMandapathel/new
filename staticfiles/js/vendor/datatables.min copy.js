/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/jszip-2.5.0/dt-1.10.21/af-2.3.5/b-1.6.2/b-colvis-1.6.2/b-html5-1.6.2/b-print-1.6.2/cr-1.5.2/kt-2.5.2/r-2.2.5/sp-1.1.1/sl-1.3.1
 *
 * Included libraries:
 *  JSZip 2.5.0, DataTables 1.10.21, AutoFill 2.3.5, Buttons 1.6.2, Column visibility 1.6.2, HTML5 export 1.6.2, Print view 1.6.2, ColReorder 1.5.2, KeyTable 2.5.2, Responsive 2.2.5, SearchPanes 1.1.1, Select 1.3.1
 */

/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!(function (a) {
  if ('object' == typeof exports && 'undefined' != typeof module) module.exports = a();
  else if ('function' == typeof define && define.amd) define([], a);
  else {
    var b;
    'undefined' != typeof window ? (b = window) : 'undefined' != typeof global ? (b = global) : 'undefined' != typeof self && (b = self), (b.JSZip = a());
  }
})(function () {
  return (function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = 'function' == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          throw new Error("Cannot find module '" + g + "'");
        }
        var j = (c[g] = {exports: {}});
        b[g][0].call(
          j.exports,
          function (a) {
            var c = b[g][1][a];
            return e(c ? c : a);
          },
          j,
          j.exports,
          a,
          b,
          c,
          d,
        );
      }
      return c[g].exports;
    }
    for (var f = 'function' == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
  })(
    {
      1: [
        function (a, b, c) {
          'use strict';
          var d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          (c.encode = function (a) {
            for (var b, c, e, f, g, h, i, j = '', k = 0; k < a.length; )
              (b = a.charCodeAt(k++)),
                (c = a.charCodeAt(k++)),
                (e = a.charCodeAt(k++)),
                (f = b >> 2),
                (g = ((3 & b) << 4) | (c >> 4)),
                (h = ((15 & c) << 2) | (e >> 6)),
                (i = 63 & e),
                isNaN(c) ? (h = i = 64) : isNaN(e) && (i = 64),
                (j = j + d.charAt(f) + d.charAt(g) + d.charAt(h) + d.charAt(i));
            return j;
          }),
            (c.decode = function (a) {
              var b,
                c,
                e,
                f,
                g,
                h,
                i,
                j = '',
                k = 0;
              for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ''); k < a.length; )
                (f = d.indexOf(a.charAt(k++))),
                  (g = d.indexOf(a.charAt(k++))),
                  (h = d.indexOf(a.charAt(k++))),
                  (i = d.indexOf(a.charAt(k++))),
                  (b = (f << 2) | (g >> 4)),
                  (c = ((15 & g) << 4) | (h >> 2)),
                  (e = ((3 & h) << 6) | i),
                  (j += String.fromCharCode(b)),
                  64 != h && (j += String.fromCharCode(c)),
                  64 != i && (j += String.fromCharCode(e));
              return j;
            });
        },
        {},
      ],
      2: [
        function (a, b) {
          'use strict';
          function c() {
            (this.compressedSize = 0), (this.uncompressedSize = 0), (this.crc32 = 0), (this.compressionMethod = null), (this.compressedContent = null);
          }
          (c.prototype = {
            getContent: function () {
              return null;
            },
            getCompressedContent: function () {
              return null;
            },
          }),
            (b.exports = c);
        },
        {},
      ],
      3: [
        function (a, b, c) {
          'use strict';
          (c.STORE = {
            magic: '\x00\x00',
            compress: function (a) {
              return a;
            },
            uncompress: function (a) {
              return a;
            },
            compressInputType: null,
            uncompressInputType: null,
          }),
            (c.DEFLATE = a('./flate'));
        },
        {'./flate': 8},
      ],
      4: [
        function (a, b) {
          'use strict';
          var c = a('./utils'),
            d = [
              0,
              1996959894,
              3993919788,
              2567524794,
              124634137,
              1886057615,
              3915621685,
              2657392035,
              249268274,
              2044508324,
              3772115230,
              2547177864,
              162941995,
              2125561021,
              3887607047,
              2428444049,
              498536548,
              1789927666,
              4089016648,
              2227061214,
              450548861,
              1843258603,
              4107580753,
              2211677639,
              325883990,
              1684777152,
              4251122042,
              2321926636,
              335633487,
              1661365465,
              4195302755,
              2366115317,
              997073096,
              1281953886,
              3579855332,
              2724688242,
              1006888145,
              1258607687,
              3524101629,
              2768942443,
              901097722,
              1119000684,
              3686517206,
              2898065728,
              853044451,
              1172266101,
              3705015759,
              2882616665,
              651767980,
              1373503546,
              3369554304,
              3218104598,
              565507253,
              1454621731,
              3485111705,
              3099436303,
              671266974,
              1594198024,
              3322730930,
              2970347812,
              795835527,
              1483230225,
              3244367275,
              3060149565,
              1994146192,
              31158534,
              2563907772,
              4023717930,
              1907459465,
              112637215,
              2680153253,
              3904427059,
              2013776290,
              251722036,
              2517215374,
              3775830040,
              2137656763,
              141376813,
              2439277719,
              3865271297,
              1802195444,
              476864866,
              2238001368,
              4066508878,
              1812370925,
              453092731,
              2181625025,
              4111451223,
              1706088902,
              314042704,
              2344532202,
              4240017532,
              1658658271,
              366619977,
              2362670323,
              4224994405,
              1303535960,
              984961486,
              2747007092,
              3569037538,
              1256170817,
              1037604311,
              2765210733,
              3554079995,
              1131014506,
              879679996,
              2909243462,
              3663771856,
              1141124467,
              855842277,
              2852801631,
              3708648649,
              1342533948,
              654459306,
              3188396048,
              3373015174,
              1466479909,
              544179635,
              3110523913,
              3462522015,
              1591671054,
              702138776,
              2966460450,
              3352799412,
              1504918807,
              783551873,
              3082640443,
              3233442989,
              3988292384,
              2596254646,
              62317068,
              1957810842,
              3939845945,
              2647816111,
              81470997,
              1943803523,
              3814918930,
              2489596804,
              225274430,
              2053790376,
              3826175755,
              2466906013,
              167816743,
              2097651377,
              4027552580,
              2265490386,
              503444072,
              1762050814,
              4150417245,
              2154129355,
              426522225,
              1852507879,
              4275313526,
              2312317920,
              282753626,
              1742555852,
              4189708143,
              2394877945,
              397917763,
              1622183637,
              3604390888,
              2714866558,
              953729732,
              1340076626,
              3518719985,
              2797360999,
              1068828381,
              1219638859,
              3624741850,
              2936675148,
              906185462,
              1090812512,
              3747672003,
              2825379669,
              829329135,
              1181335161,
              3412177804,
              3160834842,
              628085408,
              1382605366,
              3423369109,
              3138078467,
              570562233,
              1426400815,
              3317316542,
              2998733608,
              733239954,
              1555261956,
              3268935591,
              3050360625,
              752459403,
              1541320221,
              2607071920,
              3965973030,
              1969922972,
              40735498,
              2617837225,
              3943577151,
              1913087877,
              83908371,
              2512341634,
              3803740692,
              2075208622,
              213261112,
              2463272603,
              3855990285,
              2094854071,
              198958881,
              2262029012,
              4057260610,
              1759359992,
              534414190,
              2176718541,
              4139329115,
              1873836001,
              414664567,
              2282248934,
              4279200368,
              1711684554,
              285281116,
              2405801727,
              4167216745,
              1634467795,
              376229701,
              2685067896,
              3608007406,
              1308918612,
              956543938,
              2808555105,
              3495958263,
              1231636301,
              1047427035,
              2932959818,
              3654703836,
              1088359270,
              936918e3,
              2847714899,
              3736837829,
              1202900863,
              817233897,
              3183342108,
              3401237130,
              1404277552,
              615818150,
              3134207493,
              3453421203,
              1423857449,
              601450431,
              3009837614,
              3294710456,
              1567103746,
              711928724,
              3020668471,
              3272380065,
              1510334235,
              755167117,
            ];
          b.exports = function (a, b) {
            if ('undefined' == typeof a || !a.length) return 0;
            var e = 'string' !== c.getTypeOf(a);
            'undefined' == typeof b && (b = 0);
            var f = 0,
              g = 0,
              h = 0;
            b = -1 ^ b;
            for (var i = 0, j = a.length; j > i; i++) (h = e ? a[i] : a.charCodeAt(i)), (g = 255 & (b ^ h)), (f = d[g]), (b = (b >>> 8) ^ f);
            return -1 ^ b;
          };
        },
        {'./utils': 21},
      ],
      5: [
        function (a, b) {
          'use strict';
          function c() {
            (this.data = null), (this.length = 0), (this.index = 0);
          }
          var d = a('./utils');
          (c.prototype = {
            checkOffset: function (a) {
              this.checkIndex(this.index + a);
            },
            checkIndex: function (a) {
              if (this.length < a || 0 > a)
                throw new Error('End of data reached (data length = ' + this.length + ', asked index = ' + a + '). Corrupted zip ?');
            },
            setIndex: function (a) {
              this.checkIndex(a), (this.index = a);
            },
            skip: function (a) {
              this.setIndex(this.index + a);
            },
            byteAt: function () {},
            readInt: function (a) {
              var b,
                c = 0;
              for (this.checkOffset(a), b = this.index + a - 1; b >= this.index; b--) c = (c << 8) + this.byteAt(b);
              return (this.index += a), c;
            },
            readString: function (a) {
              return d.transformTo('string', this.readData(a));
            },
            readData: function () {},
            lastIndexOfSignature: function () {},
            readDate: function () {
              var a = this.readInt(4);
              return new Date(((a >> 25) & 127) + 1980, ((a >> 21) & 15) - 1, (a >> 16) & 31, (a >> 11) & 31, (a >> 5) & 63, (31 & a) << 1);
            },
          }),
            (b.exports = c);
        },
        {'./utils': 21},
      ],
      6: [
        function (a, b, c) {
          'use strict';
          (c.base64 = !1),
            (c.binary = !1),
            (c.dir = !1),
            (c.createFolders = !1),
            (c.date = null),
            (c.compression = null),
            (c.compressionOptions = null),
            (c.comment = null),
            (c.unixPermissions = null),
            (c.dosPermissions = null);
        },
        {},
      ],
      7: [
        function (a, b, c) {
          'use strict';
          var d = a('./utils');
          (c.string2binary = function (a) {
            return d.string2binary(a);
          }),
            (c.string2Uint8Array = function (a) {
              return d.transformTo('uint8array', a);
            }),
            (c.uint8Array2String = function (a) {
              return d.transformTo('string', a);
            }),
            (c.string2Blob = function (a) {
              var b = d.transformTo('arraybuffer', a);
              return d.arrayBuffer2Blob(b);
            }),
            (c.arrayBuffer2Blob = function (a) {
              return d.arrayBuffer2Blob(a);
            }),
            (c.transformTo = function (a, b) {
              return d.transformTo(a, b);
            }),
            (c.getTypeOf = function (a) {
              return d.getTypeOf(a);
            }),
            (c.checkSupport = function (a) {
              return d.checkSupport(a);
            }),
            (c.MAX_VALUE_16BITS = d.MAX_VALUE_16BITS),
            (c.MAX_VALUE_32BITS = d.MAX_VALUE_32BITS),
            (c.pretty = function (a) {
              return d.pretty(a);
            }),
            (c.findCompression = function (a) {
              return d.findCompression(a);
            }),
            (c.isRegExp = function (a) {
              return d.isRegExp(a);
            });
        },
        {'./utils': 21},
      ],
      8: [
        function (a, b, c) {
          'use strict';
          var d = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Uint32Array,
            e = a('pako');
          (c.uncompressInputType = d ? 'uint8array' : 'array'),
            (c.compressInputType = d ? 'uint8array' : 'array'),
            (c.magic = '\b\x00'),
            (c.compress = function (a, b) {
              return e.deflateRaw(a, {level: b.level || -1});
            }),
            (c.uncompress = function (a) {
              return e.inflateRaw(a);
            });
        },
        {pako: 24},
      ],
      9: [
        function (a, b) {
          'use strict';
          function c(a, b) {
            return this instanceof c
              ? ((this.files = {}),
                (this.comment = null),
                (this.root = ''),
                a && this.load(a, b),
                void (this.clone = function () {
                  var a = new c();
                  for (var b in this) 'function' != typeof this[b] && (a[b] = this[b]);
                  return a;
                }))
              : new c(a, b);
          }
          var d = a('./base64');
          (c.prototype = a('./object')),
            (c.prototype.load = a('./load')),
            (c.support = a('./support')),
            (c.defaults = a('./defaults')),
            (c.utils = a('./deprecatedPublicUtils')),
            (c.base64 = {
              encode: function (a) {
                return d.encode(a);
              },
              decode: function (a) {
                return d.decode(a);
              },
            }),
            (c.compressions = a('./compressions')),
            (b.exports = c);
        },
        {'./base64': 1, './compressions': 3, './defaults': 6, './deprecatedPublicUtils': 7, './load': 10, './object': 13, './support': 17},
      ],
      10: [
        function (a, b) {
          'use strict';
          var c = a('./base64'),
            d = a('./zipEntries');
          b.exports = function (a, b) {
            var e, f, g, h;
            for (b = b || {}, b.base64 && (a = c.decode(a)), f = new d(a, b), e = f.files, g = 0; g < e.length; g++)
              (h = e[g]),
                this.file(h.fileName, h.decompressed, {
                  binary: !0,
                  optimizedBinaryString: !0,
                  date: h.date,
                  dir: h.dir,
                  comment: h.fileComment.length ? h.fileComment : null,
                  unixPermissions: h.unixPermissions,
                  dosPermissions: h.dosPermissions,
                  createFolders: b.createFolders,
                });
            return f.zipComment.length && (this.comment = f.zipComment), this;
          };
        },
        {'./base64': 1, './zipEntries': 22},
      ],
      11: [
        function (a, b) {
          (function (a) {
            'use strict';
            (b.exports = function (b, c) {
              return new a(b, c);
            }),
              (b.exports.test = function (b) {
                return a.isBuffer(b);
              });
          }.call(this, 'undefined' != typeof Buffer ? Buffer : void 0));
        },
        {},
      ],
      12: [
        function (a, b) {
          'use strict';
          function c(a) {
            (this.data = a), (this.length = this.data.length), (this.index = 0);
          }
          var d = a('./uint8ArrayReader');
          (c.prototype = new d()),
            (c.prototype.readData = function (a) {
              this.checkOffset(a);
              var b = this.data.slice(this.index, this.index + a);
              return (this.index += a), b;
            }),
            (b.exports = c);
        },
        {'./uint8ArrayReader': 18},
      ],
      13: [
        function (a, b) {
          'use strict';
          var c = a('./support'),
            d = a('./utils'),
            e = a('./crc32'),
            f = a('./signature'),
            g = a('./defaults'),
            h = a('./base64'),
            i = a('./compressions'),
            j = a('./compressedObject'),
            k = a('./nodeBuffer'),
            l = a('./utf8'),
            m = a('./stringWriter'),
            n = a('./uint8ArrayWriter'),
            o = function (a) {
              if (
                a._data instanceof j &&
                ((a._data = a._data.getContent()), (a.options.binary = !0), (a.options.base64 = !1), 'uint8array' === d.getTypeOf(a._data))
              ) {
                var b = a._data;
                (a._data = new Uint8Array(b.length)), 0 !== b.length && a._data.set(b, 0);
              }
              return a._data;
            },
            p = function (a) {
              var b = o(a),
                e = d.getTypeOf(b);
              return 'string' === e ? (!a.options.binary && c.nodebuffer ? k(b, 'utf-8') : a.asBinary()) : b;
            },
            q = function (a) {
              var b = o(this);
              return null === b || 'undefined' == typeof b
                ? ''
                : (this.options.base64 && (b = h.decode(b)),
                  (b = a && this.options.binary ? D.utf8decode(b) : d.transformTo('string', b)),
                  a || this.options.binary || (b = d.transformTo('string', D.utf8encode(b))),
                  b);
            },
            r = function (a, b, c) {
              (this.name = a),
                (this.dir = c.dir),
                (this.date = c.date),
                (this.comment = c.comment),
                (this.unixPermissions = c.unixPermissions),
                (this.dosPermissions = c.dosPermissions),
                (this._data = b),
                (this.options = c),
                (this._initialMetadata = {dir: c.dir, date: c.date});
            };
          r.prototype = {
            asText: function () {
              return q.call(this, !0);
            },
            asBinary: function () {
              return q.call(this, !1);
            },
            asNodeBuffer: function () {
              var a = p(this);
              return d.transformTo('nodebuffer', a);
            },
            asUint8Array: function () {
              var a = p(this);
              return d.transformTo('uint8array', a);
            },
            asArrayBuffer: function () {
              return this.asUint8Array().buffer;
            },
          };
          var s = function (a, b) {
              var c,
                d = '';
              for (c = 0; b > c; c++) (d += String.fromCharCode(255 & a)), (a >>>= 8);
              return d;
            },
            t = function () {
              var a,
                b,
                c = {};
              for (a = 0; a < arguments.length; a++)
                for (b in arguments[a]) arguments[a].hasOwnProperty(b) && 'undefined' == typeof c[b] && (c[b] = arguments[a][b]);
              return c;
            },
            u = function (a) {
              return (
                (a = a || {}),
                a.base64 !== !0 || (null !== a.binary && void 0 !== a.binary) || (a.binary = !0),
                (a = t(a, g)),
                (a.date = a.date || new Date()),
                null !== a.compression && (a.compression = a.compression.toUpperCase()),
                a
              );
            },
            v = function (a, b, c) {
              var e,
                f = d.getTypeOf(b);
              if (
                ((c = u(c)),
                'string' == typeof c.unixPermissions && (c.unixPermissions = parseInt(c.unixPermissions, 8)),
                c.unixPermissions && 16384 & c.unixPermissions && (c.dir = !0),
                c.dosPermissions && 16 & c.dosPermissions && (c.dir = !0),
                c.dir && (a = x(a)),
                c.createFolders && (e = w(a)) && y.call(this, e, !0),
                c.dir || null === b || 'undefined' == typeof b)
              )
                (c.base64 = !1), (c.binary = !1), (b = null), (f = null);
              else if ('string' === f) c.binary && !c.base64 && c.optimizedBinaryString !== !0 && (b = d.string2binary(b));
              else {
                if (((c.base64 = !1), (c.binary = !0), !(f || b instanceof j))) throw new Error("The data of '" + a + "' is in an unsupported format !");
                'arraybuffer' === f && (b = d.transformTo('uint8array', b));
              }
              var g = new r(a, b, c);
              return (this.files[a] = g), g;
            },
            w = function (a) {
              '/' == a.slice(-1) && (a = a.substring(0, a.length - 1));
              var b = a.lastIndexOf('/');
              return b > 0 ? a.substring(0, b) : '';
            },
            x = function (a) {
              return '/' != a.slice(-1) && (a += '/'), a;
            },
            y = function (a, b) {
              return (b = 'undefined' != typeof b ? b : !1), (a = x(a)), this.files[a] || v.call(this, a, null, {dir: !0, createFolders: b}), this.files[a];
            },
            z = function (a, b, c) {
              var f,
                g = new j();
              return (
                a._data instanceof j
                  ? ((g.uncompressedSize = a._data.uncompressedSize),
                    (g.crc32 = a._data.crc32),
                    0 === g.uncompressedSize || a.dir
                      ? ((b = i.STORE), (g.compressedContent = ''), (g.crc32 = 0))
                      : a._data.compressionMethod === b.magic
                      ? (g.compressedContent = a._data.getCompressedContent())
                      : ((f = a._data.getContent()), (g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c))))
                  : ((f = p(a)),
                    (!f || 0 === f.length || a.dir) && ((b = i.STORE), (f = '')),
                    (g.uncompressedSize = f.length),
                    (g.crc32 = e(f)),
                    (g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c))),
                (g.compressedSize = g.compressedContent.length),
                (g.compressionMethod = b.magic),
                g
              );
            },
            A = function (a, b) {
              var c = a;
              return a || (c = b ? 16893 : 33204), (65535 & c) << 16;
            },
            B = function (a) {
              return 63 & (a || 0);
            },
            C = function (a, b, c, g, h) {
              var i,
                j,
                k,
                m,
                n = (c.compressedContent, d.transformTo('string', l.utf8encode(b.name))),
                o = b.comment || '',
                p = d.transformTo('string', l.utf8encode(o)),
                q = n.length !== b.name.length,
                r = p.length !== o.length,
                t = b.options,
                u = '',
                v = '',
                w = '';
              (k = b._initialMetadata.dir !== b.dir ? b.dir : t.dir), (m = b._initialMetadata.date !== b.date ? b.date : t.date);
              var x = 0,
                y = 0;
              k && (x |= 16),
                'UNIX' === h ? ((y = 798), (x |= A(b.unixPermissions, k))) : ((y = 20), (x |= B(b.dosPermissions, k))),
                (i = m.getHours()),
                (i <<= 6),
                (i |= m.getMinutes()),
                (i <<= 5),
                (i |= m.getSeconds() / 2),
                (j = m.getFullYear() - 1980),
                (j <<= 4),
                (j |= m.getMonth() + 1),
                (j <<= 5),
                (j |= m.getDate()),
                q && ((v = s(1, 1) + s(e(n), 4) + n), (u += 'up' + s(v.length, 2) + v)),
                r && ((w = s(1, 1) + s(this.crc32(p), 4) + p), (u += 'uc' + s(w.length, 2) + w));
              var z = '';
              (z += '\n\x00'),
                (z += q || r ? '\x00\b' : '\x00\x00'),
                (z += c.compressionMethod),
                (z += s(i, 2)),
                (z += s(j, 2)),
                (z += s(c.crc32, 4)),
                (z += s(c.compressedSize, 4)),
                (z += s(c.uncompressedSize, 4)),
                (z += s(n.length, 2)),
                (z += s(u.length, 2));
              var C = f.LOCAL_FILE_HEADER + z + n + u,
                D = f.CENTRAL_FILE_HEADER + s(y, 2) + z + s(p.length, 2) + '\x00\x00\x00\x00' + s(x, 4) + s(g, 4) + n + u + p;
              return {fileRecord: C, dirRecord: D, compressedObject: c};
            },
            D = {
              load: function () {
                throw new Error('Load method is not defined. Is the file jszip-load.js included ?');
              },
              filter: function (a) {
                var b,
                  c,
                  d,
                  e,
                  f = [];
                for (b in this.files)
                  this.files.hasOwnProperty(b) &&
                    ((d = this.files[b]),
                    (e = new r(d.name, d._data, t(d.options))),
                    (c = b.slice(this.root.length, b.length)),
                    b.slice(0, this.root.length) === this.root && a(c, e) && f.push(e));
                return f;
              },
              file: function (a, b, c) {
                if (1 === arguments.length) {
                  if (d.isRegExp(a)) {
                    var e = a;
                    return this.filter(function (a, b) {
                      return !b.dir && e.test(a);
                    });
                  }
                  return (
                    this.filter(function (b, c) {
                      return !c.dir && b === a;
                    })[0] || null
                  );
                }
                return (a = this.root + a), v.call(this, a, b, c), this;
              },
              folder: function (a) {
                if (!a) return this;
                if (d.isRegExp(a))
                  return this.filter(function (b, c) {
                    return c.dir && a.test(b);
                  });
                var b = this.root + a,
                  c = y.call(this, b),
                  e = this.clone();
                return (e.root = c.name), e;
              },
              remove: function (a) {
                a = this.root + a;
                var b = this.files[a];
                if ((b || ('/' != a.slice(-1) && (a += '/'), (b = this.files[a])), b && !b.dir)) delete this.files[a];
                else
                  for (
                    var c = this.filter(function (b, c) {
                        return c.name.slice(0, a.length) === a;
                      }),
                      d = 0;
                    d < c.length;
                    d++
                  )
                    delete this.files[c[d].name];
                return this;
              },
              generate: function (a) {
                (a = t(a || {}, {
                  base64: !0,
                  compression: 'STORE',
                  compressionOptions: null,
                  type: 'base64',
                  platform: 'DOS',
                  comment: null,
                  mimeType: 'application/zip',
                })),
                  d.checkSupport(a.type),
                  ('darwin' === a.platform || 'freebsd' === a.platform || 'linux' === a.platform || 'sunos' === a.platform) && (a.platform = 'UNIX'),
                  'win32' === a.platform && (a.platform = 'DOS');
                var b,
                  c,
                  e = [],
                  g = 0,
                  j = 0,
                  k = d.transformTo('string', this.utf8encode(a.comment || this.comment || ''));
                for (var l in this.files)
                  if (this.files.hasOwnProperty(l)) {
                    var o = this.files[l],
                      p = o.options.compression || a.compression.toUpperCase(),
                      q = i[p];
                    if (!q) throw new Error(p + ' is not a valid compression method !');
                    var r = o.options.compressionOptions || a.compressionOptions || {},
                      u = z.call(this, o, q, r),
                      v = C.call(this, l, o, u, g, a.platform);
                    (g += v.fileRecord.length + u.compressedSize), (j += v.dirRecord.length), e.push(v);
                  }
                var w = '';
                w = f.CENTRAL_DIRECTORY_END + '\x00\x00\x00\x00' + s(e.length, 2) + s(e.length, 2) + s(j, 4) + s(g, 4) + s(k.length, 2) + k;
                var x = a.type.toLowerCase();
                for (
                  b = 'uint8array' === x || 'arraybuffer' === x || 'blob' === x || 'nodebuffer' === x ? new n(g + j + w.length) : new m(g + j + w.length),
                    c = 0;
                  c < e.length;
                  c++
                )
                  b.append(e[c].fileRecord), b.append(e[c].compressedObject.compressedContent);
                for (c = 0; c < e.length; c++) b.append(e[c].dirRecord);
                b.append(w);
                var y = b.finalize();
                switch (a.type.toLowerCase()) {
                  case 'uint8array':
                  case 'arraybuffer':
                  case 'nodebuffer':
                    return d.transformTo(a.type.toLowerCase(), y);
                  case 'blob':
                    return d.arrayBuffer2Blob(d.transformTo('arraybuffer', y), a.mimeType);
                  case 'base64':
                    return a.base64 ? h.encode(y) : y;
                  default:
                    return y;
                }
              },
              crc32: function (a, b) {
                return e(a, b);
              },
              utf8encode: function (a) {
                return d.transformTo('string', l.utf8encode(a));
              },
              utf8decode: function (a) {
                return l.utf8decode(a);
              },
            };
          b.exports = D;
        },
        {
          './base64': 1,
          './compressedObject': 2,
          './compressions': 3,
          './crc32': 4,
          './defaults': 6,
          './nodeBuffer': 11,
          './signature': 14,
          './stringWriter': 16,
          './support': 17,
          './uint8ArrayWriter': 19,
          './utf8': 20,
          './utils': 21,
        },
      ],
      14: [
        function (a, b, c) {
          'use strict';
          (c.LOCAL_FILE_HEADER = 'PK'),
            (c.CENTRAL_FILE_HEADER = 'PK'),
            (c.CENTRAL_DIRECTORY_END = 'PK'),
            (c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = 'PK'),
            (c.ZIP64_CENTRAL_DIRECTORY_END = 'PK'),
            (c.DATA_DESCRIPTOR = 'PK\b');
        },
        {},
      ],
      15: [
        function (a, b) {
          'use strict';
          function c(a, b) {
            (this.data = a), b || (this.data = e.string2binary(this.data)), (this.length = this.data.length), (this.index = 0);
          }
          var d = a('./dataReader'),
            e = a('./utils');
          (c.prototype = new d()),
            (c.prototype.byteAt = function (a) {
              return this.data.charCodeAt(a);
            }),
            (c.prototype.lastIndexOfSignature = function (a) {
              return this.data.lastIndexOf(a);
            }),
            (c.prototype.readData = function (a) {
              this.checkOffset(a);
              var b = this.data.slice(this.index, this.index + a);
              return (this.index += a), b;
            }),
            (b.exports = c);
        },
        {'./dataReader': 5, './utils': 21},
      ],
      16: [
        function (a, b) {
          'use strict';
          var c = a('./utils'),
            d = function () {
              this.data = [];
            };
          (d.prototype = {
            append: function (a) {
              (a = c.transformTo('string', a)), this.data.push(a);
            },
            finalize: function () {
              return this.data.join('');
            },
          }),
            (b.exports = d);
        },
        {'./utils': 21},
      ],
      17: [
        function (a, b, c) {
          (function (a) {
            'use strict';
            if (
              ((c.base64 = !0),
              (c.array = !0),
              (c.string = !0),
              (c.arraybuffer = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof Uint8Array),
              (c.nodebuffer = 'undefined' != typeof a),
              (c.uint8array = 'undefined' != typeof Uint8Array),
              'undefined' == typeof ArrayBuffer)
            )
              c.blob = !1;
            else {
              var b = new ArrayBuffer(0);
              try {
                c.blob = 0 === new Blob([b], {type: 'application/zip'}).size;
              } catch (d) {
                try {
                  var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                    f = new e();
                  f.append(b), (c.blob = 0 === f.getBlob('application/zip').size);
                } catch (d) {
                  c.blob = !1;
                }
              }
            }
          }.call(this, 'undefined' != typeof Buffer ? Buffer : void 0));
        },
        {},
      ],
      18: [
        function (a, b) {
          'use strict';
          function c(a) {
            a && ((this.data = a), (this.length = this.data.length), (this.index = 0));
          }
          var d = a('./dataReader');
          (c.prototype = new d()),
            (c.prototype.byteAt = function (a) {
              return this.data[a];
            }),
            (c.prototype.lastIndexOfSignature = function (a) {
              for (var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = this.length - 4; f >= 0; --f)
                if (this.data[f] === b && this.data[f + 1] === c && this.data[f + 2] === d && this.data[f + 3] === e) return f;
              return -1;
            }),
            (c.prototype.readData = function (a) {
              if ((this.checkOffset(a), 0 === a)) return new Uint8Array(0);
              var b = this.data.subarray(this.index, this.index + a);
              return (this.index += a), b;
            }),
            (b.exports = c);
        },
        {'./dataReader': 5},
      ],
      19: [
        function (a, b) {
          'use strict';
          var c = a('./utils'),
            d = function (a) {
              (this.data = new Uint8Array(a)), (this.index = 0);
            };
          (d.prototype = {
            append: function (a) {
              0 !== a.length && ((a = c.transformTo('uint8array', a)), this.data.set(a, this.index), (this.index += a.length));
            },
            finalize: function () {
              return this.data;
            },
          }),
            (b.exports = d);
        },
        {'./utils': 21},
      ],
      20: [
        function (a, b, c) {
          'use strict';
          for (var d = a('./utils'), e = a('./support'), f = a('./nodeBuffer'), g = new Array(256), h = 0; 256 > h; h++)
            g[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
          g[254] = g[254] = 1;
          var i = function (a) {
              var b,
                c,
                d,
                f,
                g,
                h = a.length,
                i = 0;
              for (f = 0; h > f; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)), 56320 === (64512 & d) && ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  (i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4);
              for (b = e.uint8array ? new Uint8Array(i) : new Array(i), g = 0, f = 0; i > g; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)), 56320 === (64512 & d) && ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  128 > c
                    ? (b[g++] = c)
                    : 2048 > c
                    ? ((b[g++] = 192 | (c >>> 6)), (b[g++] = 128 | (63 & c)))
                    : 65536 > c
                    ? ((b[g++] = 224 | (c >>> 12)), (b[g++] = 128 | ((c >>> 6) & 63)), (b[g++] = 128 | (63 & c)))
                    : ((b[g++] = 240 | (c >>> 18)), (b[g++] = 128 | ((c >>> 12) & 63)), (b[g++] = 128 | ((c >>> 6) & 63)), (b[g++] = 128 | (63 & c)));
              return b;
            },
            j = function (a, b) {
              var c;
              for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]); ) c--;
              return 0 > c ? b : 0 === c ? b : c + g[a[c]] > b ? c : b;
            },
            k = function (a) {
              var b,
                c,
                e,
                f,
                h = a.length,
                i = new Array(2 * h);
              for (c = 0, b = 0; h > b; )
                if (((e = a[b++]), 128 > e)) i[c++] = e;
                else if (((f = g[e]), f > 4)) (i[c++] = 65533), (b += f - 1);
                else {
                  for (e &= 2 === f ? 31 : 3 === f ? 15 : 7; f > 1 && h > b; ) (e = (e << 6) | (63 & a[b++])), f--;
                  f > 1 ? (i[c++] = 65533) : 65536 > e ? (i[c++] = e) : ((e -= 65536), (i[c++] = 55296 | ((e >> 10) & 1023)), (i[c++] = 56320 | (1023 & e)));
                }
              return i.length !== c && (i.subarray ? (i = i.subarray(0, c)) : (i.length = c)), d.applyFromCharCode(i);
            };
          (c.utf8encode = function (a) {
            return e.nodebuffer ? f(a, 'utf-8') : i(a);
          }),
            (c.utf8decode = function (a) {
              if (e.nodebuffer) return d.transformTo('nodebuffer', a).toString('utf-8');
              a = d.transformTo(e.uint8array ? 'uint8array' : 'array', a);
              for (var b = [], c = 0, f = a.length, g = 65536; f > c; ) {
                var h = j(a, Math.min(c + g, f));
                b.push(e.uint8array ? k(a.subarray(c, h)) : k(a.slice(c, h))), (c = h);
              }
              return b.join('');
            });
        },
        {'./nodeBuffer': 11, './support': 17, './utils': 21},
      ],
      21: [
        function (a, b, c) {
          'use strict';
          function d(a) {
            return a;
          }
          function e(a, b) {
            for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
            return b;
          }
          function f(a) {
            var b = 65536,
              d = [],
              e = a.length,
              f = c.getTypeOf(a),
              g = 0,
              h = !0;
            try {
              switch (f) {
                case 'uint8array':
                  String.fromCharCode.apply(null, new Uint8Array(0));
                  break;
                case 'nodebuffer':
                  String.fromCharCode.apply(null, j(0));
              }
            } catch (i) {
              h = !1;
            }
            if (!h) {
              for (var k = '', l = 0; l < a.length; l++) k += String.fromCharCode(a[l]);
              return k;
            }
            for (; e > g && b > 1; )
              try {
                d.push(
                  'array' === f || 'nodebuffer' === f
                    ? String.fromCharCode.apply(null, a.slice(g, Math.min(g + b, e)))
                    : String.fromCharCode.apply(null, a.subarray(g, Math.min(g + b, e))),
                ),
                  (g += b);
              } catch (i) {
                b = Math.floor(b / 2);
              }
            return d.join('');
          }
          function g(a, b) {
            for (var c = 0; c < a.length; c++) b[c] = a[c];
            return b;
          }
          var h = a('./support'),
            i = a('./compressions'),
            j = a('./nodeBuffer');
          (c.string2binary = function (a) {
            for (var b = '', c = 0; c < a.length; c++) b += String.fromCharCode(255 & a.charCodeAt(c));
            return b;
          }),
            (c.arrayBuffer2Blob = function (a, b) {
              c.checkSupport('blob'), (b = b || 'application/zip');
              try {
                return new Blob([a], {type: b});
              } catch (d) {
                try {
                  var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                    f = new e();
                  return f.append(a), f.getBlob(b);
                } catch (d) {
                  throw new Error("Bug : can't construct the Blob.");
                }
              }
            }),
            (c.applyFromCharCode = f);
          var k = {};
          (k.string = {
            string: d,
            array: function (a) {
              return e(a, new Array(a.length));
            },
            arraybuffer: function (a) {
              return k.string.uint8array(a).buffer;
            },
            uint8array: function (a) {
              return e(a, new Uint8Array(a.length));
            },
            nodebuffer: function (a) {
              return e(a, j(a.length));
            },
          }),
            (k.array = {
              string: f,
              array: d,
              arraybuffer: function (a) {
                return new Uint8Array(a).buffer;
              },
              uint8array: function (a) {
                return new Uint8Array(a);
              },
              nodebuffer: function (a) {
                return j(a);
              },
            }),
            (k.arraybuffer = {
              string: function (a) {
                return f(new Uint8Array(a));
              },
              array: function (a) {
                return g(new Uint8Array(a), new Array(a.byteLength));
              },
              arraybuffer: d,
              uint8array: function (a) {
                return new Uint8Array(a);
              },
              nodebuffer: function (a) {
                return j(new Uint8Array(a));
              },
            }),
            (k.uint8array = {
              string: f,
              array: function (a) {
                return g(a, new Array(a.length));
              },
              arraybuffer: function (a) {
                return a.buffer;
              },
              uint8array: d,
              nodebuffer: function (a) {
                return j(a);
              },
            }),
            (k.nodebuffer = {
              string: f,
              array: function (a) {
                return g(a, new Array(a.length));
              },
              arraybuffer: function (a) {
                return k.nodebuffer.uint8array(a).buffer;
              },
              uint8array: function (a) {
                return g(a, new Uint8Array(a.length));
              },
              nodebuffer: d,
            }),
            (c.transformTo = function (a, b) {
              if ((b || (b = ''), !a)) return b;
              c.checkSupport(a);
              var d = c.getTypeOf(b),
                e = k[d][a](b);
              return e;
            }),
            (c.getTypeOf = function (a) {
              return 'string' == typeof a
                ? 'string'
                : '[object Array]' === Object.prototype.toString.call(a)
                ? 'array'
                : h.nodebuffer && j.test(a)
                ? 'nodebuffer'
                : h.uint8array && a instanceof Uint8Array
                ? 'uint8array'
                : h.arraybuffer && a instanceof ArrayBuffer
                ? 'arraybuffer'
                : void 0;
            }),
            (c.checkSupport = function (a) {
              var b = h[a.toLowerCase()];
              if (!b) throw new Error(a + ' is not supported by this browser');
            }),
            (c.MAX_VALUE_16BITS = 65535),
            (c.MAX_VALUE_32BITS = -1),
            (c.pretty = function (a) {
              var b,
                c,
                d = '';
              for (c = 0; c < (a || '').length; c++) (b = a.charCodeAt(c)), (d += '\\x' + (16 > b ? '0' : '') + b.toString(16).toUpperCase());
              return d;
            }),
            (c.findCompression = function (a) {
              for (var b in i) if (i.hasOwnProperty(b) && i[b].magic === a) return i[b];
              return null;
            }),
            (c.isRegExp = function (a) {
              return '[object RegExp]' === Object.prototype.toString.call(a);
            });
        },
        {'./compressions': 3, './nodeBuffer': 11, './support': 17},
      ],
      22: [
        function (a, b) {
          'use strict';
          function c(a, b) {
            (this.files = []), (this.loadOptions = b), a && this.load(a);
          }
          var d = a('./stringReader'),
            e = a('./nodeBufferReader'),
            f = a('./uint8ArrayReader'),
            g = a('./utils'),
            h = a('./signature'),
            i = a('./zipEntry'),
            j = a('./support'),
            k = a('./object');
          (c.prototype = {
            checkSignature: function (a) {
              var b = this.reader.readString(4);
              if (b !== a) throw new Error('Corrupted zip or bug : unexpected signature (' + g.pretty(b) + ', expected ' + g.pretty(a) + ')');
            },
            readBlockEndOfCentral: function () {
              (this.diskNumber = this.reader.readInt(2)),
                (this.diskWithCentralDirStart = this.reader.readInt(2)),
                (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                (this.centralDirRecords = this.reader.readInt(2)),
                (this.centralDirSize = this.reader.readInt(4)),
                (this.centralDirOffset = this.reader.readInt(4)),
                (this.zipCommentLength = this.reader.readInt(2)),
                (this.zipComment = this.reader.readString(this.zipCommentLength)),
                (this.zipComment = k.utf8decode(this.zipComment));
            },
            readBlockZip64EndOfCentral: function () {
              (this.zip64EndOfCentralSize = this.reader.readInt(8)),
                (this.versionMadeBy = this.reader.readString(2)),
                (this.versionNeeded = this.reader.readInt(2)),
                (this.diskNumber = this.reader.readInt(4)),
                (this.diskWithCentralDirStart = this.reader.readInt(4)),
                (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                (this.centralDirRecords = this.reader.readInt(8)),
                (this.centralDirSize = this.reader.readInt(8)),
                (this.centralDirOffset = this.reader.readInt(8)),
                (this.zip64ExtensibleData = {});
              for (var a, b, c, d = this.zip64EndOfCentralSize - 44, e = 0; d > e; )
                (a = this.reader.readInt(2)),
                  (b = this.reader.readInt(4)),
                  (c = this.reader.readString(b)),
                  (this.zip64ExtensibleData[a] = {id: a, length: b, value: c});
            },
            readBlockZip64EndOfCentralLocator: function () {
              if (
                ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                (this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8)),
                (this.disksCount = this.reader.readInt(4)),
                this.disksCount > 1)
              )
                throw new Error('Multi-volumes zip are not supported');
            },
            readLocalFiles: function () {
              var a, b;
              for (a = 0; a < this.files.length; a++)
                (b = this.files[a]),
                  this.reader.setIndex(b.localHeaderOffset),
                  this.checkSignature(h.LOCAL_FILE_HEADER),
                  b.readLocalPart(this.reader),
                  b.handleUTF8(),
                  b.processAttributes();
            },
            readCentralDir: function () {
              var a;
              for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === h.CENTRAL_FILE_HEADER; )
                (a = new i({zip64: this.zip64}, this.loadOptions)), a.readCentralPart(this.reader), this.files.push(a);
            },
            readEndOfCentral: function () {
              var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
              if (-1 === a) {
                var b = !0;
                try {
                  this.reader.setIndex(0), this.checkSignature(h.LOCAL_FILE_HEADER), (b = !1);
                } catch (c) {}
                throw new Error(
                  b
                    ? "Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html"
                    : "Corrupted zip : can't find end of central directory",
                );
              }
              if (
                (this.reader.setIndex(a),
                this.checkSignature(h.CENTRAL_DIRECTORY_END),
                this.readBlockEndOfCentral(),
                this.diskNumber === g.MAX_VALUE_16BITS ||
                  this.diskWithCentralDirStart === g.MAX_VALUE_16BITS ||
                  this.centralDirRecordsOnThisDisk === g.MAX_VALUE_16BITS ||
                  this.centralDirRecords === g.MAX_VALUE_16BITS ||
                  this.centralDirSize === g.MAX_VALUE_32BITS ||
                  this.centralDirOffset === g.MAX_VALUE_32BITS)
              ) {
                if (((this.zip64 = !0), (a = this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR)), -1 === a))
                  throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                this.reader.setIndex(a),
                  this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                  this.readBlockZip64EndOfCentralLocator(),
                  this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                  this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),
                  this.readBlockZip64EndOfCentral();
              }
            },
            prepareReader: function (a) {
              var b = g.getTypeOf(a);
              this.reader =
                'string' !== b || j.uint8array
                  ? 'nodebuffer' === b
                    ? new e(a)
                    : new f(g.transformTo('uint8array', a))
                  : new d(a, this.loadOptions.optimizedBinaryString);
            },
            load: function (a) {
              this.prepareReader(a), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
            },
          }),
            (b.exports = c);
        },
        {
          './nodeBufferReader': 12,
          './object': 13,
          './signature': 14,
          './stringReader': 15,
          './support': 17,
          './uint8ArrayReader': 18,
          './utils': 21,
          './zipEntry': 23,
        },
      ],
      23: [
        function (a, b) {
          'use strict';
          function c(a, b) {
            (this.options = a), (this.loadOptions = b);
          }
          var d = a('./stringReader'),
            e = a('./utils'),
            f = a('./compressedObject'),
            g = a('./object'),
            h = 0,
            i = 3;
          (c.prototype = {
            isEncrypted: function () {
              return 1 === (1 & this.bitFlag);
            },
            useUTF8: function () {
              return 2048 === (2048 & this.bitFlag);
            },
            prepareCompressedContent: function (a, b, c) {
              return function () {
                var d = a.index;
                a.setIndex(b);
                var e = a.readData(c);
                return a.setIndex(d), e;
              };
            },
            prepareContent: function (a, b, c, d, f) {
              return function () {
                var a = e.transformTo(d.uncompressInputType, this.getCompressedContent()),
                  b = d.uncompress(a);
                if (b.length !== f) throw new Error('Bug : uncompressed data size mismatch');
                return b;
              };
            },
            readLocalPart: function (a) {
              var b, c;
              if (
                (a.skip(22),
                (this.fileNameLength = a.readInt(2)),
                (c = a.readInt(2)),
                (this.fileName = a.readString(this.fileNameLength)),
                a.skip(c),
                -1 == this.compressedSize || -1 == this.uncompressedSize)
              )
                throw new Error(
                  "Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)",
                );
              if (((b = e.findCompression(this.compressionMethod)), null === b))
                throw new Error('Corrupted zip : compression ' + e.pretty(this.compressionMethod) + ' unknown (inner file : ' + this.fileName + ')');
              if (
                ((this.decompressed = new f()),
                (this.decompressed.compressedSize = this.compressedSize),
                (this.decompressed.uncompressedSize = this.uncompressedSize),
                (this.decompressed.crc32 = this.crc32),
                (this.decompressed.compressionMethod = this.compressionMethod),
                (this.decompressed.getCompressedContent = this.prepareCompressedContent(a, a.index, this.compressedSize, b)),
                (this.decompressed.getContent = this.prepareContent(a, a.index, this.compressedSize, b, this.uncompressedSize)),
                this.loadOptions.checkCRC32 &&
                  ((this.decompressed = e.transformTo('string', this.decompressed.getContent())), g.crc32(this.decompressed) !== this.crc32))
              )
                throw new Error('Corrupted zip : CRC32 mismatch');
            },
            readCentralPart: function (a) {
              if (
                ((this.versionMadeBy = a.readInt(2)),
                (this.versionNeeded = a.readInt(2)),
                (this.bitFlag = a.readInt(2)),
                (this.compressionMethod = a.readString(2)),
                (this.date = a.readDate()),
                (this.crc32 = a.readInt(4)),
                (this.compressedSize = a.readInt(4)),
                (this.uncompressedSize = a.readInt(4)),
                (this.fileNameLength = a.readInt(2)),
                (this.extraFieldsLength = a.readInt(2)),
                (this.fileCommentLength = a.readInt(2)),
                (this.diskNumberStart = a.readInt(2)),
                (this.internalFileAttributes = a.readInt(2)),
                (this.externalFileAttributes = a.readInt(4)),
                (this.localHeaderOffset = a.readInt(4)),
                this.isEncrypted())
              )
                throw new Error('Encrypted zip are not supported');
              (this.fileName = a.readString(this.fileNameLength)),
                this.readExtraFields(a),
                this.parseZIP64ExtraField(a),
                (this.fileComment = a.readString(this.fileCommentLength));
            },
            processAttributes: function () {
              (this.unixPermissions = null), (this.dosPermissions = null);
              var a = this.versionMadeBy >> 8;
              (this.dir = 16 & this.externalFileAttributes ? !0 : !1),
                a === h && (this.dosPermissions = 63 & this.externalFileAttributes),
                a === i && (this.unixPermissions = (this.externalFileAttributes >> 16) & 65535),
                this.dir || '/' !== this.fileName.slice(-1) || (this.dir = !0);
            },
            parseZIP64ExtraField: function () {
              if (this.extraFields[1]) {
                var a = new d(this.extraFields[1].value);
                this.uncompressedSize === e.MAX_VALUE_32BITS && (this.uncompressedSize = a.readInt(8)),
                  this.compressedSize === e.MAX_VALUE_32BITS && (this.compressedSize = a.readInt(8)),
                  this.localHeaderOffset === e.MAX_VALUE_32BITS && (this.localHeaderOffset = a.readInt(8)),
                  this.diskNumberStart === e.MAX_VALUE_32BITS && (this.diskNumberStart = a.readInt(4));
              }
            },
            readExtraFields: function (a) {
              var b,
                c,
                d,
                e = a.index;
              for (this.extraFields = this.extraFields || {}; a.index < e + this.extraFieldsLength; )
                (b = a.readInt(2)), (c = a.readInt(2)), (d = a.readString(c)), (this.extraFields[b] = {id: b, length: c, value: d});
            },
            handleUTF8: function () {
              if (this.useUTF8()) (this.fileName = g.utf8decode(this.fileName)), (this.fileComment = g.utf8decode(this.fileComment));
              else {
                var a = this.findExtraFieldUnicodePath();
                null !== a && (this.fileName = a);
                var b = this.findExtraFieldUnicodeComment();
                null !== b && (this.fileComment = b);
              }
            },
            findExtraFieldUnicodePath: function () {
              var a = this.extraFields[28789];
              if (a) {
                var b = new d(a.value);
                return 1 !== b.readInt(1) ? null : g.crc32(this.fileName) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5));
              }
              return null;
            },
            findExtraFieldUnicodeComment: function () {
              var a = this.extraFields[25461];
              if (a) {
                var b = new d(a.value);
                return 1 !== b.readInt(1) ? null : g.crc32(this.fileComment) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5));
              }
              return null;
            },
          }),
            (b.exports = c);
        },
        {'./compressedObject': 2, './object': 13, './stringReader': 15, './utils': 21},
      ],
      24: [
        function (a, b) {
          'use strict';
          var c = a('./lib/utils/common').assign,
            d = a('./lib/deflate'),
            e = a('./lib/inflate'),
            f = a('./lib/zlib/constants'),
            g = {};
          c(g, d, e, f), (b.exports = g);
        },
        {'./lib/deflate': 25, './lib/inflate': 26, './lib/utils/common': 27, './lib/zlib/constants': 30},
      ],
      25: [
        function (a, b, c) {
          'use strict';
          function d(a, b) {
            var c = new s(b);
            if ((c.push(a, !0), c.err)) throw c.msg;
            return c.result;
          }
          function e(a, b) {
            return (b = b || {}), (b.raw = !0), d(a, b);
          }
          function f(a, b) {
            return (b = b || {}), (b.gzip = !0), d(a, b);
          }
          var g = a('./zlib/deflate.js'),
            h = a('./utils/common'),
            i = a('./utils/strings'),
            j = a('./zlib/messages'),
            k = a('./zlib/zstream'),
            l = 0,
            m = 4,
            n = 0,
            o = 1,
            p = -1,
            q = 0,
            r = 8,
            s = function (a) {
              this.options = h.assign({level: p, method: r, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: q, to: ''}, a || {});
              var b = this.options;
              b.raw && b.windowBits > 0 ? (b.windowBits = -b.windowBits) : b.gzip && b.windowBits > 0 && b.windowBits < 16 && (b.windowBits += 16),
                (this.err = 0),
                (this.msg = ''),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new k()),
                (this.strm.avail_out = 0);
              var c = g.deflateInit2(this.strm, b.level, b.method, b.windowBits, b.memLevel, b.strategy);
              if (c !== n) throw new Error(j[c]);
              b.header && g.deflateSetHeader(this.strm, b.header);
            };
          (s.prototype.push = function (a, b) {
            var c,
              d,
              e = this.strm,
              f = this.options.chunkSize;
            if (this.ended) return !1;
            (d = b === ~~b ? b : b === !0 ? m : l), (e.input = 'string' == typeof a ? i.string2buf(a) : a), (e.next_in = 0), (e.avail_in = e.input.length);
            do {
              if ((0 === e.avail_out && ((e.output = new h.Buf8(f)), (e.next_out = 0), (e.avail_out = f)), (c = g.deflate(e, d)), c !== o && c !== n))
                return this.onEnd(c), (this.ended = !0), !1;
              (0 === e.avail_out || (0 === e.avail_in && d === m)) &&
                this.onData('string' === this.options.to ? i.buf2binstring(h.shrinkBuf(e.output, e.next_out)) : h.shrinkBuf(e.output, e.next_out));
            } while ((e.avail_in > 0 || 0 === e.avail_out) && c !== o);
            return d === m ? ((c = g.deflateEnd(this.strm)), this.onEnd(c), (this.ended = !0), c === n) : !0;
          }),
            (s.prototype.onData = function (a) {
              this.chunks.push(a);
            }),
            (s.prototype.onEnd = function (a) {
              a === n && (this.result = 'string' === this.options.to ? this.chunks.join('') : h.flattenChunks(this.chunks)),
                (this.chunks = []),
                (this.err = a),
                (this.msg = this.strm.msg);
            }),
            (c.Deflate = s),
            (c.deflate = d),
            (c.deflateRaw = e),
            (c.gzip = f);
        },
        {'./utils/common': 27, './utils/strings': 28, './zlib/deflate.js': 32, './zlib/messages': 37, './zlib/zstream': 39},
      ],
      26: [
        function (a, b, c) {
          'use strict';
          function d(a, b) {
            var c = new m(b);
            if ((c.push(a, !0), c.err)) throw c.msg;
            return c.result;
          }
          function e(a, b) {
            return (b = b || {}), (b.raw = !0), d(a, b);
          }
          var f = a('./zlib/inflate.js'),
            g = a('./utils/common'),
            h = a('./utils/strings'),
            i = a('./zlib/constants'),
            j = a('./zlib/messages'),
            k = a('./zlib/zstream'),
            l = a('./zlib/gzheader'),
            m = function (a) {
              this.options = g.assign({chunkSize: 16384, windowBits: 0, to: ''}, a || {});
              var b = this.options;
              b.raw && b.windowBits >= 0 && b.windowBits < 16 && ((b.windowBits = -b.windowBits), 0 === b.windowBits && (b.windowBits = -15)),
                !(b.windowBits >= 0 && b.windowBits < 16) || (a && a.windowBits) || (b.windowBits += 32),
                b.windowBits > 15 && b.windowBits < 48 && 0 === (15 & b.windowBits) && (b.windowBits |= 15),
                (this.err = 0),
                (this.msg = ''),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new k()),
                (this.strm.avail_out = 0);
              var c = f.inflateInit2(this.strm, b.windowBits);
              if (c !== i.Z_OK) throw new Error(j[c]);
              (this.header = new l()), f.inflateGetHeader(this.strm, this.header);
            };
          (m.prototype.push = function (a, b) {
            var c,
              d,
              e,
              j,
              k,
              l = this.strm,
              m = this.options.chunkSize;
            if (this.ended) return !1;
            (d = b === ~~b ? b : b === !0 ? i.Z_FINISH : i.Z_NO_FLUSH),
              (l.input = 'string' == typeof a ? h.binstring2buf(a) : a),
              (l.next_in = 0),
              (l.avail_in = l.input.length);
            do {
              if (
                (0 === l.avail_out && ((l.output = new g.Buf8(m)), (l.next_out = 0), (l.avail_out = m)),
                (c = f.inflate(l, i.Z_NO_FLUSH)),
                c !== i.Z_STREAM_END && c !== i.Z_OK)
              )
                return this.onEnd(c), (this.ended = !0), !1;
              l.next_out &&
                (0 === l.avail_out || c === i.Z_STREAM_END || (0 === l.avail_in && d === i.Z_FINISH)) &&
                ('string' === this.options.to
                  ? ((e = h.utf8border(l.output, l.next_out)),
                    (j = l.next_out - e),
                    (k = h.buf2string(l.output, e)),
                    (l.next_out = j),
                    (l.avail_out = m - j),
                    j && g.arraySet(l.output, l.output, e, j, 0),
                    this.onData(k))
                  : this.onData(g.shrinkBuf(l.output, l.next_out)));
            } while (l.avail_in > 0 && c !== i.Z_STREAM_END);
            return (
              c === i.Z_STREAM_END && (d = i.Z_FINISH), d === i.Z_FINISH ? ((c = f.inflateEnd(this.strm)), this.onEnd(c), (this.ended = !0), c === i.Z_OK) : !0
            );
          }),
            (m.prototype.onData = function (a) {
              this.chunks.push(a);
            }),
            (m.prototype.onEnd = function (a) {
              a === i.Z_OK && (this.result = 'string' === this.options.to ? this.chunks.join('') : g.flattenChunks(this.chunks)),
                (this.chunks = []),
                (this.err = a),
                (this.msg = this.strm.msg);
            }),
            (c.Inflate = m),
            (c.inflate = d),
            (c.inflateRaw = e),
            (c.ungzip = d);
        },
        {
          './utils/common': 27,
          './utils/strings': 28,
          './zlib/constants': 30,
          './zlib/gzheader': 33,
          './zlib/inflate.js': 35,
          './zlib/messages': 37,
          './zlib/zstream': 39,
        },
      ],
      27: [
        function (a, b, c) {
          'use strict';
          var d = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Int32Array;
          (c.assign = function (a) {
            for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
              var c = b.shift();
              if (c) {
                if ('object' != typeof c) throw new TypeError(c + 'must be non-object');
                for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
              }
            }
            return a;
          }),
            (c.shrinkBuf = function (a, b) {
              return a.length === b ? a : a.subarray ? a.subarray(0, b) : ((a.length = b), a);
            });
          var e = {
              arraySet: function (a, b, c, d, e) {
                if (b.subarray && a.subarray) return void a.set(b.subarray(c, c + d), e);
                for (var f = 0; d > f; f++) a[e + f] = b[c + f];
              },
              flattenChunks: function (a) {
                var b, c, d, e, f, g;
                for (d = 0, b = 0, c = a.length; c > b; b++) d += a[b].length;
                for (g = new Uint8Array(d), e = 0, b = 0, c = a.length; c > b; b++) (f = a[b]), g.set(f, e), (e += f.length);
                return g;
              },
            },
            f = {
              arraySet: function (a, b, c, d, e) {
                for (var f = 0; d > f; f++) a[e + f] = b[c + f];
              },
              flattenChunks: function (a) {
                return [].concat.apply([], a);
              },
            };
          (c.setTyped = function (a) {
            a
              ? ((c.Buf8 = Uint8Array), (c.Buf16 = Uint16Array), (c.Buf32 = Int32Array), c.assign(c, e))
              : ((c.Buf8 = Array), (c.Buf16 = Array), (c.Buf32 = Array), c.assign(c, f));
          }),
            c.setTyped(d);
        },
        {},
      ],
      28: [
        function (a, b, c) {
          'use strict';
          function d(a, b) {
            if (65537 > b && ((a.subarray && g) || (!a.subarray && f))) return String.fromCharCode.apply(null, e.shrinkBuf(a, b));
            for (var c = '', d = 0; b > d; d++) c += String.fromCharCode(a[d]);
            return c;
          }
          var e = a('./common'),
            f = !0,
            g = !0;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (h) {
            f = !1;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (h) {
            g = !1;
          }
          for (var i = new e.Buf8(256), j = 0; 256 > j; j++) i[j] = j >= 252 ? 6 : j >= 248 ? 5 : j >= 240 ? 4 : j >= 224 ? 3 : j >= 192 ? 2 : 1;
          (i[254] = i[254] = 1),
            (c.string2buf = function (a) {
              var b,
                c,
                d,
                f,
                g,
                h = a.length,
                i = 0;
              for (f = 0; h > f; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)), 56320 === (64512 & d) && ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  (i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4);
              for (b = new e.Buf8(i), g = 0, f = 0; i > g; f++)
                (c = a.charCodeAt(f)),
                  55296 === (64512 & c) &&
                    h > f + 1 &&
                    ((d = a.charCodeAt(f + 1)), 56320 === (64512 & d) && ((c = 65536 + ((c - 55296) << 10) + (d - 56320)), f++)),
                  128 > c
                    ? (b[g++] = c)
                    : 2048 > c
                    ? ((b[g++] = 192 | (c >>> 6)), (b[g++] = 128 | (63 & c)))
                    : 65536 > c
                    ? ((b[g++] = 224 | (c >>> 12)), (b[g++] = 128 | ((c >>> 6) & 63)), (b[g++] = 128 | (63 & c)))
                    : ((b[g++] = 240 | (c >>> 18)), (b[g++] = 128 | ((c >>> 12) & 63)), (b[g++] = 128 | ((c >>> 6) & 63)), (b[g++] = 128 | (63 & c)));
              return b;
            }),
            (c.buf2binstring = function (a) {
              return d(a, a.length);
            }),
            (c.binstring2buf = function (a) {
              for (var b = new e.Buf8(a.length), c = 0, d = b.length; d > c; c++) b[c] = a.charCodeAt(c);
              return b;
            }),
            (c.buf2string = function (a, b) {
              var c,
                e,
                f,
                g,
                h = b || a.length,
                j = new Array(2 * h);
              for (e = 0, c = 0; h > c; )
                if (((f = a[c++]), 128 > f)) j[e++] = f;
                else if (((g = i[f]), g > 4)) (j[e++] = 65533), (c += g - 1);
                else {
                  for (f &= 2 === g ? 31 : 3 === g ? 15 : 7; g > 1 && h > c; ) (f = (f << 6) | (63 & a[c++])), g--;
                  g > 1 ? (j[e++] = 65533) : 65536 > f ? (j[e++] = f) : ((f -= 65536), (j[e++] = 55296 | ((f >> 10) & 1023)), (j[e++] = 56320 | (1023 & f)));
                }
              return d(j, e);
            }),
            (c.utf8border = function (a, b) {
              var c;
              for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]); ) c--;
              return 0 > c ? b : 0 === c ? b : c + i[a[c]] > b ? c : b;
            });
        },
        {'./common': 27},
      ],
      29: [
        function (a, b) {
          'use strict';
          function c(a, b, c, d) {
            for (var e = (65535 & a) | 0, f = ((a >>> 16) & 65535) | 0, g = 0; 0 !== c; ) {
              (g = c > 2e3 ? 2e3 : c), (c -= g);
              do (e = (e + b[d++]) | 0), (f = (f + e) | 0);
              while (--g);
              (e %= 65521), (f %= 65521);
            }
            return e | (f << 16) | 0;
          }
          b.exports = c;
        },
        {},
      ],
      30: [
        function (a, b) {
          b.exports = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8,
          };
        },
        {},
      ],
      31: [
        function (a, b) {
          'use strict';
          function c() {
            for (var a, b = [], c = 0; 256 > c; c++) {
              a = c;
              for (var d = 0; 8 > d; d++) a = 1 & a ? 3988292384 ^ (a >>> 1) : a >>> 1;
              b[c] = a;
            }
            return b;
          }
          function d(a, b, c, d) {
            var f = e,
              g = d + c;
            a = -1 ^ a;
            for (var h = d; g > h; h++) a = (a >>> 8) ^ f[255 & (a ^ b[h])];
            return -1 ^ a;
          }
          var e = c();
          b.exports = d;
        },
        {},
      ],
      32: [
        function (a, b, c) {
          'use strict';
          function d(a, b) {
            return (a.msg = G[b]), b;
          }
          function e(a) {
            return (a << 1) - (a > 4 ? 9 : 0);
          }
          function f(a) {
            for (var b = a.length; --b >= 0; ) a[b] = 0;
          }
          function g(a) {
            var b = a.state,
              c = b.pending;
            c > a.avail_out && (c = a.avail_out),
              0 !== c &&
                (C.arraySet(a.output, b.pending_buf, b.pending_out, c, a.next_out),
                (a.next_out += c),
                (b.pending_out += c),
                (a.total_out += c),
                (a.avail_out -= c),
                (b.pending -= c),
                0 === b.pending && (b.pending_out = 0));
          }
          function h(a, b) {
            D._tr_flush_block(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, b), (a.block_start = a.strstart), g(a.strm);
          }
          function i(a, b) {
            a.pending_buf[a.pending++] = b;
          }
          function j(a, b) {
            (a.pending_buf[a.pending++] = (b >>> 8) & 255), (a.pending_buf[a.pending++] = 255 & b);
          }
          function k(a, b, c, d) {
            var e = a.avail_in;
            return (
              e > d && (e = d),
              0 === e
                ? 0
                : ((a.avail_in -= e),
                  C.arraySet(b, a.input, a.next_in, e, c),
                  1 === a.state.wrap ? (a.adler = E(a.adler, b, e, c)) : 2 === a.state.wrap && (a.adler = F(a.adler, b, e, c)),
                  (a.next_in += e),
                  (a.total_in += e),
                  e)
            );
          }
          function l(a, b) {
            var c,
              d,
              e = a.max_chain_length,
              f = a.strstart,
              g = a.prev_length,
              h = a.nice_match,
              i = a.strstart > a.w_size - jb ? a.strstart - (a.w_size - jb) : 0,
              j = a.window,
              k = a.w_mask,
              l = a.prev,
              m = a.strstart + ib,
              n = j[f + g - 1],
              o = j[f + g];
            a.prev_length >= a.good_match && (e >>= 2), h > a.lookahead && (h = a.lookahead);
            do
              if (((c = b), j[c + g] === o && j[c + g - 1] === n && j[c] === j[f] && j[++c] === j[f + 1])) {
                (f += 2), c++;
                do;
                while (
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  j[++f] === j[++c] &&
                  m > f
                );
                if (((d = ib - (m - f)), (f = m - ib), d > g)) {
                  if (((a.match_start = b), (g = d), d >= h)) break;
                  (n = j[f + g - 1]), (o = j[f + g]);
                }
              }
            while ((b = l[b & k]) > i && 0 !== --e);
            return g <= a.lookahead ? g : a.lookahead;
          }
          function m(a) {
            var b,
              c,
              d,
              e,
              f,
              g = a.w_size;
            do {
              if (((e = a.window_size - a.lookahead - a.strstart), a.strstart >= g + (g - jb))) {
                C.arraySet(a.window, a.window, g, g, 0), (a.match_start -= g), (a.strstart -= g), (a.block_start -= g), (c = a.hash_size), (b = c);
                do (d = a.head[--b]), (a.head[b] = d >= g ? d - g : 0);
                while (--c);
                (c = g), (b = c);
                do (d = a.prev[--b]), (a.prev[b] = d >= g ? d - g : 0);
                while (--c);
                e += g;
              }
              if (0 === a.strm.avail_in) break;
              if (((c = k(a.strm, a.window, a.strstart + a.lookahead, e)), (a.lookahead += c), a.lookahead + a.insert >= hb))
                for (
                  f = a.strstart - a.insert, a.ins_h = a.window[f], a.ins_h = ((a.ins_h << a.hash_shift) ^ a.window[f + 1]) & a.hash_mask;
                  a.insert &&
                  ((a.ins_h = ((a.ins_h << a.hash_shift) ^ a.window[f + hb - 1]) & a.hash_mask),
                  (a.prev[f & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = f),
                  f++,
                  a.insert--,
                  !(a.lookahead + a.insert < hb));

                );
            } while (a.lookahead < jb && 0 !== a.strm.avail_in);
          }
          function n(a, b) {
            var c = 65535;
            for (c > a.pending_buf_size - 5 && (c = a.pending_buf_size - 5); ; ) {
              if (a.lookahead <= 1) {
                if ((m(a), 0 === a.lookahead && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              (a.strstart += a.lookahead), (a.lookahead = 0);
              var d = a.block_start + c;
              if ((0 === a.strstart || a.strstart >= d) && ((a.lookahead = a.strstart - d), (a.strstart = d), h(a, !1), 0 === a.strm.avail_out)) return sb;
              if (a.strstart - a.block_start >= a.w_size - jb && (h(a, !1), 0 === a.strm.avail_out)) return sb;
            }
            return (
              (a.insert = 0),
              b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.strstart > a.block_start && (h(a, !1), 0 === a.strm.avail_out) ? sb : sb
            );
          }
          function o(a, b) {
            for (var c, d; ; ) {
              if (a.lookahead < jb) {
                if ((m(a), a.lookahead < jb && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              if (
                ((c = 0),
                a.lookahead >= hb &&
                  ((a.ins_h = ((a.ins_h << a.hash_shift) ^ a.window[a.strstart + hb - 1]) & a.hash_mask),
                  (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = a.strstart)),
                0 !== c && a.strstart - c <= a.w_size - jb && (a.match_length = l(a, c)),
                a.match_length >= hb)
              )
                if (
                  ((d = D._tr_tally(a, a.strstart - a.match_start, a.match_length - hb)),
                  (a.lookahead -= a.match_length),
                  a.match_length <= a.max_lazy_match && a.lookahead >= hb)
                ) {
                  a.match_length--;
                  do
                    a.strstart++,
                      (a.ins_h = ((a.ins_h << a.hash_shift) ^ a.window[a.strstart + hb - 1]) & a.hash_mask),
                      (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                      (a.head[a.ins_h] = a.strstart);
                  while (0 !== --a.match_length);
                  a.strstart++;
                } else
                  (a.strstart += a.match_length),
                    (a.match_length = 0),
                    (a.ins_h = a.window[a.strstart]),
                    (a.ins_h = ((a.ins_h << a.hash_shift) ^ a.window[a.strstart + 1]) & a.hash_mask);
              else (d = D._tr_tally(a, 0, a.window[a.strstart])), a.lookahead--, a.strstart++;
              if (d && (h(a, !1), 0 === a.strm.avail_out)) return sb;
            }
            return (
              (a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1),
              b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
            );
          }
          function p(a, b) {
            for (var c, d, e; ; ) {
              if (a.lookahead < jb) {
                if ((m(a), a.lookahead < jb && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              if (
                ((c = 0),
                a.lookahead >= hb &&
                  ((a.ins_h = ((a.ins_h << a.hash_shift) ^ a.window[a.strstart + hb - 1]) & a.hash_mask),
                  (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                  (a.head[a.ins_h] = a.strstart)),
                (a.prev_length = a.match_length),
                (a.prev_match = a.match_start),
                (a.match_length = hb - 1),
                0 !== c &&
                  a.prev_length < a.max_lazy_match &&
                  a.strstart - c <= a.w_size - jb &&
                  ((a.match_length = l(a, c)),
                  a.match_length <= 5 && (a.strategy === S || (a.match_length === hb && a.strstart - a.match_start > 4096)) && (a.match_length = hb - 1)),
                a.prev_length >= hb && a.match_length <= a.prev_length)
              ) {
                (e = a.strstart + a.lookahead - hb),
                  (d = D._tr_tally(a, a.strstart - 1 - a.prev_match, a.prev_length - hb)),
                  (a.lookahead -= a.prev_length - 1),
                  (a.prev_length -= 2);
                do
                  ++a.strstart <= e &&
                    ((a.ins_h = ((a.ins_h << a.hash_shift) ^ a.window[a.strstart + hb - 1]) & a.hash_mask),
                    (c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h]),
                    (a.head[a.ins_h] = a.strstart));
                while (0 !== --a.prev_length);
                if (((a.match_available = 0), (a.match_length = hb - 1), a.strstart++, d && (h(a, !1), 0 === a.strm.avail_out))) return sb;
              } else if (a.match_available) {
                if (((d = D._tr_tally(a, 0, a.window[a.strstart - 1])), d && h(a, !1), a.strstart++, a.lookahead--, 0 === a.strm.avail_out)) return sb;
              } else (a.match_available = 1), a.strstart++, a.lookahead--;
            }
            return (
              a.match_available && ((d = D._tr_tally(a, 0, a.window[a.strstart - 1])), (a.match_available = 0)),
              (a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1),
              b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
            );
          }
          function q(a, b) {
            for (var c, d, e, f, g = a.window; ; ) {
              if (a.lookahead <= ib) {
                if ((m(a), a.lookahead <= ib && b === H)) return sb;
                if (0 === a.lookahead) break;
              }
              if (
                ((a.match_length = 0), a.lookahead >= hb && a.strstart > 0 && ((e = a.strstart - 1), (d = g[e]), d === g[++e] && d === g[++e] && d === g[++e]))
              ) {
                f = a.strstart + ib;
                do;
                while (d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && f > e);
                (a.match_length = ib - (f - e)), a.match_length > a.lookahead && (a.match_length = a.lookahead);
              }
              if (
                (a.match_length >= hb
                  ? ((c = D._tr_tally(a, 1, a.match_length - hb)), (a.lookahead -= a.match_length), (a.strstart += a.match_length), (a.match_length = 0))
                  : ((c = D._tr_tally(a, 0, a.window[a.strstart])), a.lookahead--, a.strstart++),
                c && (h(a, !1), 0 === a.strm.avail_out))
              )
                return sb;
            }
            return (a.insert = 0), b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb;
          }
          function r(a, b) {
            for (var c; ; ) {
              if (0 === a.lookahead && (m(a), 0 === a.lookahead)) {
                if (b === H) return sb;
                break;
              }
              if (((a.match_length = 0), (c = D._tr_tally(a, 0, a.window[a.strstart])), a.lookahead--, a.strstart++, c && (h(a, !1), 0 === a.strm.avail_out)))
                return sb;
            }
            return (a.insert = 0), b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb;
          }
          function s(a) {
            (a.window_size = 2 * a.w_size),
              f(a.head),
              (a.max_lazy_match = B[a.level].max_lazy),
              (a.good_match = B[a.level].good_length),
              (a.nice_match = B[a.level].nice_length),
              (a.max_chain_length = B[a.level].max_chain),
              (a.strstart = 0),
              (a.block_start = 0),
              (a.lookahead = 0),
              (a.insert = 0),
              (a.match_length = a.prev_length = hb - 1),
              (a.match_available = 0),
              (a.ins_h = 0);
          }
          function t() {
            (this.strm = null),
              (this.status = 0),
              (this.pending_buf = null),
              (this.pending_buf_size = 0),
              (this.pending_out = 0),
              (this.pending = 0),
              (this.wrap = 0),
              (this.gzhead = null),
              (this.gzindex = 0),
              (this.method = Y),
              (this.last_flush = -1),
              (this.w_size = 0),
              (this.w_bits = 0),
              (this.w_mask = 0),
              (this.window = null),
              (this.window_size = 0),
              (this.prev = null),
              (this.head = null),
              (this.ins_h = 0),
              (this.hash_size = 0),
              (this.hash_bits = 0),
              (this.hash_mask = 0),
              (this.hash_shift = 0),
              (this.block_start = 0),
              (this.match_length = 0),
              (this.prev_match = 0),
              (this.match_available = 0),
              (this.strstart = 0),
              (this.match_start = 0),
              (this.lookahead = 0),
              (this.prev_length = 0),
              (this.max_chain_length = 0),
              (this.max_lazy_match = 0),
              (this.level = 0),
              (this.strategy = 0),
              (this.good_match = 0),
              (this.nice_match = 0),
              (this.dyn_ltree = new C.Buf16(2 * fb)),
              (this.dyn_dtree = new C.Buf16(2 * (2 * db + 1))),
              (this.bl_tree = new C.Buf16(2 * (2 * eb + 1))),
              f(this.dyn_ltree),
              f(this.dyn_dtree),
              f(this.bl_tree),
              (this.l_desc = null),
              (this.d_desc = null),
              (this.bl_desc = null),
              (this.bl_count = new C.Buf16(gb + 1)),
              (this.heap = new C.Buf16(2 * cb + 1)),
              f(this.heap),
              (this.heap_len = 0),
              (this.heap_max = 0),
              (this.depth = new C.Buf16(2 * cb + 1)),
              f(this.depth),
              (this.l_buf = 0),
              (this.lit_bufsize = 0),
              (this.last_lit = 0),
              (this.d_buf = 0),
              (this.opt_len = 0),
              (this.static_len = 0),
              (this.matches = 0),
              (this.insert = 0),
              (this.bi_buf = 0),
              (this.bi_valid = 0);
          }
          function u(a) {
            var b;
            return a && a.state
              ? ((a.total_in = a.total_out = 0),
                (a.data_type = X),
                (b = a.state),
                (b.pending = 0),
                (b.pending_out = 0),
                b.wrap < 0 && (b.wrap = -b.wrap),
                (b.status = b.wrap ? lb : qb),
                (a.adler = 2 === b.wrap ? 0 : 1),
                (b.last_flush = H),
                D._tr_init(b),
                M)
              : d(a, O);
          }
          function v(a) {
            var b = u(a);
            return b === M && s(a.state), b;
          }
          function w(a, b) {
            return a && a.state ? (2 !== a.state.wrap ? O : ((a.state.gzhead = b), M)) : O;
          }
          function x(a, b, c, e, f, g) {
            if (!a) return O;
            var h = 1;
            if (
              (b === R && (b = 6),
              0 > e ? ((h = 0), (e = -e)) : e > 15 && ((h = 2), (e -= 16)),
              1 > f || f > Z || c !== Y || 8 > e || e > 15 || 0 > b || b > 9 || 0 > g || g > V)
            )
              return d(a, O);
            8 === e && (e = 9);
            var i = new t();
            return (
              (a.state = i),
              (i.strm = a),
              (i.wrap = h),
              (i.gzhead = null),
              (i.w_bits = e),
              (i.w_size = 1 << i.w_bits),
              (i.w_mask = i.w_size - 1),
              (i.hash_bits = f + 7),
              (i.hash_size = 1 << i.hash_bits),
              (i.hash_mask = i.hash_size - 1),
              (i.hash_shift = ~~((i.hash_bits + hb - 1) / hb)),
              (i.window = new C.Buf8(2 * i.w_size)),
              (i.head = new C.Buf16(i.hash_size)),
              (i.prev = new C.Buf16(i.w_size)),
              (i.lit_bufsize = 1 << (f + 6)),
              (i.pending_buf_size = 4 * i.lit_bufsize),
              (i.pending_buf = new C.Buf8(i.pending_buf_size)),
              (i.d_buf = i.lit_bufsize >> 1),
              (i.l_buf = 3 * i.lit_bufsize),
              (i.level = b),
              (i.strategy = g),
              (i.method = c),
              v(a)
            );
          }
          function y(a, b) {
            return x(a, b, Y, $, _, W);
          }
          function z(a, b) {
            var c, h, k, l;
            if (!a || !a.state || b > L || 0 > b) return a ? d(a, O) : O;
            if (((h = a.state), !a.output || (!a.input && 0 !== a.avail_in) || (h.status === rb && b !== K))) return d(a, 0 === a.avail_out ? Q : O);
            if (((h.strm = a), (c = h.last_flush), (h.last_flush = b), h.status === lb))
              if (2 === h.wrap)
                (a.adler = 0),
                  i(h, 31),
                  i(h, 139),
                  i(h, 8),
                  h.gzhead
                    ? (i(
                        h,
                        (h.gzhead.text ? 1 : 0) + (h.gzhead.hcrc ? 2 : 0) + (h.gzhead.extra ? 4 : 0) + (h.gzhead.name ? 8 : 0) + (h.gzhead.comment ? 16 : 0),
                      ),
                      i(h, 255 & h.gzhead.time),
                      i(h, (h.gzhead.time >> 8) & 255),
                      i(h, (h.gzhead.time >> 16) & 255),
                      i(h, (h.gzhead.time >> 24) & 255),
                      i(h, 9 === h.level ? 2 : h.strategy >= T || h.level < 2 ? 4 : 0),
                      i(h, 255 & h.gzhead.os),
                      h.gzhead.extra && h.gzhead.extra.length && (i(h, 255 & h.gzhead.extra.length), i(h, (h.gzhead.extra.length >> 8) & 255)),
                      h.gzhead.hcrc && (a.adler = F(a.adler, h.pending_buf, h.pending, 0)),
                      (h.gzindex = 0),
                      (h.status = mb))
                    : (i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(h, 0),
                      i(h, 9 === h.level ? 2 : h.strategy >= T || h.level < 2 ? 4 : 0),
                      i(h, wb),
                      (h.status = qb));
              else {
                var m = (Y + ((h.w_bits - 8) << 4)) << 8,
                  n = -1;
                (n = h.strategy >= T || h.level < 2 ? 0 : h.level < 6 ? 1 : 6 === h.level ? 2 : 3),
                  (m |= n << 6),
                  0 !== h.strstart && (m |= kb),
                  (m += 31 - (m % 31)),
                  (h.status = qb),
                  j(h, m),
                  0 !== h.strstart && (j(h, a.adler >>> 16), j(h, 65535 & a.adler)),
                  (a.adler = 1);
              }
            if (h.status === mb)
              if (h.gzhead.extra) {
                for (
                  k = h.pending;
                  h.gzindex < (65535 & h.gzhead.extra.length) &&
                  (h.pending !== h.pending_buf_size ||
                    (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending !== h.pending_buf_size));

                )
                  i(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
                h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                  h.gzindex === h.gzhead.extra.length && ((h.gzindex = 0), (h.status = nb));
              } else h.status = nb;
            if (h.status === nb)
              if (h.gzhead.name) {
                k = h.pending;
                do {
                  if (
                    h.pending === h.pending_buf_size &&
                    (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending === h.pending_buf_size)
                  ) {
                    l = 1;
                    break;
                  }
                  (l = h.gzindex < h.gzhead.name.length ? 255 & h.gzhead.name.charCodeAt(h.gzindex++) : 0), i(h, l);
                } while (0 !== l);
                h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && ((h.gzindex = 0), (h.status = ob));
              } else h.status = ob;
            if (h.status === ob)
              if (h.gzhead.comment) {
                k = h.pending;
                do {
                  if (
                    h.pending === h.pending_buf_size &&
                    (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)),
                    g(a),
                    (k = h.pending),
                    h.pending === h.pending_buf_size)
                  ) {
                    l = 1;
                    break;
                  }
                  (l = h.gzindex < h.gzhead.comment.length ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++) : 0), i(h, l);
                } while (0 !== l);
                h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && (h.status = pb);
              } else h.status = pb;
            if (
              (h.status === pb &&
                (h.gzhead.hcrc
                  ? (h.pending + 2 > h.pending_buf_size && g(a),
                    h.pending + 2 <= h.pending_buf_size && (i(h, 255 & a.adler), i(h, (a.adler >> 8) & 255), (a.adler = 0), (h.status = qb)))
                  : (h.status = qb)),
              0 !== h.pending)
            ) {
              if ((g(a), 0 === a.avail_out)) return (h.last_flush = -1), M;
            } else if (0 === a.avail_in && e(b) <= e(c) && b !== K) return d(a, Q);
            if (h.status === rb && 0 !== a.avail_in) return d(a, Q);
            if (0 !== a.avail_in || 0 !== h.lookahead || (b !== H && h.status !== rb)) {
              var o = h.strategy === T ? r(h, b) : h.strategy === U ? q(h, b) : B[h.level].func(h, b);
              if (((o === ub || o === vb) && (h.status = rb), o === sb || o === ub)) return 0 === a.avail_out && (h.last_flush = -1), M;
              if (
                o === tb &&
                (b === I
                  ? D._tr_align(h)
                  : b !== L &&
                    (D._tr_stored_block(h, 0, 0, !1), b === J && (f(h.head), 0 === h.lookahead && ((h.strstart = 0), (h.block_start = 0), (h.insert = 0)))),
                g(a),
                0 === a.avail_out)
              )
                return (h.last_flush = -1), M;
            }
            return b !== K
              ? M
              : h.wrap <= 0
              ? N
              : (2 === h.wrap
                  ? (i(h, 255 & a.adler),
                    i(h, (a.adler >> 8) & 255),
                    i(h, (a.adler >> 16) & 255),
                    i(h, (a.adler >> 24) & 255),
                    i(h, 255 & a.total_in),
                    i(h, (a.total_in >> 8) & 255),
                    i(h, (a.total_in >> 16) & 255),
                    i(h, (a.total_in >> 24) & 255))
                  : (j(h, a.adler >>> 16), j(h, 65535 & a.adler)),
                g(a),
                h.wrap > 0 && (h.wrap = -h.wrap),
                0 !== h.pending ? M : N);
          }
          function A(a) {
            var b;
            return a && a.state
              ? ((b = a.state.status),
                b !== lb && b !== mb && b !== nb && b !== ob && b !== pb && b !== qb && b !== rb ? d(a, O) : ((a.state = null), b === qb ? d(a, P) : M))
              : O;
          }
          var B,
            C = a('../utils/common'),
            D = a('./trees'),
            E = a('./adler32'),
            F = a('./crc32'),
            G = a('./messages'),
            H = 0,
            I = 1,
            J = 3,
            K = 4,
            L = 5,
            M = 0,
            N = 1,
            O = -2,
            P = -3,
            Q = -5,
            R = -1,
            S = 1,
            T = 2,
            U = 3,
            V = 4,
            W = 0,
            X = 2,
            Y = 8,
            Z = 9,
            $ = 15,
            _ = 8,
            ab = 29,
            bb = 256,
            cb = bb + 1 + ab,
            db = 30,
            eb = 19,
            fb = 2 * cb + 1,
            gb = 15,
            hb = 3,
            ib = 258,
            jb = ib + hb + 1,
            kb = 32,
            lb = 42,
            mb = 69,
            nb = 73,
            ob = 91,
            pb = 103,
            qb = 113,
            rb = 666,
            sb = 1,
            tb = 2,
            ub = 3,
            vb = 4,
            wb = 3,
            xb = function (a, b, c, d, e) {
              (this.good_length = a), (this.max_lazy = b), (this.nice_length = c), (this.max_chain = d), (this.func = e);
            };
          (B = [
            new xb(0, 0, 0, 0, n),
            new xb(4, 4, 8, 4, o),
            new xb(4, 5, 16, 8, o),
            new xb(4, 6, 32, 32, o),
            new xb(4, 4, 16, 16, p),
            new xb(8, 16, 32, 32, p),
            new xb(8, 16, 128, 128, p),
            new xb(8, 32, 128, 256, p),
            new xb(32, 128, 258, 1024, p),
            new xb(32, 258, 258, 4096, p),
          ]),
            (c.deflateInit = y),
            (c.deflateInit2 = x),
            (c.deflateReset = v),
            (c.deflateResetKeep = u),
            (c.deflateSetHeader = w),
            (c.deflate = z),
            (c.deflateEnd = A),
            (c.deflateInfo = 'pako deflate (from Nodeca project)');
        },
        {'../utils/common': 27, './adler32': 29, './crc32': 31, './messages': 37, './trees': 38},
      ],
      33: [
        function (a, b) {
          'use strict';
          function c() {
            (this.text = 0),
              (this.time = 0),
              (this.xflags = 0),
              (this.os = 0),
              (this.extra = null),
              (this.extra_len = 0),
              (this.name = ''),
              (this.comment = ''),
              (this.hcrc = 0),
              (this.done = !1);
          }
          b.exports = c;
        },
        {},
      ],
      34: [
        function (a, b) {
          'use strict';
          var c = 30,
            d = 12;
          b.exports = function (a, b) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
            (e = a.state),
              (f = a.next_in),
              (B = a.input),
              (g = f + (a.avail_in - 5)),
              (h = a.next_out),
              (C = a.output),
              (i = h - (b - a.avail_out)),
              (j = h + (a.avail_out - 257)),
              (k = e.dmax),
              (l = e.wsize),
              (m = e.whave),
              (n = e.wnext),
              (o = e.window),
              (p = e.hold),
              (q = e.bits),
              (r = e.lencode),
              (s = e.distcode),
              (t = (1 << e.lenbits) - 1),
              (u = (1 << e.distbits) - 1);
            a: do {
              15 > q && ((p += B[f++] << q), (q += 8), (p += B[f++] << q), (q += 8)), (v = r[p & t]);
              b: for (;;) {
                if (((w = v >>> 24), (p >>>= w), (q -= w), (w = (v >>> 16) & 255), 0 === w)) C[h++] = 65535 & v;
                else {
                  if (!(16 & w)) {
                    if (0 === (64 & w)) {
                      v = r[(65535 & v) + (p & ((1 << w) - 1))];
                      continue b;
                    }
                    if (32 & w) {
                      e.mode = d;
                      break a;
                    }
                    (a.msg = 'invalid literal/length code'), (e.mode = c);
                    break a;
                  }
                  (x = 65535 & v),
                    (w &= 15),
                    w && (w > q && ((p += B[f++] << q), (q += 8)), (x += p & ((1 << w) - 1)), (p >>>= w), (q -= w)),
                    15 > q && ((p += B[f++] << q), (q += 8), (p += B[f++] << q), (q += 8)),
                    (v = s[p & u]);
                  c: for (;;) {
                    if (((w = v >>> 24), (p >>>= w), (q -= w), (w = (v >>> 16) & 255), !(16 & w))) {
                      if (0 === (64 & w)) {
                        v = s[(65535 & v) + (p & ((1 << w) - 1))];
                        continue c;
                      }
                      (a.msg = 'invalid distance code'), (e.mode = c);
                      break a;
                    }
                    if (
                      ((y = 65535 & v),
                      (w &= 15),
                      w > q && ((p += B[f++] << q), (q += 8), w > q && ((p += B[f++] << q), (q += 8))),
                      (y += p & ((1 << w) - 1)),
                      y > k)
                    ) {
                      (a.msg = 'invalid distance too far back'), (e.mode = c);
                      break a;
                    }
                    if (((p >>>= w), (q -= w), (w = h - i), y > w)) {
                      if (((w = y - w), w > m && e.sane)) {
                        (a.msg = 'invalid distance too far back'), (e.mode = c);
                        break a;
                      }
                      if (((z = 0), (A = o), 0 === n)) {
                        if (((z += l - w), x > w)) {
                          x -= w;
                          do C[h++] = o[z++];
                          while (--w);
                          (z = h - y), (A = C);
                        }
                      } else if (w > n) {
                        if (((z += l + n - w), (w -= n), x > w)) {
                          x -= w;
                          do C[h++] = o[z++];
                          while (--w);
                          if (((z = 0), x > n)) {
                            (w = n), (x -= w);
                            do C[h++] = o[z++];
                            while (--w);
                            (z = h - y), (A = C);
                          }
                        }
                      } else if (((z += n - w), x > w)) {
                        x -= w;
                        do C[h++] = o[z++];
                        while (--w);
                        (z = h - y), (A = C);
                      }
                      for (; x > 2; ) (C[h++] = A[z++]), (C[h++] = A[z++]), (C[h++] = A[z++]), (x -= 3);
                      x && ((C[h++] = A[z++]), x > 1 && (C[h++] = A[z++]));
                    } else {
                      z = h - y;
                      do (C[h++] = C[z++]), (C[h++] = C[z++]), (C[h++] = C[z++]), (x -= 3);
                      while (x > 2);
                      x && ((C[h++] = C[z++]), x > 1 && (C[h++] = C[z++]));
                    }
                    break;
                  }
                }
                break;
              }
            } while (g > f && j > h);
            (x = q >> 3),
              (f -= x),
              (q -= x << 3),
              (p &= (1 << q) - 1),
              (a.next_in = f),
              (a.next_out = h),
              (a.avail_in = g > f ? 5 + (g - f) : 5 - (f - g)),
              (a.avail_out = j > h ? 257 + (j - h) : 257 - (h - j)),
              (e.hold = p),
              (e.bits = q);
          };
        },
        {},
      ],
      35: [
        function (a, b, c) {
          'use strict';
          function d(a) {
            return ((a >>> 24) & 255) + ((a >>> 8) & 65280) + ((65280 & a) << 8) + ((255 & a) << 24);
          }
          function e() {
            (this.mode = 0),
              (this.last = !1),
              (this.wrap = 0),
              (this.havedict = !1),
              (this.flags = 0),
              (this.dmax = 0),
              (this.check = 0),
              (this.total = 0),
              (this.head = null),
              (this.wbits = 0),
              (this.wsize = 0),
              (this.whave = 0),
              (this.wnext = 0),
              (this.window = null),
              (this.hold = 0),
              (this.bits = 0),
              (this.length = 0),
              (this.offset = 0),
              (this.extra = 0),
              (this.lencode = null),
              (this.distcode = null),
              (this.lenbits = 0),
              (this.distbits = 0),
              (this.ncode = 0),
              (this.nlen = 0),
              (this.ndist = 0),
              (this.have = 0),
              (this.next = null),
              (this.lens = new r.Buf16(320)),
              (this.work = new r.Buf16(288)),
              (this.lendyn = null),
              (this.distdyn = null),
              (this.sane = 0),
              (this.back = 0),
              (this.was = 0);
          }
          function f(a) {
            var b;
            return a && a.state
              ? ((b = a.state),
                (a.total_in = a.total_out = b.total = 0),
                (a.msg = ''),
                b.wrap && (a.adler = 1 & b.wrap),
                (b.mode = K),
                (b.last = 0),
                (b.havedict = 0),
                (b.dmax = 32768),
                (b.head = null),
                (b.hold = 0),
                (b.bits = 0),
                (b.lencode = b.lendyn = new r.Buf32(ob)),
                (b.distcode = b.distdyn = new r.Buf32(pb)),
                (b.sane = 1),
                (b.back = -1),
                C)
              : F;
          }
          function g(a) {
            var b;
            return a && a.state ? ((b = a.state), (b.wsize = 0), (b.whave = 0), (b.wnext = 0), f(a)) : F;
          }
          function h(a, b) {
            var c, d;
            return a && a.state
              ? ((d = a.state),
                0 > b ? ((c = 0), (b = -b)) : ((c = (b >> 4) + 1), 48 > b && (b &= 15)),
                b && (8 > b || b > 15) ? F : (null !== d.window && d.wbits !== b && (d.window = null), (d.wrap = c), (d.wbits = b), g(a)))
              : F;
          }
          function i(a, b) {
            var c, d;
            return a ? ((d = new e()), (a.state = d), (d.window = null), (c = h(a, b)), c !== C && (a.state = null), c) : F;
          }
          function j(a) {
            return i(a, rb);
          }
          function k(a) {
            if (sb) {
              var b;
              for (p = new r.Buf32(512), q = new r.Buf32(32), b = 0; 144 > b; ) a.lens[b++] = 8;
              for (; 256 > b; ) a.lens[b++] = 9;
              for (; 280 > b; ) a.lens[b++] = 7;
              for (; 288 > b; ) a.lens[b++] = 8;
              for (v(x, a.lens, 0, 288, p, 0, a.work, {bits: 9}), b = 0; 32 > b; ) a.lens[b++] = 5;
              v(y, a.lens, 0, 32, q, 0, a.work, {bits: 5}), (sb = !1);
            }
            (a.lencode = p), (a.lenbits = 9), (a.distcode = q), (a.distbits = 5);
          }
          function l(a, b, c, d) {
            var e,
              f = a.state;
            return (
              null === f.window && ((f.wsize = 1 << f.wbits), (f.wnext = 0), (f.whave = 0), (f.window = new r.Buf8(f.wsize))),
              d >= f.wsize
                ? (r.arraySet(f.window, b, c - f.wsize, f.wsize, 0), (f.wnext = 0), (f.whave = f.wsize))
                : ((e = f.wsize - f.wnext),
                  e > d && (e = d),
                  r.arraySet(f.window, b, c - d, e, f.wnext),
                  (d -= e),
                  d
                    ? (r.arraySet(f.window, b, c - d, d, 0), (f.wnext = d), (f.whave = f.wsize))
                    : ((f.wnext += e), f.wnext === f.wsize && (f.wnext = 0), f.whave < f.wsize && (f.whave += e))),
              0
            );
          }
          function m(a, b) {
            var c,
              e,
              f,
              g,
              h,
              i,
              j,
              m,
              n,
              o,
              p,
              q,
              ob,
              pb,
              qb,
              rb,
              sb,
              tb,
              ub,
              vb,
              wb,
              xb,
              yb,
              zb,
              Ab = 0,
              Bb = new r.Buf8(4),
              Cb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!a || !a.state || !a.output || (!a.input && 0 !== a.avail_in)) return F;
            (c = a.state),
              c.mode === V && (c.mode = W),
              (h = a.next_out),
              (f = a.output),
              (j = a.avail_out),
              (g = a.next_in),
              (e = a.input),
              (i = a.avail_in),
              (m = c.hold),
              (n = c.bits),
              (o = i),
              (p = j),
              (xb = C);
            a: for (;;)
              switch (c.mode) {
                case K:
                  if (0 === c.wrap) {
                    c.mode = W;
                    break;
                  }
                  for (; 16 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (2 & c.wrap && 35615 === m) {
                    (c.check = 0), (Bb[0] = 255 & m), (Bb[1] = (m >>> 8) & 255), (c.check = t(c.check, Bb, 2, 0)), (m = 0), (n = 0), (c.mode = L);
                    break;
                  }
                  if (((c.flags = 0), c.head && (c.head.done = !1), !(1 & c.wrap) || (((255 & m) << 8) + (m >> 8)) % 31)) {
                    (a.msg = 'incorrect header check'), (c.mode = lb);
                    break;
                  }
                  if ((15 & m) !== J) {
                    (a.msg = 'unknown compression method'), (c.mode = lb);
                    break;
                  }
                  if (((m >>>= 4), (n -= 4), (wb = (15 & m) + 8), 0 === c.wbits)) c.wbits = wb;
                  else if (wb > c.wbits) {
                    (a.msg = 'invalid window size'), (c.mode = lb);
                    break;
                  }
                  (c.dmax = 1 << wb), (a.adler = c.check = 1), (c.mode = 512 & m ? T : V), (m = 0), (n = 0);
                  break;
                case L:
                  for (; 16 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (((c.flags = m), (255 & c.flags) !== J)) {
                    (a.msg = 'unknown compression method'), (c.mode = lb);
                    break;
                  }
                  if (57344 & c.flags) {
                    (a.msg = 'unknown header flags set'), (c.mode = lb);
                    break;
                  }
                  c.head && (c.head.text = (m >> 8) & 1),
                    512 & c.flags && ((Bb[0] = 255 & m), (Bb[1] = (m >>> 8) & 255), (c.check = t(c.check, Bb, 2, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = M);
                case M:
                  for (; 32 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  c.head && (c.head.time = m),
                    512 & c.flags &&
                      ((Bb[0] = 255 & m), (Bb[1] = (m >>> 8) & 255), (Bb[2] = (m >>> 16) & 255), (Bb[3] = (m >>> 24) & 255), (c.check = t(c.check, Bb, 4, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = N);
                case N:
                  for (; 16 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  c.head && ((c.head.xflags = 255 & m), (c.head.os = m >> 8)),
                    512 & c.flags && ((Bb[0] = 255 & m), (Bb[1] = (m >>> 8) & 255), (c.check = t(c.check, Bb, 2, 0))),
                    (m = 0),
                    (n = 0),
                    (c.mode = O);
                case O:
                  if (1024 & c.flags) {
                    for (; 16 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.length = m),
                      c.head && (c.head.extra_len = m),
                      512 & c.flags && ((Bb[0] = 255 & m), (Bb[1] = (m >>> 8) & 255), (c.check = t(c.check, Bb, 2, 0))),
                      (m = 0),
                      (n = 0);
                  } else c.head && (c.head.extra = null);
                  c.mode = P;
                case P:
                  if (
                    1024 & c.flags &&
                    ((q = c.length),
                    q > i && (q = i),
                    q &&
                      (c.head &&
                        ((wb = c.head.extra_len - c.length),
                        c.head.extra || (c.head.extra = new Array(c.head.extra_len)),
                        r.arraySet(c.head.extra, e, g, q, wb)),
                      512 & c.flags && (c.check = t(c.check, e, q, g)),
                      (i -= q),
                      (g += q),
                      (c.length -= q)),
                    c.length)
                  )
                    break a;
                  (c.length = 0), (c.mode = Q);
                case Q:
                  if (2048 & c.flags) {
                    if (0 === i) break a;
                    q = 0;
                    do (wb = e[g + q++]), c.head && wb && c.length < 65536 && (c.head.name += String.fromCharCode(wb));
                    while (wb && i > q);
                    if ((512 & c.flags && (c.check = t(c.check, e, q, g)), (i -= q), (g += q), wb)) break a;
                  } else c.head && (c.head.name = null);
                  (c.length = 0), (c.mode = R);
                case R:
                  if (4096 & c.flags) {
                    if (0 === i) break a;
                    q = 0;
                    do (wb = e[g + q++]), c.head && wb && c.length < 65536 && (c.head.comment += String.fromCharCode(wb));
                    while (wb && i > q);
                    if ((512 & c.flags && (c.check = t(c.check, e, q, g)), (i -= q), (g += q), wb)) break a;
                  } else c.head && (c.head.comment = null);
                  c.mode = S;
                case S:
                  if (512 & c.flags) {
                    for (; 16 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (m !== (65535 & c.check)) {
                      (a.msg = 'header crc mismatch'), (c.mode = lb);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.head && ((c.head.hcrc = (c.flags >> 9) & 1), (c.head.done = !0)), (a.adler = c.check = 0), (c.mode = V);
                  break;
                case T:
                  for (; 32 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  (a.adler = c.check = d(m)), (m = 0), (n = 0), (c.mode = U);
                case U:
                  if (0 === c.havedict) return (a.next_out = h), (a.avail_out = j), (a.next_in = g), (a.avail_in = i), (c.hold = m), (c.bits = n), E;
                  (a.adler = c.check = 1), (c.mode = V);
                case V:
                  if (b === A || b === B) break a;
                case W:
                  if (c.last) {
                    (m >>>= 7 & n), (n -= 7 & n), (c.mode = ib);
                    break;
                  }
                  for (; 3 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  switch (((c.last = 1 & m), (m >>>= 1), (n -= 1), 3 & m)) {
                    case 0:
                      c.mode = X;
                      break;
                    case 1:
                      if ((k(c), (c.mode = bb), b === B)) {
                        (m >>>= 2), (n -= 2);
                        break a;
                      }
                      break;
                    case 2:
                      c.mode = $;
                      break;
                    case 3:
                      (a.msg = 'invalid block type'), (c.mode = lb);
                  }
                  (m >>>= 2), (n -= 2);
                  break;
                case X:
                  for (m >>>= 7 & n, n -= 7 & n; 32 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if ((65535 & m) !== ((m >>> 16) ^ 65535)) {
                    (a.msg = 'invalid stored block lengths'), (c.mode = lb);
                    break;
                  }
                  if (((c.length = 65535 & m), (m = 0), (n = 0), (c.mode = Y), b === B)) break a;
                case Y:
                  c.mode = Z;
                case Z:
                  if ((q = c.length)) {
                    if ((q > i && (q = i), q > j && (q = j), 0 === q)) break a;
                    r.arraySet(f, e, g, q, h), (i -= q), (g += q), (j -= q), (h += q), (c.length -= q);
                    break;
                  }
                  c.mode = V;
                  break;
                case $:
                  for (; 14 > n; ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (
                    ((c.nlen = (31 & m) + 257),
                    (m >>>= 5),
                    (n -= 5),
                    (c.ndist = (31 & m) + 1),
                    (m >>>= 5),
                    (n -= 5),
                    (c.ncode = (15 & m) + 4),
                    (m >>>= 4),
                    (n -= 4),
                    c.nlen > 286 || c.ndist > 30)
                  ) {
                    (a.msg = 'too many length or distance symbols'), (c.mode = lb);
                    break;
                  }
                  (c.have = 0), (c.mode = _);
                case _:
                  for (; c.have < c.ncode; ) {
                    for (; 3 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.lens[Cb[c.have++]] = 7 & m), (m >>>= 3), (n -= 3);
                  }
                  for (; c.have < 19; ) c.lens[Cb[c.have++]] = 0;
                  if (
                    ((c.lencode = c.lendyn),
                    (c.lenbits = 7),
                    (yb = {bits: c.lenbits}),
                    (xb = v(w, c.lens, 0, 19, c.lencode, 0, c.work, yb)),
                    (c.lenbits = yb.bits),
                    xb)
                  ) {
                    (a.msg = 'invalid code lengths set'), (c.mode = lb);
                    break;
                  }
                  (c.have = 0), (c.mode = ab);
                case ab:
                  for (; c.have < c.nlen + c.ndist; ) {
                    for (; (Ab = c.lencode[m & ((1 << c.lenbits) - 1)]), (qb = Ab >>> 24), (rb = (Ab >>> 16) & 255), (sb = 65535 & Ab), !(n >= qb); ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (16 > sb) (m >>>= qb), (n -= qb), (c.lens[c.have++] = sb);
                    else {
                      if (16 === sb) {
                        for (zb = qb + 2; zb > n; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        if (((m >>>= qb), (n -= qb), 0 === c.have)) {
                          (a.msg = 'invalid bit length repeat'), (c.mode = lb);
                          break;
                        }
                        (wb = c.lens[c.have - 1]), (q = 3 + (3 & m)), (m >>>= 2), (n -= 2);
                      } else if (17 === sb) {
                        for (zb = qb + 3; zb > n; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        (m >>>= qb), (n -= qb), (wb = 0), (q = 3 + (7 & m)), (m >>>= 3), (n -= 3);
                      } else {
                        for (zb = qb + 7; zb > n; ) {
                          if (0 === i) break a;
                          i--, (m += e[g++] << n), (n += 8);
                        }
                        (m >>>= qb), (n -= qb), (wb = 0), (q = 11 + (127 & m)), (m >>>= 7), (n -= 7);
                      }
                      if (c.have + q > c.nlen + c.ndist) {
                        (a.msg = 'invalid bit length repeat'), (c.mode = lb);
                        break;
                      }
                      for (; q--; ) c.lens[c.have++] = wb;
                    }
                  }
                  if (c.mode === lb) break;
                  if (0 === c.lens[256]) {
                    (a.msg = 'invalid code -- missing end-of-block'), (c.mode = lb);
                    break;
                  }
                  if (((c.lenbits = 9), (yb = {bits: c.lenbits}), (xb = v(x, c.lens, 0, c.nlen, c.lencode, 0, c.work, yb)), (c.lenbits = yb.bits), xb)) {
                    (a.msg = 'invalid literal/lengths set'), (c.mode = lb);
                    break;
                  }
                  if (
                    ((c.distbits = 6),
                    (c.distcode = c.distdyn),
                    (yb = {bits: c.distbits}),
                    (xb = v(y, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, yb)),
                    (c.distbits = yb.bits),
                    xb)
                  ) {
                    (a.msg = 'invalid distances set'), (c.mode = lb);
                    break;
                  }
                  if (((c.mode = bb), b === B)) break a;
                case bb:
                  c.mode = cb;
                case cb:
                  if (i >= 6 && j >= 258) {
                    (a.next_out = h),
                      (a.avail_out = j),
                      (a.next_in = g),
                      (a.avail_in = i),
                      (c.hold = m),
                      (c.bits = n),
                      u(a, p),
                      (h = a.next_out),
                      (f = a.output),
                      (j = a.avail_out),
                      (g = a.next_in),
                      (e = a.input),
                      (i = a.avail_in),
                      (m = c.hold),
                      (n = c.bits),
                      c.mode === V && (c.back = -1);
                    break;
                  }
                  for (c.back = 0; (Ab = c.lencode[m & ((1 << c.lenbits) - 1)]), (qb = Ab >>> 24), (rb = (Ab >>> 16) & 255), (sb = 65535 & Ab), !(n >= qb); ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (rb && 0 === (240 & rb)) {
                    for (
                      tb = qb, ub = rb, vb = sb;
                      (Ab = c.lencode[vb + ((m & ((1 << (tb + ub)) - 1)) >> tb)]),
                        (qb = Ab >>> 24),
                        (rb = (Ab >>> 16) & 255),
                        (sb = 65535 & Ab),
                        !(n >= tb + qb);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (m >>>= tb), (n -= tb), (c.back += tb);
                  }
                  if (((m >>>= qb), (n -= qb), (c.back += qb), (c.length = sb), 0 === rb)) {
                    c.mode = hb;
                    break;
                  }
                  if (32 & rb) {
                    (c.back = -1), (c.mode = V);
                    break;
                  }
                  if (64 & rb) {
                    (a.msg = 'invalid literal/length code'), (c.mode = lb);
                    break;
                  }
                  (c.extra = 15 & rb), (c.mode = db);
                case db:
                  if (c.extra) {
                    for (zb = c.extra; zb > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.length += m & ((1 << c.extra) - 1)), (m >>>= c.extra), (n -= c.extra), (c.back += c.extra);
                  }
                  (c.was = c.length), (c.mode = eb);
                case eb:
                  for (; (Ab = c.distcode[m & ((1 << c.distbits) - 1)]), (qb = Ab >>> 24), (rb = (Ab >>> 16) & 255), (sb = 65535 & Ab), !(n >= qb); ) {
                    if (0 === i) break a;
                    i--, (m += e[g++] << n), (n += 8);
                  }
                  if (0 === (240 & rb)) {
                    for (
                      tb = qb, ub = rb, vb = sb;
                      (Ab = c.distcode[vb + ((m & ((1 << (tb + ub)) - 1)) >> tb)]),
                        (qb = Ab >>> 24),
                        (rb = (Ab >>> 16) & 255),
                        (sb = 65535 & Ab),
                        !(n >= tb + qb);

                    ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (m >>>= tb), (n -= tb), (c.back += tb);
                  }
                  if (((m >>>= qb), (n -= qb), (c.back += qb), 64 & rb)) {
                    (a.msg = 'invalid distance code'), (c.mode = lb);
                    break;
                  }
                  (c.offset = sb), (c.extra = 15 & rb), (c.mode = fb);
                case fb:
                  if (c.extra) {
                    for (zb = c.extra; zb > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    (c.offset += m & ((1 << c.extra) - 1)), (m >>>= c.extra), (n -= c.extra), (c.back += c.extra);
                  }
                  if (c.offset > c.dmax) {
                    (a.msg = 'invalid distance too far back'), (c.mode = lb);
                    break;
                  }
                  c.mode = gb;
                case gb:
                  if (0 === j) break a;
                  if (((q = p - j), c.offset > q)) {
                    if (((q = c.offset - q), q > c.whave && c.sane)) {
                      (a.msg = 'invalid distance too far back'), (c.mode = lb);
                      break;
                    }
                    q > c.wnext ? ((q -= c.wnext), (ob = c.wsize - q)) : (ob = c.wnext - q), q > c.length && (q = c.length), (pb = c.window);
                  } else (pb = f), (ob = h - c.offset), (q = c.length);
                  q > j && (q = j), (j -= q), (c.length -= q);
                  do f[h++] = pb[ob++];
                  while (--q);
                  0 === c.length && (c.mode = cb);
                  break;
                case hb:
                  if (0 === j) break a;
                  (f[h++] = c.length), j--, (c.mode = cb);
                  break;
                case ib:
                  if (c.wrap) {
                    for (; 32 > n; ) {
                      if (0 === i) break a;
                      i--, (m |= e[g++] << n), (n += 8);
                    }
                    if (
                      ((p -= j),
                      (a.total_out += p),
                      (c.total += p),
                      p && (a.adler = c.check = c.flags ? t(c.check, f, p, h - p) : s(c.check, f, p, h - p)),
                      (p = j),
                      (c.flags ? m : d(m)) !== c.check)
                    ) {
                      (a.msg = 'incorrect data check'), (c.mode = lb);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.mode = jb;
                case jb:
                  if (c.wrap && c.flags) {
                    for (; 32 > n; ) {
                      if (0 === i) break a;
                      i--, (m += e[g++] << n), (n += 8);
                    }
                    if (m !== (4294967295 & c.total)) {
                      (a.msg = 'incorrect length check'), (c.mode = lb);
                      break;
                    }
                    (m = 0), (n = 0);
                  }
                  c.mode = kb;
                case kb:
                  xb = D;
                  break a;
                case lb:
                  xb = G;
                  break a;
                case mb:
                  return H;
                case nb:
                default:
                  return F;
              }
            return (
              (a.next_out = h),
              (a.avail_out = j),
              (a.next_in = g),
              (a.avail_in = i),
              (c.hold = m),
              (c.bits = n),
              (c.wsize || (p !== a.avail_out && c.mode < lb && (c.mode < ib || b !== z))) && l(a, a.output, a.next_out, p - a.avail_out)
                ? ((c.mode = mb), H)
                : ((o -= a.avail_in),
                  (p -= a.avail_out),
                  (a.total_in += o),
                  (a.total_out += p),
                  (c.total += p),
                  c.wrap && p && (a.adler = c.check = c.flags ? t(c.check, f, p, a.next_out - p) : s(c.check, f, p, a.next_out - p)),
                  (a.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === V ? 128 : 0) + (c.mode === bb || c.mode === Y ? 256 : 0)),
                  ((0 === o && 0 === p) || b === z) && xb === C && (xb = I),
                  xb)
            );
          }
          function n(a) {
            if (!a || !a.state) return F;
            var b = a.state;
            return b.window && (b.window = null), (a.state = null), C;
          }
          function o(a, b) {
            var c;
            return a && a.state ? ((c = a.state), 0 === (2 & c.wrap) ? F : ((c.head = b), (b.done = !1), C)) : F;
          }
          var p,
            q,
            r = a('../utils/common'),
            s = a('./adler32'),
            t = a('./crc32'),
            u = a('./inffast'),
            v = a('./inftrees'),
            w = 0,
            x = 1,
            y = 2,
            z = 4,
            A = 5,
            B = 6,
            C = 0,
            D = 1,
            E = 2,
            F = -2,
            G = -3,
            H = -4,
            I = -5,
            J = 8,
            K = 1,
            L = 2,
            M = 3,
            N = 4,
            O = 5,
            P = 6,
            Q = 7,
            R = 8,
            S = 9,
            T = 10,
            U = 11,
            V = 12,
            W = 13,
            X = 14,
            Y = 15,
            Z = 16,
            $ = 17,
            _ = 18,
            ab = 19,
            bb = 20,
            cb = 21,
            db = 22,
            eb = 23,
            fb = 24,
            gb = 25,
            hb = 26,
            ib = 27,
            jb = 28,
            kb = 29,
            lb = 30,
            mb = 31,
            nb = 32,
            ob = 852,
            pb = 592,
            qb = 15,
            rb = qb,
            sb = !0;
          (c.inflateReset = g),
            (c.inflateReset2 = h),
            (c.inflateResetKeep = f),
            (c.inflateInit = j),
            (c.inflateInit2 = i),
            (c.inflate = m),
            (c.inflateEnd = n),
            (c.inflateGetHeader = o),
            (c.inflateInfo = 'pako inflate (from Nodeca project)');
        },
        {'../utils/common': 27, './adler32': 29, './crc32': 31, './inffast': 34, './inftrees': 36},
      ],
      36: [
        function (a, b) {
          'use strict';
          var c = a('../utils/common'),
            d = 15,
            e = 852,
            f = 592,
            g = 0,
            h = 1,
            i = 2,
            j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
            k = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
            l = [
              1,
              2,
              3,
              4,
              5,
              7,
              9,
              13,
              17,
              25,
              33,
              49,
              65,
              97,
              129,
              193,
              257,
              385,
              513,
              769,
              1025,
              1537,
              2049,
              3073,
              4097,
              6145,
              8193,
              12289,
              16385,
              24577,
              0,
              0,
            ],
            m = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          b.exports = function (a, b, n, o, p, q, r, s) {
            var t,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C = s.bits,
              D = 0,
              E = 0,
              F = 0,
              G = 0,
              H = 0,
              I = 0,
              J = 0,
              K = 0,
              L = 0,
              M = 0,
              N = null,
              O = 0,
              P = new c.Buf16(d + 1),
              Q = new c.Buf16(d + 1),
              R = null,
              S = 0;
            for (D = 0; d >= D; D++) P[D] = 0;
            for (E = 0; o > E; E++) P[b[n + E]]++;
            for (H = C, G = d; G >= 1 && 0 === P[G]; G--);
            if ((H > G && (H = G), 0 === G)) return (p[q++] = 20971520), (p[q++] = 20971520), (s.bits = 1), 0;
            for (F = 1; G > F && 0 === P[F]; F++);
            for (F > H && (H = F), K = 1, D = 1; d >= D; D++) if (((K <<= 1), (K -= P[D]), 0 > K)) return -1;
            if (K > 0 && (a === g || 1 !== G)) return -1;
            for (Q[1] = 0, D = 1; d > D; D++) Q[D + 1] = Q[D] + P[D];
            for (E = 0; o > E; E++) 0 !== b[n + E] && (r[Q[b[n + E]]++] = E);
            if (
              (a === g ? ((N = R = r), (y = 19)) : a === h ? ((N = j), (O -= 257), (R = k), (S -= 257), (y = 256)) : ((N = l), (R = m), (y = -1)),
              (M = 0),
              (E = 0),
              (D = F),
              (x = q),
              (I = H),
              (J = 0),
              (v = -1),
              (L = 1 << H),
              (w = L - 1),
              (a === h && L > e) || (a === i && L > f))
            )
              return 1;
            for (var T = 0; ; ) {
              T++,
                (z = D - J),
                r[E] < y ? ((A = 0), (B = r[E])) : r[E] > y ? ((A = R[S + r[E]]), (B = N[O + r[E]])) : ((A = 96), (B = 0)),
                (t = 1 << (D - J)),
                (u = 1 << I),
                (F = u);
              do (u -= t), (p[x + (M >> J) + u] = (z << 24) | (A << 16) | B | 0);
              while (0 !== u);
              for (t = 1 << (D - 1); M & t; ) t >>= 1;
              if ((0 !== t ? ((M &= t - 1), (M += t)) : (M = 0), E++, 0 === --P[D])) {
                if (D === G) break;
                D = b[n + r[E]];
              }
              if (D > H && (M & w) !== v) {
                for (0 === J && (J = H), x += F, I = D - J, K = 1 << I; G > I + J && ((K -= P[I + J]), !(0 >= K)); ) I++, (K <<= 1);
                if (((L += 1 << I), (a === h && L > e) || (a === i && L > f))) return 1;
                (v = M & w), (p[v] = (H << 24) | (I << 16) | (x - q) | 0);
              }
            }
            return 0 !== M && (p[x + M] = ((D - J) << 24) | (64 << 16) | 0), (s.bits = H), 0;
          };
        },
        {'../utils/common': 27},
      ],
      37: [
        function (a, b) {
          'use strict';
          b.exports = {
            2: 'need dictionary',
            1: 'stream end',
            0: '',
            '-1': 'file error',
            '-2': 'stream error',
            '-3': 'data error',
            '-4': 'insufficient memory',
            '-5': 'buffer error',
            '-6': 'incompatible version',
          };
        },
        {},
      ],
      38: [
        function (a, b, c) {
          'use strict';
          function d(a) {
            for (var b = a.length; --b >= 0; ) a[b] = 0;
          }
          function e(a) {
            return 256 > a ? gb[a] : gb[256 + (a >>> 7)];
          }
          function f(a, b) {
            (a.pending_buf[a.pending++] = 255 & b), (a.pending_buf[a.pending++] = (b >>> 8) & 255);
          }
          function g(a, b, c) {
            a.bi_valid > V - c
              ? ((a.bi_buf |= (b << a.bi_valid) & 65535), f(a, a.bi_buf), (a.bi_buf = b >> (V - a.bi_valid)), (a.bi_valid += c - V))
              : ((a.bi_buf |= (b << a.bi_valid) & 65535), (a.bi_valid += c));
          }
          function h(a, b, c) {
            g(a, c[2 * b], c[2 * b + 1]);
          }
          function i(a, b) {
            var c = 0;
            do (c |= 1 & a), (a >>>= 1), (c <<= 1);
            while (--b > 0);
            return c >>> 1;
          }
          function j(a) {
            16 === a.bi_valid
              ? (f(a, a.bi_buf), (a.bi_buf = 0), (a.bi_valid = 0))
              : a.bi_valid >= 8 && ((a.pending_buf[a.pending++] = 255 & a.bi_buf), (a.bi_buf >>= 8), (a.bi_valid -= 8));
          }
          function k(a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i = b.dyn_tree,
              j = b.max_code,
              k = b.stat_desc.static_tree,
              l = b.stat_desc.has_stree,
              m = b.stat_desc.extra_bits,
              n = b.stat_desc.extra_base,
              o = b.stat_desc.max_length,
              p = 0;
            for (f = 0; U >= f; f++) a.bl_count[f] = 0;
            for (i[2 * a.heap[a.heap_max] + 1] = 0, c = a.heap_max + 1; T > c; c++)
              (d = a.heap[c]),
                (f = i[2 * i[2 * d + 1] + 1] + 1),
                f > o && ((f = o), p++),
                (i[2 * d + 1] = f),
                d > j ||
                  (a.bl_count[f]++,
                  (g = 0),
                  d >= n && (g = m[d - n]),
                  (h = i[2 * d]),
                  (a.opt_len += h * (f + g)),
                  l && (a.static_len += h * (k[2 * d + 1] + g)));
            if (0 !== p) {
              do {
                for (f = o - 1; 0 === a.bl_count[f]; ) f--;
                a.bl_count[f]--, (a.bl_count[f + 1] += 2), a.bl_count[o]--, (p -= 2);
              } while (p > 0);
              for (f = o; 0 !== f; f--)
                for (d = a.bl_count[f]; 0 !== d; )
                  (e = a.heap[--c]), e > j || (i[2 * e + 1] !== f && ((a.opt_len += (f - i[2 * e + 1]) * i[2 * e]), (i[2 * e + 1] = f)), d--);
            }
          }
          function l(a, b, c) {
            var d,
              e,
              f = new Array(U + 1),
              g = 0;
            for (d = 1; U >= d; d++) f[d] = g = (g + c[d - 1]) << 1;
            for (e = 0; b >= e; e++) {
              var h = a[2 * e + 1];
              0 !== h && (a[2 * e] = i(f[h]++, h));
            }
          }
          function m() {
            var a,
              b,
              c,
              d,
              e,
              f = new Array(U + 1);
            for (c = 0, d = 0; O - 1 > d; d++) for (ib[d] = c, a = 0; a < 1 << _[d]; a++) hb[c++] = d;
            for (hb[c - 1] = d, e = 0, d = 0; 16 > d; d++) for (jb[d] = e, a = 0; a < 1 << ab[d]; a++) gb[e++] = d;
            for (e >>= 7; R > d; d++) for (jb[d] = e << 7, a = 0; a < 1 << (ab[d] - 7); a++) gb[256 + e++] = d;
            for (b = 0; U >= b; b++) f[b] = 0;
            for (a = 0; 143 >= a; ) (eb[2 * a + 1] = 8), a++, f[8]++;
            for (; 255 >= a; ) (eb[2 * a + 1] = 9), a++, f[9]++;
            for (; 279 >= a; ) (eb[2 * a + 1] = 7), a++, f[7]++;
            for (; 287 >= a; ) (eb[2 * a + 1] = 8), a++, f[8]++;
            for (l(eb, Q + 1, f), a = 0; R > a; a++) (fb[2 * a + 1] = 5), (fb[2 * a] = i(a, 5));
            (kb = new nb(eb, _, P + 1, Q, U)), (lb = new nb(fb, ab, 0, R, U)), (mb = new nb(new Array(0), bb, 0, S, W));
          }
          function n(a) {
            var b;
            for (b = 0; Q > b; b++) a.dyn_ltree[2 * b] = 0;
            for (b = 0; R > b; b++) a.dyn_dtree[2 * b] = 0;
            for (b = 0; S > b; b++) a.bl_tree[2 * b] = 0;
            (a.dyn_ltree[2 * X] = 1), (a.opt_len = a.static_len = 0), (a.last_lit = a.matches = 0);
          }
          function o(a) {
            a.bi_valid > 8 ? f(a, a.bi_buf) : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf), (a.bi_buf = 0), (a.bi_valid = 0);
          }
          function p(a, b, c, d) {
            o(a), d && (f(a, c), f(a, ~c)), E.arraySet(a.pending_buf, a.window, b, c, a.pending), (a.pending += c);
          }
          function q(a, b, c, d) {
            var e = 2 * b,
              f = 2 * c;
            return a[e] < a[f] || (a[e] === a[f] && d[b] <= d[c]);
          }
          function r(a, b, c) {
            for (
              var d = a.heap[c], e = c << 1;
              e <= a.heap_len && (e < a.heap_len && q(b, a.heap[e + 1], a.heap[e], a.depth) && e++, !q(b, d, a.heap[e], a.depth));

            )
              (a.heap[c] = a.heap[e]), (c = e), (e <<= 1);
            a.heap[c] = d;
          }
          function s(a, b, c) {
            var d,
              f,
              i,
              j,
              k = 0;
            if (0 !== a.last_lit)
              do
                (d = (a.pending_buf[a.d_buf + 2 * k] << 8) | a.pending_buf[a.d_buf + 2 * k + 1]),
                  (f = a.pending_buf[a.l_buf + k]),
                  k++,
                  0 === d
                    ? h(a, f, b)
                    : ((i = hb[f]),
                      h(a, i + P + 1, b),
                      (j = _[i]),
                      0 !== j && ((f -= ib[i]), g(a, f, j)),
                      d--,
                      (i = e(d)),
                      h(a, i, c),
                      (j = ab[i]),
                      0 !== j && ((d -= jb[i]), g(a, d, j)));
              while (k < a.last_lit);
            h(a, X, b);
          }
          function t(a, b) {
            var c,
              d,
              e,
              f = b.dyn_tree,
              g = b.stat_desc.static_tree,
              h = b.stat_desc.has_stree,
              i = b.stat_desc.elems,
              j = -1;
            for (a.heap_len = 0, a.heap_max = T, c = 0; i > c; c++) 0 !== f[2 * c] ? ((a.heap[++a.heap_len] = j = c), (a.depth[c] = 0)) : (f[2 * c + 1] = 0);
            for (; a.heap_len < 2; )
              (e = a.heap[++a.heap_len] = 2 > j ? ++j : 0), (f[2 * e] = 1), (a.depth[e] = 0), a.opt_len--, h && (a.static_len -= g[2 * e + 1]);
            for (b.max_code = j, c = a.heap_len >> 1; c >= 1; c--) r(a, f, c);
            e = i;
            do
              (c = a.heap[1]),
                (a.heap[1] = a.heap[a.heap_len--]),
                r(a, f, 1),
                (d = a.heap[1]),
                (a.heap[--a.heap_max] = c),
                (a.heap[--a.heap_max] = d),
                (f[2 * e] = f[2 * c] + f[2 * d]),
                (a.depth[e] = (a.depth[c] >= a.depth[d] ? a.depth[c] : a.depth[d]) + 1),
                (f[2 * c + 1] = f[2 * d + 1] = e),
                (a.heap[1] = e++),
                r(a, f, 1);
            while (a.heap_len >= 2);
            (a.heap[--a.heap_max] = a.heap[1]), k(a, b), l(f, j, a.bl_count);
          }
          function u(a, b, c) {
            var d,
              e,
              f = -1,
              g = b[1],
              h = 0,
              i = 7,
              j = 4;
            for (0 === g && ((i = 138), (j = 3)), b[2 * (c + 1) + 1] = 65535, d = 0; c >= d; d++)
              (e = g),
                (g = b[2 * (d + 1) + 1]),
                (++h < i && e === g) ||
                  (j > h
                    ? (a.bl_tree[2 * e] += h)
                    : 0 !== e
                    ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[2 * Y]++)
                    : 10 >= h
                    ? a.bl_tree[2 * Z]++
                    : a.bl_tree[2 * $]++,
                  (h = 0),
                  (f = e),
                  0 === g ? ((i = 138), (j = 3)) : e === g ? ((i = 6), (j = 3)) : ((i = 7), (j = 4)));
          }
          function v(a, b, c) {
            var d,
              e,
              f = -1,
              i = b[1],
              j = 0,
              k = 7,
              l = 4;
            for (0 === i && ((k = 138), (l = 3)), d = 0; c >= d; d++)
              if (((e = i), (i = b[2 * (d + 1) + 1]), !(++j < k && e === i))) {
                if (l > j) {
                  do h(a, e, a.bl_tree);
                  while (0 !== --j);
                } else
                  0 !== e
                    ? (e !== f && (h(a, e, a.bl_tree), j--), h(a, Y, a.bl_tree), g(a, j - 3, 2))
                    : 10 >= j
                    ? (h(a, Z, a.bl_tree), g(a, j - 3, 3))
                    : (h(a, $, a.bl_tree), g(a, j - 11, 7));
                (j = 0), (f = e), 0 === i ? ((k = 138), (l = 3)) : e === i ? ((k = 6), (l = 3)) : ((k = 7), (l = 4));
              }
          }
          function w(a) {
            var b;
            for (
              u(a, a.dyn_ltree, a.l_desc.max_code), u(a, a.dyn_dtree, a.d_desc.max_code), t(a, a.bl_desc), b = S - 1;
              b >= 3 && 0 === a.bl_tree[2 * cb[b] + 1];
              b--
            );
            return (a.opt_len += 3 * (b + 1) + 5 + 5 + 4), b;
          }
          function x(a, b, c, d) {
            var e;
            for (g(a, b - 257, 5), g(a, c - 1, 5), g(a, d - 4, 4), e = 0; d > e; e++) g(a, a.bl_tree[2 * cb[e] + 1], 3);
            v(a, a.dyn_ltree, b - 1), v(a, a.dyn_dtree, c - 1);
          }
          function y(a) {
            var b,
              c = 4093624447;
            for (b = 0; 31 >= b; b++, c >>>= 1) if (1 & c && 0 !== a.dyn_ltree[2 * b]) return G;
            if (0 !== a.dyn_ltree[18] || 0 !== a.dyn_ltree[20] || 0 !== a.dyn_ltree[26]) return H;
            for (b = 32; P > b; b++) if (0 !== a.dyn_ltree[2 * b]) return H;
            return G;
          }
          function z(a) {
            pb || (m(), (pb = !0)),
              (a.l_desc = new ob(a.dyn_ltree, kb)),
              (a.d_desc = new ob(a.dyn_dtree, lb)),
              (a.bl_desc = new ob(a.bl_tree, mb)),
              (a.bi_buf = 0),
              (a.bi_valid = 0),
              n(a);
          }
          function A(a, b, c, d) {
            g(a, (J << 1) + (d ? 1 : 0), 3), p(a, b, c, !0);
          }
          function B(a) {
            g(a, K << 1, 3), h(a, X, eb), j(a);
          }
          function C(a, b, c, d) {
            var e,
              f,
              h = 0;
            a.level > 0
              ? (a.strm.data_type === I && (a.strm.data_type = y(a)),
                t(a, a.l_desc),
                t(a, a.d_desc),
                (h = w(a)),
                (e = (a.opt_len + 3 + 7) >>> 3),
                (f = (a.static_len + 3 + 7) >>> 3),
                e >= f && (e = f))
              : (e = f = c + 5),
              e >= c + 4 && -1 !== b
                ? A(a, b, c, d)
                : a.strategy === F || f === e
                ? (g(a, (K << 1) + (d ? 1 : 0), 3), s(a, eb, fb))
                : (g(a, (L << 1) + (d ? 1 : 0), 3), x(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, h + 1), s(a, a.dyn_ltree, a.dyn_dtree)),
              n(a),
              d && o(a);
          }
          function D(a, b, c) {
            return (
              (a.pending_buf[a.d_buf + 2 * a.last_lit] = (b >>> 8) & 255),
              (a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = 255 & b),
              (a.pending_buf[a.l_buf + a.last_lit] = 255 & c),
              a.last_lit++,
              0 === b ? a.dyn_ltree[2 * c]++ : (a.matches++, b--, a.dyn_ltree[2 * (hb[c] + P + 1)]++, a.dyn_dtree[2 * e(b)]++),
              a.last_lit === a.lit_bufsize - 1
            );
          }
          var E = a('../utils/common'),
            F = 4,
            G = 0,
            H = 1,
            I = 2,
            J = 0,
            K = 1,
            L = 2,
            M = 3,
            N = 258,
            O = 29,
            P = 256,
            Q = P + 1 + O,
            R = 30,
            S = 19,
            T = 2 * Q + 1,
            U = 15,
            V = 16,
            W = 7,
            X = 256,
            Y = 16,
            Z = 17,
            $ = 18,
            _ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            ab = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            bb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            cb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            db = 512,
            eb = new Array(2 * (Q + 2));
          d(eb);
          var fb = new Array(2 * R);
          d(fb);
          var gb = new Array(db);
          d(gb);
          var hb = new Array(N - M + 1);
          d(hb);
          var ib = new Array(O);
          d(ib);
          var jb = new Array(R);
          d(jb);
          var kb,
            lb,
            mb,
            nb = function (a, b, c, d, e) {
              (this.static_tree = a), (this.extra_bits = b), (this.extra_base = c), (this.elems = d), (this.max_length = e), (this.has_stree = a && a.length);
            },
            ob = function (a, b) {
              (this.dyn_tree = a), (this.max_code = 0), (this.stat_desc = b);
            },
            pb = !1;
          (c._tr_init = z), (c._tr_stored_block = A), (c._tr_flush_block = C), (c._tr_tally = D), (c._tr_align = B);
        },
        {'../utils/common': 27},
      ],
      39: [
        function (a, b) {
          'use strict';
          function c() {
            (this.input = null),
              (this.next_in = 0),
              (this.avail_in = 0),
              (this.total_in = 0),
              (this.output = null),
              (this.next_out = 0),
              (this.avail_out = 0),
              (this.total_out = 0),
              (this.msg = ''),
              (this.state = null),
              (this.data_type = 2),
              (this.adler = 0);
          }
          b.exports = c;
        },
        {},
      ],
    },
    {},
    [9],
  )(9);
});

/*!
   Copyright 2008-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.21
 ©2008-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (f, y, w) {
  f instanceof String && (f = String(f));
  for (var n = f.length, H = 0; H < n; H++) {
    var L = f[H];
    if (y.call(w, L, H, f)) return {i: H, v: L};
  }
  return {i: -1, v: void 0};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (f, y, w) {
        f != Array.prototype && f != Object.prototype && (f[y] = w.value);
      };
$jscomp.getGlobal = function (f) {
  f = ['object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global, f];
  for (var y = 0; y < f.length; ++y) {
    var w = f[y];
    if (w && w.Math == Math) return w;
  }
  throw Error('Cannot find global object');
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (f, y, w, n) {
  if (y) {
    w = $jscomp.global;
    f = f.split('.');
    for (n = 0; n < f.length - 1; n++) {
      var H = f[n];
      H in w || (w[H] = {});
      w = w[H];
    }
    f = f[f.length - 1];
    n = w[f];
    y = y(n);
    y != n && null != y && $jscomp.defineProperty(w, f, {configurable: !0, writable: !0, value: y});
  }
};
$jscomp.polyfill(
  'Array.prototype.find',
  function (f) {
    return f
      ? f
      : function (f, w) {
          return $jscomp.findInternal(this, f, w).v;
        };
  },
  'es6',
  'es3',
);
(function (f) {
  'function' === typeof define && define.amd
    ? define(['jquery'], function (y) {
        return f(y, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (y, w) {
        y || (y = window);
        w || (w = 'undefined' !== typeof window ? require('jquery') : require('jquery')(y));
        return f(w, y, y.document);
      })
    : f(jQuery, window, document);
})(function (f, y, w, n) {
  function H(a) {
    var b,
      c,
      d = {};
    f.each(a, function (e, h) {
      (b = e.match(/^([^A-Z]+?)([A-Z])/)) &&
        -1 !== 'a aa ai ao as b fn i m o s '.indexOf(b[1] + ' ') &&
        ((c = e.replace(b[0], b[2].toLowerCase())), (d[c] = e), 'o' === b[1] && H(a[e]));
    });
    a._hungarianMap = d;
  }
  function L(a, b, c) {
    a._hungarianMap || H(a);
    var d;
    f.each(b, function (e, h) {
      d = a._hungarianMap[e];
      d === n || (!c && b[d] !== n) || ('o' === d.charAt(0) ? (b[d] || (b[d] = {}), f.extend(!0, b[d], b[e]), L(a[d], b[d], c)) : (b[d] = b[e]));
    });
  }
  function Fa(a) {
    var b = q.defaults.oLanguage,
      c = b.sDecimal;
    c && Ga(c);
    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable && d && 'No data available in table' === b.sEmptyTable && M(a, a, 'sZeroRecords', 'sEmptyTable');
      !a.sLoadingRecords && d && 'Loading...' === b.sLoadingRecords && M(a, a, 'sZeroRecords', 'sLoadingRecords');
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Ga(a);
    }
  }
  function ib(a) {
    E(a, 'ordering', 'bSort');
    E(a, 'orderMulti', 'bSortMulti');
    E(a, 'orderClasses', 'bSortClasses');
    E(a, 'orderCellsTop', 'bSortCellsTop');
    E(a, 'order', 'aaSorting');
    E(a, 'orderFixed', 'aaSortingFixed');
    E(a, 'paging', 'bPaginate');
    E(a, 'pagingType', 'sPaginationType');
    E(a, 'pageLength', 'iDisplayLength');
    E(a, 'searching', 'bFilter');
    'boolean' === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? '100%' : '');
    'boolean' === typeof a.scrollX && (a.scrollX = a.scrollX ? '100%' : '');
    if ((a = a.aoSearchCols)) for (var b = 0, c = a.length; b < c; b++) a[b] && L(q.models.oSearch, a[b]);
  }
  function jb(a) {
    E(a, 'orderable', 'bSortable');
    E(a, 'orderData', 'aDataSort');
    E(a, 'orderSequence', 'asSorting');
    E(a, 'orderDataType', 'sortDataType');
    var b = a.aDataSort;
    'number' !== typeof b || f.isArray(b) || (a.aDataSort = [b]);
  }
  function kb(a) {
    if (!q.__browser) {
      var b = {};
      q.__browser = b;
      var c = f('<div/>')
          .css({position: 'fixed', top: 0, left: -1 * f(y).scrollLeft(), height: 1, width: 1, overflow: 'hidden'})
          .append(
            f('<div/>')
              .css({position: 'absolute', top: 1, left: 1, width: 100, overflow: 'scroll'})
              .append(f('<div/>').css({width: '100%', height: 10})),
          )
          .appendTo('body'),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove();
    }
    f.extend(a.oBrowser, q.__browser);
    a.oScroll.iBarWidth = q.__browser.barWidth;
  }
  function lb(a, b, c, d, e, h) {
    var g = !1;
    if (c !== n) {
      var k = c;
      g = !0;
    }
    for (; d !== e; ) a.hasOwnProperty(d) && ((k = g ? b(k, a[d], d, a) : a[d]), (g = !0), (d += h));
    return k;
  }
  function Ha(a, b) {
    var c = q.defaults.column,
      d = a.aoColumns.length;
    c = f.extend({}, q.models.oColumn, c, {
      nTh: b ? b : w.createElement('th'),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : '',
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d,
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = f.extend({}, q.models.oSearch, c[d]);
    la(a, d, f(b).data());
  }
  function la(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
      e = f(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig = e.attr('width') || null;
      var h = (e.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
      h && (b.sWidthOrig = h[1]);
    }
    c !== n &&
      null !== c &&
      (jb(c),
      L(q.defaults.column, c, !0),
      c.mDataProp === n || c.mData || (c.mData = c.mDataProp),
      c.sType && (b._sManualType = c.sType),
      c.className && !c.sClass && (c.sClass = c.className),
      c.sClass && e.addClass(c.sClass),
      f.extend(b, c),
      M(b, c, 'sWidth', 'sWidthOrig'),
      c.iDataSort !== n && (b.aDataSort = [c.iDataSort]),
      M(b, c, 'aDataSort'));
    var g = b.mData,
      k = T(g),
      l = b.mRender ? T(b.mRender) : null;
    c = function (a) {
      return 'string' === typeof a && -1 !== a.indexOf('@');
    };
    b._bAttrSrc = f.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (a, b, c) {
      var d = k(a, b, n, c);
      return l && b ? l(d, b, a, c) : d;
    };
    b.fnSetData = function (a, b, c) {
      return Q(g)(a, b, c);
    };
    'number' !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || ((b.bSortable = !1), e.addClass(d.sSortableNone));
    a = -1 !== f.inArray('asc', b.asSorting);
    c = -1 !== f.inArray('desc', b.asSorting);
    b.bSortable && (a || c)
      ? a && !c
        ? ((b.sSortingClass = d.sSortableAsc), (b.sSortingClassJUI = d.sSortJUIAscAllowed))
        : !a && c
        ? ((b.sSortingClass = d.sSortableDesc), (b.sSortingClassJUI = d.sSortJUIDescAllowed))
        : ((b.sSortingClass = d.sSortable), (b.sSortingClassJUI = d.sSortJUI))
      : ((b.sSortingClass = d.sSortableNone), (b.sSortingClassJUI = ''));
  }
  function Z(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Ia(a);
      for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth;
    }
    b = a.oScroll;
    ('' === b.sY && '' === b.sX) || ma(a);
    A(a, null, 'column-sizing', [a]);
  }
  function aa(a, b) {
    a = na(a, 'bVisible');
    return 'number' === typeof a[b] ? a[b] : null;
  }
  function ba(a, b) {
    a = na(a, 'bVisible');
    b = f.inArray(b, a);
    return -1 !== b ? b : null;
  }
  function V(a) {
    var b = 0;
    f.each(a.aoColumns, function (a, d) {
      d.bVisible && 'none' !== f(d.nTh).css('display') && b++;
    });
    return b;
  }
  function na(a, b) {
    var c = [];
    f.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e);
    });
    return c;
  }
  function Ja(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = q.ext.type.detect,
      e,
      h,
      g;
    var k = 0;
    for (e = b.length; k < e; k++) {
      var f = b[k];
      var m = [];
      if (!f.sType && f._sManualType) f.sType = f._sManualType;
      else if (!f.sType) {
        var p = 0;
        for (h = d.length; p < h; p++) {
          var v = 0;
          for (g = c.length; v < g; v++) {
            m[v] === n && (m[v] = F(a, v, k, 'type'));
            var u = d[p](m[v], a);
            if (!u && p !== d.length - 1) break;
            if ('html' === u) break;
          }
          if (u) {
            f.sType = u;
            break;
          }
        }
        f.sType || (f.sType = 'string');
      }
    }
  }
  function mb(a, b, c, d) {
    var e,
      h,
      g,
      k = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        var l = b[e];
        var m = l.targets !== n ? l.targets : l.aTargets;
        f.isArray(m) || (m = [m]);
        var p = 0;
        for (h = m.length; p < h; p++)
          if ('number' === typeof m[p] && 0 <= m[p]) {
            for (; k.length <= m[p]; ) Ha(a);
            d(m[p], l);
          } else if ('number' === typeof m[p] && 0 > m[p]) d(k.length + m[p], l);
          else if ('string' === typeof m[p]) {
            var v = 0;
            for (g = k.length; v < g; v++) ('_all' == m[p] || f(k[v].nTh).hasClass(m[p])) && d(v, l);
          }
      }
    if (c) for (e = 0, a = c.length; e < a; e++) d(e, c[e]);
  }
  function R(a, b, c, d) {
    var e = a.aoData.length,
      h = f.extend(!0, {}, q.models.oRow, {src: c ? 'dom' : 'data', idx: e});
    h._aData = b;
    a.aoData.push(h);
    for (var g = a.aoColumns, k = 0, l = g.length; k < l; k++) g[k].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== n && (a.aIds[b] = h);
    (!c && a.oFeatures.bDeferRender) || Ka(a, e, c, d);
    return e;
  }
  function oa(a, b) {
    var c;
    b instanceof f || (b = f(b));
    return b.map(function (b, e) {
      c = La(a, e);
      return R(a, c.data, e, c.cells);
    });
  }
  function F(a, b, c, d) {
    var e = a.iDraw,
      h = a.aoColumns[c],
      g = a.aoData[b]._aData,
      k = h.sDefaultContent,
      f = h.fnGetData(g, d, {settings: a, row: b, col: c});
    if (f === n)
      return (
        a.iDrawError != e &&
          null === k &&
          (O(a, 0, 'Requested unknown parameter ' + ('function' == typeof h.mData ? '{function}' : "'" + h.mData + "'") + ' for row ' + b + ', column ' + c, 4),
          (a.iDrawError = e)),
        k
      );
    if ((f === g || null === f) && null !== k && d !== n) f = k;
    else if ('function' === typeof f) return f.call(g);
    return null === f && 'display' == d ? '' : f;
  }
  function nb(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {settings: a, row: b, col: c});
  }
  function Ma(a) {
    return f.map(a.match(/(\\.|[^\.])+/g) || [''], function (a) {
      return a.replace(/\\\./g, '.');
    });
  }
  function T(a) {
    if (f.isPlainObject(a)) {
      var b = {};
      f.each(a, function (a, c) {
        c && (b[a] = T(c));
      });
      return function (a, c, h, g) {
        var d = b[c] || b._;
        return d !== n ? d(a, c, h, g) : a;
      };
    }
    if (null === a)
      return function (a) {
        return a;
      };
    if ('function' === typeof a)
      return function (b, c, h, g) {
        return a(b, c, h, g);
      };
    if ('string' !== typeof a || (-1 === a.indexOf('.') && -1 === a.indexOf('[') && -1 === a.indexOf('(')))
      return function (b, c) {
        return b[a];
      };
    var c = function (a, b, h) {
      if ('' !== h) {
        var d = Ma(h);
        for (var e = 0, l = d.length; e < l; e++) {
          h = d[e].match(ca);
          var m = d[e].match(W);
          if (h) {
            d[e] = d[e].replace(ca, '');
            '' !== d[e] && (a = a[d[e]]);
            m = [];
            d.splice(0, e + 1);
            d = d.join('.');
            if (f.isArray(a)) for (e = 0, l = a.length; e < l; e++) m.push(c(a[e], b, d));
            a = h[0].substring(1, h[0].length - 1);
            a = '' === a ? m : m.join(a);
            break;
          } else if (m) {
            d[e] = d[e].replace(W, '');
            a = a[d[e]]();
            continue;
          }
          if (null === a || a[d[e]] === n) return n;
          a = a[d[e]];
        }
      }
      return a;
    };
    return function (b, e) {
      return c(b, e, a);
    };
  }
  function Q(a) {
    if (f.isPlainObject(a)) return Q(a._);
    if (null === a) return function () {};
    if ('function' === typeof a)
      return function (b, d, e) {
        a(b, 'set', d, e);
      };
    if ('string' !== typeof a || (-1 === a.indexOf('.') && -1 === a.indexOf('[') && -1 === a.indexOf('(')))
      return function (b, d) {
        b[a] = d;
      };
    var b = function (a, d, e) {
      e = Ma(e);
      var c = e[e.length - 1];
      for (var g, k, l = 0, m = e.length - 1; l < m; l++) {
        g = e[l].match(ca);
        k = e[l].match(W);
        if (g) {
          e[l] = e[l].replace(ca, '');
          a[e[l]] = [];
          c = e.slice();
          c.splice(0, l + 1);
          g = c.join('.');
          if (f.isArray(d)) for (k = 0, m = d.length; k < m; k++) (c = {}), b(c, d[k], g), a[e[l]].push(c);
          else a[e[l]] = d;
          return;
        }
        k && ((e[l] = e[l].replace(W, '')), (a = a[e[l]](d)));
        if (null === a[e[l]] || a[e[l]] === n) a[e[l]] = {};
        a = a[e[l]];
      }
      if (c.match(W)) a[c.replace(W, '')](d);
      else a[c.replace(ca, '')] = d;
    };
    return function (c, d) {
      return b(c, d, a);
    };
  }
  function Na(a) {
    return K(a.aoData, '_aData');
  }
  function pa(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {};
  }
  function qa(a, b, c) {
    for (var d = -1, e = 0, h = a.length; e < h; e++) a[e] == b ? (d = e) : a[e] > b && a[e]--;
    -1 != d && c === n && a.splice(d, 1);
  }
  function da(a, b, c, d) {
    var e = a.aoData[b],
      h,
      g = function (c, d) {
        for (; c.childNodes.length; ) c.removeChild(c.firstChild);
        c.innerHTML = F(a, b, d, 'display');
      };
    if ('dom' !== c && ((c && 'auto' !== c) || 'dom' !== e.src)) {
      var k = e.anCells;
      if (k)
        if (d !== n) g(k[d], d);
        else for (c = 0, h = k.length; c < h; c++) g(k[c], c);
    } else e._aData = La(a, e, d, d === n ? n : e._aData).data;
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== n) g[d].sType = null;
    else {
      c = 0;
      for (h = g.length; c < h; c++) g[c].sType = null;
      Oa(a, e);
    }
  }
  function La(a, b, c, d) {
    var e = [],
      h = b.firstChild,
      g,
      k = 0,
      l,
      m = a.aoColumns,
      p = a._rowReadObject;
    d = d !== n ? d : p ? {} : [];
    var v = function (a, b) {
        if ('string' === typeof a) {
          var c = a.indexOf('@');
          -1 !== c && ((c = a.substring(c + 1)), Q(a)(d, b.getAttribute(c)));
        }
      },
      u = function (a) {
        if (c === n || c === k)
          (g = m[k]),
            (l = f.trim(a.innerHTML)),
            g && g._bAttrSrc
              ? (Q(g.mData._)(d, l), v(g.mData.sort, a), v(g.mData.type, a), v(g.mData.filter, a))
              : p
              ? (g._setter || (g._setter = Q(g.mData)), g._setter(d, l))
              : (d[k] = l);
        k++;
      };
    if (h)
      for (; h; ) {
        var q = h.nodeName.toUpperCase();
        if ('TD' == q || 'TH' == q) u(h), e.push(h);
        h = h.nextSibling;
      }
    else for (e = b.anCells, h = 0, q = e.length; h < q; h++) u(e[h]);
    (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute('id')) && Q(a.rowId)(d, b);
    return {data: d, cells: e};
  }
  function Ka(a, b, c, d) {
    var e = a.aoData[b],
      h = e._aData,
      g = [],
      k,
      l;
    if (null === e.nTr) {
      var m = c || w.createElement('tr');
      e.nTr = m;
      e.anCells = g;
      m._DT_RowIndex = b;
      Oa(a, e);
      var p = 0;
      for (k = a.aoColumns.length; p < k; p++) {
        var v = a.aoColumns[p];
        var n = (l = c ? !1 : !0) ? w.createElement(v.sCellType) : d[p];
        n._DT_CellIndex = {row: b, column: p};
        g.push(n);
        if (l || !((c && !v.mRender && v.mData === p) || (f.isPlainObject(v.mData) && v.mData._ === p + '.display'))) n.innerHTML = F(a, b, p, 'display');
        v.sClass && (n.className += ' ' + v.sClass);
        v.bVisible && !c ? m.appendChild(n) : !v.bVisible && c && n.parentNode.removeChild(n);
        v.fnCreatedCell && v.fnCreatedCell.call(a.oInstance, n, F(a, b, p), h, b, p);
      }
      A(a, 'aoRowCreatedCallback', null, [m, h, b, g]);
    }
    e.nTr.setAttribute('role', 'row');
  }
  function Oa(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      if ((a = a.rowIdFn(d))) c.id = a;
      d.DT_RowClass &&
        ((a = d.DT_RowClass.split(' ')), (b.__rowc = b.__rowc ? sa(b.__rowc.concat(a)) : a), f(c).removeClass(b.__rowc.join(' ')).addClass(d.DT_RowClass));
      d.DT_RowAttr && f(c).attr(d.DT_RowAttr);
      d.DT_RowData && f(c).data(d.DT_RowData);
    }
  }
  function ob(a) {
    var b,
      c,
      d = a.nTHead,
      e = a.nTFoot,
      h = 0 === f('th, td', d).length,
      g = a.oClasses,
      k = a.aoColumns;
    h && (c = f('<tr/>').appendTo(d));
    var l = 0;
    for (b = k.length; l < b; l++) {
      var m = k[l];
      var p = f(m.nTh).addClass(m.sClass);
      h && p.appendTo(c);
      a.oFeatures.bSort &&
        (p.addClass(m.sSortingClass), !1 !== m.bSortable && (p.attr('tabindex', a.iTabIndex).attr('aria-controls', a.sTableId), Pa(a, m.nTh, l)));
      m.sTitle != p[0].innerHTML && p.html(m.sTitle);
      Qa(a, 'header')(a, p, m, g);
    }
    h && ea(a.aoHeader, d);
    f(d).find('>tr').attr('role', 'row');
    f(d).find('>tr>th, >tr>td').addClass(g.sHeaderTH);
    f(e).find('>tr>th, >tr>td').addClass(g.sFooterTH);
    if (null !== e) for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) (m = k[l]), (m.nTf = a[l].cell), m.sClass && f(m.nTf).addClass(m.sClass);
  }
  function fa(a, b, c) {
    var d,
      e,
      h = [],
      g = [],
      k = a.aoColumns.length;
    if (b) {
      c === n && (c = !1);
      var l = 0;
      for (d = b.length; l < d; l++) {
        h[l] = b[l].slice();
        h[l].nTr = b[l].nTr;
        for (e = k - 1; 0 <= e; e--) a.aoColumns[e].bVisible || c || h[l].splice(e, 1);
        g.push([]);
      }
      l = 0;
      for (d = h.length; l < d; l++) {
        if ((a = h[l].nTr)) for (; (e = a.firstChild); ) a.removeChild(e);
        e = 0;
        for (b = h[l].length; e < b; e++) {
          var m = (k = 1);
          if (g[l][e] === n) {
            a.appendChild(h[l][e].cell);
            for (g[l][e] = 1; h[l + k] !== n && h[l][e].cell == h[l + k][e].cell; ) (g[l + k][e] = 1), k++;
            for (; h[l][e + m] !== n && h[l][e].cell == h[l][e + m].cell; ) {
              for (c = 0; c < k; c++) g[l + c][e + m] = 1;
              m++;
            }
            f(h[l][e].cell).attr('rowspan', k).attr('colspan', m);
          }
        }
      }
    }
  }
  function S(a) {
    var b = A(a, 'aoPreDrawCallback', 'preDraw', [a]);
    if (-1 !== f.inArray(!1, b)) J(a, !1);
    else {
      b = [];
      var c = 0,
        d = a.asStripeClasses,
        e = d.length,
        h = a.oLanguage,
        g = a.iInitDisplayStart,
        k = 'ssp' == I(a),
        l = a.aiDisplay;
      a.bDrawing = !0;
      g !== n && -1 !== g && ((a._iDisplayStart = k ? g : g >= a.fnRecordsDisplay() ? 0 : g), (a.iInitDisplayStart = -1));
      g = a._iDisplayStart;
      var m = a.fnDisplayEnd();
      if (a.bDeferLoading) (a.bDeferLoading = !1), a.iDraw++, J(a, !1);
      else if (!k) a.iDraw++;
      else if (!a.bDestroying && !pb(a)) return;
      if (0 !== l.length)
        for (h = k ? a.aoData.length : m, k = k ? 0 : g; k < h; k++) {
          var p = l[k],
            v = a.aoData[p];
          null === v.nTr && Ka(a, p);
          var u = v.nTr;
          if (0 !== e) {
            var q = d[c % e];
            v._sRowStripe != q && (f(u).removeClass(v._sRowStripe).addClass(q), (v._sRowStripe = q));
          }
          A(a, 'aoRowCallback', null, [u, v._aData, c, k, p]);
          b.push(u);
          c++;
        }
      else
        (c = h.sZeroRecords),
          1 == a.iDraw && 'ajax' == I(a) ? (c = h.sLoadingRecords) : h.sEmptyTable && 0 === a.fnRecordsTotal() && (c = h.sEmptyTable),
          (b[0] = f('<tr/>', {class: e ? d[0] : ''}).append(f('<td />', {valign: 'top', colSpan: V(a), class: a.oClasses.sRowEmpty}).html(c))[0]);
      A(a, 'aoHeaderCallback', 'header', [f(a.nTHead).children('tr')[0], Na(a), g, m, l]);
      A(a, 'aoFooterCallback', 'footer', [f(a.nTFoot).children('tr')[0], Na(a), g, m, l]);
      d = f(a.nTBody);
      d.children().detach();
      d.append(f(b));
      A(a, 'aoDrawCallback', 'draw', [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1;
    }
  }
  function U(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && qb(a);
    d ? ha(a, a.oPreviousSearch) : (a.aiDisplay = a.aiDisplayMaster.slice());
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    S(a);
    a._drawHold = !1;
  }
  function rb(a) {
    var b = a.oClasses,
      c = f(a.nTable);
    c = f('<div/>').insertBefore(c);
    var d = a.oFeatures,
      e = f('<div/>', {id: a.sTableId + '_wrapper', class: b.sWrapper + (a.nTFoot ? '' : ' ' + b.sNoFooter)});
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var h = a.sDom.split(''), g, k, l, m, p, n, u = 0; u < h.length; u++) {
      g = null;
      k = h[u];
      if ('<' == k) {
        l = f('<div/>')[0];
        m = h[u + 1];
        if ("'" == m || '"' == m) {
          p = '';
          for (n = 2; h[u + n] != m; ) (p += h[u + n]), n++;
          'H' == p ? (p = b.sJUIHeader) : 'F' == p && (p = b.sJUIFooter);
          -1 != p.indexOf('.')
            ? ((m = p.split('.')), (l.id = m[0].substr(1, m[0].length - 1)), (l.className = m[1]))
            : '#' == p.charAt(0)
            ? (l.id = p.substr(1, p.length - 1))
            : (l.className = p);
          u += n;
        }
        e.append(l);
        e = f(l);
      } else if ('>' == k) e = e.parent();
      else if ('l' == k && d.bPaginate && d.bLengthChange) g = sb(a);
      else if ('f' == k && d.bFilter) g = tb(a);
      else if ('r' == k && d.bProcessing) g = ub(a);
      else if ('t' == k) g = vb(a);
      else if ('i' == k && d.bInfo) g = wb(a);
      else if ('p' == k && d.bPaginate) g = xb(a);
      else if (0 !== q.ext.feature.length)
        for (l = q.ext.feature, n = 0, m = l.length; n < m; n++)
          if (k == l[n].cFeature) {
            g = l[n].fnInit(a);
            break;
          }
      g && ((l = a.aanFeatures), l[k] || (l[k] = []), l[k].push(g), e.append(g));
    }
    c.replaceWith(e);
    a.nHolding = null;
  }
  function ea(a, b) {
    b = f(b).children('tr');
    var c, d, e;
    a.splice(0, a.length);
    var h = 0;
    for (e = b.length; h < e; h++) a.push([]);
    h = 0;
    for (e = b.length; h < e; h++) {
      var g = b[h];
      for (c = g.firstChild; c; ) {
        if ('TD' == c.nodeName.toUpperCase() || 'TH' == c.nodeName.toUpperCase()) {
          var k = 1 * c.getAttribute('colspan');
          var l = 1 * c.getAttribute('rowspan');
          k = k && 0 !== k && 1 !== k ? k : 1;
          l = l && 0 !== l && 1 !== l ? l : 1;
          var m = 0;
          for (d = a[h]; d[m]; ) m++;
          var p = m;
          var n = 1 === k ? !0 : !1;
          for (d = 0; d < k; d++) for (m = 0; m < l; m++) (a[h + m][p + d] = {cell: c, unique: n}), (a[h + m].nTr = g);
        }
        c = c.nextSibling;
      }
    }
  }
  function ta(a, b, c) {
    var d = [];
    c || ((c = a.aoHeader), b && ((c = []), ea(c, b)));
    b = 0;
    for (var e = c.length; b < e; b++) for (var h = 0, g = c[b].length; h < g; h++) !c[b][h].unique || (d[h] && a.bSortCellsTop) || (d[h] = c[b][h].cell);
    return d;
  }
  function ua(a, b, c) {
    A(a, 'aoServerParams', 'serverParams', [b]);
    if (b && f.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      f.each(b, function (a, b) {
        (a = b.name.match(e)) ? ((a = a[0]), d[a] || (d[a] = []), d[a].push(b.value)) : (d[b.name] = b.value);
      });
      b = d;
    }
    var h = a.ajax,
      g = a.oInstance,
      k = function (b) {
        A(a, null, 'xhr', [a, b, a.jqXHR]);
        c(b);
      };
    if (f.isPlainObject(h) && h.data) {
      var l = h.data;
      var m = 'function' === typeof l ? l(b, a) : l;
      b = 'function' === typeof l && m ? m : f.extend(!0, b, m);
      delete h.data;
    }
    m = {
      data: b,
      success: function (b) {
        var c = b.error || b.sError;
        c && O(a, 0, c);
        a.json = b;
        k(b);
      },
      dataType: 'json',
      cache: !1,
      type: a.sServerMethod,
      error: function (b, c, d) {
        d = A(a, null, 'xhr', [a, null, a.jqXHR]);
        -1 === f.inArray(!0, d) && ('parsererror' == c ? O(a, 0, 'Invalid JSON response', 1) : 4 === b.readyState && O(a, 0, 'Ajax error', 7));
        J(a, !1);
      },
    };
    a.oAjaxData = b;
    A(a, null, 'preXhr', [a, b]);
    a.fnServerData
      ? a.fnServerData.call(
          g,
          a.sAjaxSource,
          f.map(b, function (a, b) {
            return {name: b, value: a};
          }),
          k,
          a,
        )
      : a.sAjaxSource || 'string' === typeof h
      ? (a.jqXHR = f.ajax(f.extend(m, {url: h || a.sAjaxSource})))
      : 'function' === typeof h
      ? (a.jqXHR = h.call(g, b, k, a))
      : ((a.jqXHR = f.ajax(f.extend(m, h))), (h.data = l));
  }
  function pb(a) {
    return a.bAjaxDataGet
      ? (a.iDraw++,
        J(a, !0),
        ua(a, yb(a), function (b) {
          zb(a, b);
        }),
        !1)
      : !0;
  }
  function yb(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      h = a.aoPreSearchCols,
      g = [],
      k = X(a);
    var l = a._iDisplayStart;
    var m = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var p = function (a, b) {
      g.push({name: a, value: b});
    };
    p('sEcho', a.iDraw);
    p('iColumns', c);
    p('sColumns', K(b, 'sName').join(','));
    p('iDisplayStart', l);
    p('iDisplayLength', m);
    var n = {draw: a.iDraw, columns: [], order: [], start: l, length: m, search: {value: e.sSearch, regex: e.bRegex}};
    for (l = 0; l < c; l++) {
      var u = b[l];
      var ra = h[l];
      m = 'function' == typeof u.mData ? 'function' : u.mData;
      n.columns.push({data: m, name: u.sName, searchable: u.bSearchable, orderable: u.bSortable, search: {value: ra.sSearch, regex: ra.bRegex}});
      p('mDataProp_' + l, m);
      d.bFilter && (p('sSearch_' + l, ra.sSearch), p('bRegex_' + l, ra.bRegex), p('bSearchable_' + l, u.bSearchable));
      d.bSort && p('bSortable_' + l, u.bSortable);
    }
    d.bFilter && (p('sSearch', e.sSearch), p('bRegex', e.bRegex));
    d.bSort &&
      (f.each(k, function (a, b) {
        n.order.push({column: b.col, dir: b.dir});
        p('iSortCol_' + a, b.col);
        p('sSortDir_' + a, b.dir);
      }),
      p('iSortingCols', k.length));
    b = q.ext.legacy.ajax;
    return null === b ? (a.sAjaxSource ? g : n) : b ? g : n;
  }
  function zb(a, b) {
    var c = function (a, c) {
        return b[a] !== n ? b[a] : b[c];
      },
      d = va(a, b),
      e = c('sEcho', 'draw'),
      h = c('iTotalRecords', 'recordsTotal');
    c = c('iTotalDisplayRecords', 'recordsFiltered');
    if (e !== n) {
      if (1 * e < a.iDraw) return;
      a.iDraw = 1 * e;
    }
    pa(a);
    a._iRecordsTotal = parseInt(h, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    e = 0;
    for (h = d.length; e < h; e++) R(a, d[e]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    S(a);
    a._bInitComplete || wa(a, b);
    a.bAjaxDataGet = !0;
    J(a, !1);
  }
  function va(a, b) {
    a = f.isPlainObject(a.ajax) && a.ajax.dataSrc !== n ? a.ajax.dataSrc : a.sAjaxDataProp;
    return 'data' === a ? b.aaData || b[a] : '' !== a ? T(a)(b) : b;
  }
  function tb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      h = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      k = d.sSearch;
    k = k.match(/_INPUT_/) ? k.replace('_INPUT_', g) : k + g;
    b = f('<div/>', {id: h.f ? null : c + '_filter', class: b.sFilter}).append(f('<label/>').append(k));
    var l = function () {
      var b = this.value ? this.value : '';
      b != e.sSearch && (ha(a, {sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive}), (a._iDisplayStart = 0), S(a));
    };
    h = null !== a.searchDelay ? a.searchDelay : 'ssp' === I(a) ? 400 : 0;
    var m = f('input', b)
      .val(e.sSearch)
      .attr('placeholder', d.sSearchPlaceholder)
      .on('keyup.DT search.DT input.DT paste.DT cut.DT', h ? Ra(l, h) : l)
      .on('mouseup', function (a) {
        setTimeout(function () {
          l.call(m[0]);
        }, 10);
      })
      .on('keypress.DT', function (a) {
        if (13 == a.keyCode) return !1;
      })
      .attr('aria-controls', c);
    f(a.nTable).on('search.dt.DT', function (b, c) {
      if (a === c)
        try {
          m[0] !== w.activeElement && m.val(e.sSearch);
        } catch (u) {}
    });
    return b[0];
  }
  function ha(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      h = function (a) {
        d.sSearch = a.sSearch;
        d.bRegex = a.bRegex;
        d.bSmart = a.bSmart;
        d.bCaseInsensitive = a.bCaseInsensitive;
      },
      g = function (a) {
        return a.bEscapeRegex !== n ? !a.bEscapeRegex : a.bRegex;
      };
    Ja(a);
    if ('ssp' != I(a)) {
      Ab(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
      h(b);
      for (b = 0; b < e.length; b++) Bb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
      Cb(a);
    } else h(b);
    a.bFiltered = !0;
    A(a, null, 'search', [a]);
  }
  function Cb(a) {
    for (var b = q.ext.search, c = a.aiDisplay, d, e, h = 0, g = b.length; h < g; h++) {
      for (var k = [], l = 0, m = c.length; l < m; l++) (e = c[l]), (d = a.aoData[e]), b[h](a, d._aFilterData, e, d._aData, l) && k.push(e);
      c.length = 0;
      f.merge(c, k);
    }
  }
  function Bb(a, b, c, d, e, h) {
    if ('' !== b) {
      var g = [],
        k = a.aiDisplay;
      d = Sa(b, d, e, h);
      for (e = 0; e < k.length; e++) (b = a.aoData[k[e]]._aFilterData[c]), d.test(b) && g.push(k[e]);
      a.aiDisplay = g;
    }
  }
  function Ab(a, b, c, d, e, h) {
    e = Sa(b, d, e, h);
    var g = a.oPreviousSearch.sSearch,
      k = a.aiDisplayMaster;
    h = [];
    0 !== q.ext.search.length && (c = !0);
    var f = Db(a);
    if (0 >= b.length) a.aiDisplay = k.slice();
    else {
      if (f || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = k.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++) e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
      a.aiDisplay = h;
    }
  }
  function Sa(a, b, c, d) {
    a = b ? a : Ta(a);
    c &&
      (a =
        '^(?=.*?' +
        f
          .map(a.match(/"[^"]+"|[^ ]+/g) || [''], function (a) {
            if ('"' === a.charAt(0)) {
              var b = a.match(/^"(.*)"$/);
              a = b ? b[1] : a;
            }
            return a.replace('"', '');
          })
          .join(')(?=.*?') +
        ').*$');
    return new RegExp(a, d ? 'i' : '');
  }
  function Db(a) {
    var b = a.aoColumns,
      c,
      d,
      e = q.ext.type.search;
    var h = !1;
    var g = 0;
    for (c = a.aoData.length; g < c; g++) {
      var k = a.aoData[g];
      if (!k._aFilterData) {
        var f = [];
        var m = 0;
        for (d = b.length; m < d; m++) {
          h = b[m];
          if (h.bSearchable) {
            var p = F(a, g, m, 'filter');
            e[h.sType] && (p = e[h.sType](p));
            null === p && (p = '');
            'string' !== typeof p && p.toString && (p = p.toString());
          } else p = '';
          p.indexOf && -1 !== p.indexOf('&') && ((xa.innerHTML = p), (p = $b ? xa.textContent : xa.innerText));
          p.replace && (p = p.replace(/[\r\n\u2028]/g, ''));
          f.push(p);
        }
        k._aFilterData = f;
        k._sFilterRow = f.join('  ');
        h = !0;
      }
    }
    return h;
  }
  function Eb(a) {
    return {search: a.sSearch, smart: a.bSmart, regex: a.bRegex, caseInsensitive: a.bCaseInsensitive};
  }
  function Fb(a) {
    return {sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive};
  }
  function wb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = f('<div/>', {class: a.oClasses.sInfo, id: c ? null : b + '_info'});
    c ||
      (a.aoDrawCallback.push({fn: Gb, sName: 'information'}),
      d.attr('role', 'status').attr('aria-live', 'polite'),
      f(a.nTable).attr('aria-describedby', b + '_info'));
    return d[0];
  }
  function Gb(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart + 1,
        e = a.fnDisplayEnd(),
        h = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        k = g ? c.sInfo : c.sInfoEmpty;
      g !== h && (k += ' ' + c.sInfoFiltered);
      k += c.sInfoPostFix;
      k = Hb(a, k);
      c = c.fnInfoCallback;
      null !== c && (k = c.call(a.oInstance, a, d, e, h, g, k));
      f(b).html(k);
    }
  }
  function Hb(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      h = a.fnRecordsDisplay(),
      g = -1 === e;
    return b
      .replace(/_START_/g, c.call(a, d))
      .replace(/_END_/g, c.call(a, a.fnDisplayEnd()))
      .replace(/_MAX_/g, c.call(a, a.fnRecordsTotal()))
      .replace(/_TOTAL_/g, c.call(a, h))
      .replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e)))
      .replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(h / e)));
  }
  function ia(a) {
    var b = a.iInitDisplayStart,
      c = a.aoColumns;
    var d = a.oFeatures;
    var e = a.bDeferLoading;
    if (a.bInitialised) {
      rb(a);
      ob(a);
      fa(a, a.aoHeader);
      fa(a, a.aoFooter);
      J(a, !0);
      d.bAutoWidth && Ia(a);
      var h = 0;
      for (d = c.length; h < d; h++) {
        var g = c[h];
        g.sWidth && (g.nTh.style.width = B(g.sWidth));
      }
      A(a, null, 'preInit', [a]);
      U(a);
      c = I(a);
      if ('ssp' != c || e)
        'ajax' == c
          ? ua(
              a,
              [],
              function (c) {
                var d = va(a, c);
                for (h = 0; h < d.length; h++) R(a, d[h]);
                a.iInitDisplayStart = b;
                U(a);
                J(a, !1);
                wa(a, c);
              },
              a,
            )
          : (J(a, !1), wa(a));
    } else
      setTimeout(function () {
        ia(a);
      }, 200);
  }
  function wa(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && Z(a);
    A(a, null, 'plugin-init', [a, b]);
    A(a, 'aoInitComplete', 'init', [a, b]);
  }
  function Ua(a, b) {
    b = parseInt(b, 10);
    a._iDisplayLength = b;
    Va(a);
    A(a, null, 'length', [a, b]);
  }
  function sb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.aLengthMenu,
      e = f.isArray(d[0]),
      h = e ? d[0] : d;
    d = e ? d[1] : d;
    e = f('<select/>', {name: c + '_length', 'aria-controls': c, class: b.sLengthSelect});
    for (var g = 0, k = h.length; g < k; g++) e[0][g] = new Option('number' === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], h[g]);
    var l = f('<div><label/></div>').addClass(b.sLength);
    a.aanFeatures.l || (l[0].id = c + '_length');
    l.children().append(a.oLanguage.sLengthMenu.replace('_MENU_', e[0].outerHTML));
    f('select', l)
      .val(a._iDisplayLength)
      .on('change.DT', function (b) {
        Ua(a, f(this).val());
        S(a);
      });
    f(a.nTable).on('length.dt.DT', function (b, c, d) {
      a === c && f('select', l).val(d);
    });
    return l[0];
  }
  function xb(a) {
    var b = a.sPaginationType,
      c = q.ext.pager[b],
      d = 'function' === typeof c,
      e = function (a) {
        S(a);
      };
    b = f('<div/>').addClass(a.oClasses.sPaging + b)[0];
    var h = a.aanFeatures;
    d || c.fnInit(a, b, e);
    h.p ||
      ((b.id = a.sTableId + '_paginate'),
      a.aoDrawCallback.push({
        fn: function (a) {
          if (d) {
            var b = a._iDisplayStart,
              g = a._iDisplayLength,
              f = a.fnRecordsDisplay(),
              p = -1 === g;
            b = p ? 0 : Math.ceil(b / g);
            g = p ? 1 : Math.ceil(f / g);
            f = c(b, g);
            var n;
            p = 0;
            for (n = h.p.length; p < n; p++) Qa(a, 'pageButton')(a, h.p[p], p, f, b, g);
          } else c.fnUpdate(a, e);
        },
        sName: 'pagination',
      }));
    return b;
  }
  function Wa(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      h = a.fnRecordsDisplay();
    0 === h || -1 === e
      ? (d = 0)
      : 'number' === typeof b
      ? ((d = b * e), d > h && (d = 0))
      : 'first' == b
      ? (d = 0)
      : 'previous' == b
      ? ((d = 0 <= e ? d - e : 0), 0 > d && (d = 0))
      : 'next' == b
      ? d + e < h && (d += e)
      : 'last' == b
      ? (d = Math.floor((h - 1) / e) * e)
      : O(a, 0, 'Unknown paging action: ' + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (A(a, null, 'page', [a]), c && S(a));
    return b;
  }
  function ub(a) {
    return f('<div/>', {id: a.aanFeatures.r ? null : a.sTableId + '_processing', class: a.oClasses.sProcessing})
      .html(a.oLanguage.sProcessing)
      .insertBefore(a.nTable)[0];
  }
  function J(a, b) {
    a.oFeatures.bProcessing && f(a.aanFeatures.r).css('display', b ? 'block' : 'none');
    A(a, null, 'processing', [a, b]);
  }
  function vb(a) {
    var b = f(a.nTable);
    b.attr('role', 'grid');
    var c = a.oScroll;
    if ('' === c.sX && '' === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      h = a.oClasses,
      g = b.children('caption'),
      k = g.length ? g[0]._captionSide : null,
      l = f(b[0].cloneNode(!1)),
      m = f(b[0].cloneNode(!1)),
      p = b.children('tfoot');
    p.length || (p = null);
    l = f('<div/>', {class: h.sScrollWrapper})
      .append(
        f('<div/>', {class: h.sScrollHead})
          .css({overflow: 'hidden', position: 'relative', border: 0, width: d ? (d ? B(d) : null) : '100%'})
          .append(
            f('<div/>', {class: h.sScrollHeadInner})
              .css({'box-sizing': 'content-box', width: c.sXInner || '100%'})
              .append(
                l
                  .removeAttr('id')
                  .css('margin-left', 0)
                  .append('top' === k ? g : null)
                  .append(b.children('thead')),
              ),
          ),
      )
      .append(
        f('<div/>', {class: h.sScrollBody})
          .css({position: 'relative', overflow: 'auto', width: d ? B(d) : null})
          .append(b),
      );
    p &&
      l.append(
        f('<div/>', {class: h.sScrollFoot})
          .css({overflow: 'hidden', border: 0, width: d ? (d ? B(d) : null) : '100%'})
          .append(
            f('<div/>', {class: h.sScrollFootInner}).append(
              m
                .removeAttr('id')
                .css('margin-left', 0)
                .append('bottom' === k ? g : null)
                .append(b.children('tfoot')),
            ),
          ),
      );
    b = l.children();
    var n = b[0];
    h = b[1];
    var u = p ? b[2] : null;
    if (d)
      f(h).on('scroll.DT', function (a) {
        a = this.scrollLeft;
        n.scrollLeft = a;
        p && (u.scrollLeft = a);
      });
    f(h).css('max-height', e);
    c.bCollapse || f(h).css('height', e);
    a.nScrollHead = n;
    a.nScrollBody = h;
    a.nScrollFoot = u;
    a.aoDrawCallback.push({fn: ma, sName: 'scrolling'});
    return l[0];
  }
  function ma(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY;
    b = b.iBarWidth;
    var h = f(a.nScrollHead),
      g = h[0].style,
      k = h.children('div'),
      l = k[0].style,
      m = k.children('table');
    k = a.nScrollBody;
    var p = f(k),
      v = k.style,
      u = f(a.nScrollFoot).children('div'),
      q = u.children('table'),
      t = f(a.nTHead),
      r = f(a.nTable),
      x = r[0],
      ya = x.style,
      w = a.nTFoot ? f(a.nTFoot) : null,
      y = a.oBrowser,
      A = y.bScrollOversize,
      ac = K(a.aoColumns, 'nTh'),
      Xa = [],
      z = [],
      C = [],
      G = [],
      H,
      I = function (a) {
        a = a.style;
        a.paddingTop = '0';
        a.paddingBottom = '0';
        a.borderTopWidth = '0';
        a.borderBottomWidth = '0';
        a.height = 0;
      };
    var D = k.scrollHeight > k.clientHeight;
    if (a.scrollBarVis !== D && a.scrollBarVis !== n) (a.scrollBarVis = D), Z(a);
    else {
      a.scrollBarVis = D;
      r.children('thead, tfoot').remove();
      if (w) {
        var E = w.clone().prependTo(r);
        var F = w.find('tr');
        E = E.find('tr');
      }
      var J = t.clone().prependTo(r);
      t = t.find('tr');
      D = J.find('tr');
      J.find('th, td').removeAttr('tabindex');
      c || ((v.width = '100%'), (h[0].style.width = '100%'));
      f.each(ta(a, J), function (b, c) {
        H = aa(a, b);
        c.style.width = a.aoColumns[H].sWidth;
      });
      w &&
        N(function (a) {
          a.style.width = '';
        }, E);
      h = r.outerWidth();
      '' === c
        ? ((ya.width = '100%'),
          A && (r.find('tbody').height() > k.offsetHeight || 'scroll' == p.css('overflow-y')) && (ya.width = B(r.outerWidth() - b)),
          (h = r.outerWidth()))
        : '' !== d && ((ya.width = B(d)), (h = r.outerWidth()));
      N(I, D);
      N(function (a) {
        C.push(a.innerHTML);
        Xa.push(B(f(a).css('width')));
      }, D);
      N(function (a, b) {
        -1 !== f.inArray(a, ac) && (a.style.width = Xa[b]);
      }, t);
      f(D).height(0);
      w &&
        (N(I, E),
        N(function (a) {
          G.push(a.innerHTML);
          z.push(B(f(a).css('width')));
        }, E),
        N(function (a, b) {
          a.style.width = z[b];
        }, F),
        f(E).height(0));
      N(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing">' + C[b] + '</div>';
        a.childNodes[0].style.height = '0';
        a.childNodes[0].style.overflow = 'hidden';
        a.style.width = Xa[b];
      }, D);
      w &&
        N(function (a, b) {
          a.innerHTML = '<div class="dataTables_sizing">' + G[b] + '</div>';
          a.childNodes[0].style.height = '0';
          a.childNodes[0].style.overflow = 'hidden';
          a.style.width = z[b];
        }, E);
      r.outerWidth() < h
        ? ((F = k.scrollHeight > k.offsetHeight || 'scroll' == p.css('overflow-y') ? h + b : h),
          A && (k.scrollHeight > k.offsetHeight || 'scroll' == p.css('overflow-y')) && (ya.width = B(F - b)),
          ('' !== c && '' === d) || O(a, 1, 'Possible column misalignment', 6))
        : (F = '100%');
      v.width = B(F);
      g.width = B(F);
      w && (a.nScrollFoot.style.width = B(F));
      !e && A && (v.height = B(x.offsetHeight + b));
      c = r.outerWidth();
      m[0].style.width = B(c);
      l.width = B(c);
      d = r.height() > k.clientHeight || 'scroll' == p.css('overflow-y');
      e = 'padding' + (y.bScrollbarLeft ? 'Left' : 'Right');
      l[e] = d ? b + 'px' : '0px';
      w && ((q[0].style.width = B(c)), (u[0].style.width = B(c)), (u[0].style[e] = d ? b + 'px' : '0px'));
      r.children('colgroup').insertBefore(r.children('thead'));
      p.trigger('scroll');
      (!a.bSorted && !a.bFiltered) || a._drawHold || (k.scrollTop = 0);
    }
  }
  function N(a, b, c) {
    for (var d = 0, e = 0, h = b.length, g, k; e < h; ) {
      g = b[e].firstChild;
      for (k = c ? c[e].firstChild : null; g; ) 1 === g.nodeType && (c ? a(g, k, d) : a(g, d), d++), (g = g.nextSibling), (k = c ? k.nextSibling : null);
      e++;
    }
  }
  function Ia(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      h = d.sX,
      g = d.sXInner,
      k = c.length,
      l = na(a, 'bVisible'),
      m = f('th', a.nTHead),
      p = b.getAttribute('width'),
      n = b.parentNode,
      u = !1,
      q,
      t = a.oBrowser;
    d = t.bScrollOversize;
    (q = b.style.width) && -1 !== q.indexOf('%') && (p = q);
    for (q = 0; q < l.length; q++) {
      var r = c[l[q]];
      null !== r.sWidth && ((r.sWidth = Ib(r.sWidthOrig, n)), (u = !0));
    }
    if (d || (!u && !h && !e && k == V(a) && k == m.length)) for (q = 0; q < k; q++) (l = aa(a, q)), null !== l && (c[l].sWidth = B(m.eq(q).width()));
    else {
      k = f(b).clone().css('visibility', 'hidden').removeAttr('id');
      k.find('tbody tr').remove();
      var w = f('<tr/>').appendTo(k.find('tbody'));
      k.find('thead, tfoot').remove();
      k.append(f(a.nTHead).clone()).append(f(a.nTFoot).clone());
      k.find('tfoot th, tfoot td').css('width', '');
      m = ta(a, k.find('thead')[0]);
      for (q = 0; q < l.length; q++)
        (r = c[l[q]]),
          (m[q].style.width = null !== r.sWidthOrig && '' !== r.sWidthOrig ? B(r.sWidthOrig) : ''),
          r.sWidthOrig && h && f(m[q]).append(f('<div/>').css({width: r.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1}));
      if (a.aoData.length) for (q = 0; q < l.length; q++) (u = l[q]), (r = c[u]), f(Jb(a, u)).clone(!1).append(r.sContentPadding).appendTo(w);
      f('[name]', k).removeAttr('name');
      r = f('<div/>')
        .css(h || e ? {position: 'absolute', top: 0, left: 0, height: 1, right: 0, overflow: 'hidden'} : {})
        .append(k)
        .appendTo(n);
      h && g
        ? k.width(g)
        : h
        ? (k.css('width', 'auto'), k.removeAttr('width'), k.width() < n.clientWidth && p && k.width(n.clientWidth))
        : e
        ? k.width(n.clientWidth)
        : p && k.width(p);
      for (q = e = 0; q < l.length; q++)
        (n = f(m[q])),
          (g = n.outerWidth() - n.width()),
          (n = t.bBounding ? Math.ceil(m[q].getBoundingClientRect().width) : n.outerWidth()),
          (e += n),
          (c[l[q]].sWidth = B(n - g));
      b.style.width = B(e);
      r.remove();
    }
    p && (b.style.width = B(p));
    (!p && !h) ||
      a._reszEvt ||
      ((b = function () {
        f(y).on(
          'resize.DT-' + a.sInstance,
          Ra(function () {
            Z(a);
          }),
        );
      }),
      d ? setTimeout(b, 1e3) : b(),
      (a._reszEvt = !0));
  }
  function Ib(a, b) {
    if (!a) return 0;
    a = f('<div/>')
      .css('width', B(a))
      .appendTo(b || w.body);
    b = a[0].offsetWidth;
    a.remove();
    return b;
  }
  function Jb(a, b) {
    var c = Kb(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] : f('<td/>').html(F(a, c, b, 'display'))[0];
  }
  function Kb(a, b) {
    for (var c, d = -1, e = -1, h = 0, g = a.aoData.length; h < g; h++)
      (c = F(a, h, b, 'display') + ''), (c = c.replace(bc, '')), (c = c.replace(/&nbsp;/g, ' ')), c.length > d && ((d = c.length), (e = h));
    return e;
  }
  function B(a) {
    return null === a ? '0px' : 'number' == typeof a ? (0 > a ? '0px' : a + 'px') : a.match(/\d$/) ? a + 'px' : a;
  }
  function X(a) {
    var b = [],
      c = a.aoColumns;
    var d = a.aaSortingFixed;
    var e = f.isPlainObject(d);
    var h = [];
    var g = function (a) {
      a.length && !f.isArray(a[0]) ? h.push(a) : f.merge(h, a);
    };
    f.isArray(d) && g(d);
    e && d.pre && g(d.pre);
    g(a.aaSorting);
    e && d.post && g(d.post);
    for (a = 0; a < h.length; a++) {
      var k = h[a][0];
      g = c[k].aDataSort;
      d = 0;
      for (e = g.length; d < e; d++) {
        var l = g[d];
        var m = c[l].sType || 'string';
        h[a]._idx === n && (h[a]._idx = f.inArray(h[a][1], c[l].asSorting));
        b.push({src: k, col: l, dir: h[a][1], index: h[a]._idx, type: m, formatter: q.ext.type.order[m + '-pre']});
      }
    }
    return b;
  }
  function qb(a) {
    var b,
      c = [],
      d = q.ext.type.order,
      e = a.aoData,
      h = 0,
      g = a.aiDisplayMaster;
    Ja(a);
    var k = X(a);
    var f = 0;
    for (b = k.length; f < b; f++) {
      var m = k[f];
      m.formatter && h++;
      Lb(a, m.col);
    }
    if ('ssp' != I(a) && 0 !== k.length) {
      f = 0;
      for (b = g.length; f < b; f++) c[g[f]] = f;
      h === k.length
        ? g.sort(function (a, b) {
            var d,
              h = k.length,
              g = e[a]._aSortData,
              f = e[b]._aSortData;
            for (d = 0; d < h; d++) {
              var l = k[d];
              var m = g[l.col];
              var p = f[l.col];
              m = m < p ? -1 : m > p ? 1 : 0;
              if (0 !== m) return 'asc' === l.dir ? m : -m;
            }
            m = c[a];
            p = c[b];
            return m < p ? -1 : m > p ? 1 : 0;
          })
        : g.sort(function (a, b) {
            var h,
              g = k.length,
              f = e[a]._aSortData,
              l = e[b]._aSortData;
            for (h = 0; h < g; h++) {
              var m = k[h];
              var p = f[m.col];
              var n = l[m.col];
              m = d[m.type + '-' + m.dir] || d['string-' + m.dir];
              p = m(p, n);
              if (0 !== p) return p;
            }
            p = c[a];
            n = c[b];
            return p < n ? -1 : p > n ? 1 : 0;
          });
    }
    a.bSorted = !0;
  }
  function Mb(a) {
    var b = a.aoColumns,
      c = X(a);
    a = a.oLanguage.oAria;
    for (var d = 0, e = b.length; d < e; d++) {
      var h = b[d];
      var g = h.asSorting;
      var k = h.sTitle.replace(/<.*?>/g, '');
      var f = h.nTh;
      f.removeAttribute('aria-sort');
      h.bSortable &&
        (0 < c.length && c[0].col == d
          ? (f.setAttribute('aria-sort', 'asc' == c[0].dir ? 'ascending' : 'descending'), (h = g[c[0].index + 1] || g[0]))
          : (h = g[0]),
        (k += 'asc' === h ? a.sSortAscending : a.sSortDescending));
      f.setAttribute('aria-label', k);
    }
  }
  function Ya(a, b, c, d) {
    var e = a.aaSorting,
      h = a.aoColumns[b].asSorting,
      g = function (a, b) {
        var c = a._idx;
        c === n && (c = f.inArray(a[1], h));
        return c + 1 < h.length ? c + 1 : b ? null : 0;
      };
    'number' === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti
      ? ((c = f.inArray(b, K(e, '0'))),
        -1 !== c
          ? ((b = g(e[c], !0)), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : ((e[c][1] = h[b]), (e[c]._idx = b)))
          : (e.push([b, h[0], 0]), (e[e.length - 1]._idx = 0)))
      : e.length && e[0][0] == b
      ? ((b = g(e[0])), (e.length = 1), (e[0][1] = h[b]), (e[0]._idx = b))
      : ((e.length = 0), e.push([b, h[0]]), (e[0]._idx = 0));
    U(a);
    'function' == typeof d && d(a);
  }
  function Pa(a, b, c, d) {
    var e = a.aoColumns[c];
    Za(b, {}, function (b) {
      !1 !== e.bSortable &&
        (a.oFeatures.bProcessing
          ? (J(a, !0),
            setTimeout(function () {
              Ya(a, c, b.shiftKey, d);
              'ssp' !== I(a) && J(a, !1);
            }, 0))
          : Ya(a, c, b.shiftKey, d));
    });
  }
  function za(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = X(a),
      e = a.oFeatures,
      h;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (h = b.length; e < h; e++) {
        var g = b[e].src;
        f(K(a.aoData, 'anCells', g)).removeClass(c + (2 > e ? e + 1 : 3));
      }
      e = 0;
      for (h = d.length; e < h; e++) (g = d[e].src), f(K(a.aoData, 'anCells', g)).addClass(c + (2 > e ? e + 1 : 3));
    }
    a.aLastSort = d;
  }
  function Lb(a, b) {
    var c = a.aoColumns[b],
      d = q.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, ba(a, b)));
    for (var h, g = q.ext.type.order[c.sType + '-pre'], f = 0, l = a.aoData.length; f < l; f++)
      if (((c = a.aoData[f]), c._aSortData || (c._aSortData = []), !c._aSortData[b] || d))
        (h = d ? e[f] : F(a, f, b, 'sort')), (c._aSortData[b] = g ? g(h) : h);
  }
  function Aa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date(),
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: f.extend(!0, [], a.aaSorting),
        search: Eb(a.oPreviousSearch),
        columns: f.map(a.aoColumns, function (b, d) {
          return {visible: b.bVisible, search: Eb(a.aoPreSearchCols[d])};
        }),
      };
      A(a, 'aoStateSaveParams', 'stateSaveParams', [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b);
    }
  }
  function Nb(a, b, c) {
    var d,
      e,
      h = a.aoColumns;
    b = function (b) {
      if (b && b.time) {
        var g = A(a, 'aoStateLoadParams', 'stateLoadParams', [a, b]);
        if (-1 === f.inArray(!1, g) && ((g = a.iStateDuration), !((0 < g && b.time < +new Date() - 1e3 * g) || (b.columns && h.length !== b.columns.length)))) {
          a.oLoadedState = f.extend(!0, {}, b);
          b.start !== n && ((a._iDisplayStart = b.start), (a.iInitDisplayStart = b.start));
          b.length !== n && (a._iDisplayLength = b.length);
          b.order !== n &&
            ((a.aaSorting = []),
            f.each(b.order, function (b, c) {
              a.aaSorting.push(c[0] >= h.length ? [0, c[1]] : c);
            }));
          b.search !== n && f.extend(a.oPreviousSearch, Fb(b.search));
          if (b.columns)
            for (d = 0, e = b.columns.length; d < e; d++)
              (g = b.columns[d]), g.visible !== n && (h[d].bVisible = g.visible), g.search !== n && f.extend(a.aoPreSearchCols[d], Fb(g.search));
          A(a, 'aoStateLoaded', 'stateLoaded', [a, b]);
        }
      }
      c();
    };
    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== n && b(g);
    } else c();
  }
  function Ba(a) {
    var b = q.settings;
    a = f.inArray(a, K(b, 'nTable'));
    return -1 !== a ? b[a] : null;
  }
  function O(a, b, c, d) {
    c = 'DataTables warning: ' + (a ? 'table id=' + a.sTableId + ' - ' : '') + c;
    d && (c += '. For more information about this error, please see http://datatables.net/tn/' + d);
    if (b) y.console && console.log && console.log(c);
    else if (((b = q.ext), (b = b.sErrMode || b.errMode), a && A(a, null, 'error', [a, d, c]), 'alert' == b)) alert(c);
    else {
      if ('throw' == b) throw Error(c);
      'function' == typeof b && b(a, d, c);
    }
  }
  function M(a, b, c, d) {
    f.isArray(c)
      ? f.each(c, function (c, d) {
          f.isArray(d) ? M(a, b, d[0], d[1]) : M(a, b, d);
        })
      : (d === n && (d = c), b[c] !== n && (a[d] = b[c]));
  }
  function $a(a, b, c) {
    var d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        f.isPlainObject(e)
          ? (f.isPlainObject(a[d]) || (a[d] = {}), f.extend(!0, a[d], e))
          : c && 'data' !== d && 'aaData' !== d && f.isArray(e)
          ? (a[d] = e.slice())
          : (a[d] = e);
      }
    return a;
  }
  function Za(a, b, c) {
    f(a)
      .on('click.DT', b, function (b) {
        f(a).trigger('blur');
        c(b);
      })
      .on('keypress.DT', b, function (a) {
        13 === a.which && (a.preventDefault(), c(a));
      })
      .on('selectstart.DT', function () {
        return !1;
      });
  }
  function D(a, b, c, d) {
    c && a[b].push({fn: c, sName: d});
  }
  function A(a, b, c, d) {
    var e = [];
    b &&
      (e = f.map(a[b].slice().reverse(), function (b, c) {
        return b.fn.apply(a.oInstance, d);
      }));
    null !== c && ((b = f.Event(c + '.dt')), f(a.nTable).trigger(b, d), e.push(b.result));
    return e;
  }
  function Va(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b;
  }
  function Qa(a, b) {
    a = a.renderer;
    var c = q.ext.renderer[b];
    return f.isPlainObject(a) && a[b] ? c[a[b]] || c._ : 'string' === typeof a ? c[a] || c._ : c._;
  }
  function I(a) {
    return a.oFeatures.bServerSide ? 'ssp' : a.ajax || a.sAjaxSource ? 'ajax' : 'dom';
  }
  function ja(a, b) {
    var c = Ob.numbers_length,
      d = Math.floor(c / 2);
    b <= c
      ? (a = Y(0, b))
      : a <= d
      ? ((a = Y(0, c - 2)), a.push('ellipsis'), a.push(b - 1))
      : (a >= b - 1 - d ? (a = Y(b - (c - 2), b)) : ((a = Y(a - d + 2, a + d - 1)), a.push('ellipsis'), a.push(b - 1)),
        a.splice(0, 0, 'ellipsis'),
        a.splice(0, 0, 0));
    a.DT_el = 'span';
    return a;
  }
  function Ga(a) {
    f.each(
      {
        num: function (b) {
          return Ca(b, a);
        },
        'num-fmt': function (b) {
          return Ca(b, a, ab);
        },
        'html-num': function (b) {
          return Ca(b, a, Da);
        },
        'html-num-fmt': function (b) {
          return Ca(b, a, Da, ab);
        },
      },
      function (b, c) {
        C.type.order[b + a + '-pre'] = c;
        b.match(/^html\-/) && (C.type.search[b + a] = C.type.search.html);
      },
    );
  }
  function Pb(a) {
    return function () {
      var b = [Ba(this[q.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return q.ext.internal[a].apply(this, b);
    };
  }
  var q = function (a) {
      this.$ = function (a, b) {
        return this.api(!0).$(a, b);
      };
      this._ = function (a, b) {
        return this.api(!0).rows(a, b).data();
      };
      this.api = function (a) {
        return a ? new x(Ba(this[C.iApiIndex])) : new x(this);
      };
      this.fnAddData = function (a, b) {
        var c = this.api(!0);
        a = f.isArray(a) && (f.isArray(a[0]) || f.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
        (b === n || b) && c.draw();
        return a.flatten().toArray();
      };
      this.fnAdjustColumnSizing = function (a) {
        var b = this.api(!0).columns.adjust(),
          c = b.settings()[0],
          d = c.oScroll;
        a === n || a ? b.draw(!1) : ('' !== d.sX || '' !== d.sY) && ma(c);
      };
      this.fnClearTable = function (a) {
        var b = this.api(!0).clear();
        (a === n || a) && b.draw();
      };
      this.fnClose = function (a) {
        this.api(!0).row(a).child.hide();
      };
      this.fnDeleteRow = function (a, b, c) {
        var d = this.api(!0);
        a = d.rows(a);
        var e = a.settings()[0],
          h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(this, e, h);
        (c === n || c) && d.draw();
        return h;
      };
      this.fnDestroy = function (a) {
        this.api(!0).destroy(a);
      };
      this.fnDraw = function (a) {
        this.api(!0).draw(a);
      };
      this.fnFilter = function (a, b, c, d, e, f) {
        e = this.api(!0);
        null === b || b === n ? e.search(a, c, d, f) : e.column(b).search(a, c, d, f);
        e.draw();
      };
      this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a !== n) {
          var d = a.nodeName ? a.nodeName.toLowerCase() : '';
          return b !== n || 'td' == d || 'th' == d ? c.cell(a, b).data() : c.row(a).data() || null;
        }
        return c.data().toArray();
      };
      this.fnGetNodes = function (a) {
        var b = this.api(!0);
        return a !== n ? b.row(a).node() : b.rows().nodes().flatten().toArray();
      };
      this.fnGetPosition = function (a) {
        var b = this.api(!0),
          c = a.nodeName.toUpperCase();
        return 'TR' == c ? b.row(a).index() : 'TD' == c || 'TH' == c ? ((a = b.cell(a).index()), [a.row, a.columnVisible, a.column]) : null;
      };
      this.fnIsOpen = function (a) {
        return this.api(!0).row(a).child.isShown();
      };
      this.fnOpen = function (a, b, c) {
        return this.api(!0).row(a).child(b, c).show().child()[0];
      };
      this.fnPageChange = function (a, b) {
        a = this.api(!0).page(a);
        (b === n || b) && a.draw(!1);
      };
      this.fnSetColumnVis = function (a, b, c) {
        a = this.api(!0).column(a).visible(b);
        (c === n || c) && a.columns.adjust().draw();
      };
      this.fnSettings = function () {
        return Ba(this[C.iApiIndex]);
      };
      this.fnSort = function (a) {
        this.api(!0).order(a).draw();
      };
      this.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c);
      };
      this.fnUpdate = function (a, b, c, d, e) {
        var h = this.api(!0);
        c === n || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
        (e === n || e) && h.columns.adjust();
        (d === n || d) && h.draw();
        return 0;
      };
      this.fnVersionCheck = C.fnVersionCheck;
      var b = this,
        c = a === n,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = C.internal;
      for (var e in q.ext.internal) e && (this[e] = Pb(e));
      this.each(function () {
        var e = {},
          g = 1 < d ? $a(e, a, !0) : a,
          k = 0,
          l;
        e = this.getAttribute('id');
        var m = !1,
          p = q.defaults,
          v = f(this);
        if ('table' != this.nodeName.toLowerCase()) O(null, 0, 'Non-table node initialisation (' + this.nodeName + ')', 2);
        else {
          ib(p);
          jb(p.column);
          L(p, p, !0);
          L(p.column, p.column, !0);
          L(p, f.extend(g, v.data()), !0);
          var u = q.settings;
          k = 0;
          for (l = u.length; k < l; k++) {
            var t = u[k];
            if (t.nTable == this || (t.nTHead && t.nTHead.parentNode == this) || (t.nTFoot && t.nTFoot.parentNode == this)) {
              var w = g.bRetrieve !== n ? g.bRetrieve : p.bRetrieve;
              if (c || w) return t.oInstance;
              if (g.bDestroy !== n ? g.bDestroy : p.bDestroy) {
                t.oInstance.fnDestroy();
                break;
              } else {
                O(t, 0, 'Cannot reinitialise DataTable', 3);
                return;
              }
            }
            if (t.sTableId == this.id) {
              u.splice(k, 1);
              break;
            }
          }
          if (null === e || '' === e) this.id = e = 'DataTables_Table_' + q.ext._unique++;
          var r = f.extend(!0, {}, q.models.oSettings, {sDestroyWidth: v[0].style.width, sInstance: e, sTableId: e});
          r.nTable = this;
          r.oApi = b.internal;
          r.oInit = g;
          u.push(r);
          r.oInstance = 1 === b.length ? b : v.dataTable();
          ib(g);
          Fa(g.oLanguage);
          g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = f.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
          g = $a(f.extend(!0, {}, p), g);
          M(r.oFeatures, g, 'bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender'.split(' '));
          M(r, g, [
            'asStripeClasses',
            'ajax',
            'fnServerData',
            'fnFormatNumber',
            'sServerMethod',
            'aaSorting',
            'aaSortingFixed',
            'aLengthMenu',
            'sPaginationType',
            'sAjaxSource',
            'sAjaxDataProp',
            'iStateDuration',
            'sDom',
            'bSortCellsTop',
            'iTabIndex',
            'fnStateLoadCallback',
            'fnStateSaveCallback',
            'renderer',
            'searchDelay',
            'rowId',
            ['iCookieDuration', 'iStateDuration'],
            ['oSearch', 'oPreviousSearch'],
            ['aoSearchCols', 'aoPreSearchCols'],
            ['iDisplayLength', '_iDisplayLength'],
          ]);
          M(r.oScroll, g, [
            ['sScrollX', 'sX'],
            ['sScrollXInner', 'sXInner'],
            ['sScrollY', 'sY'],
            ['bScrollCollapse', 'bCollapse'],
          ]);
          M(r.oLanguage, g, 'fnInfoCallback');
          D(r, 'aoDrawCallback', g.fnDrawCallback, 'user');
          D(r, 'aoServerParams', g.fnServerParams, 'user');
          D(r, 'aoStateSaveParams', g.fnStateSaveParams, 'user');
          D(r, 'aoStateLoadParams', g.fnStateLoadParams, 'user');
          D(r, 'aoStateLoaded', g.fnStateLoaded, 'user');
          D(r, 'aoRowCallback', g.fnRowCallback, 'user');
          D(r, 'aoRowCreatedCallback', g.fnCreatedRow, 'user');
          D(r, 'aoHeaderCallback', g.fnHeaderCallback, 'user');
          D(r, 'aoFooterCallback', g.fnFooterCallback, 'user');
          D(r, 'aoInitComplete', g.fnInitComplete, 'user');
          D(r, 'aoPreDrawCallback', g.fnPreDrawCallback, 'user');
          r.rowIdFn = T(g.rowId);
          kb(r);
          var x = r.oClasses;
          f.extend(x, q.ext.classes, g.oClasses);
          v.addClass(x.sTable);
          r.iInitDisplayStart === n && ((r.iInitDisplayStart = g.iDisplayStart), (r._iDisplayStart = g.iDisplayStart));
          null !== g.iDeferLoading &&
            ((r.bDeferLoading = !0),
            (e = f.isArray(g.iDeferLoading)),
            (r._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading),
            (r._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading));
          var y = r.oLanguage;
          f.extend(!0, y, g.oLanguage);
          y.sUrl &&
            (f.ajax({
              dataType: 'json',
              url: y.sUrl,
              success: function (a) {
                Fa(a);
                L(p.oLanguage, a);
                f.extend(!0, y, a);
                ia(r);
              },
              error: function () {
                ia(r);
              },
            }),
            (m = !0));
          null === g.asStripeClasses && (r.asStripeClasses = [x.sStripeOdd, x.sStripeEven]);
          e = r.asStripeClasses;
          var z = v.children('tbody').find('tr').eq(0);
          -1 !==
            f.inArray(
              !0,
              f.map(e, function (a, b) {
                return z.hasClass(a);
              }),
            ) && (f('tbody tr', this).removeClass(e.join(' ')), (r.asDestroyStripes = e.slice()));
          e = [];
          u = this.getElementsByTagName('thead');
          0 !== u.length && (ea(r.aoHeader, u[0]), (e = ta(r)));
          if (null === g.aoColumns) for (u = [], k = 0, l = e.length; k < l; k++) u.push(null);
          else u = g.aoColumns;
          k = 0;
          for (l = u.length; k < l; k++) Ha(r, e ? e[k] : null);
          mb(r, g.aoColumnDefs, u, function (a, b) {
            la(r, a, b);
          });
          if (z.length) {
            var B = function (a, b) {
              return null !== a.getAttribute('data-' + b) ? b : null;
            };
            f(z[0])
              .children('th, td')
              .each(function (a, b) {
                var c = r.aoColumns[a];
                if (c.mData === a) {
                  var d = B(b, 'sort') || B(b, 'order');
                  b = B(b, 'filter') || B(b, 'search');
                  if (null !== d || null !== b)
                    (c.mData = {
                      _: a + '.display',
                      sort: null !== d ? a + '.@data-' + d : n,
                      type: null !== d ? a + '.@data-' + d : n,
                      filter: null !== b ? a + '.@data-' + b : n,
                    }),
                      la(r, a);
                }
              });
          }
          var C = r.oFeatures;
          e = function () {
            if (g.aaSorting === n) {
              var a = r.aaSorting;
              k = 0;
              for (l = a.length; k < l; k++) a[k][1] = r.aoColumns[k].asSorting[0];
            }
            za(r);
            C.bSort &&
              D(r, 'aoDrawCallback', function () {
                if (r.bSorted) {
                  var a = X(r),
                    b = {};
                  f.each(a, function (a, c) {
                    b[c.src] = c.dir;
                  });
                  A(r, null, 'order', [r, a, b]);
                  Mb(r);
                }
              });
            D(
              r,
              'aoDrawCallback',
              function () {
                (r.bSorted || 'ssp' === I(r) || C.bDeferRender) && za(r);
              },
              'sc',
            );
            a = v.children('caption').each(function () {
              this._captionSide = f(this).css('caption-side');
            });
            var b = v.children('thead');
            0 === b.length && (b = f('<thead/>').appendTo(v));
            r.nTHead = b[0];
            b = v.children('tbody');
            0 === b.length && (b = f('<tbody/>').appendTo(v));
            r.nTBody = b[0];
            b = v.children('tfoot');
            0 === b.length && 0 < a.length && ('' !== r.oScroll.sX || '' !== r.oScroll.sY) && (b = f('<tfoot/>').appendTo(v));
            0 === b.length || 0 === b.children().length ? v.addClass(x.sNoFooter) : 0 < b.length && ((r.nTFoot = b[0]), ea(r.aoFooter, r.nTFoot));
            if (g.aaData) for (k = 0; k < g.aaData.length; k++) R(r, g.aaData[k]);
            else (r.bDeferLoading || 'dom' == I(r)) && oa(r, f(r.nTBody).children('tr'));
            r.aiDisplay = r.aiDisplayMaster.slice();
            r.bInitialised = !0;
            !1 === m && ia(r);
          };
          g.bStateSave ? ((C.bStateSave = !0), D(r, 'aoDrawCallback', Aa, 'state_save'), Nb(r, g, e)) : e();
        }
      });
      b = null;
      return this;
    },
    C,
    t,
    z,
    bb = {},
    Qb = /[\r\n\u2028]/g,
    Da = /<.*?>/g,
    cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    dc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
    ab = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    P = function (a) {
      return a && !0 !== a && '-' !== a ? !1 : !0;
    },
    Rb = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null;
    },
    Sb = function (a, b) {
      bb[b] || (bb[b] = new RegExp(Ta(b), 'g'));
      return 'string' === typeof a && '.' !== b ? a.replace(/\./g, '').replace(bb[b], '.') : a;
    },
    cb = function (a, b, c) {
      var d = 'string' === typeof a;
      if (P(a)) return !0;
      b && d && (a = Sb(a, b));
      c && d && (a = a.replace(ab, ''));
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    Tb = function (a, b, c) {
      return P(a) ? !0 : P(a) || 'string' === typeof a ? (cb(a.replace(Da, ''), b, c) ? !0 : null) : null;
    },
    K = function (a, b, c) {
      var d = [],
        e = 0,
        h = a.length;
      if (c !== n) for (; e < h; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else for (; e < h; e++) a[e] && d.push(a[e][b]);
      return d;
    },
    ka = function (a, b, c, d) {
      var e = [],
        h = 0,
        g = b.length;
      if (d !== n) for (; h < g; h++) a[b[h]][c] && e.push(a[b[h]][c][d]);
      else for (; h < g; h++) e.push(a[b[h]][c]);
      return e;
    },
    Y = function (a, b) {
      var c = [];
      if (b === n) {
        b = 0;
        var d = a;
      } else (d = b), (b = a);
      for (a = b; a < d; a++) c.push(a);
      return c;
    },
    Ub = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b;
    },
    sa = function (a) {
      a: {
        if (!(2 > a.length)) {
          var b = a.slice().sort();
          for (var c = b[0], d = 1, e = b.length; d < e; d++) {
            if (b[d] === c) {
              b = !1;
              break a;
            }
            c = b[d];
          }
        }
        b = !0;
      }
      if (b) return a.slice();
      b = [];
      e = a.length;
      var h,
        g = 0;
      d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (h = 0; h < g; h++) if (b[h] === c) continue a;
        b.push(c);
        g++;
      }
      return b;
    };
  q.util = {
    throttle: function (a, b) {
      var c = b !== n ? b : 200,
        d,
        e;
      return function () {
        var b = this,
          g = +new Date(),
          f = arguments;
        d && g < d + c
          ? (clearTimeout(e),
            (e = setTimeout(function () {
              d = n;
              a.apply(b, f);
            }, c)))
          : ((d = g), a.apply(b, f));
      };
    },
    escapeRegex: function (a) {
      return a.replace(dc, '\\$1');
    },
  };
  var E = function (a, b, c) {
      a[b] !== n && (a[c] = a[b]);
    },
    ca = /\[.*?\]$/,
    W = /\(\)$/,
    Ta = q.util.escapeRegex,
    xa = f('<div>')[0],
    $b = xa.textContent !== n,
    bc = /<.*?>/g,
    Ra = q.util.throttle,
    Vb = [],
    G = Array.prototype,
    ec = function (a) {
      var b,
        c = q.settings,
        d = f.map(c, function (a, b) {
          return a.nTable;
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && 'table' === a.nodeName.toLowerCase()) {
          var e = f.inArray(a, d);
          return -1 !== e ? [c[e]] : null;
        }
        if (a && 'function' === typeof a.settings) return a.settings().toArray();
        'string' === typeof a ? (b = f(a)) : a instanceof f && (b = a);
      } else return [];
      if (b)
        return b
          .map(function (a) {
            e = f.inArray(this, d);
            return -1 !== e ? c[e] : null;
          })
          .toArray();
    };
  var x = function (a, b) {
    if (!(this instanceof x)) return new x(a, b);
    var c = [],
      d = function (a) {
        (a = ec(a)) && c.push.apply(c, a);
      };
    if (f.isArray(a)) for (var e = 0, h = a.length; e < h; e++) d(a[e]);
    else d(a);
    this.context = sa(c);
    b && f.merge(this, b);
    this.selector = {rows: null, cols: null, opts: null};
    x.extend(this, this, Vb);
  };
  q.Api = x;
  f.extend(x.prototype, {
    any: function () {
      return 0 !== this.count();
    },
    concat: G.concat,
    context: [],
    count: function () {
      return this.flatten().length;
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
      return this;
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new x(b[a], this[a]) : null;
    },
    filter: function (a) {
      var b = [];
      if (G.filter) b = G.filter.call(this, a, this);
      else for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
      return new x(this.context, b);
    },
    flatten: function () {
      var a = [];
      return new x(this.context, a.concat.apply(a, this.toArray()));
    },
    join: G.join,
    indexOf:
      G.indexOf ||
      function (a, b) {
        b = b || 0;
        for (var c = this.length; b < c; b++) if (this[b] === a) return b;
        return -1;
      },
    iterator: function (a, b, c, d) {
      var e = [],
        h,
        g,
        f = this.context,
        l,
        m = this.selector;
      'string' === typeof a && ((d = c), (c = b), (b = a), (a = !1));
      var p = 0;
      for (h = f.length; p < h; p++) {
        var q = new x(f[p]);
        if ('table' === b) {
          var u = c.call(q, f[p], p);
          u !== n && e.push(u);
        } else if ('columns' === b || 'rows' === b) (u = c.call(q, f[p], this[p], p)), u !== n && e.push(u);
        else if ('column' === b || 'column-rows' === b || 'row' === b || 'cell' === b) {
          var t = this[p];
          'column-rows' === b && (l = Ea(f[p], m.opts));
          var w = 0;
          for (g = t.length; w < g; w++)
            (u = t[w]), (u = 'cell' === b ? c.call(q, f[p], u.row, u.column, p, w) : c.call(q, f[p], u, p, w, l)), u !== n && e.push(u);
        }
      }
      return e.length || d
        ? ((a = new x(f, a ? e.concat.apply([], e) : e)), (b = a.selector), (b.rows = m.rows), (b.cols = m.cols), (b.opts = m.opts), a)
        : this;
    },
    lastIndexOf:
      G.lastIndexOf ||
      function (a, b) {
        return this.indexOf.apply(this.toArray.reverse(), arguments);
      },
    length: 0,
    map: function (a) {
      var b = [];
      if (G.map) b = G.map.call(this, a, this);
      else for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
      return new x(this.context, b);
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a];
      });
    },
    pop: G.pop,
    push: G.push,
    reduce:
      G.reduce ||
      function (a, b) {
        return lb(this, a, b, 0, this.length, 1);
      },
    reduceRight:
      G.reduceRight ||
      function (a, b) {
        return lb(this, a, b, this.length - 1, -1, -1);
      },
    reverse: G.reverse,
    selector: null,
    shift: G.shift,
    slice: function () {
      return new x(this.context, this);
    },
    sort: G.sort,
    splice: G.splice,
    toArray: function () {
      return G.slice.call(this);
    },
    to$: function () {
      return f(this);
    },
    toJQuery: function () {
      return f(this);
    },
    unique: function () {
      return new x(this.context, sa(this));
    },
    unshift: G.unshift,
  });
  x.extend = function (a, b, c) {
    if (c.length && b && (b instanceof x || b.__dt_wrapper)) {
      var d,
        e = function (a, b, c) {
          return function () {
            var d = b.apply(a, arguments);
            x.extend(d, d, c.methodExt);
            return d;
          };
        };
      var h = 0;
      for (d = c.length; h < d; h++) {
        var f = c[h];
        b[f.name] = 'function' === f.type ? e(a, f.val, f) : 'object' === f.type ? {} : f.val;
        b[f.name].__dt_wrapper = !0;
        x.extend(a, b[f.name], f.propExt);
      }
    }
  };
  x.register = t = function (a, b) {
    if (f.isArray(a)) for (var c = 0, d = a.length; c < d; c++) x.register(a[c], b);
    else {
      d = a.split('.');
      var e = Vb,
        h;
      a = 0;
      for (c = d.length; a < c; a++) {
        var g = (h = -1 !== d[a].indexOf('()')) ? d[a].replace('()', '') : d[a];
        a: {
          var k = 0;
          for (var l = e.length; k < l; k++)
            if (e[k].name === g) {
              k = e[k];
              break a;
            }
          k = null;
        }
        k || ((k = {name: g, val: {}, methodExt: [], propExt: [], type: 'object'}), e.push(k));
        a === c - 1
          ? ((k.val = b), (k.type = 'function' === typeof b ? 'function' : f.isPlainObject(b) ? 'object' : 'other'))
          : (e = h ? k.methodExt : k.propExt);
      }
    }
  };
  x.registerPlural = z = function (a, b, c) {
    x.register(a, c);
    x.register(b, function () {
      var a = c.apply(this, arguments);
      return a === this ? this : a instanceof x ? (a.length ? (f.isArray(a[0]) ? new x(a.context, a[0]) : a[0]) : n) : a;
    });
  };
  var Wb = function (a, b) {
    if (f.isArray(a))
      return f.map(a, function (a) {
        return Wb(a, b);
      });
    if ('number' === typeof a) return [b[a]];
    var c = f.map(b, function (a, b) {
      return a.nTable;
    });
    return f(c)
      .filter(a)
      .map(function (a) {
        a = f.inArray(this, c);
        return b[a];
      })
      .toArray();
  };
  t('tables()', function (a) {
    return a !== n && null !== a ? new x(Wb(a, this.context)) : this;
  });
  t('table()', function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new x(b[0]) : a;
  });
  z('tables().nodes()', 'table().node()', function () {
    return this.iterator(
      'table',
      function (a) {
        return a.nTable;
      },
      1,
    );
  });
  z('tables().body()', 'table().body()', function () {
    return this.iterator(
      'table',
      function (a) {
        return a.nTBody;
      },
      1,
    );
  });
  z('tables().header()', 'table().header()', function () {
    return this.iterator(
      'table',
      function (a) {
        return a.nTHead;
      },
      1,
    );
  });
  z('tables().footer()', 'table().footer()', function () {
    return this.iterator(
      'table',
      function (a) {
        return a.nTFoot;
      },
      1,
    );
  });
  z('tables().containers()', 'table().container()', function () {
    return this.iterator(
      'table',
      function (a) {
        return a.nTableWrapper;
      },
      1,
    );
  });
  t('draw()', function (a) {
    return this.iterator('table', function (b) {
      'page' === a ? S(b) : ('string' === typeof a && (a = 'full-hold' === a ? !1 : !0), U(b, !1 === a));
    });
  });
  t('page()', function (a) {
    return a === n
      ? this.page.info().page
      : this.iterator('table', function (b) {
          Wa(b, a);
        });
  });
  t('page.info()', function (a) {
    if (0 === this.context.length) return n;
    a = this.context[0];
    var b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: 'ssp' === I(a),
    };
  });
  t('page.len()', function (a) {
    return a === n
      ? 0 !== this.context.length
        ? this.context[0]._iDisplayLength
        : n
      : this.iterator('table', function (b) {
          Ua(b, a);
        });
  });
  var Xb = function (a, b, c) {
    if (c) {
      var d = new x(a);
      d.one('draw', function () {
        c(d.ajax.json());
      });
    }
    if ('ssp' == I(a)) U(a, b);
    else {
      J(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      ua(a, [], function (c) {
        pa(a);
        c = va(a, c);
        for (var d = 0, e = c.length; d < e; d++) R(a, c[d]);
        U(a, b);
        J(a, !1);
      });
    }
  };
  t('ajax.json()', function () {
    var a = this.context;
    if (0 < a.length) return a[0].json;
  });
  t('ajax.params()', function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData;
  });
  t('ajax.reload()', function (a, b) {
    return this.iterator('table', function (c) {
      Xb(c, !1 === b, a);
    });
  });
  t('ajax.url()', function (a) {
    var b = this.context;
    if (a === n) {
      if (0 === b.length) return n;
      b = b[0];
      return b.ajax ? (f.isPlainObject(b.ajax) ? b.ajax.url : b.ajax) : b.sAjaxSource;
    }
    return this.iterator('table', function (b) {
      f.isPlainObject(b.ajax) ? (b.ajax.url = a) : (b.ajax = a);
    });
  });
  t('ajax.url().load()', function (a, b) {
    return this.iterator('table', function (c) {
      Xb(c, !1 === b, a);
    });
  });
  var db = function (a, b, c, d, e) {
      var h = [],
        g,
        k,
        l;
      var m = typeof b;
      (b && 'string' !== m && 'function' !== m && b.length !== n) || (b = [b]);
      m = 0;
      for (k = b.length; m < k; m++) {
        var p = b[m] && b[m].split && !b[m].match(/[\[\(:]/) ? b[m].split(',') : [b[m]];
        var q = 0;
        for (l = p.length; q < l; q++) (g = c('string' === typeof p[q] ? f.trim(p[q]) : p[q])) && g.length && (h = h.concat(g));
      }
      a = C.selector[a];
      if (a.length) for (m = 0, k = a.length; m < k; m++) h = a[m](d, e, h);
      return sa(h);
    },
    eb = function (a) {
      a || (a = {});
      a.filter && a.search === n && (a.search = a.filter);
      return f.extend({search: 'none', order: 'current', page: 'all'}, a);
    },
    fb = function (a) {
      for (var b = 0, c = a.length; b < c; b++) if (0 < a[b].length) return (a[0] = a[b]), (a[0].length = 1), (a.length = 1), (a.context = [a.context[b]]), a;
      a.length = 0;
      return a;
    },
    Ea = function (a, b) {
      var c = [],
        d = a.aiDisplay;
      var e = a.aiDisplayMaster;
      var h = b.search;
      var g = b.order;
      b = b.page;
      if ('ssp' == I(a)) return 'removed' === h ? [] : Y(0, e.length);
      if ('current' == b) for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) c.push(d[g]);
      else if ('current' == g || 'applied' == g)
        if ('none' == h) c = e.slice();
        else if ('applied' == h) c = d.slice();
        else {
          if ('removed' == h) {
            var k = {};
            g = 0;
            for (a = d.length; g < a; g++) k[d[g]] = null;
            c = f.map(e, function (a) {
              return k.hasOwnProperty(a) ? null : a;
            });
          }
        }
      else if ('index' == g || 'original' == g)
        for (g = 0, a = a.aoData.length; g < a; g++)
          'none' == h ? c.push(g) : ((e = f.inArray(g, d)), ((-1 === e && 'removed' == h) || (0 <= e && 'applied' == h)) && c.push(g));
      return c;
    },
    fc = function (a, b, c) {
      var d;
      return db(
        'row',
        b,
        function (b) {
          var e = Rb(b),
            g = a.aoData;
          if (null !== e && !c) return [e];
          d || (d = Ea(a, c));
          if (null !== e && -1 !== f.inArray(e, d)) return [e];
          if (null === b || b === n || '' === b) return d;
          if ('function' === typeof b)
            return f.map(d, function (a) {
              var c = g[a];
              return b(a, c._aData, c.nTr) ? a : null;
            });
          if (b.nodeName) {
            e = b._DT_RowIndex;
            var k = b._DT_CellIndex;
            if (e !== n) return g[e] && g[e].nTr === b ? [e] : [];
            if (k) return g[k.row] && g[k.row].nTr === b.parentNode ? [k.row] : [];
            e = f(b).closest('*[data-dt-row]');
            return e.length ? [e.data('dt-row')] : [];
          }
          if ('string' === typeof b && '#' === b.charAt(0) && ((e = a.aIds[b.replace(/^#/, '')]), e !== n)) return [e.idx];
          e = Ub(ka(a.aoData, d, 'nTr'));
          return f(e)
            .filter(b)
            .map(function () {
              return this._DT_RowIndex;
            })
            .toArray();
        },
        a,
        c,
      );
    };
  t('rows()', function (a, b) {
    a === n ? (a = '') : f.isPlainObject(a) && ((b = a), (a = ''));
    b = eb(b);
    var c = this.iterator(
      'table',
      function (c) {
        return fc(c, a, b);
      },
      1,
    );
    c.selector.rows = a;
    c.selector.opts = b;
    return c;
  });
  t('rows().nodes()', function () {
    return this.iterator(
      'row',
      function (a, b) {
        return a.aoData[b].nTr || n;
      },
      1,
    );
  });
  t('rows().data()', function () {
    return this.iterator(
      !0,
      'rows',
      function (a, b) {
        return ka(a.aoData, b, '_aData');
      },
      1,
    );
  });
  z('rows().cache()', 'row().cache()', function (a) {
    return this.iterator(
      'row',
      function (b, c) {
        b = b.aoData[c];
        return 'search' === a ? b._aFilterData : b._aSortData;
      },
      1,
    );
  });
  z('rows().invalidate()', 'row().invalidate()', function (a) {
    return this.iterator('row', function (b, c) {
      da(b, c, a);
    });
  });
  z('rows().indexes()', 'row().index()', function () {
    return this.iterator(
      'row',
      function (a, b) {
        return b;
      },
      1,
    );
  });
  z('rows().ids()', 'row().id()', function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var f = 0, g = this[d].length; f < g; f++) {
        var k = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? '#' : '') + k);
      }
    return new x(c, b);
  });
  z('rows().remove()', 'row().remove()', function () {
    var a = this;
    this.iterator('row', function (b, c, d) {
      var e = b.aoData,
        f = e[c],
        g,
        k;
      e.splice(c, 1);
      var l = 0;
      for (g = e.length; l < g; l++) {
        var m = e[l];
        var p = m.anCells;
        null !== m.nTr && (m.nTr._DT_RowIndex = l);
        if (null !== p) for (m = 0, k = p.length; m < k; m++) p[m]._DT_CellIndex.row = l;
      }
      qa(b.aiDisplayMaster, c);
      qa(b.aiDisplay, c);
      qa(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      Va(b);
      c = b.rowIdFn(f._aData);
      c !== n && delete b.aIds[c];
    });
    this.iterator('table', function (a) {
      for (var b = 0, d = a.aoData.length; b < d; b++) a.aoData[b].idx = b;
    });
    return this;
  });
  t('rows.add()', function (a) {
    var b = this.iterator(
        'table',
        function (b) {
          var c,
            d = [];
          var f = 0;
          for (c = a.length; f < c; f++) {
            var k = a[f];
            k.nodeName && 'TR' === k.nodeName.toUpperCase() ? d.push(oa(b, k)[0]) : d.push(R(b, k));
          }
          return d;
        },
        1,
      ),
      c = this.rows(-1);
    c.pop();
    f.merge(c, b);
    return c;
  });
  t('row()', function (a, b) {
    return fb(this.rows(a, b));
  });
  t('row().data()', function (a) {
    var b = this.context;
    if (a === n) return b.length && this.length ? b[0].aoData[this[0]]._aData : n;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    f.isArray(a) && c.nTr && c.nTr.id && Q(b[0].rowId)(a, c.nTr.id);
    da(b[0], this[0], 'data');
    return this;
  });
  t('row().node()', function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null;
  });
  t('row.add()', function (a) {
    a instanceof f && a.length && (a = a[0]);
    var b = this.iterator('table', function (b) {
      return a.nodeName && 'TR' === a.nodeName.toUpperCase() ? oa(b, a)[0] : R(b, a);
    });
    return this.row(b[0]);
  });
  var gc = function (a, b, c, d) {
      var e = [],
        h = function (b, c) {
          if (f.isArray(b) || b instanceof f) for (var d = 0, g = b.length; d < g; d++) h(b[d], c);
          else
            b.nodeName && 'tr' === b.nodeName.toLowerCase()
              ? e.push(b)
              : ((d = f('<tr><td/></tr>').addClass(c)), (f('td', d).addClass(c).html(b)[0].colSpan = V(a)), e.push(d[0]));
        };
      h(c, d);
      b._details && b._details.detach();
      b._details = f(e);
      b._detailsShow && b._details.insertAfter(b.nTr);
    },
    gb = function (a, b) {
      var c = a.context;
      c.length && (a = c[0].aoData[b !== n ? b : a[0]]) && a._details && (a._details.remove(), (a._detailsShow = n), (a._details = n));
    },
    Yb = function (a, b) {
      var c = a.context;
      c.length && a.length && ((a = c[0].aoData[a[0]]), a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) : a._details.detach(), hc(c[0])));
    },
    hc = function (a) {
      var b = new x(a),
        c = a.aoData;
      b.off('draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details');
      0 < K(c, '_details').length &&
        (b.on('draw.dt.DT_details', function (d, e) {
          a === e &&
            b
              .rows({page: 'current'})
              .eq(0)
              .each(function (a) {
                a = c[a];
                a._detailsShow && a._details.insertAfter(a.nTr);
              });
        }),
        b.on('column-visibility.dt.DT_details', function (b, e, f, g) {
          if (a === e) for (e = V(e), f = 0, g = c.length; f < g; f++) (b = c[f]), b._details && b._details.children('td[colspan]').attr('colspan', e);
        }),
        b.on('destroy.dt.DT_details', function (d, e) {
          if (a === e) for (d = 0, e = c.length; d < e; d++) c[d]._details && gb(b, d);
        }));
    };
  t('row().child()', function (a, b) {
    var c = this.context;
    if (a === n) return c.length && this.length ? c[0].aoData[this[0]]._details : n;
    !0 === a ? this.child.show() : !1 === a ? gb(this) : c.length && this.length && gc(c[0], c[0].aoData[this[0]], a, b);
    return this;
  });
  t(['row().child.show()', 'row().child().show()'], function (a) {
    Yb(this, !0);
    return this;
  });
  t(['row().child.hide()', 'row().child().hide()'], function () {
    Yb(this, !1);
    return this;
  });
  t(['row().child.remove()', 'row().child().remove()'], function () {
    gb(this);
    return this;
  });
  t('row().child.isShown()', function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1;
  });
  var ic = /^([^:]+):(name|visIdx|visible)$/,
    Zb = function (a, b, c, d, e) {
      c = [];
      d = 0;
      for (var f = e.length; d < f; d++) c.push(F(a, e[d], b));
      return c;
    },
    jc = function (a, b, c) {
      var d = a.aoColumns,
        e = K(d, 'sName'),
        h = K(d, 'nTh');
      return db(
        'column',
        b,
        function (b) {
          var g = Rb(b);
          if ('' === b) return Y(d.length);
          if (null !== g) return [0 <= g ? g : d.length + g];
          if ('function' === typeof b) {
            var l = Ea(a, c);
            return f.map(d, function (c, d) {
              return b(d, Zb(a, d, 0, 0, l), h[d]) ? d : null;
            });
          }
          var m = 'string' === typeof b ? b.match(ic) : '';
          if (m)
            switch (m[2]) {
              case 'visIdx':
              case 'visible':
                g = parseInt(m[1], 10);
                if (0 > g) {
                  var p = f.map(d, function (a, b) {
                    return a.bVisible ? b : null;
                  });
                  return [p[p.length + g]];
                }
                return [aa(a, g)];
              case 'name':
                return f.map(e, function (a, b) {
                  return a === m[1] ? b : null;
                });
              default:
                return [];
            }
          if (b.nodeName && b._DT_CellIndex) return [b._DT_CellIndex.column];
          g = f(h)
            .filter(b)
            .map(function () {
              return f.inArray(this, h);
            })
            .toArray();
          if (g.length || !b.nodeName) return g;
          g = f(b).closest('*[data-dt-column]');
          return g.length ? [g.data('dt-column')] : [];
        },
        a,
        c,
      );
    };
  t('columns()', function (a, b) {
    a === n ? (a = '') : f.isPlainObject(a) && ((b = a), (a = ''));
    b = eb(b);
    var c = this.iterator(
      'table',
      function (c) {
        return jc(c, a, b);
      },
      1,
    );
    c.selector.cols = a;
    c.selector.opts = b;
    return c;
  });
  z('columns().header()', 'column().header()', function (a, b) {
    return this.iterator(
      'column',
      function (a, b) {
        return a.aoColumns[b].nTh;
      },
      1,
    );
  });
  z('columns().footer()', 'column().footer()', function (a, b) {
    return this.iterator(
      'column',
      function (a, b) {
        return a.aoColumns[b].nTf;
      },
      1,
    );
  });
  z('columns().data()', 'column().data()', function () {
    return this.iterator('column-rows', Zb, 1);
  });
  z('columns().dataSrc()', 'column().dataSrc()', function () {
    return this.iterator(
      'column',
      function (a, b) {
        return a.aoColumns[b].mData;
      },
      1,
    );
  });
  z('columns().cache()', 'column().cache()', function (a) {
    return this.iterator(
      'column-rows',
      function (b, c, d, e, f) {
        return ka(b.aoData, f, 'search' === a ? '_aFilterData' : '_aSortData', c);
      },
      1,
    );
  });
  z('columns().nodes()', 'column().nodes()', function () {
    return this.iterator(
      'column-rows',
      function (a, b, c, d, e) {
        return ka(a.aoData, e, 'anCells', b);
      },
      1,
    );
  });
  z('columns().visible()', 'column().visible()', function (a, b) {
    var c = this,
      d = this.iterator('column', function (b, c) {
        if (a === n) return b.aoColumns[c].bVisible;
        var d = b.aoColumns,
          e = d[c],
          h = b.aoData,
          m;
        if (a !== n && e.bVisible !== a) {
          if (a) {
            var p = f.inArray(!0, K(d, 'bVisible'), c + 1);
            d = 0;
            for (m = h.length; d < m; d++) {
              var q = h[d].nTr;
              b = h[d].anCells;
              q && q.insertBefore(b[c], b[p] || null);
            }
          } else f(K(b.aoData, 'anCells', c)).detach();
          e.bVisible = a;
        }
      });
    a !== n &&
      this.iterator('table', function (d) {
        fa(d, d.aoHeader);
        fa(d, d.aoFooter);
        d.aiDisplay.length || f(d.nTBody).find('td[colspan]').attr('colspan', V(d));
        Aa(d);
        c.iterator('column', function (c, d) {
          A(c, null, 'column-visibility', [c, d, a, b]);
        });
        (b === n || b) && c.columns.adjust();
      });
    return d;
  });
  z('columns().indexes()', 'column().index()', function (a) {
    return this.iterator(
      'column',
      function (b, c) {
        return 'visible' === a ? ba(b, c) : c;
      },
      1,
    );
  });
  t('columns.adjust()', function () {
    return this.iterator(
      'table',
      function (a) {
        Z(a);
      },
      1,
    );
  });
  t('column.index()', function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ('fromVisible' === a || 'toData' === a) return aa(c, b);
      if ('fromData' === a || 'toVisible' === a) return ba(c, b);
    }
  });
  t('column()', function (a, b) {
    return fb(this.columns(a, b));
  });
  var kc = function (a, b, c) {
    var d = a.aoData,
      e = Ea(a, c),
      h = Ub(ka(d, e, 'anCells')),
      g = f([].concat.apply([], h)),
      k,
      l = a.aoColumns.length,
      m,
      p,
      q,
      u,
      t,
      w;
    return db(
      'cell',
      b,
      function (b) {
        var c = 'function' === typeof b;
        if (null === b || b === n || c) {
          m = [];
          p = 0;
          for (q = e.length; p < q; p++)
            for (k = e[p], u = 0; u < l; u++)
              (t = {row: k, column: u}), c ? ((w = d[k]), b(t, F(a, k, u), w.anCells ? w.anCells[u] : null) && m.push(t)) : m.push(t);
          return m;
        }
        if (f.isPlainObject(b)) return b.column !== n && b.row !== n && -1 !== f.inArray(b.row, e) ? [b] : [];
        c = g
          .filter(b)
          .map(function (a, b) {
            return {row: b._DT_CellIndex.row, column: b._DT_CellIndex.column};
          })
          .toArray();
        if (c.length || !b.nodeName) return c;
        w = f(b).closest('*[data-dt-row]');
        return w.length ? [{row: w.data('dt-row'), column: w.data('dt-column')}] : [];
      },
      a,
      c,
    );
  };
  t('cells()', function (a, b, c) {
    f.isPlainObject(a) && (a.row === n ? ((c = a), (a = null)) : ((c = b), (b = null)));
    f.isPlainObject(b) && ((c = b), (b = null));
    if (null === b || b === n)
      return this.iterator('table', function (b) {
        return kc(b, a, eb(c));
      });
    var d = c ? {page: c.page, order: c.order, search: c.search} : {},
      e = this.columns(b, d),
      h = this.rows(a, d),
      g,
      k,
      l,
      m;
    d = this.iterator(
      'table',
      function (a, b) {
        a = [];
        g = 0;
        for (k = h[b].length; g < k; g++) for (l = 0, m = e[b].length; l < m; l++) a.push({row: h[b][g], column: e[b][l]});
        return a;
      },
      1,
    );
    d = c && c.selected ? this.cells(d, c) : d;
    f.extend(d.selector, {cols: b, rows: a, opts: c});
    return d;
  });
  z('cells().nodes()', 'cell().node()', function () {
    return this.iterator(
      'cell',
      function (a, b, c) {
        return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : n;
      },
      1,
    );
  });
  t('cells().data()', function () {
    return this.iterator(
      'cell',
      function (a, b, c) {
        return F(a, b, c);
      },
      1,
    );
  });
  z('cells().cache()', 'cell().cache()', function (a) {
    a = 'search' === a ? '_aFilterData' : '_aSortData';
    return this.iterator(
      'cell',
      function (b, c, d) {
        return b.aoData[c][a][d];
      },
      1,
    );
  });
  z('cells().render()', 'cell().render()', function (a) {
    return this.iterator(
      'cell',
      function (b, c, d) {
        return F(b, c, d, a);
      },
      1,
    );
  });
  z('cells().indexes()', 'cell().index()', function () {
    return this.iterator(
      'cell',
      function (a, b, c) {
        return {row: b, column: c, columnVisible: ba(a, c)};
      },
      1,
    );
  });
  z('cells().invalidate()', 'cell().invalidate()', function (a) {
    return this.iterator('cell', function (b, c, d) {
      da(b, c, a, d);
    });
  });
  t('cell()', function (a, b, c) {
    return fb(this.cells(a, b, c));
  });
  t('cell().data()', function (a) {
    var b = this.context,
      c = this[0];
    if (a === n) return b.length && c.length ? F(b[0], c[0].row, c[0].column) : n;
    nb(b[0], c[0].row, c[0].column, a);
    da(b[0], c[0].row, 'data', c[0].column);
    return this;
  });
  t('order()', function (a, b) {
    var c = this.context;
    if (a === n) return 0 !== c.length ? c[0].aaSorting : n;
    'number' === typeof a ? (a = [[a, b]]) : a.length && !f.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator('table', function (b) {
      b.aaSorting = a.slice();
    });
  });
  t('order.listener()', function (a, b, c) {
    return this.iterator('table', function (d) {
      Pa(d, a, b, c);
    });
  });
  t('order.fixed()', function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : n;
      return f.isArray(b) ? {pre: b} : b;
    }
    return this.iterator('table', function (b) {
      b.aaSortingFixed = f.extend(!0, {}, a);
    });
  });
  t(['columns().order()', 'column().order()'], function (a) {
    var b = this;
    return this.iterator('table', function (c, d) {
      var e = [];
      f.each(b[d], function (b, c) {
        e.push([c, a]);
      });
      c.aaSorting = e;
    });
  });
  t('search()', function (a, b, c, d) {
    var e = this.context;
    return a === n
      ? 0 !== e.length
        ? e[0].oPreviousSearch.sSearch
        : n
      : this.iterator('table', function (e) {
          e.oFeatures.bFilter &&
            ha(
              e,
              f.extend({}, e.oPreviousSearch, {
                sSearch: a + '',
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d,
              }),
              1,
            );
        });
  });
  z('columns().search()', 'column().search()', function (a, b, c, d) {
    return this.iterator('column', function (e, h) {
      var g = e.aoPreSearchCols;
      if (a === n) return g[h].sSearch;
      e.oFeatures.bFilter &&
        (f.extend(g[h], {sSearch: a + '', bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d}),
        ha(e, e.oPreviousSearch, 1));
    });
  });
  t('state()', function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });
  t('state.clear()', function () {
    return this.iterator('table', function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {});
    });
  });
  t('state.loaded()', function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });
  t('state.save()', function () {
    return this.iterator('table', function (a) {
      Aa(a);
    });
  });
  q.versionCheck = q.fnVersionCheck = function (a) {
    var b = q.version.split('.');
    a = a.split('.');
    for (var c, d, e = 0, f = a.length; e < f; e++) if (((c = parseInt(b[e], 10) || 0), (d = parseInt(a[e], 10) || 0), c !== d)) return c > d;
    return !0;
  };
  q.isDataTable = q.fnIsDataTable = function (a) {
    var b = f(a).get(0),
      c = !1;
    if (a instanceof q.Api) return !0;
    f.each(q.settings, function (a, e) {
      a = e.nScrollHead ? f('table', e.nScrollHead)[0] : null;
      var d = e.nScrollFoot ? f('table', e.nScrollFoot)[0] : null;
      if (e.nTable === b || a === b || d === b) c = !0;
    });
    return c;
  };
  q.tables = q.fnTables = function (a) {
    var b = !1;
    f.isPlainObject(a) && ((b = a.api), (a = a.visible));
    var c = f.map(q.settings, function (b) {
      if (!a || (a && f(b.nTable).is(':visible'))) return b.nTable;
    });
    return b ? new x(c) : c;
  };
  q.camelToHungarian = L;
  t('$()', function (a, b) {
    b = this.rows(b).nodes();
    b = f(b);
    return f([].concat(b.filter(a).toArray(), b.find(a).toArray()));
  });
  f.each(['on', 'one', 'off'], function (a, b) {
    t(b + '()', function () {
      var a = Array.prototype.slice.call(arguments);
      a[0] = f
        .map(a[0].split(/\s/), function (a) {
          return a.match(/\.dt\b/) ? a : a + '.dt';
        })
        .join(' ');
      var d = f(this.tables().nodes());
      d[b].apply(d, a);
      return this;
    });
  });
  t('clear()', function () {
    return this.iterator('table', function (a) {
      pa(a);
    });
  });
  t('settings()', function () {
    return new x(this.context, this.context);
  });
  t('init()', function () {
    var a = this.context;
    return a.length ? a[0].oInit : null;
  });
  t('data()', function () {
    return this.iterator('table', function (a) {
      return K(a.aoData, '_aData');
    }).flatten();
  });
  t('destroy()', function (a) {
    a = a || !1;
    return this.iterator('table', function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        e = b.nTable,
        h = b.nTBody,
        g = b.nTHead,
        k = b.nTFoot,
        l = f(e);
      h = f(h);
      var m = f(b.nTableWrapper),
        p = f.map(b.aoData, function (a) {
          return a.nTr;
        }),
        n;
      b.bDestroying = !0;
      A(b, 'aoDestroyCallback', 'destroy', [b]);
      a || new x(b).columns().visible(!0);
      m.off('.DT').find(':not(tbody *)').off('.DT');
      f(y).off('.DT-' + b.sInstance);
      e != g.parentNode && (l.children('thead').detach(), l.append(g));
      k && e != k.parentNode && (l.children('tfoot').detach(), l.append(k));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      za(b);
      f(p).removeClass(b.asStripeClasses.join(' '));
      f('th, td', g).removeClass(d.sSortable + ' ' + d.sSortableAsc + ' ' + d.sSortableDesc + ' ' + d.sSortableNone);
      h.children().detach();
      h.append(p);
      g = a ? 'remove' : 'detach';
      l[g]();
      m[g]();
      !a &&
        c &&
        (c.insertBefore(e, b.nTableReinsertBefore),
        l.css('width', b.sDestroyWidth).removeClass(d.sTable),
        (n = b.asDestroyStripes.length) &&
          h.children().each(function (a) {
            f(this).addClass(b.asDestroyStripes[a % n]);
          }));
      c = f.inArray(b, q.settings);
      -1 !== c && q.settings.splice(c, 1);
    });
  });
  f.each(['column', 'row', 'cell'], function (a, b) {
    t(b + 's().every()', function (a) {
      var c = this.selector.opts,
        e = this;
      return this.iterator(b, function (d, f, k, l, m) {
        a.call(e[b](f, 'cell' === b ? k : c, 'cell' === b ? c : n), f, k, l, m);
      });
    });
  });
  t('i18n()', function (a, b, c) {
    var d = this.context[0];
    a = T(a)(d.oLanguage);
    a === n && (a = b);
    c !== n && f.isPlainObject(a) && (a = a[c] !== n ? a[c] : a._);
    return a.replace('%d', c);
  });
  q.version = '1.10.21';
  q.settings = [];
  q.models = {};
  q.models.oSearch = {bCaseInsensitive: !0, sSearch: '', bRegex: !1, bSmart: !0};
  q.models.oRow = {nTr: null, anCells: null, _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: '', src: null, idx: -1};
  q.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: 'std',
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
  };
  q.defaults = {
    aaData: null,
    aaSorting: [[0, 'asc']],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem('DataTables_' + a.sInstance + '_' + location.pathname));
      } catch (b) {
        return {};
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem('DataTables_' + a.sInstance + '_' + location.pathname, JSON.stringify(b));
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {sSortAscending: ': activate to sort column ascending', sSortDescending: ': activate to sort column descending'},
      oPaginate: {sFirst: 'First', sLast: 'Last', sNext: 'Next', sPrevious: 'Previous'},
      sEmptyTable: 'No data available in table',
      sInfo: 'Showing _START_ to _END_ of _TOTAL_ entries',
      sInfoEmpty: 'Showing 0 to 0 of 0 entries',
      sInfoFiltered: '(filtered from _MAX_ total entries)',
      sInfoPostFix: '',
      sDecimal: '',
      sThousands: ',',
      sLengthMenu: 'Show _MENU_ entries',
      sLoadingRecords: 'Loading...',
      sProcessing: 'Processing...',
      sSearch: 'Search:',
      sSearchPlaceholder: '',
      sUrl: '',
      sZeroRecords: 'No matching records found',
    },
    oSearch: f.extend({}, q.models.oSearch),
    sAjaxDataProp: 'data',
    sAjaxSource: null,
    sDom: 'lfrtip',
    searchDelay: null,
    sPaginationType: 'simple_numbers',
    sScrollX: '',
    sScrollXInner: '',
    sScrollY: '',
    sServerMethod: 'GET',
    renderer: null,
    rowId: 'DT_RowId',
  };
  H(q.defaults);
  q.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ['asc', 'desc'],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: 'td',
    sClass: '',
    sContentPadding: '',
    sDefaultContent: null,
    sName: '',
    sSortDataType: 'std',
    sTitle: null,
    sType: null,
    sWidth: null,
  };
  H(q.defaults.column);
  q.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null,
    },
    oScroll: {bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null},
    oLanguage: {fnInfoCallback: null},
    oBrowser: {bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0},
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: '',
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: 'two_button',
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: n,
    oAjaxData: n,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return 'ssp' == I(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length;
    },
    fnRecordsDisplay: function () {
      return 'ssp' == I(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length;
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        f = e.bPaginate;
      return e.bServerSide ? (!1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay)) : !f || c > d || -1 === a ? d : c;
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
  };
  q.ext = C = {
    buttons: {},
    classes: {},
    builder: 'bs4/jszip-2.5.0/dt-1.10.21/af-2.3.5/b-1.6.2/b-colvis-1.6.2/b-html5-1.6.2/b-print-1.6.2/cr-1.5.2/kt-2.5.2/r-2.2.5/sp-1.1.1/sl-1.3.1',
    errMode: 'alert',
    feature: [],
    search: [],
    selector: {cell: [], column: [], row: []},
    internal: {},
    legacy: {ajax: null},
    pager: {},
    renderer: {pageButton: {}, header: {}},
    order: {},
    type: {detect: [], search: {}, order: {}},
    _unique: 0,
    fnVersionCheck: q.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: q.version,
  };
  f.extend(C, {
    afnFiltering: C.search,
    aTypes: C.type.detect,
    ofnSearch: C.type.search,
    oSort: C.type.order,
    afnSortData: C.order,
    aoFeatures: C.feature,
    oApi: C.internal,
    oStdClasses: C.classes,
    oPagination: C.pager,
  });
  f.extend(q.ext.classes, {
    sTable: 'dataTable',
    sNoFooter: 'no-footer',
    sPageButton: 'paginate_button',
    sPageButtonActive: 'current',
    sPageButtonDisabled: 'disabled',
    sStripeOdd: 'odd',
    sStripeEven: 'even',
    sRowEmpty: 'dataTables_empty',
    sWrapper: 'dataTables_wrapper',
    sFilter: 'dataTables_filter',
    sInfo: 'dataTables_info',
    sPaging: 'dataTables_paginate paging_',
    sLength: 'dataTables_length',
    sProcessing: 'dataTables_processing',
    sSortAsc: 'sorting_asc',
    sSortDesc: 'sorting_desc',
    sSortable: 'sorting',
    sSortableAsc: 'sorting_asc_disabled',
    sSortableDesc: 'sorting_desc_disabled',
    sSortableNone: 'sorting_disabled',
    sSortColumn: 'sorting_',
    sFilterInput: '',
    sLengthSelect: '',
    sScrollWrapper: 'dataTables_scroll',
    sScrollHead: 'dataTables_scrollHead',
    sScrollHeadInner: 'dataTables_scrollHeadInner',
    sScrollBody: 'dataTables_scrollBody',
    sScrollFoot: 'dataTables_scrollFoot',
    sScrollFootInner: 'dataTables_scrollFootInner',
    sHeaderTH: '',
    sFooterTH: '',
    sSortJUIAsc: '',
    sSortJUIDesc: '',
    sSortJUI: '',
    sSortJUIAscAllowed: '',
    sSortJUIDescAllowed: '',
    sSortJUIWrapper: '',
    sSortIcon: '',
    sJUIHeader: '',
    sJUIFooter: '',
  });
  var Ob = q.ext.pager;
  f.extend(Ob, {
    simple: function (a, b) {
      return ['previous', 'next'];
    },
    full: function (a, b) {
      return ['first', 'previous', 'next', 'last'];
    },
    numbers: function (a, b) {
      return [ja(a, b)];
    },
    simple_numbers: function (a, b) {
      return ['previous', ja(a, b), 'next'];
    },
    full_numbers: function (a, b) {
      return ['first', 'previous', ja(a, b), 'next', 'last'];
    },
    first_last_numbers: function (a, b) {
      return ['first', ja(a, b), 'last'];
    },
    _numbers: ja,
    numbers_length: 7,
  });
  f.extend(!0, q.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, h) {
        var g = a.oClasses,
          k = a.oLanguage.oPaginate,
          l = a.oLanguage.oAria.paginate || {},
          m,
          p,
          q = 0,
          t = function (b, d) {
            var n,
              r = g.sPageButtonDisabled,
              u = function (b) {
                Wa(a, b.data.action, !0);
              };
            var w = 0;
            for (n = d.length; w < n; w++) {
              var v = d[w];
              if (f.isArray(v)) {
                var x = f('<' + (v.DT_el || 'div') + '/>').appendTo(b);
                t(x, v);
              } else {
                m = null;
                p = v;
                x = a.iTabIndex;
                switch (v) {
                  case 'ellipsis':
                    b.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case 'first':
                    m = k.sFirst;
                    0 === e && ((x = -1), (p += ' ' + r));
                    break;
                  case 'previous':
                    m = k.sPrevious;
                    0 === e && ((x = -1), (p += ' ' + r));
                    break;
                  case 'next':
                    m = k.sNext;
                    if (0 === h || e === h - 1) (x = -1), (p += ' ' + r);
                    break;
                  case 'last':
                    m = k.sLast;
                    e === h - 1 && ((x = -1), (p += ' ' + r));
                    break;
                  default:
                    (m = v + 1), (p = e === v ? g.sPageButtonActive : '');
                }
                null !== m &&
                  ((x = f('<a>', {
                    class: g.sPageButton + ' ' + p,
                    'aria-controls': a.sTableId,
                    'aria-label': l[v],
                    'data-dt-idx': q,
                    tabindex: x,
                    id: 0 === c && 'string' === typeof v ? a.sTableId + '_' + v : null,
                  })
                    .html(m)
                    .appendTo(b)),
                  Za(x, {action: v}, u),
                  q++);
              }
            }
          };
        try {
          var x = f(b).find(w.activeElement).data('dt-idx');
        } catch (lc) {}
        t(f(b).empty(), d);
        x !== n &&
          f(b)
            .find('[data-dt-idx=' + x + ']')
            .trigger('focus');
      },
    },
  });
  f.extend(q.ext.type.detect, [
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return cb(a, b) ? 'num' + b : null;
    },
    function (a, b) {
      if (a && !(a instanceof Date) && !cc.test(a)) return null;
      b = Date.parse(a);
      return (null !== b && !isNaN(b)) || P(a) ? 'date' : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return cb(a, b, !0) ? 'num-fmt' + b : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return Tb(a, b) ? 'html-num' + b : null;
    },
    function (a, b) {
      b = b.oLanguage.sDecimal;
      return Tb(a, b, !0) ? 'html-num-fmt' + b : null;
    },
    function (a, b) {
      return P(a) || ('string' === typeof a && -1 !== a.indexOf('<')) ? 'html' : null;
    },
  ]);
  f.extend(q.ext.type.search, {
    html: function (a) {
      return P(a) ? a : 'string' === typeof a ? a.replace(Qb, ' ').replace(Da, '') : '';
    },
    string: function (a) {
      return P(a) ? a : 'string' === typeof a ? a.replace(Qb, ' ') : a;
    },
  });
  var Ca = function (a, b, c, d) {
    if (0 !== a && (!a || '-' === a)) return -Infinity;
    b && (a = Sb(a, b));
    a.replace && (c && (a = a.replace(c, '')), d && (a = a.replace(d, '')));
    return 1 * a;
  };
  f.extend(C.type.order, {
    'date-pre': function (a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a;
    },
    'html-pre': function (a) {
      return P(a) ? '' : a.replace ? a.replace(/<.*?>/g, '').toLowerCase() : a + '';
    },
    'string-pre': function (a) {
      return P(a) ? '' : 'string' === typeof a ? a.toLowerCase() : a.toString ? a.toString() : '';
    },
    'string-asc': function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    'string-desc': function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0;
    },
  });
  Ga('');
  f.extend(!0, q.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        f(a.nTable).on('order.dt.DT', function (e, f, g, k) {
          a === f &&
            ((e = c.idx),
            b
              .removeClass(c.sSortingClass + ' ' + d.sSortAsc + ' ' + d.sSortDesc)
              .addClass('asc' == k[e] ? d.sSortAsc : 'desc' == k[e] ? d.sSortDesc : c.sSortingClass));
        });
      },
      jqueryui: function (a, b, c, d) {
        f('<div/>')
          .addClass(d.sSortJUIWrapper)
          .append(b.contents())
          .append(f('<span/>').addClass(d.sSortIcon + ' ' + c.sSortingClassJUI))
          .appendTo(b);
        f(a.nTable).on('order.dt.DT', function (e, f, g, k) {
          a === f &&
            ((e = c.idx),
            b.removeClass(d.sSortAsc + ' ' + d.sSortDesc).addClass('asc' == k[e] ? d.sSortAsc : 'desc' == k[e] ? d.sSortDesc : c.sSortingClass),
            b
              .find('span.' + d.sSortIcon)
              .removeClass(d.sSortJUIAsc + ' ' + d.sSortJUIDesc + ' ' + d.sSortJUI + ' ' + d.sSortJUIAscAllowed + ' ' + d.sSortJUIDescAllowed)
              .addClass('asc' == k[e] ? d.sSortJUIAsc : 'desc' == k[e] ? d.sSortJUIDesc : c.sSortingClassJUI));
        });
      },
    },
  });
  var hb = function (a) {
    return 'string' === typeof a ? a.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : a;
  };
  q.render = {
    number: function (a, b, c, d, e) {
      return {
        display: function (f) {
          if ('number' !== typeof f && 'string' !== typeof f) return f;
          var g = 0 > f ? '-' : '',
            h = parseFloat(f);
          if (isNaN(h)) return hb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) : '';
          return g + (d || '') + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || '');
        },
      };
    },
    text: function () {
      return {display: hb, filter: hb};
    },
  };
  f.extend(q.ext.internal, {
    _fnExternApiFunc: Pb,
    _fnBuildAjax: ua,
    _fnAjaxUpdate: pb,
    _fnAjaxParameters: yb,
    _fnAjaxUpdateDraw: zb,
    _fnAjaxDataSrc: va,
    _fnAddColumn: Ha,
    _fnColumnOptions: la,
    _fnAdjustColumnSizing: Z,
    _fnVisibleToColumnIndex: aa,
    _fnColumnIndexToVisible: ba,
    _fnVisbleColumns: V,
    _fnGetColumns: na,
    _fnColumnTypes: Ja,
    _fnApplyColumnDefs: mb,
    _fnHungarianMap: H,
    _fnCamelToHungarian: L,
    _fnLanguageCompat: Fa,
    _fnBrowserDetect: kb,
    _fnAddData: R,
    _fnAddTr: oa,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== n ? b._DT_RowIndex : null;
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return f.inArray(c, a.aoData[b].anCells);
    },
    _fnGetCellData: F,
    _fnSetCellData: nb,
    _fnSplitObjNotation: Ma,
    _fnGetObjectDataFn: T,
    _fnSetObjectDataFn: Q,
    _fnGetDataMaster: Na,
    _fnClearTable: pa,
    _fnDeleteIndex: qa,
    _fnInvalidate: da,
    _fnGetRowElements: La,
    _fnCreateTr: Ka,
    _fnBuildHead: ob,
    _fnDrawHead: fa,
    _fnDraw: S,
    _fnReDraw: U,
    _fnAddOptionsHtml: rb,
    _fnDetectHeader: ea,
    _fnGetUniqueThs: ta,
    _fnFeatureHtmlFilter: tb,
    _fnFilterComplete: ha,
    _fnFilterCustom: Cb,
    _fnFilterColumn: Bb,
    _fnFilter: Ab,
    _fnFilterCreateSearch: Sa,
    _fnEscapeRegex: Ta,
    _fnFilterData: Db,
    _fnFeatureHtmlInfo: wb,
    _fnUpdateInfo: Gb,
    _fnInfoMacros: Hb,
    _fnInitialise: ia,
    _fnInitComplete: wa,
    _fnLengthChange: Ua,
    _fnFeatureHtmlLength: sb,
    _fnFeatureHtmlPaginate: xb,
    _fnPageChange: Wa,
    _fnFeatureHtmlProcessing: ub,
    _fnProcessingDisplay: J,
    _fnFeatureHtmlTable: vb,
    _fnScrollDraw: ma,
    _fnApplyToChildren: N,
    _fnCalculateColumnWidths: Ia,
    _fnThrottle: Ra,
    _fnConvertToWidth: Ib,
    _fnGetWidestNode: Jb,
    _fnGetMaxLenString: Kb,
    _fnStringToCss: B,
    _fnSortFlatten: X,
    _fnSort: qb,
    _fnSortAria: Mb,
    _fnSortListener: Ya,
    _fnSortAttachListener: Pa,
    _fnSortingClasses: za,
    _fnSortData: Lb,
    _fnSaveState: Aa,
    _fnLoadState: Nb,
    _fnSettingsFromNode: Ba,
    _fnLog: O,
    _fnMap: M,
    _fnBindAction: Za,
    _fnCallbackReg: D,
    _fnCallbackFire: A,
    _fnLengthOverflow: Va,
    _fnRenderer: Qa,
    _fnDataSource: I,
    _fnRowAttributes: Oa,
    _fnExtend: $a,
    _fnCalculateEnd: function () {},
  });
  f.fn.dataTable = q;
  q.$ = f;
  f.fn.dataTableSettings = q.settings;
  f.fn.dataTableExt = q.ext;
  f.fn.DataTable = function (a) {
    return f(this).dataTable(a).api();
  };
  f.each(q, function (a, b) {
    f.fn.DataTable[a] = b;
  });
  return f.fn.dataTable;
});

/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
    var k = a[d];
    if (b.call(c, k, d, a)) return {i: d, v: k};
  }
  return {i: -1, v: void 0};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value);
      };
$jscomp.getGlobal = function (a) {
  a = ['object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global, a];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c;
  }
  throw Error('Cannot find global object');
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, b, c, e) {
  if (b) {
    c = $jscomp.global;
    a = a.split('.');
    for (e = 0; e < a.length - 1; e++) {
      var d = a[e];
      d in c || (c[d] = {});
      c = c[d];
    }
    a = a[a.length - 1];
    e = c[a];
    b = b(e);
    b != e && null != b && $jscomp.defineProperty(c, a, {configurable: !0, writable: !0, value: b});
  }
};
$jscomp.polyfill(
  'Array.prototype.find',
  function (a) {
    return a
      ? a
      : function (a, c) {
          return $jscomp.findInternal(this, a, c).v;
        };
  },
  'es6',
  'es3',
);
(function (a) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net'], function (b) {
        return a(b, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (b, c) {
        b || (b = window);
        (c && c.fn.dataTable) || (c = require('datatables.net')(b, c).$);
        return a(c, b, b.document);
      })
    : a(jQuery, window, document);
})(function (a, b, c, e) {
  var d = a.fn.dataTable;
  a.extend(!0, d.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: 'bootstrap',
  });
  a.extend(d.ext.classes, {
    sWrapper: 'dataTables_wrapper dt-bootstrap4',
    sFilterInput: 'form-control form-control-sm',
    sLengthSelect: 'custom-select custom-select-sm form-control form-control-sm',
    sProcessing: 'dataTables_processing card',
    sPageButton: 'paginate_button page-item',
  });
  d.ext.renderer.pageButton.bootstrap = function (b, l, v, w, m, r) {
    var k = new d.Api(b),
      x = b.oClasses,
      n = b.oLanguage.oPaginate,
      y = b.oLanguage.oAria.paginate || {},
      g,
      h,
      t = 0,
      u = function (c, d) {
        var e,
          l = function (b) {
            b.preventDefault();
            a(b.currentTarget).hasClass('disabled') || k.page() == b.data.action || k.page(b.data.action).draw('page');
          };
        var q = 0;
        for (e = d.length; q < e; q++) {
          var f = d[q];
          if (a.isArray(f)) u(c, f);
          else {
            h = g = '';
            switch (f) {
              case 'ellipsis':
                g = '&#x2026;';
                h = 'disabled';
                break;
              case 'first':
                g = n.sFirst;
                h = f + (0 < m ? '' : ' disabled');
                break;
              case 'previous':
                g = n.sPrevious;
                h = f + (0 < m ? '' : ' disabled');
                break;
              case 'next':
                g = n.sNext;
                h = f + (m < r - 1 ? '' : ' disabled');
                break;
              case 'last':
                g = n.sLast;
                h = f + (m < r - 1 ? '' : ' disabled');
                break;
              default:
                (g = f + 1), (h = m === f ? 'active' : '');
            }
            if (g) {
              var p = a('<li>', {class: x.sPageButton + ' ' + h, id: 0 === v && 'string' === typeof f ? b.sTableId + '_' + f : null})
                .append(
                  a('<a>', {href: '#', 'aria-controls': b.sTableId, 'aria-label': y[f], 'data-dt-idx': t, tabindex: b.iTabIndex, class: 'page-link'}).html(g),
                )
                .appendTo(c);
              b.oApi._fnBindAction(p, {action: f}, l);
              t++;
            }
          }
        }
      };
    try {
      var p = a(l).find(c.activeElement).data('dt-idx');
    } catch (z) {}
    u(a(l).empty().html('<ul class="pagination"/>').children('ul'), w);
    p !== e &&
      a(l)
        .find('[data-dt-idx=' + p + ']')
        .trigger('focus');
  };
  return d;
});

/*!
   Copyright 2010-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 AutoFill 2.3.5
 ©2008-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (b) {
  var f = 0;
  return function () {
    return f < b.length ? {done: !1, value: b[f++]} : {done: !0};
  };
};
$jscomp.arrayIterator = function (b) {
  return {next: $jscomp.arrayIteratorImpl(b)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (b, f, e) {
        b != Array.prototype && b != Object.prototype && (b[f] = e.value);
      };
$jscomp.getGlobal = function (b) {
  b = ['object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global, b];
  for (var f = 0; f < b.length; ++f) {
    var e = b[f];
    if (e && e.Math == Math) return e;
  }
  throw Error('Cannot find global object');
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = 'jscomp_symbol_';
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (b, f) {
  this.$jscomp$symbol$id_ = b;
  $jscomp.defineProperty(this, 'description', {configurable: !0, writable: !0, value: f});
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
  function b(e) {
    if (this instanceof b) throw new TypeError('Symbol is not a constructor');
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (e || '') + '_' + f++, e);
  }
  var f = 0;
  return b;
})();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.iterator;
  b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('Symbol.iterator'));
  'function' != typeof Array.prototype[b] &&
    $jscomp.defineProperty(Array.prototype, b, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      },
    });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.asyncIterator;
  b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol('Symbol.asyncIterator'));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (b) {
  $jscomp.initSymbolIterator();
  b = {next: b};
  b[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return b;
};
$jscomp.iteratorFromArray = function (b, f) {
  $jscomp.initSymbolIterator();
  b instanceof String && (b += '');
  var e = 0,
    m = {
      next: function () {
        if (e < b.length) {
          var k = e++;
          return {value: f(k, b[k]), done: !1};
        }
        m.next = function () {
          return {done: !0, value: void 0};
        };
        return m.next();
      },
    };
  m[Symbol.iterator] = function () {
    return m;
  };
  return m;
};
$jscomp.polyfill = function (b, f, e, m) {
  if (f) {
    e = $jscomp.global;
    b = b.split('.');
    for (m = 0; m < b.length - 1; m++) {
      var k = b[m];
      k in e || (e[k] = {});
      e = e[k];
    }
    b = b[b.length - 1];
    m = e[b];
    f = f(m);
    f != m && null != f && $jscomp.defineProperty(e, b, {configurable: !0, writable: !0, value: f});
  }
};
$jscomp.polyfill(
  'Array.prototype.keys',
  function (b) {
    return b
      ? b
      : function () {
          return $jscomp.iteratorFromArray(this, function (b) {
            return b;
          });
        };
  },
  'es6',
  'es3',
);
(function (b) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net'], function (f) {
        return b(f, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (f, e) {
        f || (f = window);
        (e && e.fn.dataTable) || (e = require('datatables.net')(f, e).$);
        return b(e, f, f.document);
      })
    : b(jQuery, window, document);
})(function (b, f, e, m) {
  var k = b.fn.dataTable,
    x = 0,
    l = function (a, d) {
      if (!k.versionCheck || !k.versionCheck('1.10.8')) throw 'Warning: AutoFill requires DataTables 1.10.8 or greater';
      this.c = b.extend(!0, {}, k.defaults.autoFill, l.defaults, d);
      this.s = {dt: new k.Api(a), namespace: '.autoFill' + x++, scroll: {}, scrollInterval: null, handle: {height: 0, width: 0}, enabled: !1};
      this.dom = {
        handle: b('<div class="dt-autofill-handle"/>'),
        select: {
          top: b('<div class="dt-autofill-select top"/>'),
          right: b('<div class="dt-autofill-select right"/>'),
          bottom: b('<div class="dt-autofill-select bottom"/>'),
          left: b('<div class="dt-autofill-select left"/>'),
        },
        background: b('<div class="dt-autofill-background"/>'),
        list: b('<div class="dt-autofill-list">' + this.s.dt.i18n('autoFill.info', '') + '<ul/></div>'),
        dtScroll: null,
        offsetParent: null,
      };
      this._constructor();
    };
  b.extend(l.prototype, {
    enabled: function () {
      return this.s.enabled;
    },
    enable: function (a) {
      var d = this;
      if (!1 === a) return this.disable();
      this.s.enabled = !0;
      this._focusListener();
      this.dom.handle.on('mousedown', function (a) {
        d._mousedown(a);
        return !1;
      });
      return this;
    },
    disable: function () {
      this.s.enabled = !1;
      this._focusListenerRemove();
      return this;
    },
    _constructor: function () {
      var a = this,
        d = this.s.dt,
        c = b('div.dataTables_scrollBody', this.s.dt.table().container());
      d.settings()[0].autoFill = this;
      c.length && ((this.dom.dtScroll = c), 'static' === c.css('position') && c.css('position', 'relative'));
      !1 !== this.c.enable && this.enable();
      d.on('destroy.autoFill', function () {
        a._focusListenerRemove();
      });
    },
    _attach: function (a) {
      var d = this.s.dt,
        c = d.cell(a).index(),
        g = this.dom.handle,
        h = this.s.handle;
      c && -1 !== d.columns(this.c.columns).indexes().indexOf(c.column)
        ? (this.dom.offsetParent || (this.dom.offsetParent = b(d.table().node()).offsetParent()),
          (h.height && h.width) || (g.appendTo('body'), (h.height = g.outerHeight()), (h.width = g.outerWidth())),
          (d = this._getPosition(a, this.dom.offsetParent)),
          (this.dom.attachedTo = a),
          g.css({top: d.top + a.offsetHeight - h.height, left: d.left + a.offsetWidth - h.width}).appendTo(this.dom.offsetParent))
        : this._detach();
    },
    _actionSelector: function (a) {
      var d = this,
        c = this.s.dt,
        g = l.actions,
        h = [];
      b.each(g, function (d, b) {
        b.available(c, a) && h.push(d);
      });
      if (1 === h.length && !1 === this.c.alwaysAsk) {
        var e = g[h[0]].execute(c, a);
        this._update(e, a);
      } else if (1 < h.length) {
        var f = this.dom.list.children('ul').empty();
        h.push('cancel');
        b.each(h, function (h, e) {
          f.append(
            b('<li/>')
              .append('<div class="dt-autofill-question">' + g[e].option(c, a) + '<div>')
              .append(
                b('<div class="dt-autofill-button">').append(
                  b('<button class="' + l.classes.btn + '">' + c.i18n('autoFill.button', '&gt;') + '</button>').on('click', function () {
                    var h = g[e].execute(c, a, b(this).closest('li'));
                    d._update(h, a);
                    d.dom.background.remove();
                    d.dom.list.remove();
                  }),
                ),
              ),
          );
        });
        this.dom.background.appendTo('body');
        this.dom.list.appendTo('body');
        this.dom.list.css('margin-top', (this.dom.list.outerHeight() / 2) * -1);
      }
    },
    _detach: function () {
      this.dom.attachedTo = null;
      this.dom.handle.detach();
    },
    _drawSelection: function (a, d) {
      var c = this.s.dt;
      d = this.s.start;
      var g = b(this.dom.start),
        h = {row: this.c.vertical ? c.rows({page: 'current'}).nodes().indexOf(a.parentNode) : d.row, column: this.c.horizontal ? b(a).index() : d.column};
      a = c.column.index('toData', h.column);
      var e = c.row(':eq(' + h.row + ')', {page: 'current'});
      e = b(c.cell(e.index(), a).node());
      if (c.cell(e).any() && -1 !== c.columns(this.c.columns).indexes().indexOf(a)) {
        this.s.end = h;
        c = d.row < h.row ? g : e;
        var f = d.row < h.row ? e : g;
        a = d.column < h.column ? g : e;
        g = d.column < h.column ? e : g;
        c = this._getPosition(c.get(0)).top;
        a = this._getPosition(a.get(0)).left;
        d = this._getPosition(f.get(0)).top + f.outerHeight() - c;
        g = this._getPosition(g.get(0)).left + g.outerWidth() - a;
        h = this.dom.select;
        h.top.css({top: c, left: a, width: g});
        h.left.css({top: c, left: a, height: d});
        h.bottom.css({top: c + d, left: a, width: g});
        h.right.css({top: c, left: a + g, height: d});
      }
    },
    _editor: function (a) {
      var d = this.s.dt,
        c = this.c.editor;
      if (c) {
        for (var b = {}, h = [], e = c.fields(), f = 0, k = a.length; f < k; f++)
          for (var l = 0, p = a[f].length; l < p; l++) {
            var q = a[f][l],
              n = d.settings()[0].aoColumns[q.index.column],
              r = n.editField;
            if (r === m) {
              n = n.mData;
              for (var u = 0, y = e.length; u < y; u++) {
                var w = c.field(e[u]);
                if (w.dataSrc() === n) {
                  r = w.name();
                  break;
                }
              }
            }
            if (!r) throw 'Could not automatically determine field data. Please see https://datatables.net/tn/11';
            b[r] || (b[r] = {});
            n = d.row(q.index.row).id();
            b[r][n] = q.set;
            h.push(q.index);
          }
        c.bubble(h, !1).multiSet(b).submit();
      }
    },
    _emitEvent: function (a, d) {
      this.s.dt.iterator('table', function (c, g) {
        b(c.nTable).triggerHandler(a + '.dt', d);
      });
    },
    _focusListener: function () {
      var a = this,
        d = this.s.dt,
        c = this.s.namespace,
        g = null !== this.c.focus ? this.c.focus : d.init().keys || d.settings()[0].keytable ? 'focus' : 'hover';
      if ('focus' === g)
        d.on('key-focus.autoFill', function (c, b, d) {
          a._attach(d.node());
        }).on('key-blur.autoFill', function (c, b, d) {
          a._detach();
        });
      else if ('click' === g)
        b(d.table().body()).on('click' + c, 'td, th', function (c) {
          a._attach(this);
        }),
          b(e.body).on('click' + c, function (c) {
            b(c.target).parents().filter(d.table().body()).length || a._detach();
          });
      else
        b(d.table().body())
          .on('mouseenter' + c, 'td, th', function (c) {
            a._attach(this);
          })
          .on('mouseleave' + c, function (c) {
            b(c.relatedTarget).hasClass('dt-autofill-handle') || a._detach();
          });
    },
    _focusListenerRemove: function () {
      var a = this.s.dt;
      a.off('.autoFill');
      b(a.table().body()).off(this.s.namespace);
      b(e.body).off(this.s.namespace);
    },
    _getPosition: function (a, d) {
      var c = 0,
        g = 0;
      d || (d = b(b(this.s.dt.table().node())[0].offsetParent));
      do {
        var h = a.offsetTop,
          e = a.offsetLeft;
        var f = b(a.offsetParent);
        c += h + 1 * parseInt(f.css('border-top-width'));
        g += e + 1 * parseInt(f.css('border-left-width'));
        if ('body' === a.nodeName.toLowerCase()) break;
        a = f.get(0);
      } while (f.get(0) !== d.get(0));
      return {top: c, left: g};
    },
    _mousedown: function (a) {
      var d = this,
        c = this.s.dt;
      this.dom.start = this.dom.attachedTo;
      this.s.start = {row: c.rows({page: 'current'}).nodes().indexOf(b(this.dom.start).parent()[0]), column: b(this.dom.start).index()};
      b(e.body)
        .on('mousemove.autoFill', function (a) {
          d._mousemove(a);
        })
        .on('mouseup.autoFill', function (a) {
          d._mouseup(a);
        });
      var g = this.dom.select;
      c = b(c.table().node()).offsetParent();
      g.top.appendTo(c);
      g.left.appendTo(c);
      g.right.appendTo(c);
      g.bottom.appendTo(c);
      this._drawSelection(this.dom.start, a);
      this.dom.handle.css('display', 'none');
      a = this.dom.dtScroll;
      this.s.scroll = {
        windowHeight: b(f).height(),
        windowWidth: b(f).width(),
        dtTop: a ? a.offset().top : null,
        dtLeft: a ? a.offset().left : null,
        dtHeight: a ? a.outerHeight() : null,
        dtWidth: a ? a.outerWidth() : null,
      };
    },
    _mousemove: function (a) {
      var b = a.target.nodeName.toLowerCase();
      if ('td' === b || 'th' === b) this._drawSelection(a.target, a), this._shiftScroll(a);
    },
    _mouseup: function (a) {
      b(e.body).off('.autoFill');
      var d = this,
        c = this.s.dt,
        g = this.dom.select;
      g.top.remove();
      g.left.remove();
      g.right.remove();
      g.bottom.remove();
      this.dom.handle.css('display', 'block');
      g = this.s.start;
      var h = this.s.end;
      if (g.row !== h.row || g.column !== h.column) {
        var f = c.cell(':eq(' + g.row + ')', g.column + ':visible', {page: 'current'});
        if (b('div.DTE', f.node()).length) {
          var k = c.editor();
          k.on('submitSuccess.dtaf close.dtaf', function () {
            k.off('.dtaf');
            setTimeout(function () {
              d._mouseup(a);
            }, 100);
          }).on('submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf', function () {
            k.off('.dtaf');
          });
          k.submit();
        } else {
          var l = this._range(g.row, h.row);
          g = this._range(g.column, h.column);
          h = [];
          for (var v = c.settings()[0], p = v.aoColumns, q = c.columns(this.c.columns).indexes(), n = 0; n < l.length; n++)
            h.push(
              b.map(g, function (a) {
                var b = c.row(':eq(' + l[n] + ')', {page: 'current'});
                a = c.cell(b.index(), a + ':visible');
                b = a.data();
                var d = a.index(),
                  g = p[d.column].editField;
                g !== m && (b = v.oApi._fnGetObjectDataFn(g)(c.row(d.row).data()));
                if (-1 !== q.indexOf(d.column)) return {cell: a, data: b, label: a.data(), index: d};
              }),
            );
          this._actionSelector(h);
          clearInterval(this.s.scrollInterval);
          this.s.scrollInterval = null;
        }
      }
    },
    _range: function (a, b) {
      var c = [];
      if (a <= b) for (; a <= b; a++) c.push(a);
      else for (; a >= b; a--) c.push(a);
      return c;
    },
    _shiftScroll: function (a) {
      var b = this,
        c = this.s.scroll,
        g = !1,
        h = a.pageY - e.body.scrollTop,
        f = a.pageX - e.body.scrollLeft,
        k,
        l,
        m,
        p;
      65 > h ? (k = -5) : h > c.windowHeight - 65 && (k = 5);
      65 > f ? (l = -5) : f > c.windowWidth - 65 && (l = 5);
      null !== c.dtTop && a.pageY < c.dtTop + 65 ? (m = -5) : null !== c.dtTop && a.pageY > c.dtTop + c.dtHeight - 65 && (m = 5);
      null !== c.dtLeft && a.pageX < c.dtLeft + 65 ? (p = -5) : null !== c.dtLeft && a.pageX > c.dtLeft + c.dtWidth - 65 && (p = 5);
      k || l || m || p
        ? ((c.windowVert = k), (c.windowHoriz = l), (c.dtVert = m), (c.dtHoriz = p), (g = !0))
        : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), (this.s.scrollInterval = null));
      !this.s.scrollInterval &&
        g &&
        (this.s.scrollInterval = setInterval(function () {
          c.windowVert && (e.body.scrollTop += c.windowVert);
          c.windowHoriz && (e.body.scrollLeft += c.windowHoriz);
          if (c.dtVert || c.dtHoriz) {
            var a = b.dom.dtScroll[0];
            c.dtVert && (a.scrollTop += c.dtVert);
            c.dtHoriz && (a.scrollLeft += c.dtHoriz);
          }
        }, 20));
    },
    _update: function (a, b) {
      if (!1 !== a) {
        a = this.s.dt;
        var c = a.columns(this.c.columns).indexes();
        this._emitEvent('preAutoFill', [a, b]);
        this._editor(b);
        if (null !== this.c.update ? this.c.update : !this.c.editor) {
          for (var d = 0, h = b.length; d < h; d++)
            for (var e = 0, f = b[d].length; e < f; e++) {
              var k = b[d][e];
              -1 !== c.indexOf(k.index.column) && k.cell.data(k.set);
            }
          a.draw(!1);
        }
        this._emitEvent('autoFill', [a, b]);
      }
    },
  });
  l.actions = {
    increment: {
      available: function (a, b) {
        a = b[0][0].label;
        return !isNaN(a - parseFloat(a));
      },
      option: function (a, b) {
        return a.i18n('autoFill.increment', 'Increment / decrement each cell by: <input type="number" value="1">');
      },
      execute: function (a, d, c) {
        a = 1 * d[0][0].data;
        c = 1 * b('input', c).val();
        for (var g = 0, e = d.length; g < e; g++) for (var f = 0, k = d[g].length; f < k; f++) (d[g][f].set = a), (a += c);
      },
    },
    fill: {
      available: function (a, b) {
        return !0;
      },
      option: function (a, b) {
        return a.i18n('autoFill.fill', 'Fill all cells with <i>' + b[0][0].label + '</i>');
      },
      execute: function (a, b, c) {
        a = b[0][0].data;
        c = 0;
        for (var d = b.length; c < d; c++) for (var e = 0, f = b[c].length; e < f; e++) b[c][e].set = a;
      },
    },
    fillHorizontal: {
      available: function (a, b) {
        return 1 < b.length && 1 < b[0].length;
      },
      option: function (a, b) {
        return a.i18n('autoFill.fillHorizontal', 'Fill cells horizontally');
      },
      execute: function (a, b, c) {
        a = 0;
        for (c = b.length; a < c; a++) for (var d = 0, e = b[a].length; d < e; d++) b[a][d].set = b[a][0].data;
      },
    },
    fillVertical: {
      available: function (a, b) {
        return 1 < b.length;
      },
      option: function (a, b) {
        return a.i18n('autoFill.fillVertical', 'Fill cells vertically');
      },
      execute: function (a, b, c) {
        a = 0;
        for (c = b.length; a < c; a++) for (var d = 0, e = b[a].length; d < e; d++) b[a][d].set = b[0][d].data;
      },
    },
    cancel: {
      available: function () {
        return !1;
      },
      option: function (a) {
        return a.i18n('autoFill.cancel', 'Cancel');
      },
      execute: function () {
        return !1;
      },
    },
  };
  l.version = '2.3.5';
  l.defaults = {alwaysAsk: !1, focus: null, columns: '', enable: !0, update: null, editor: null, vertical: !0, horizontal: !0};
  l.classes = {btn: 'btn'};
  var t = b.fn.dataTable.Api;
  t.register('autoFill()', function () {
    return this;
  });
  t.register('autoFill().enabled()', function () {
    var a = this.context[0];
    return a.autoFill ? a.autoFill.enabled() : !1;
  });
  t.register('autoFill().enable()', function (a) {
    return this.iterator('table', function (b) {
      b.autoFill && b.autoFill.enable(a);
    });
  });
  t.register('autoFill().disable()', function () {
    return this.iterator('table', function (a) {
      a.autoFill && a.autoFill.disable();
    });
  });
  b(e).on('preInit.dt.autofill', function (a, d, c) {
    'dt' === a.namespace && ((a = d.oInit.autoFill), (c = k.defaults.autoFill), a || c) && ((c = b.extend({}, a, c)), !1 !== a && new l(d, c));
  });
  k.AutoFill = l;
  return (k.AutoFill = l);
});

/*!
 Bootstrap integration for DataTables' AutoFill
 ©2015 SpryMedia Ltd - datatables.net/license
*/
(function (b) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net-bs4', 'datatables.net-autofill'], function (a) {
        return b(a, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (a, c) {
        a || (a = window);
        (c && c.fn.dataTable) || (c = require('datatables.net-bs4')(a, c).$);
        c.fn.dataTable.AutoFill || require('datatables.net-autofill')(a, c);
        return b(c, a, a.document);
      })
    : b(jQuery, window, document);
})(function (b, a, c, d) {
  b = b.fn.dataTable;
  b.AutoFill.classes.btn = 'btn btn-primary';
  return b;
});

/*!
 Buttons for DataTables 1.6.2
 ©2016-2020 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net'], function (v) {
        return d(v, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (v, u) {
        v || (v = window);
        (u && u.fn.dataTable) || (u = require('datatables.net')(v, u).$);
        return d(u, v, v.document);
      })
    : d(jQuery, window, document);
})(function (d, v, u, n) {
  function y(a, b, c) {
    d.fn.animate ? a.stop().fadeIn(b, c) : (a.css('display', 'block'), c && c.call(a));
  }
  function z(a, b, c) {
    d.fn.animate ? a.stop().fadeOut(b, c) : (a.css('display', 'none'), c && c.call(a));
  }
  function B(a, b) {
    a = new m.Api(a);
    b = b ? b : a.init().buttons || m.defaults.buttons;
    return new r(a, b).container();
  }
  var m = d.fn.dataTable,
    E = 0,
    F = 0,
    q = m.ext.buttons,
    r = function (a, b) {
      if (!(this instanceof r))
        return function (b) {
          return new r(b, a).container();
        };
      'undefined' === typeof b && (b = {});
      !0 === b && (b = {});
      d.isArray(b) && (b = {buttons: b});
      this.c = d.extend(!0, {}, r.defaults, b);
      b.buttons && (this.c.buttons = b.buttons);
      this.s = {dt: new m.Api(a), buttons: [], listenKeys: '', namespace: 'dtb' + E++};
      this.dom = {container: d('<' + this.c.dom.container.tag + '/>').addClass(this.c.dom.container.className)};
      this._constructor();
    };
  d.extend(r.prototype, {
    action: function (a, b) {
      a = this._nodeToButton(a);
      if (b === n) return a.conf.action;
      a.conf.action = b;
      return this;
    },
    active: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.button.active;
      c = d(c.node);
      if (b === n) return c.hasClass(a);
      c.toggleClass(a, b === n ? !0 : b);
      return this;
    },
    add: function (a, b) {
      var c = this.s.buttons;
      if ('string' === typeof b) {
        b = b.split('-');
        var e = this.s;
        c = 0;
        for (var d = b.length - 1; c < d; c++) e = e.buttons[1 * b[c]];
        c = e.buttons;
        b = 1 * b[b.length - 1];
      }
      this._expandButton(c, a, e !== n, b);
      this._draw();
      return this;
    },
    container: function () {
      return this.dom.container;
    },
    disable: function (a) {
      a = this._nodeToButton(a);
      d(a.node).addClass(this.c.dom.button.disabled).attr('disabled', !0);
      return this;
    },
    destroy: function () {
      d('body').off('keyup.' + this.s.namespace);
      var a = this.s.buttons.slice(),
        b;
      var c = 0;
      for (b = a.length; c < b; c++) this.remove(a[c].node);
      this.dom.container.remove();
      a = this.s.dt.settings()[0];
      c = 0;
      for (b = a.length; c < b; c++)
        if (a.inst === this) {
          a.splice(c, 1);
          break;
        }
      return this;
    },
    enable: function (a, b) {
      if (!1 === b) return this.disable(a);
      a = this._nodeToButton(a);
      d(a.node).removeClass(this.c.dom.button.disabled).removeAttr('disabled');
      return this;
    },
    name: function () {
      return this.c.name;
    },
    node: function (a) {
      if (!a) return this.dom.container;
      a = this._nodeToButton(a);
      return d(a.node);
    },
    processing: function (a, b) {
      var c = this.s.dt,
        e = this._nodeToButton(a);
      if (b === n) return d(e.node).hasClass('processing');
      d(e.node).toggleClass('processing', b);
      d(c.table().node()).triggerHandler('buttons-processing.dt', [b, c.button(a), c, d(a), e.conf]);
      return this;
    },
    remove: function (a) {
      var b = this._nodeToButton(a),
        c = this._nodeToHost(a),
        e = this.s.dt;
      if (b.buttons.length) for (var g = b.buttons.length - 1; 0 <= g; g--) this.remove(b.buttons[g].node);
      b.conf.destroy && b.conf.destroy.call(e.button(a), e, d(a), b.conf);
      this._removeKey(b.conf);
      d(b.node).remove();
      a = d.inArray(b, c);
      c.splice(a, 1);
      return this;
    },
    text: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.collection.buttonLiner;
      a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
      var e = this.s.dt,
        g = d(c.node),
        f = function (a) {
          return 'function' === typeof a ? a(e, g, c.conf) : a;
        };
      if (b === n) return f(c.conf.text);
      c.conf.text = b;
      a ? g.children(a).html(f(b)) : g.html(f(b));
      return this;
    },
    _constructor: function () {
      var a = this,
        b = this.s.dt,
        c = b.settings()[0],
        e = this.c.buttons;
      c._buttons || (c._buttons = []);
      c._buttons.push({inst: this, name: this.c.name});
      for (var g = 0, f = e.length; g < f; g++) this.add(e[g]);
      b.on('destroy', function (b, e) {
        e === c && a.destroy();
      });
      d('body').on('keyup.' + this.s.namespace, function (b) {
        if (!u.activeElement || u.activeElement === u.body) {
          var c = String.fromCharCode(b.keyCode).toLowerCase();
          -1 !== a.s.listenKeys.toLowerCase().indexOf(c) && a._keypress(c, b);
        }
      });
    },
    _addKey: function (a) {
      a.key && (this.s.listenKeys += d.isPlainObject(a.key) ? a.key.key : a.key);
    },
    _draw: function (a, b) {
      a || ((a = this.dom.container), (b = this.s.buttons));
      a.children().detach();
      for (var c = 0, e = b.length; c < e; c++)
        a.append(b[c].inserter), a.append(' '), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons);
    },
    _expandButton: function (a, b, c, e) {
      var g = this.s.dt,
        f = 0;
      b = d.isArray(b) ? b : [b];
      for (var k = 0, h = b.length; k < h; k++) {
        var t = this._resolveExtends(b[k]);
        if (t)
          if (d.isArray(t)) this._expandButton(a, t, c, e);
          else {
            var l = this._buildButton(t, c);
            l &&
              (e !== n && null !== e ? (a.splice(e, 0, l), e++) : a.push(l),
              l.conf.buttons &&
                ((l.collection = d('<' + this.c.dom.collection.tag + '/>')),
                (l.conf._collection = l.collection),
                this._expandButton(l.buttons, l.conf.buttons, !0, e)),
              t.init && t.init.call(g.button(l.node), g, d(l.node), t),
              f++);
          }
      }
    },
    _buildButton: function (a, b) {
      var c = this.c.dom.button,
        e = this.c.dom.buttonLiner,
        g = this.c.dom.collection,
        f = this.s.dt,
        k = function (b) {
          return 'function' === typeof b ? b(f, l, a) : b;
        };
      b && g.button && (c = g.button);
      b && g.buttonLiner && (e = g.buttonLiner);
      if (a.available && !a.available(f, a)) return !1;
      var h = function (a, b, c, e) {
        e.action.call(b.button(c), a, b, c, e);
        d(b.table().node()).triggerHandler('buttons-action.dt', [b.button(c), b, c, e]);
      };
      g = a.tag || c.tag;
      var t = a.clickBlurs === n ? !0 : a.clickBlurs,
        l = d('<' + g + '/>')
          .addClass(c.className)
          .attr('tabindex', this.s.dt.settings()[0].iTabIndex)
          .attr('aria-controls', this.s.dt.table().node().id)
          .on('click.dtb', function (b) {
            b.preventDefault();
            !l.hasClass(c.disabled) && a.action && h(b, f, l, a);
            t && l.trigger('blur');
          })
          .on('keyup.dtb', function (b) {
            13 === b.keyCode && !l.hasClass(c.disabled) && a.action && h(b, f, l, a);
          });
      'a' === g.toLowerCase() && l.attr('href', '#');
      'button' === g.toLowerCase() && l.attr('type', 'button');
      e.tag
        ? ((g = d('<' + e.tag + '/>')
            .html(k(a.text))
            .addClass(e.className)),
          'a' === e.tag.toLowerCase() && g.attr('href', '#'),
          l.append(g))
        : l.html(k(a.text));
      !1 === a.enabled && l.addClass(c.disabled);
      a.className && l.addClass(a.className);
      a.titleAttr && l.attr('title', k(a.titleAttr));
      a.attr && l.attr(a.attr);
      a.namespace || (a.namespace = '.dt-button-' + F++);
      e =
        (e = this.c.dom.buttonContainer) && e.tag
          ? d('<' + e.tag + '/>')
              .addClass(e.className)
              .append(l)
          : l;
      this._addKey(a);
      this.c.buttonCreated && (e = this.c.buttonCreated(a, e));
      return {conf: a, node: l.get(0), inserter: e, buttons: [], inCollection: b, collection: null};
    },
    _nodeToButton: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b[c];
        if (b[c].buttons.length) {
          var d = this._nodeToButton(a, b[c].buttons);
          if (d) return d;
        }
      }
    },
    _nodeToHost: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, e = b.length; c < e; c++) {
        if (b[c].node === a) return b;
        if (b[c].buttons.length) {
          var d = this._nodeToHost(a, b[c].buttons);
          if (d) return d;
        }
      }
    },
    _keypress: function (a, b) {
      if (!b._buttonsHandled) {
        var c = function (e) {
          for (var g = 0, f = e.length; g < f; g++) {
            var k = e[g].conf,
              h = e[g].node;
            k.key &&
              (k.key === a
                ? ((b._buttonsHandled = !0), d(h).click())
                : !d.isPlainObject(k.key) ||
                  k.key.key !== a ||
                  (k.key.shiftKey && !b.shiftKey) ||
                  (k.key.altKey && !b.altKey) ||
                  (k.key.ctrlKey && !b.ctrlKey) ||
                  (k.key.metaKey && !b.metaKey) ||
                  ((b._buttonsHandled = !0), d(h).click()));
            e[g].buttons.length && c(e[g].buttons);
          }
        };
        c(this.s.buttons);
      }
    },
    _removeKey: function (a) {
      if (a.key) {
        var b = d.isPlainObject(a.key) ? a.key.key : a.key;
        a = this.s.listenKeys.split('');
        b = d.inArray(b, a);
        a.splice(b, 1);
        this.s.listenKeys = a.join('');
      }
    },
    _resolveExtends: function (a) {
      var b = this.s.dt,
        c,
        e = function (c) {
          for (var e = 0; !d.isPlainObject(c) && !d.isArray(c); ) {
            if (c === n) return;
            if ('function' === typeof c) {
              if (((c = c(b, a)), !c)) return !1;
            } else if ('string' === typeof c) {
              if (!q[c]) throw 'Unknown button type: ' + c;
              c = q[c];
            }
            e++;
            if (30 < e) throw 'Buttons: Too many iterations';
          }
          return d.isArray(c) ? c : d.extend({}, c);
        };
      for (a = e(a); a && a.extend; ) {
        if (!q[a.extend]) throw 'Cannot extend unknown button type: ' + a.extend;
        var g = e(q[a.extend]);
        if (d.isArray(g)) return g;
        if (!g) return !1;
        var f = g.className;
        a = d.extend({}, g, a);
        f && a.className !== f && (a.className = f + ' ' + a.className);
        var k = a.postfixButtons;
        if (k) {
          a.buttons || (a.buttons = []);
          f = 0;
          for (c = k.length; f < c; f++) a.buttons.push(k[f]);
          a.postfixButtons = null;
        }
        if ((k = a.prefixButtons)) {
          a.buttons || (a.buttons = []);
          f = 0;
          for (c = k.length; f < c; f++) a.buttons.splice(f, 0, k[f]);
          a.prefixButtons = null;
        }
        a.extend = g.extend;
      }
      return a;
    },
    _popover: function (a, b, c) {
      var e = this.c,
        g = d.extend(
          {
            align: 'button-left',
            autoClose: !1,
            background: !0,
            backgroundClassName: 'dt-button-background',
            contentClassName: e.dom.collection.className,
            collectionLayout: '',
            collectionTitle: '',
            dropup: !1,
            fade: 400,
            rightAlignClassName: 'dt-button-right',
            tag: e.dom.collection.tag,
          },
          c,
        ),
        f = b.node(),
        k = function () {
          z(d('.dt-button-collection'), g.fade, function () {
            d(this).detach();
          });
          d(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr('aria-expanded', 'false');
          d('div.dt-button-background').off('click.dtb-collection');
          r.background(!1, g.backgroundClassName, g.fade, f);
          d('body').off('.dtb-collection');
          b.off('buttons-action.b-internal');
        };
      !1 === a && k();
      c = d(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());
      c.length && ((f = c.eq(0)), k());
      c = d('<div/>').addClass('dt-button-collection').addClass(g.collectionLayout).css('display', 'none');
      a = d(a).addClass(g.contentClassName).attr('role', 'menu').appendTo(c);
      f.attr('aria-expanded', 'true');
      f.parents('body')[0] !== u.body && (f = u.body.lastChild);
      g.collectionTitle && c.prepend('<div class="dt-button-collection-title">' + g.collectionTitle + '</div>');
      y(c.insertAfter(f));
      var h = d(b.table().container());
      e = c.css('position');
      'dt-container' === g.align && ((f = f.parent()), c.css('width', h.width()));
      if ('absolute' === e) {
        e = f.position();
        c.css({top: e.top + f.outerHeight(), left: e.left});
        var t = c.outerHeight();
        c.outerWidth();
        var l = h.offset().top + h.height();
        l = e.top + f.outerHeight() + t - l;
        var p = e.top - t,
          w = h.offset().top;
        e = e.top - t - 5;
        (l > w - p || g.dropup) && -e < w && c.css('top', e);
        e = h.offset().left;
        h = h.width();
        h = e + h;
        t = c.offset().left;
        l = c.width();
        l = t + l;
        p = f.offset().left;
        w = f.outerWidth();
        w = p + w;
        p = 0;
        c.hasClass(g.rightAlignClassName) || 'button-right' === g.align
          ? ((p = w - l), e > t + p && ((e -= t + p), (h -= l + p), (p = e > h ? p + h : p + e)))
          : ((p = e - t), h < l + p && ((e -= t + p), (h -= l + p), (p = e > h ? p + h : p + e)));
        c.css('left', c.position().left + p);
      } else (e = c.height() / 2), e > d(v).height() / 2 && (e = d(v).height() / 2), c.css('marginTop', -1 * e);
      g.background && r.background(!0, g.backgroundClassName, g.fade, f);
      d('div.dt-button-background').on('click.dtb-collection', function () {});
      d('body')
        .on('click.dtb-collection', function (b) {
          var c = d.fn.addBack ? 'addBack' : 'andSelf';
          d(b.target).parents()[c]().filter(a).length || k();
        })
        .on('keyup.dtb-collection', function (a) {
          27 === a.keyCode && k();
        });
      g.autoClose &&
        setTimeout(function () {
          b.on('buttons-action.b-internal', function (a, b, c, e) {
            e[0] !== f[0] && k();
          });
        }, 0);
      d(c).trigger('buttons-popover.dt');
    },
  });
  r.background = function (a, b, c, e) {
    c === n && (c = 400);
    e || (e = u.body);
    a
      ? y(d('<div/>').addClass(b).css('display', 'none').insertAfter(e), c)
      : z(d('div.' + b), c, function () {
          d(this).removeClass(b).remove();
        });
  };
  r.instanceSelector = function (a, b) {
    if (a === n || null === a)
      return d.map(b, function (a) {
        return a.inst;
      });
    var c = [],
      e = d.map(b, function (a) {
        return a.name;
      }),
      g = function (a) {
        if (d.isArray(a)) for (var f = 0, h = a.length; f < h; f++) g(a[f]);
        else
          'string' === typeof a
            ? -1 !== a.indexOf(',')
              ? g(a.split(','))
              : ((a = d.inArray(d.trim(a), e)), -1 !== a && c.push(b[a].inst))
            : 'number' === typeof a && c.push(b[a].inst);
      };
    g(a);
    return c;
  };
  r.buttonSelector = function (a, b) {
    for (
      var c = [],
        e = function (a, b, c) {
          for (var d, g, f = 0, h = b.length; f < h; f++)
            if ((d = b[f])) (g = c !== n ? c + f : f + ''), a.push({node: d.node, name: d.conf.name, idx: g}), d.buttons && e(a, d.buttons, g + '-');
        },
        g = function (a, b) {
          var f,
            k = [];
          e(k, b.s.buttons);
          var h = d.map(k, function (a) {
            return a.node;
          });
          if (d.isArray(a) || a instanceof d) for (h = 0, f = a.length; h < f; h++) g(a[h], b);
          else if (null === a || a === n || '*' === a) for (h = 0, f = k.length; h < f; h++) c.push({inst: b, node: k[h].node});
          else if ('number' === typeof a) c.push({inst: b, node: b.s.buttons[a].node});
          else if ('string' === typeof a)
            if (-1 !== a.indexOf(',')) for (k = a.split(','), h = 0, f = k.length; h < f; h++) g(d.trim(k[h]), b);
            else if (a.match(/^\d+(\-\d+)*$/))
              (h = d.map(k, function (a) {
                return a.idx;
              })),
                c.push({inst: b, node: k[d.inArray(a, h)].node});
            else if (-1 !== a.indexOf(':name'))
              for (a = a.replace(':name', ''), h = 0, f = k.length; h < f; h++) k[h].name === a && c.push({inst: b, node: k[h].node});
            else
              d(h)
                .filter(a)
                .each(function () {
                  c.push({inst: b, node: this});
                });
          else 'object' === typeof a && a.nodeName && ((k = d.inArray(a, h)), -1 !== k && c.push({inst: b, node: h[k]}));
        },
        f = 0,
        k = a.length;
      f < k;
      f++
    )
      g(b, a[f]);
    return c;
  };
  r.defaults = {
    buttons: ['copy', 'excel', 'csv', 'pdf', 'print'],
    name: 'main',
    tabIndex: 0,
    dom: {
      container: {tag: 'div', className: 'dt-buttons'},
      collection: {tag: 'div', className: ''},
      button: {tag: 'ActiveXObject' in v ? 'a' : 'button', className: 'dt-button', active: 'active', disabled: 'disabled'},
      buttonLiner: {tag: 'span', className: ''},
    },
  };
  r.version = '1.6.2';
  d.extend(q, {
    collection: {
      text: function (a) {
        return a.i18n('buttons.collection', 'Collection');
      },
      className: 'buttons-collection',
      init: function (a, b, c) {
        b.attr('aria-expanded', !1);
      },
      action: function (a, b, c, e) {
        a.stopPropagation();
        e._collection.parents('body').length ? this.popover(!1, e) : this.popover(e._collection, e);
      },
      attr: {'aria-haspopup': !0},
    },
    copy: function (a, b) {
      if (q.copyHtml5) return 'copyHtml5';
      if (q.copyFlash && q.copyFlash.available(a, b)) return 'copyFlash';
    },
    csv: function (a, b) {
      if (q.csvHtml5 && q.csvHtml5.available(a, b)) return 'csvHtml5';
      if (q.csvFlash && q.csvFlash.available(a, b)) return 'csvFlash';
    },
    excel: function (a, b) {
      if (q.excelHtml5 && q.excelHtml5.available(a, b)) return 'excelHtml5';
      if (q.excelFlash && q.excelFlash.available(a, b)) return 'excelFlash';
    },
    pdf: function (a, b) {
      if (q.pdfHtml5 && q.pdfHtml5.available(a, b)) return 'pdfHtml5';
      if (q.pdfFlash && q.pdfFlash.available(a, b)) return 'pdfFlash';
    },
    pageLength: function (a) {
      a = a.settings()[0].aLengthMenu;
      var b = d.isArray(a[0]) ? a[0] : a,
        c = d.isArray(a[0]) ? a[1] : a;
      return {
        extend: 'collection',
        text: function (a) {
          return a.i18n('buttons.pageLength', {'-1': 'Show all rows', _: 'Show %d rows'}, a.page.len());
        },
        className: 'buttons-page-length',
        autoClose: !0,
        buttons: d.map(b, function (a, b) {
          return {
            text: c[b],
            className: 'button-page-length',
            action: function (b, c) {
              c.page.len(a).draw();
            },
            init: function (b, c, e) {
              var d = this;
              c = function () {
                d.active(b.page.len() === a);
              };
              b.on('length.dt' + e.namespace, c);
              c();
            },
            destroy: function (a, b, c) {
              a.off('length.dt' + c.namespace);
            },
          };
        }),
        init: function (a, b, c) {
          var e = this;
          a.on('length.dt' + c.namespace, function () {
            e.text(c.text);
          });
        },
        destroy: function (a, b, c) {
          a.off('length.dt' + c.namespace);
        },
      };
    },
  });
  m.Api.register('buttons()', function (a, b) {
    b === n && ((b = a), (a = n));
    this.selector.buttonGroup = a;
    var c = this.iterator(
      !0,
      'table',
      function (c) {
        if (c._buttons) return r.buttonSelector(r.instanceSelector(a, c._buttons), b);
      },
      !0,
    );
    c._groupSelector = a;
    return c;
  });
  m.Api.register('button()', function (a, b) {
    a = this.buttons(a, b);
    1 < a.length && a.splice(1, a.length);
    return a;
  });
  m.Api.registerPlural('buttons().active()', 'button().active()', function (a) {
    return a === n
      ? this.map(function (a) {
          return a.inst.active(a.node);
        })
      : this.each(function (b) {
          b.inst.active(b.node, a);
        });
  });
  m.Api.registerPlural('buttons().action()', 'button().action()', function (a) {
    return a === n
      ? this.map(function (a) {
          return a.inst.action(a.node);
        })
      : this.each(function (b) {
          b.inst.action(b.node, a);
        });
  });
  m.Api.register(['buttons().enable()', 'button().enable()'], function (a) {
    return this.each(function (b) {
      b.inst.enable(b.node, a);
    });
  });
  m.Api.register(['buttons().disable()', 'button().disable()'], function () {
    return this.each(function (a) {
      a.inst.disable(a.node);
    });
  });
  m.Api.registerPlural('buttons().nodes()', 'button().node()', function () {
    var a = d();
    d(
      this.each(function (b) {
        a = a.add(b.inst.node(b.node));
      }),
    );
    return a;
  });
  m.Api.registerPlural('buttons().processing()', 'button().processing()', function (a) {
    return a === n
      ? this.map(function (a) {
          return a.inst.processing(a.node);
        })
      : this.each(function (b) {
          b.inst.processing(b.node, a);
        });
  });
  m.Api.registerPlural('buttons().text()', 'button().text()', function (a) {
    return a === n
      ? this.map(function (a) {
          return a.inst.text(a.node);
        })
      : this.each(function (b) {
          b.inst.text(b.node, a);
        });
  });
  m.Api.registerPlural('buttons().trigger()', 'button().trigger()', function () {
    return this.each(function (a) {
      a.inst.node(a.node).trigger('click');
    });
  });
  m.Api.register('button().popover()', function (a, b) {
    return this.map(function (c) {
      return c.inst._popover(a, this.button(this[0].node), b);
    });
  });
  m.Api.register('buttons().containers()', function () {
    var a = d(),
      b = this._groupSelector;
    this.iterator(!0, 'table', function (c) {
      if (c._buttons) {
        c = r.instanceSelector(b, c._buttons);
        for (var e = 0, d = c.length; e < d; e++) a = a.add(c[e].container());
      }
    });
    return a;
  });
  m.Api.register('buttons().container()', function () {
    return this.containers().eq(0);
  });
  m.Api.register('button().add()', function (a, b) {
    var c = this.context;
    c.length && ((c = r.instanceSelector(this._groupSelector, c[0]._buttons)), c.length && c[0].add(b, a));
    return this.button(this._groupSelector, a);
  });
  m.Api.register('buttons().destroy()', function () {
    this.pluck('inst')
      .unique()
      .each(function (a) {
        a.destroy();
      });
    return this;
  });
  m.Api.registerPlural('buttons().remove()', 'buttons().remove()', function () {
    this.each(function (a) {
      a.inst.remove(a.node);
    });
    return this;
  });
  var x;
  m.Api.register('buttons.info()', function (a, b, c) {
    var e = this;
    if (!1 === a)
      return (
        this.off('destroy.btn-info'),
        z(d('#datatables_buttons_info'), 400, function () {
          d(this).remove();
        }),
        clearTimeout(x),
        (x = null),
        this
      );
    x && clearTimeout(x);
    d('#datatables_buttons_info').length && d('#datatables_buttons_info').remove();
    a = a ? '<h2>' + a + '</h2>' : '';
    y(
      d('<div id="datatables_buttons_info" class="dt-button-info"/>')
        .html(a)
        .append(d('<div/>')['string' === typeof b ? 'html' : 'append'](b))
        .css('display', 'none')
        .appendTo('body'),
    );
    c !== n &&
      0 !== c &&
      (x = setTimeout(function () {
        e.buttons.info(!1);
      }, c));
    this.on('destroy.btn-info', function () {
      e.buttons.info(!1);
    });
    return this;
  });
  m.Api.register('buttons.exportData()', function (a) {
    if (this.context.length) return G(new m.Api(this.context[0]), a);
  });
  m.Api.register('buttons.exportInfo()', function (a) {
    a || (a = {});
    var b = a;
    var c = '*' === b.filename && '*' !== b.title && b.title !== n && null !== b.title && '' !== b.title ? b.title : b.filename;
    'function' === typeof c && (c = c());
    c === n || null === c
      ? (c = null)
      : (-1 !== c.indexOf('*') && (c = d.trim(c.replace('*', d('head > title').text()))),
        (c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, '')),
        (b = A(b.extension)) || (b = ''),
        (c += b));
    b = A(a.title);
    b = null === b ? null : -1 !== b.indexOf('*') ? b.replace('*', d('head > title').text() || 'Exported data') : b;
    return {filename: c, title: b, messageTop: C(this, a.message || a.messageTop, 'top'), messageBottom: C(this, a.messageBottom, 'bottom')};
  });
  var A = function (a) {
      return null === a || a === n ? null : 'function' === typeof a ? a() : a;
    },
    C = function (a, b, c) {
      b = A(b);
      if (null === b) return null;
      a = d('caption', a.table().container()).eq(0);
      return '*' === b ? (a.css('caption-side') !== c ? null : a.length ? a.text() : '') : b;
    },
    D = d('<textarea/>')[0],
    G = function (a, b) {
      var c = d.extend(
          !0,
          {},
          {
            rows: null,
            columns: '',
            modifier: {search: 'applied', order: 'applied'},
            orthogonal: 'display',
            stripHtml: !0,
            stripNewlines: !0,
            decodeEntities: !0,
            trim: !0,
            format: {
              header: function (a) {
                return e(a);
              },
              footer: function (a) {
                return e(a);
              },
              body: function (a) {
                return e(a);
              },
            },
            customizeData: null,
          },
          b,
        ),
        e = function (a) {
          if ('string' !== typeof a) return a;
          a = a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
          a = a.replace(/<!\-\-.*?\-\->/g, '');
          c.stripHtml && (a = a.replace(/<[^>]*>/g, ''));
          c.trim && (a = a.replace(/^\s+|\s+$/g, ''));
          c.stripNewlines && (a = a.replace(/\n/g, ' '));
          c.decodeEntities && ((D.innerHTML = a), (a = D.value));
          return a;
        };
      b = a
        .columns(c.columns)
        .indexes()
        .map(function (b) {
          var d = a.column(b).header();
          return c.format.header(d.innerHTML, b, d);
        })
        .toArray();
      var g = a.table().footer()
          ? a
              .columns(c.columns)
              .indexes()
              .map(function (b) {
                var d = a.column(b).footer();
                return c.format.footer(d ? d.innerHTML : '', b, d);
              })
              .toArray()
          : null,
        f = d.extend({}, c.modifier);
      a.select && 'function' === typeof a.select.info && f.selected === n && a.rows(c.rows, d.extend({selected: !0}, f)).any() && d.extend(f, {selected: !0});
      f = a.rows(c.rows, f).indexes().toArray();
      var k = a.cells(f, c.columns);
      f = k.render(c.orthogonal).toArray();
      k = k.nodes().toArray();
      for (var h = b.length, m = [], l = 0, p = 0, r = 0 < h ? f.length / h : 0; p < r; p++) {
        for (var q = [h], u = 0; u < h; u++) (q[u] = c.format.body(f[l], p, u, k[l])), l++;
        m[p] = q;
      }
      b = {header: b, footer: g, body: m};
      c.customizeData && c.customizeData(b);
      return b;
    };
  d.fn.dataTable.Buttons = r;
  d.fn.DataTable.Buttons = r;
  d(u).on('init.dt plugin-init.dt', function (a, b) {
    'dt' === a.namespace && (a = b.oInit.buttons || m.defaults.buttons) && !b._buttons && new r(b, a).container();
  });
  m.ext.feature.push({fnInit: B, cFeature: 'B'});
  m.ext.features && m.ext.features.register('buttons', B);
  return r;
});

/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net-bs4', 'datatables.net-buttons'], function (a) {
        return c(a, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (a, b) {
        a || (a = window);
        (b && b.fn.dataTable) || (b = require('datatables.net-bs4')(a, b).$);
        b.fn.dataTable.Buttons || require('datatables.net-buttons')(a, b);
        return c(b, a, a.document);
      })
    : c(jQuery, window, document);
})(function (c, a, b, d) {
  a = c.fn.dataTable;
  c.extend(!0, a.Buttons.defaults, {
    dom: {
      container: {className: 'dt-buttons btn-group flex-wrap'},
      button: {className: 'btn btn-secondary'},
      collection: {tag: 'div', className: 'dropdown-menu', button: {tag: 'a', className: 'dt-button dropdown-item', active: 'active', disabled: 'disabled'}},
    },
    buttonCreated: function (a, b) {
      return a.buttons ? c('<div class="btn-group"/>').append(b) : b;
    },
  });
  a.ext.buttons.collection.className += ' dropdown-toggle';
  a.ext.buttons.collection.rightAlignClassName = 'dropdown-menu-end';
  return a.Buttons;
});

/*!
 Column visibility buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (g) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net', 'datatables.net-buttons'], function (d) {
        return g(d, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (d, f) {
        d || (d = window);
        (f && f.fn.dataTable) || (f = require('datatables.net')(d, f).$);
        f.fn.dataTable.Buttons || require('datatables.net-buttons')(d, f);
        return g(f, d, d.document);
      })
    : g(jQuery, window, document);
})(function (g, d, f, h) {
  d = g.fn.dataTable;
  g.extend(d.ext.buttons, {
    colvis: function (a, b) {
      return {
        extend: 'collection',
        text: function (b) {
          return b.i18n('buttons.colvis', 'Column visibility');
        },
        className: 'buttons-colvis',
        buttons: [{extend: 'columnsToggle', columns: b.columns, columnText: b.columnText}],
      };
    },
    columnsToggle: function (a, b) {
      return a
        .columns(b.columns)
        .indexes()
        .map(function (a) {
          return {extend: 'columnToggle', columns: a, columnText: b.columnText};
        })
        .toArray();
    },
    columnToggle: function (a, b) {
      return {extend: 'columnVisibility', columns: b.columns, columnText: b.columnText};
    },
    columnsVisibility: function (a, b) {
      return a
        .columns(b.columns)
        .indexes()
        .map(function (a) {
          return {extend: 'columnVisibility', columns: a, visibility: b.visibility, columnText: b.columnText};
        })
        .toArray();
    },
    columnVisibility: {
      columns: h,
      text: function (a, b, c) {
        return c._columnText(a, c);
      },
      className: 'buttons-columnVisibility',
      action: function (a, b, c, e) {
        a = b.columns(e.columns);
        b = a.visible();
        a.visible(e.visibility !== h ? e.visibility : !(b.length && b[0]));
      },
      init: function (a, b, c) {
        var e = this;
        b.attr('data-cv-idx', c.columns);
        a.on('column-visibility.dt' + c.namespace, function (b, d) {
          d.bDestroying || d.nTable != a.settings()[0].nTable || e.active(a.column(c.columns).visible());
        }).on('column-reorder.dt' + c.namespace, function (b, d, f) {
          1 === a.columns(c.columns).count() && (e.text(c._columnText(a, c)), e.active(a.column(c.columns).visible()));
        });
        this.active(a.column(c.columns).visible());
      },
      destroy: function (a, b, c) {
        a.off('column-visibility.dt' + c.namespace).off('column-reorder.dt' + c.namespace);
      },
      _columnText: function (a, b) {
        var c = a.column(b.columns).index(),
          e = a
            .settings()[0]
            .aoColumns[c].sTitle.replace(/\n/g, ' ')
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/<select(.*?)<\/select>/g, '')
            .replace(/<!\-\-.*?\-\->/g, '')
            .replace(/<.*?>/g, '')
            .replace(/^\s+|\s+$/g, '');
        return b.columnText ? b.columnText(a, c, e) : e;
      },
    },
    colvisRestore: {
      className: 'buttons-colvisRestore',
      text: function (a) {
        return a.i18n('buttons.colvisRestore', 'Restore visibility');
      },
      init: function (a, b, c) {
        c._visOriginal = a
          .columns()
          .indexes()
          .map(function (b) {
            return a.column(b).visible();
          })
          .toArray();
      },
      action: function (a, b, c, d) {
        b.columns().every(function (a) {
          a = b.colReorder && b.colReorder.transpose ? b.colReorder.transpose(a, 'toOriginal') : a;
          this.visible(d._visOriginal[a]);
        });
      },
    },
    colvisGroup: {
      className: 'buttons-colvisGroup',
      action: function (a, b, c, d) {
        b.columns(d.show).visible(!0, !1);
        b.columns(d.hide).visible(!1, !1);
        b.columns.adjust();
      },
      show: [],
      hide: [],
    },
  });
  return d.Buttons;
});

/*!
 HTML5 export buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license

 FileSaver.js (1.3.3) - MIT license
 Copyright © 2016 Eli Grey - http://eligrey.com
*/
(function (f) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net', 'datatables.net-buttons'], function (g) {
        return f(g, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (g, l, z, t) {
        g || (g = window);
        (l && l.fn.dataTable) || (l = require('datatables.net')(g, l).$);
        l.fn.dataTable.Buttons || require('datatables.net-buttons')(g, l);
        return f(l, g, g.document, z, t);
      })
    : f(jQuery, window, document);
})(function (f, g, l, z, t, w) {
  function A(a) {
    for (var b = ''; 0 <= a; ) (b = String.fromCharCode((a % 26) + 65) + b), (a = Math.floor(a / 26) - 1);
    return b;
  }
  function E(a, b) {
    y === w && (y = -1 === C.serializeToString(new g.DOMParser().parseFromString(F['xl/worksheets/sheet1.xml'], 'text/xml')).indexOf('xmlns:r'));
    f.each(b, function (b, c) {
      if (f.isPlainObject(c)) (b = a.folder(b)), E(b, c);
      else {
        if (y) {
          var d = c.childNodes[0],
            e,
            h = [];
          for (e = d.attributes.length - 1; 0 <= e; e--) {
            var n = d.attributes[e].nodeName;
            var k = d.attributes[e].nodeValue;
            -1 !== n.indexOf(':') && (h.push({name: n, value: k}), d.removeAttribute(n));
          }
          e = 0;
          for (n = h.length; e < n; e++)
            (k = c.createAttribute(h[e].name.replace(':', '_dt_b_namespace_token_'))), (k.value = h[e].value), d.setAttributeNode(k);
        }
        c = C.serializeToString(c);
        y &&
          (-1 === c.indexOf('<?xml') && (c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + c),
          (c = c.replace(/_dt_b_namespace_token_/g, ':')),
          (c = c.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, '')));
        c = c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, '<$1 $2>');
        a.file(b, c);
      }
    });
  }
  function r(a, b, d) {
    var c = a.createElement(b);
    d &&
      (d.attr && f(c).attr(d.attr),
      d.children &&
        f.each(d.children, function (a, b) {
          c.appendChild(b);
        }),
      null !== d.text && d.text !== w && c.appendChild(a.createTextNode(d.text)));
    return c;
  }
  function L(a, b) {
    var d = a.header[b].length;
    a.footer && a.footer[b].length > d && (d = a.footer[b].length);
    for (var c = 0, f = a.body.length; c < f; c++) {
      var e = a.body[c][b];
      e = null !== e && e !== w ? e.toString() : '';
      -1 !== e.indexOf('\n')
        ? ((e = e.split('\n')),
          e.sort(function (a, c) {
            return c.length - a.length;
          }),
          (e = e[0].length))
        : (e = e.length);
      e > d && (d = e);
      if (40 < d) return 54;
    }
    d *= 1.35;
    return 6 < d ? d : 6;
  }
  var v = f.fn.dataTable;
  v.Buttons.pdfMake = function (a) {
    if (!a) return t || g.pdfMake;
    t = a;
  };
  v.Buttons.jszip = function (a) {
    if (!a) return z || g.JSZip;
    z = a;
  };
  var B = (function (a) {
    if (!('undefined' === typeof a || ('undefined' !== typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent)))) {
      var b = a.document.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
        d = 'download' in b,
        c = /constructor/i.test(a.HTMLElement) || a.safari,
        f = /CriOS\/[\d]+/.test(navigator.userAgent),
        e = function (c) {
          (a.setImmediate || a.setTimeout)(function () {
            throw c;
          }, 0);
        },
        h = function (c) {
          setTimeout(function () {
            'string' === typeof c ? (a.URL || a.webkitURL || a).revokeObjectURL(c) : c.remove();
          }, 4e4);
        },
        n = function (a) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)
            ? new Blob([String.fromCharCode(65279), a], {type: a.type})
            : a;
        },
        k = function (k, q, p) {
          p || (k = n(k));
          var m = this,
            g = 'application/octet-stream' === k.type,
            D = function () {
              var a = ['writestart', 'progress', 'write', 'writeend'];
              a = [].concat(a);
              for (var c = a.length; c--; ) {
                var b = m['on' + a[c]];
                if ('function' === typeof b)
                  try {
                    b.call(m, m);
                  } catch (M) {
                    e(M);
                  }
              }
            };
          m.readyState = m.INIT;
          if (d) {
            var u = (a.URL || a.webkitURL || a).createObjectURL(k);
            setTimeout(function () {
              b.href = u;
              b.download = q;
              var a = new MouseEvent('click');
              b.dispatchEvent(a);
              D();
              h(u);
              m.readyState = m.DONE;
            });
          } else
            (function () {
              if ((f || (g && c)) && a.FileReader) {
                var b = new FileReader();
                b.onloadend = function () {
                  var c = f ? b.result : b.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
                  a.open(c, '_blank') || (a.location.href = c);
                  m.readyState = m.DONE;
                  D();
                };
                b.readAsDataURL(k);
                m.readyState = m.INIT;
              } else
                u || (u = (a.URL || a.webkitURL || a).createObjectURL(k)),
                  g ? (a.location.href = u) : a.open(u, '_blank') || (a.location.href = u),
                  (m.readyState = m.DONE),
                  D(),
                  h(u);
            })();
        },
        p = k.prototype;
      if ('undefined' !== typeof navigator && navigator.msSaveOrOpenBlob)
        return function (a, c, b) {
          c = c || a.name || 'download';
          b || (a = n(a));
          return navigator.msSaveOrOpenBlob(a, c);
        };
      p.abort = function () {};
      p.readyState = p.INIT = 0;
      p.WRITING = 1;
      p.DONE = 2;
      p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null;
      return function (a, c, b) {
        return new k(a, c || a.name || 'download', b);
      };
    }
  })(('undefined' !== typeof self && self) || ('undefined' !== typeof g && g) || this.content);
  v.fileSave = B;
  var G = function (a) {
      var b = 'Sheet1';
      a.sheetName && (b = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ''));
      return b;
    },
    H = function (a) {
      return a.newline ? a.newline : navigator.userAgent.match(/Windows/) ? '\r\n' : '\n';
    },
    I = function (a, b) {
      var d = H(b);
      a = a.buttons.exportData(b.exportOptions);
      var c = b.fieldBoundary,
        f = b.fieldSeparator,
        e = new RegExp(c, 'g'),
        h = b.escapeChar !== w ? b.escapeChar : '\\',
        n = function (a) {
          for (var b = '', d = 0, n = a.length; d < n; d++) 0 < d && (b += f), (b += c ? c + ('' + a[d]).replace(e, h + c) + c : a[d]);
          return b;
        },
        k = b.header ? n(a.header) + d : '';
      b = b.footer && a.footer ? d + n(a.footer) : '';
      for (var g = [], l = 0, q = a.body.length; l < q; l++) g.push(n(a.body[l]));
      return {str: k + g.join(d) + b, rows: g.length};
    },
    J = function () {
      if (-1 === navigator.userAgent.indexOf('Safari') || -1 !== navigator.userAgent.indexOf('Chrome') || -1 !== navigator.userAgent.indexOf('Opera'))
        return !1;
      var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
      return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1;
    };
  try {
    var C = new XMLSerializer(),
      y;
  } catch (a) {}
  var F = {
      '_rels/.rels':
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      'xl/_rels/workbook.xml.rels':
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      '[Content_Types].xml':
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      'xl/workbook.xml':
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
      'xl/worksheets/sheet1.xml':
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      'xl/styles.xml':
        '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>',
    },
    K = [
      {
        match: /^\-?\d+\.\d%$/,
        style: 60,
        fmt: function (a) {
          return a / 100;
        },
      },
      {
        match: /^\-?\d+\.?\d*%$/,
        style: 56,
        fmt: function (a) {
          return a / 100;
        },
      },
      {match: /^\-?\$[\d,]+.?\d*$/, style: 57},
      {match: /^\-?£[\d,]+.?\d*$/, style: 58},
      {match: /^\-?€[\d,]+.?\d*$/, style: 59},
      {match: /^\-?\d+$/, style: 65},
      {match: /^\-?\d+\.\d{2}$/, style: 66},
      {
        match: /^\([\d,]+\)$/,
        style: 61,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, '');
        },
      },
      {
        match: /^\([\d,]+\.\d{2}\)$/,
        style: 62,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, '');
        },
      },
      {match: /^\-?[\d,]+$/, style: 63},
      {match: /^\-?[\d,]+\.\d{2}$/, style: 64},
      {
        match: /^[\d]{4}\-[\d]{2}\-[\d]{2}$/,
        style: 67,
        fmt: function (a) {
          return Math.round(25569 + Date.parse(a) / 864e5);
        },
      },
    ];
  v.ext.buttons.copyHtml5 = {
    className: 'buttons-copy buttons-html5',
    text: function (a) {
      return a.i18n('buttons.copy', 'Copy');
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      var g = this;
      a = I(b, c);
      var e = b.buttons.exportInfo(c),
        h = H(c),
        n = a.str;
      d = f('<div/>').css({height: 1, width: 1, overflow: 'hidden', position: 'fixed', top: 0, left: 0});
      e.title && (n = e.title + h + h + n);
      e.messageTop && (n = e.messageTop + h + h + n);
      e.messageBottom && (n = n + h + h + e.messageBottom);
      c.customize && (n = c.customize(n, c, b));
      c = f('<textarea readonly/>').val(n).appendTo(d);
      if (l.queryCommandSupported('copy')) {
        d.appendTo(b.table().container());
        c[0].focus();
        c[0].select();
        try {
          var k = l.execCommand('copy');
          d.remove();
          if (k) {
            b.buttons.info(
              b.i18n('buttons.copyTitle', 'Copy to clipboard'),
              b.i18n('buttons.copySuccess', {1: 'Copied one row to clipboard', _: 'Copied %d rows to clipboard'}, a.rows),
              2e3,
            );
            this.processing(!1);
            return;
          }
        } catch (q) {}
      }
      k = f(
        '<span>' +
          b.i18n(
            'buttons.copyKeys',
            'Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.',
          ) +
          '</span>',
      ).append(d);
      b.buttons.info(b.i18n('buttons.copyTitle', 'Copy to clipboard'), k, 0);
      c[0].focus();
      c[0].select();
      var p = f(k).closest('.dt-button-info'),
        r = function () {
          p.off('click.buttons-copy');
          f(l).off('.buttons-copy');
          b.buttons.info(!1);
        };
      p.on('click.buttons-copy', r);
      f(l)
        .on('keydown.buttons-copy', function (a) {
          27 === a.keyCode && (r(), g.processing(!1));
        })
        .on('copy.buttons-copy cut.buttons-copy', function () {
          r();
          g.processing(!1);
        });
    },
    exportOptions: {},
    fieldSeparator: '\t',
    fieldBoundary: '',
    header: !0,
    footer: !1,
    title: '*',
    messageTop: '*',
    messageBottom: '*',
  };
  v.ext.buttons.csvHtml5 = {
    bom: !1,
    className: 'buttons-csv buttons-html5',
    available: function () {
      return g.FileReader !== w && g.Blob;
    },
    text: function (a) {
      return a.i18n('buttons.csv', 'CSV');
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      a = I(b, c).str;
      d = b.buttons.exportInfo(c);
      var f = c.charset;
      c.customize && (a = c.customize(a, c, b));
      !1 !== f ? (f || (f = l.characterSet || l.charset), f && (f = ';charset=' + f)) : (f = '');
      c.bom && (a = '﻿' + a);
      B(new Blob([a], {type: 'text/csv' + f}), d.filename, !0);
      this.processing(!1);
    },
    filename: '*',
    extension: '.csv',
    exportOptions: {},
    fieldSeparator: ',',
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: !0,
    footer: !1,
  };
  v.ext.buttons.excelHtml5 = {
    className: 'buttons-excel buttons-html5',
    available: function () {
      return g.FileReader !== w && (z || g.JSZip) !== w && !J() && C;
    },
    text: function (a) {
      return a.i18n('buttons.excel', 'Excel');
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      var l = this,
        e = 0;
      a = function (a) {
        return f.parseXML(F[a]);
      };
      var h = a('xl/worksheets/sheet1.xml'),
        n = h.getElementsByTagName('sheetData')[0];
      a = {
        _rels: {'.rels': a('_rels/.rels')},
        xl: {
          _rels: {'workbook.xml.rels': a('xl/_rels/workbook.xml.rels')},
          'workbook.xml': a('xl/workbook.xml'),
          'styles.xml': a('xl/styles.xml'),
          worksheets: {'sheet1.xml': h},
        },
        '[Content_Types].xml': a('[Content_Types].xml'),
      };
      var k = b.buttons.exportData(c.exportOptions),
        p,
        v,
        q = function (a) {
          p = e + 1;
          v = r(h, 'row', {attr: {r: p}});
          for (var b = 0, d = a.length; b < d; b++) {
            var k = A(b) + '' + p,
              g = null;
            if (null === a[b] || a[b] === w || '' === a[b])
              if (!0 === c.createEmptyCells) a[b] = '';
              else continue;
            var m = a[b];
            a[b] = f.trim(a[b]);
            for (var l = 0, q = K.length; l < q; l++) {
              var u = K[l];
              if (a[b].match && !a[b].match(/^0\d+/) && a[b].match(u.match)) {
                g = a[b].replace(/[^\d\.\-]/g, '');
                u.fmt && (g = u.fmt(g));
                g = r(h, 'c', {attr: {r: k, s: u.style}, children: [r(h, 'v', {text: g})]});
                break;
              }
            }
            g ||
              ('number' === typeof a[b] || (a[b].match && a[b].match(/^-?\d+(\.\d+)?$/) && !a[b].match(/^0\d+/))
                ? (g = r(h, 'c', {attr: {t: 'n', r: k}, children: [r(h, 'v', {text: a[b]})]}))
                : ((m = m.replace ? m.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '') : m),
                  (g = r(h, 'c', {
                    attr: {t: 'inlineStr', r: k},
                    children: {row: r(h, 'is', {children: {row: r(h, 't', {text: m, attr: {'xml:space': 'preserve'}})}})},
                  }))));
            v.appendChild(g);
          }
          n.appendChild(v);
          e++;
        };
      c.customizeData && c.customizeData(k);
      var x = function (a, b) {
          var c = f('mergeCells', h);
          c[0].appendChild(r(h, 'mergeCell', {attr: {ref: 'A' + a + ':' + A(b) + a}}));
          c.attr('count', parseFloat(c.attr('count')) + 1);
          f('row:eq(' + (a - 1) + ') c', h).attr('s', '51');
        },
        m = b.buttons.exportInfo(c);
      m.title && (q([m.title], e), x(e, k.header.length - 1));
      m.messageTop && (q([m.messageTop], e), x(e, k.header.length - 1));
      c.header && (q(k.header, e), f('row:last c', h).attr('s', '2'));
      d = e;
      var t = 0;
      for (var y = k.body.length; t < y; t++) q(k.body[t], e);
      t = e;
      c.footer && k.footer && (q(k.footer, e), f('row:last c', h).attr('s', '2'));
      m.messageBottom && (q([m.messageBottom], e), x(e, k.header.length - 1));
      q = r(h, 'cols');
      f('worksheet', h).prepend(q);
      x = 0;
      for (y = k.header.length; x < y; x++) q.appendChild(r(h, 'col', {attr: {min: x + 1, max: x + 1, width: L(k, x), customWidth: 1}}));
      q = a.xl['workbook.xml'];
      f('sheets sheet', q).attr('name', G(c));
      c.autoFilter &&
        (f('mergeCells', h).before(r(h, 'autoFilter', {attr: {ref: 'A' + d + ':' + A(k.header.length - 1) + t}})),
        f('definedNames', q).append(
          r(q, 'definedName', {
            attr: {name: '_xlnm._FilterDatabase', localSheetId: '0', hidden: 1},
            text: G(c) + '!$A$' + d + ':' + A(k.header.length - 1) + t,
          }),
        ));
      c.customize && c.customize(a, c, b);
      0 === f('mergeCells', h).children().length && f('mergeCells', h).remove();
      b = new (z || g.JSZip)();
      d = {type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'};
      E(b, a);
      b.generateAsync
        ? b.generateAsync(d).then(function (a) {
            B(a, m.filename);
            l.processing(!1);
          })
        : (B(b.generate(d), m.filename), this.processing(!1));
    },
    filename: '*',
    extension: '.xlsx',
    exportOptions: {},
    header: !0,
    footer: !1,
    title: '*',
    messageTop: '*',
    messageBottom: '*',
    createEmptyCells: !1,
    autoFilter: !1,
    sheetName: '',
  };
  v.ext.buttons.pdfHtml5 = {
    className: 'buttons-pdf buttons-html5',
    available: function () {
      return g.FileReader !== w && (t || g.pdfMake);
    },
    text: function (a) {
      return a.i18n('buttons.pdf', 'PDF');
    },
    action: function (a, b, d, c) {
      this.processing(!0);
      d = b.buttons.exportData(c.exportOptions);
      a = b.buttons.exportInfo(c);
      var l = [];
      c.header &&
        l.push(
          f.map(d.header, function (a) {
            return {text: 'string' === typeof a ? a : a + '', style: 'tableHeader'};
          }),
        );
      for (var e = 0, h = d.body.length; e < h; e++)
        l.push(
          f.map(d.body[e], function (a) {
            if (null === a || a === w) a = '';
            return {text: 'string' === typeof a ? a : a + '', style: e % 2 ? 'tableBodyEven' : 'tableBodyOdd'};
          }),
        );
      c.footer &&
        d.footer &&
        l.push(
          f.map(d.footer, function (a) {
            return {text: 'string' === typeof a ? a : a + '', style: 'tableFooter'};
          }),
        );
      d = {
        pageSize: c.pageSize,
        pageOrientation: c.orientation,
        content: [{table: {headerRows: 1, body: l}, layout: 'noBorders'}],
        styles: {
          tableHeader: {bold: !0, fontSize: 11, color: 'white', fillColor: '#2d4154', alignment: 'center'},
          tableBodyEven: {},
          tableBodyOdd: {fillColor: '#f3f3f3'},
          tableFooter: {bold: !0, fontSize: 11, color: 'white', fillColor: '#2d4154'},
          title: {alignment: 'center', fontSize: 15},
          message: {},
        },
        defaultStyle: {fontSize: 10},
      };
      a.messageTop && d.content.unshift({text: a.messageTop, style: 'message', margin: [0, 0, 0, 12]});
      a.messageBottom && d.content.push({text: a.messageBottom, style: 'message', margin: [0, 0, 0, 12]});
      a.title && d.content.unshift({text: a.title, style: 'title', margin: [0, 0, 0, 12]});
      c.customize && c.customize(d, c, b);
      b = (t || g.pdfMake).createPdf(d);
      'open' !== c.download || J() ? b.download(a.filename) : b.open();
      this.processing(!1);
    },
    title: '*',
    filename: '*',
    extension: '.pdf',
    exportOptions: {},
    orientation: 'portrait',
    pageSize: 'A4',
    header: !0,
    footer: !1,
    messageTop: '*',
    messageBottom: '*',
    customize: null,
    download: 'download',
  };
  return v.Buttons;
});

/*!
 Print button for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net', 'datatables.net-buttons'], function (e) {
        return c(e, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (e, a) {
        e || (e = window);
        (a && a.fn.dataTable) || (a = require('datatables.net')(e, a).$);
        a.fn.dataTable.Buttons || require('datatables.net-buttons')(e, a);
        return c(a, e, e.document);
      })
    : c(jQuery, window, document);
})(function (c, e, a, q) {
  var k = c.fn.dataTable,
    d = a.createElement('a'),
    p = function (b) {
      d.href = b;
      b = d.host;
      -1 === b.indexOf('/') && 0 !== d.pathname.indexOf('/') && (b += '/');
      return d.protocol + '//' + b + d.pathname + d.search;
    };
  k.ext.buttons.print = {
    className: 'buttons-print',
    text: function (b) {
      return b.i18n('buttons.print', 'Print');
    },
    action: function (b, a, d, g) {
      b = a.buttons.exportData(c.extend({decodeEntities: !1}, g.exportOptions));
      d = a.buttons.exportInfo(g);
      var k = a
          .columns(g.exportOptions.columns)
          .flatten()
          .map(function (b) {
            return a.settings()[0].aoColumns[a.column(b).index()].sClass;
          })
          .toArray(),
        m = function (b, a) {
          for (var d = '<tr>', c = 0, e = b.length; c < e; c++)
            d += '<' + a + ' ' + (k[c] ? 'class="' + k[c] + '"' : '') + '>' + (null === b[c] || b[c] === q ? '' : b[c]) + '</' + a + '>';
          return d + '</tr>';
        },
        h = '<table class="' + a.table().node().className + '">';
      g.header && (h += '<thead>' + m(b.header, 'th') + '</thead>');
      h += '<tbody>';
      for (var n = 0, r = b.body.length; n < r; n++) h += m(b.body[n], 'td');
      h += '</tbody>';
      g.footer && b.footer && (h += '<tfoot>' + m(b.footer, 'th') + '</tfoot>');
      h += '</table>';
      var f = e.open('', '');
      f.document.close();
      var l = '<title>' + d.title + '</title>';
      c('style, link').each(function () {
        var b = l,
          a = c(this).clone()[0];
        'link' === a.nodeName.toLowerCase() && (a.href = p(a.href));
        l = b + a.outerHTML;
      });
      try {
        f.document.head.innerHTML = l;
      } catch (t) {
        c(f.document.head).html(l);
      }
      f.document.body.innerHTML = '<h1>' + d.title + '</h1><div>' + (d.messageTop || '') + '</div>' + h + '<div>' + (d.messageBottom || '') + '</div>';
      c(f.document.body).addClass('dt-print-view');
      c('img', f.document.body).each(function (b, a) {
        a.setAttribute('src', p(a.getAttribute('src')));
      });
      g.customize && g.customize(f, g, a);
      b = function () {
        g.autoPrint && (f.print(), f.close());
      };
      navigator.userAgent.match(/Trident\/\d.\d/) ? b() : f.setTimeout(b, 1e3);
    },
    title: '*',
    messageTop: '*',
    messageBottom: '*',
    exportOptions: {},
    header: !0,
    footer: !1,
    autoPrint: !0,
    customize: null,
  };
  return k.Buttons;
});

/*!
   Copyright 2010-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 ColReorder 1.5.2
 ©2010-2019 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net'], function (t) {
        return d(t, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (t, r) {
        t || (t = window);
        (r && r.fn.dataTable) || (r = require('datatables.net')(t, r).$);
        return d(r, t, t.document);
      })
    : d(jQuery, window, document);
})(function (d, t, r, w) {
  function v(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) b[a[c]] = c;
    return b;
  }
  function u(a, b, c) {
    b = a.splice(b, 1)[0];
    a.splice(c, 0, b);
  }
  function x(a, b, c) {
    for (var d = [], h = 0, f = a.childNodes.length; h < f; h++) 1 == a.childNodes[h].nodeType && d.push(a.childNodes[h]);
    b = d[b];
    null !== c ? a.insertBefore(b, d[c]) : a.appendChild(b);
  }
  var y = d.fn.dataTable;
  d.fn.dataTableExt.oApi.fnColReorder = function (a, b, c, g, h) {
    var f,
      p,
      n = a.aoColumns.length;
    var q = function (a, b, c) {
      if (a[b] && 'function' !== typeof a[b]) {
        var e = a[b].split('.'),
          d = e.shift();
        isNaN(1 * d) || (a[b] = c[1 * d] + '.' + e.join('.'));
      }
    };
    if (b != c)
      if (0 > b || b >= n) this.oApi._fnLog(a, 1, "ColReorder 'from' index is out of bounds: " + b);
      else if (0 > c || c >= n) this.oApi._fnLog(a, 1, "ColReorder 'to' index is out of bounds: " + c);
      else {
        var l = [];
        var e = 0;
        for (f = n; e < f; e++) l[e] = e;
        u(l, b, c);
        var k = v(l);
        e = 0;
        for (f = a.aaSorting.length; e < f; e++) a.aaSorting[e][0] = k[a.aaSorting[e][0]];
        if (null !== a.aaSortingFixed) for (e = 0, f = a.aaSortingFixed.length; e < f; e++) a.aaSortingFixed[e][0] = k[a.aaSortingFixed[e][0]];
        e = 0;
        for (f = n; e < f; e++) {
          var m = a.aoColumns[e];
          l = 0;
          for (p = m.aDataSort.length; l < p; l++) m.aDataSort[l] = k[m.aDataSort[l]];
          m.idx = k[m.idx];
        }
        d.each(a.aLastSort, function (b, c) {
          a.aLastSort[b].src = k[c.src];
        });
        e = 0;
        for (f = n; e < f; e++)
          (m = a.aoColumns[e]),
            'number' == typeof m.mData
              ? (m.mData = k[m.mData])
              : d.isPlainObject(m.mData) && (q(m.mData, '_', k), q(m.mData, 'filter', k), q(m.mData, 'sort', k), q(m.mData, 'type', k));
        if (a.aoColumns[b].bVisible) {
          q = this.oApi._fnColumnIndexToVisible(a, b);
          p = null;
          for (e = c < b ? c : c + 1; null === p && e < n; ) (p = this.oApi._fnColumnIndexToVisible(a, e)), e++;
          l = a.nTHead.getElementsByTagName('tr');
          e = 0;
          for (f = l.length; e < f; e++) x(l[e], q, p);
          if (null !== a.nTFoot) for (l = a.nTFoot.getElementsByTagName('tr'), e = 0, f = l.length; e < f; e++) x(l[e], q, p);
          e = 0;
          for (f = a.aoData.length; e < f; e++) null !== a.aoData[e].nTr && x(a.aoData[e].nTr, q, p);
        }
        u(a.aoColumns, b, c);
        e = 0;
        for (f = n; e < f; e++) a.oApi._fnColumnOptions(a, e, {});
        u(a.aoPreSearchCols, b, c);
        e = 0;
        for (f = a.aoData.length; e < f; e++) {
          p = a.aoData[e];
          if ((m = p.anCells)) for (u(m, b, c), l = 0, q = m.length; l < q; l++) m[l] && m[l]._DT_CellIndex && (m[l]._DT_CellIndex.column = l);
          'dom' !== p.src && d.isArray(p._aData) && u(p._aData, b, c);
        }
        e = 0;
        for (f = a.aoHeader.length; e < f; e++) u(a.aoHeader[e], b, c);
        if (null !== a.aoFooter) for (e = 0, f = a.aoFooter.length; e < f; e++) u(a.aoFooter[e], b, c);
        (h || h === w) && d.fn.dataTable.Api(a).rows().invalidate();
        e = 0;
        for (f = n; e < f; e++) d(a.aoColumns[e].nTh).off('.DT'), this.oApi._fnSortAttachListener(a, a.aoColumns[e].nTh, e);
        d(a.oInstance).trigger('column-reorder.dt', [a, {from: b, to: c, mapping: k, drop: g, iFrom: b, iTo: c, aiInvertMapping: k}]);
      }
  };
  var k = function (a, b) {
    a = new d.fn.dataTable.Api(a).settings()[0];
    if (a._colReorder) return a._colReorder;
    !0 === b && (b = {});
    var c = d.fn.dataTable.camelToHungarian;
    c && (c(k.defaults, k.defaults, !0), c(k.defaults, b || {}));
    this.s = {
      dt: null,
      enable: null,
      init: d.extend(!0, {}, k.defaults, b),
      fixed: 0,
      fixedRight: 0,
      reorderCallback: null,
      mouse: {startX: -1, startY: -1, offsetX: -1, offsetY: -1, target: -1, targetIndex: -1, fromIndex: -1},
      aoTargets: [],
    };
    this.dom = {drag: null, pointer: null};
    this.s.enable = this.s.init.bEnable;
    this.s.dt = a;
    this.s.dt._colReorder = this;
    this._fnConstruct();
    return this;
  };
  d.extend(k.prototype, {
    fnEnable: function (a) {
      if (!1 === a) return fnDisable();
      this.s.enable = !0;
    },
    fnDisable: function () {
      this.s.enable = !1;
    },
    fnReset: function () {
      this._fnOrderColumns(this.fnOrder());
      return this;
    },
    fnGetCurrentOrder: function () {
      return this.fnOrder();
    },
    fnOrder: function (a, b) {
      var c = [],
        g,
        h = this.s.dt.aoColumns;
      if (a === w) {
        b = 0;
        for (g = h.length; b < g; b++) c.push(h[b]._ColReorder_iOrigCol);
        return c;
      }
      if (b) {
        h = this.fnOrder();
        b = 0;
        for (g = a.length; b < g; b++) c.push(d.inArray(a[b], h));
        a = c;
      }
      this._fnOrderColumns(v(a));
      return this;
    },
    fnTranspose: function (a, b) {
      b || (b = 'toCurrent');
      var c = this.fnOrder(),
        g = this.s.dt.aoColumns;
      return 'toCurrent' === b
        ? d.isArray(a)
          ? d.map(a, function (a) {
              return d.inArray(a, c);
            })
          : d.inArray(a, c)
        : d.isArray(a)
        ? d.map(a, function (a) {
            return g[a]._ColReorder_iOrigCol;
          })
        : g[a]._ColReorder_iOrigCol;
    },
    _fnConstruct: function () {
      var a = this,
        b = this.s.dt.aoColumns.length,
        c = this.s.dt.nTable,
        g;
      this.s.init.iFixedColumns && (this.s.fixed = this.s.init.iFixedColumns);
      this.s.init.iFixedColumnsLeft && (this.s.fixed = this.s.init.iFixedColumnsLeft);
      this.s.fixedRight = this.s.init.iFixedColumnsRight ? this.s.init.iFixedColumnsRight : 0;
      this.s.init.fnReorderCallback && (this.s.reorderCallback = this.s.init.fnReorderCallback);
      for (g = 0; g < b; g++)
        g > this.s.fixed - 1 && g < b - this.s.fixedRight && this._fnMouseListener(g, this.s.dt.aoColumns[g].nTh),
          (this.s.dt.aoColumns[g]._ColReorder_iOrigCol = g);
      this.s.dt.oApi._fnCallbackReg(
        this.s.dt,
        'aoStateSaveParams',
        function (b, c) {
          a._fnStateSave.call(a, c);
        },
        'ColReorder_State',
      );
      var h = null;
      this.s.init.aiOrder && (h = this.s.init.aiOrder.slice());
      this.s.dt.oLoadedState &&
        'undefined' != typeof this.s.dt.oLoadedState.ColReorder &&
        this.s.dt.oLoadedState.ColReorder.length == this.s.dt.aoColumns.length &&
        (h = this.s.dt.oLoadedState.ColReorder);
      if (h)
        if (a.s.dt._bInitComplete) (b = v(h)), a._fnOrderColumns.call(a, b);
        else {
          var f = !1;
          d(c).on('draw.dt.colReorder', function () {
            if (!a.s.dt._bInitComplete && !f) {
              f = !0;
              var b = v(h);
              a._fnOrderColumns.call(a, b);
            }
          });
        }
      else this._fnSetColumnIndexes();
      d(c).on('destroy.dt.colReorder', function () {
        d(c).off('destroy.dt.colReorder draw.dt.colReorder');
        d.each(a.s.dt.aoColumns, function (a, b) {
          d(b.nTh).off('.ColReorder');
          d(b.nTh).removeAttr('data-column-index');
        });
        a.s.dt._colReorder = null;
        a.s = null;
      });
    },
    _fnOrderColumns: function (a) {
      var b = !1;
      if (a.length != this.s.dt.aoColumns.length)
        this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, 'ColReorder - array reorder does not match known number of columns. Skipping.');
      else {
        for (var c = 0, g = a.length; c < g; c++) {
          var h = d.inArray(c, a);
          c != h && (u(a, h, c), this.s.dt.oInstance.fnColReorder(h, c, !0, !1), (b = !0));
        }
        this._fnSetColumnIndexes();
        b &&
          (d.fn.dataTable.Api(this.s.dt).rows().invalidate(),
          ('' === this.s.dt.oScroll.sX && '' === this.s.dt.oScroll.sY) || this.s.dt.oInstance.fnAdjustColumnSizing(!1),
          this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),
          null !== this.s.reorderCallback && this.s.reorderCallback.call(this));
      }
    },
    _fnStateSave: function (a) {
      var b,
        c,
        g = this.s.dt.aoColumns;
      a.ColReorder = [];
      if (a.aaSorting) {
        for (b = 0; b < a.aaSorting.length; b++) a.aaSorting[b][0] = g[a.aaSorting[b][0]]._ColReorder_iOrigCol;
        var h = d.extend(!0, [], a.aoSearchCols);
        b = 0;
        for (c = g.length; b < c; b++) {
          var f = g[b]._ColReorder_iOrigCol;
          a.aoSearchCols[f] = h[b];
          a.abVisCols[f] = g[b].bVisible;
          a.ColReorder.push(f);
        }
      } else if (a.order) {
        for (b = 0; b < a.order.length; b++) a.order[b][0] = g[a.order[b][0]]._ColReorder_iOrigCol;
        h = d.extend(!0, [], a.columns);
        b = 0;
        for (c = g.length; b < c; b++) (f = g[b]._ColReorder_iOrigCol), (a.columns[f] = h[b]), a.ColReorder.push(f);
      }
    },
    _fnMouseListener: function (a, b) {
      var c = this;
      d(b)
        .on('mousedown.ColReorder', function (a) {
          c.s.enable && 1 === a.which && c._fnMouseDown.call(c, a, b);
        })
        .on('touchstart.ColReorder', function (a) {
          c.s.enable && c._fnMouseDown.call(c, a, b);
        });
    },
    _fnMouseDown: function (a, b) {
      var c = this,
        g = d(a.target).closest('th, td').offset();
      b = parseInt(d(b).attr('data-column-index'), 10);
      b !== w &&
        ((this.s.mouse.startX = this._fnCursorPosition(a, 'pageX')),
        (this.s.mouse.startY = this._fnCursorPosition(a, 'pageY')),
        (this.s.mouse.offsetX = this._fnCursorPosition(a, 'pageX') - g.left),
        (this.s.mouse.offsetY = this._fnCursorPosition(a, 'pageY') - g.top),
        (this.s.mouse.target = this.s.dt.aoColumns[b].nTh),
        (this.s.mouse.targetIndex = b),
        (this.s.mouse.fromIndex = b),
        this._fnRegions(),
        d(r)
          .on('mousemove.ColReorder touchmove.ColReorder', function (a) {
            c._fnMouseMove.call(c, a);
          })
          .on('mouseup.ColReorder touchend.ColReorder', function (a) {
            c._fnMouseUp.call(c, a);
          }));
    },
    _fnMouseMove: function (a) {
      var b = this;
      if (null === this.dom.drag) {
        if (
          5 >
          Math.pow(
            Math.pow(this._fnCursorPosition(a, 'pageX') - this.s.mouse.startX, 2) + Math.pow(this._fnCursorPosition(a, 'pageY') - this.s.mouse.startY, 2),
            0.5,
          )
        )
          return;
        this._fnCreateDragNode();
      }
      this.dom.drag.css({left: this._fnCursorPosition(a, 'pageX') - this.s.mouse.offsetX, top: this._fnCursorPosition(a, 'pageY') - this.s.mouse.offsetY});
      var c = this.s.mouse.toIndex;
      a = this._fnCursorPosition(a, 'pageX');
      for (
        var d = function (a) {
            for (; 0 <= a; ) {
              a--;
              if (0 >= a) return null;
              if (b.s.aoTargets[a + 1].x !== b.s.aoTargets[a].x) return b.s.aoTargets[a];
            }
          },
          h = function () {
            for (var a = 0; a < b.s.aoTargets.length - 1; a++) if (b.s.aoTargets[a].x !== b.s.aoTargets[a + 1].x) return b.s.aoTargets[a];
          },
          f = function () {
            for (var a = b.s.aoTargets.length - 1; 0 < a; a--) if (b.s.aoTargets[a].x !== b.s.aoTargets[a - 1].x) return b.s.aoTargets[a];
          },
          k = 1;
        k < this.s.aoTargets.length;
        k++
      ) {
        var n = d(k);
        n || (n = h());
        var q = n.x + (this.s.aoTargets[k].x - n.x) / 2;
        if (this._fnIsLtr()) {
          if (a < q) {
            var l = n;
            break;
          }
        } else if (a > q) {
          l = n;
          break;
        }
      }
      l ? (this.dom.pointer.css('left', l.x), (this.s.mouse.toIndex = l.to)) : (this.dom.pointer.css('left', f().x), (this.s.mouse.toIndex = f().to));
      this.s.init.bRealtime &&
        c !== this.s.mouse.toIndex &&
        (this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex),
        (this.s.mouse.fromIndex = this.s.mouse.toIndex),
        ('' === this.s.dt.oScroll.sX && '' === this.s.dt.oScroll.sY) || this.s.dt.oInstance.fnAdjustColumnSizing(!1),
        this._fnRegions());
    },
    _fnMouseUp: function (a) {
      d(r).off('.ColReorder');
      null !== this.dom.drag &&
        (this.dom.drag.remove(),
        this.dom.pointer.remove(),
        (this.dom.drag = null),
        (this.dom.pointer = null),
        this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex, !0),
        this._fnSetColumnIndexes(),
        ('' === this.s.dt.oScroll.sX && '' === this.s.dt.oScroll.sY) || this.s.dt.oInstance.fnAdjustColumnSizing(!1),
        this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),
        null !== this.s.reorderCallback && this.s.reorderCallback.call(this));
    },
    _fnRegions: function () {
      var a = this.s.dt.aoColumns,
        b = this._fnIsLtr();
      this.s.aoTargets.splice(0, this.s.aoTargets.length);
      var c = d(this.s.dt.nTable).offset().left,
        g = [];
      d.each(a, function (a, f) {
        if (f.bVisible && 'none' !== f.nTh.style.display) {
          f = d(f.nTh);
          var h = f.offset().left;
          b && (h += f.outerWidth());
          g.push({index: a, bound: h});
          c = h;
        } else g.push({index: a, bound: c});
      });
      var h = g[0];
      a = d(a[h.index].nTh).outerWidth();
      this.s.aoTargets.push({to: 0, x: h.bound - a});
      for (h = 0; h < g.length; h++) {
        a = g[h];
        var f = a.index;
        a.index < this.s.mouse.fromIndex && f++;
        this.s.aoTargets.push({to: f, x: a.bound});
      }
      0 !== this.s.fixedRight && this.s.aoTargets.splice(this.s.aoTargets.length - this.s.fixedRight);
      0 !== this.s.fixed && this.s.aoTargets.splice(0, this.s.fixed);
    },
    _fnCreateDragNode: function () {
      var a = '' !== this.s.dt.oScroll.sX || '' !== this.s.dt.oScroll.sY,
        b = this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,
        c = b.parentNode,
        g = c.parentNode,
        h = g.parentNode,
        f = d(b).clone();
      this.dom.drag = d(h.cloneNode(!1))
        .addClass('DTCR_clonedTable')
        .append(d(g.cloneNode(!1)).append(d(c.cloneNode(!1)).append(f[0])))
        .css({position: 'absolute', top: 0, left: 0, width: d(b).outerWidth(), height: d(b).outerHeight()})
        .appendTo('body');
      this.dom.pointer = d('<div></div>')
        .addClass('DTCR_pointer')
        .css({
          position: 'absolute',
          top: a ? d('div.dataTables_scroll', this.s.dt.nTableWrapper).offset().top : d(this.s.dt.nTable).offset().top,
          height: a ? d('div.dataTables_scroll', this.s.dt.nTableWrapper).height() : d(this.s.dt.nTable).height(),
        })
        .appendTo('body');
    },
    _fnSetColumnIndexes: function () {
      d.each(this.s.dt.aoColumns, function (a, b) {
        d(b.nTh).attr('data-column-index', a);
      });
    },
    _fnCursorPosition: function (a, b) {
      return -1 !== a.type.indexOf('touch') ? a.originalEvent.touches[0][b] : a[b];
    },
    _fnIsLtr: function () {
      return 'rtl' !== d(this.s.dt.nTable).css('direction');
    },
  });
  k.defaults = {aiOrder: null, bEnable: !0, bRealtime: !0, iFixedColumnsLeft: 0, iFixedColumnsRight: 0, fnReorderCallback: null};
  k.version = '1.5.2';
  d.fn.dataTable.ColReorder = k;
  d.fn.DataTable.ColReorder = k;
  'function' == typeof d.fn.dataTable && 'function' == typeof d.fn.dataTableExt.fnVersionCheck && d.fn.dataTableExt.fnVersionCheck('1.10.8')
    ? d.fn.dataTableExt.aoFeatures.push({
        fnInit: function (a) {
          var b = a.oInstance;
          a._colReorder
            ? b.oApi._fnLog(a, 1, 'ColReorder attempted to initialise twice. Ignoring second')
            : ((b = a.oInit), new k(a, b.colReorder || b.oColReorder || {}));
          return null;
        },
        cFeature: 'R',
        sFeature: 'ColReorder',
      })
    : alert('Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download');
  d(r).on('preInit.dt.colReorder', function (a, b) {
    if ('dt' === a.namespace) {
      a = b.oInit.colReorder;
      var c = y.defaults.colReorder;
      if (a || c) (c = d.extend({}, a, c)), !1 !== a && new k(b, c);
    }
  });
  d.fn.dataTable.Api.register('colReorder.reset()', function () {
    return this.iterator('table', function (a) {
      a._colReorder.fnReset();
    });
  });
  d.fn.dataTable.Api.register('colReorder.order()', function (a, b) {
    return a
      ? this.iterator('table', function (c) {
          c._colReorder.fnOrder(a, b);
        })
      : this.context.length
      ? this.context[0]._colReorder.fnOrder()
      : null;
  });
  d.fn.dataTable.Api.register('colReorder.transpose()', function (a, b) {
    return this.context.length && this.context[0]._colReorder ? this.context[0]._colReorder.fnTranspose(a, b) : a;
  });
  d.fn.dataTable.Api.register('colReorder.move()', function (a, b, c, d) {
    this.context.length && (this.context[0]._colReorder.s.dt.oInstance.fnColReorder(a, b, c, d), this.context[0]._colReorder._fnSetColumnIndexes());
    return this;
  });
  d.fn.dataTable.Api.register('colReorder.enable()', function (a) {
    return this.iterator('table', function (b) {
      b._colReorder && b._colReorder.fnEnable(a);
    });
  });
  d.fn.dataTable.Api.register('colReorder.disable()', function () {
    return this.iterator('table', function (a) {
      a._colReorder && a._colReorder.fnDisable();
    });
  });
  return k;
});

/*!
 Bootstrap 4 styling wrapper for ColReorder
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net-bs4', 'datatables.net-colreorder'], function (a) {
        return c(a, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (a, b) {
        a || (a = window);
        (b && b.fn.dataTable) || (b = require('datatables.net-bs4')(a, b).$);
        b.fn.dataTable.ColReorder || require('datatables.net-colreorder')(a, b);
        return c(b, a, a.document);
      })
    : c(jQuery, window, document);
})(function (c, a, b, d) {
  return c.fn.dataTable;
});

/*!
   Copyright 2009-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 KeyTable 2.5.2
 ©2009-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (b) {
  var f = 0;
  return function () {
    return f < b.length ? {done: !1, value: b[f++]} : {done: !0};
  };
};
$jscomp.arrayIterator = function (b) {
  return {next: $jscomp.arrayIteratorImpl(b)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (b, f, k) {
        b != Array.prototype && b != Object.prototype && (b[f] = k.value);
      };
$jscomp.getGlobal = function (b) {
  b = ['object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global, b];
  for (var f = 0; f < b.length; ++f) {
    var k = b[f];
    if (k && k.Math == Math) return k;
  }
  throw Error('Cannot find global object');
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = 'jscomp_symbol_';
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (b, f) {
  this.$jscomp$symbol$id_ = b;
  $jscomp.defineProperty(this, 'description', {configurable: !0, writable: !0, value: f});
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
  function b(k) {
    if (this instanceof b) throw new TypeError('Symbol is not a constructor');
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (k || '') + '_' + f++, k);
  }
  var f = 0;
  return b;
})();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.iterator;
  b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('Symbol.iterator'));
  'function' != typeof Array.prototype[b] &&
    $jscomp.defineProperty(Array.prototype, b, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      },
    });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.asyncIterator;
  b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol('Symbol.asyncIterator'));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (b) {
  $jscomp.initSymbolIterator();
  b = {next: b};
  b[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return b;
};
$jscomp.iteratorFromArray = function (b, f) {
  $jscomp.initSymbolIterator();
  b instanceof String && (b += '');
  var k = 0,
    l = {
      next: function () {
        if (k < b.length) {
          var g = k++;
          return {value: f(g, b[g]), done: !1};
        }
        l.next = function () {
          return {done: !0, value: void 0};
        };
        return l.next();
      },
    };
  l[Symbol.iterator] = function () {
    return l;
  };
  return l;
};
$jscomp.polyfill = function (b, f, k, l) {
  if (f) {
    k = $jscomp.global;
    b = b.split('.');
    for (l = 0; l < b.length - 1; l++) {
      var g = b[l];
      g in k || (k[g] = {});
      k = k[g];
    }
    b = b[b.length - 1];
    l = k[b];
    f = f(l);
    f != l && null != f && $jscomp.defineProperty(k, b, {configurable: !0, writable: !0, value: f});
  }
};
$jscomp.polyfill(
  'Array.prototype.keys',
  function (b) {
    return b
      ? b
      : function () {
          return $jscomp.iteratorFromArray(this, function (b) {
            return b;
          });
        };
  },
  'es6',
  'es3',
);
(function (b) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net'], function (f) {
        return b(f, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (f, k) {
        f || (f = window);
        (k && k.fn.dataTable) || (k = require('datatables.net')(f, k).$);
        return b(k, f, f.document);
      })
    : b(jQuery, window, document);
})(function (b, f, k, l) {
  var g = b.fn.dataTable,
    t = 0,
    p = function (a, c) {
      if (!g.versionCheck || !g.versionCheck('1.10.8')) throw 'KeyTable requires DataTables 1.10.8 or newer';
      this.c = b.extend(!0, {}, g.defaults.keyTable, p.defaults, c);
      this.s = {dt: new g.Api(a), enable: !0, focusDraw: !1, waitingForDraw: !1, lastFocus: null, namespace: '.keyTable-' + t++, tabInput: null};
      this.dom = {};
      a = this.s.dt.settings()[0];
      if ((c = a.keytable)) return c;
      a.keytable = this;
      this._constructor();
    };
  b.extend(p.prototype, {
    blur: function () {
      this._blur();
    },
    enable: function (a) {
      this.s.enable = a;
    },
    focus: function (a, c) {
      this._focus(this.s.dt.cell(a, c));
    },
    focused: function (a) {
      if (!this.s.lastFocus) return !1;
      var c = this.s.lastFocus.cell.index();
      return a.row === c.row && a.column === c.column;
    },
    _constructor: function () {
      this._tabInput();
      var a = this,
        c = this.s.dt,
        d = b(c.table().node()),
        e = this.s.namespace,
        m = !1;
      'static' === d.css('position') && d.css('position', 'relative');
      b(c.table().body()).on('click' + e, 'th, td', function (b) {
        if (!1 !== a.s.enable) {
          var e = c.cell(this);
          e.any() && a._focus(e, null, !1, b);
        }
      });
      b(k).on('keydown' + e, function (b) {
        m || a._key(b);
      });
      if (this.c.blurable)
        b(k).on('mousedown' + e, function (e) {
          b(e.target).parents('.dataTables_filter').length && a._blur();
          b(e.target).parents().filter(c.table().container()).length ||
            b(e.target).parents('div.DTE').length ||
            b(e.target).parents('div.editor-datetime').length ||
            b(e.target).parents().filter('.DTFC_Cloned').length ||
            a._blur();
        });
      if (this.c.editor) {
        var q = this.c.editor;
        q.on('open.keyTableMain', function (b, c, d) {
          'inline' !== c &&
            a.s.enable &&
            (a.enable(!1),
            q.one('close' + e, function () {
              a.enable(!0);
            }));
        });
        if (this.c.editOnFocus)
          c.on('key-focus' + e + ' key-refocus' + e, function (b, c, e, d) {
            a._editor(null, d, !0);
          });
        c.on('key' + e, function (b, c, e, d, m) {
          a._editor(e, m, !1);
        });
        b(c.table().body()).on('dblclick' + e, 'th, td', function (b) {
          !1 !== a.s.enable && c.cell(this).any() && a._editor(null, b, !0);
        });
        q.on('preSubmit', function () {
          m = !0;
        })
          .on('preSubmitCancelled', function () {
            m = !1;
          })
          .on('submitComplete', function () {
            m = !1;
          });
      }
      if (c.settings()[0].oFeatures.bStateSave)
        c.on('stateSaveParams' + e, function (b, c, e) {
          e.keyTable = a.s.lastFocus ? a.s.lastFocus.cell.index() : null;
        });
      c.on('column-visibility' + e, function (b) {
        a._tabInput();
      });
      c.on('draw' + e, function (e) {
        a._tabInput();
        if (!a.s.focusDraw) {
          var d = a.s.lastFocus;
          if (d && d.node && b(d.node).closest('body') === k.body) {
            d = a.s.lastFocus.relative;
            var m = c.page.info(),
              h = d.row + m.start;
            0 !== m.recordsDisplay && (h >= m.recordsDisplay && (h = m.recordsDisplay - 1), a._focus(h, d.column, !0, e));
          }
        }
      });
      this.c.clipboard && this._clipboard();
      c.on('destroy' + e, function () {
        a._blur(!0);
        c.off(e);
        b(c.table().body())
          .off('click' + e, 'th, td')
          .off('dblclick' + e, 'th, td');
        b(k)
          .off('mousedown' + e)
          .off('keydown' + e)
          .off('copy' + e)
          .off('paste' + e);
      });
      var h = c.state.loaded();
      if (h && h.keyTable)
        c.one('init', function () {
          var a = c.cell(h.keyTable);
          a.any() && a.focus();
        });
      else this.c.focus && c.cell(this.c.focus).focus();
    },
    _blur: function (a) {
      if (this.s.enable && this.s.lastFocus) {
        var c = this.s.lastFocus.cell;
        b(c.node()).removeClass(this.c.className);
        this.s.lastFocus = null;
        a || (this._updateFixedColumns(c.index().column), this._emitEvent('key-blur', [this.s.dt, c]));
      }
    },
    _clipboard: function () {
      var a = this.s.dt,
        c = this,
        d = this.s.namespace;
      f.getSelection &&
        (b(k).on('copy' + d, function (a) {
          a = a.originalEvent;
          var b = f.getSelection().toString(),
            e = c.s.lastFocus;
          !b && e && (a.clipboardData.setData('text/plain', e.cell.render(c.c.clipboardOrthogonal)), a.preventDefault());
        }),
        b(k).on('paste' + d, function (b) {
          b = b.originalEvent;
          var e = c.s.lastFocus,
            d = k.activeElement,
            h = c.c.editor,
            n;
          !e ||
            (d && 'body' !== d.nodeName.toLowerCase()) ||
            (b.preventDefault(),
            f.clipboardData && f.clipboardData.getData
              ? (n = f.clipboardData.getData('Text'))
              : b.clipboardData && b.clipboardData.getData && (n = b.clipboardData.getData('text/plain')),
            h ? h.inline(e.cell.index()).set(h.displayed()[0], n).submit() : (e.cell.data(n), a.draw(!1)));
        }));
    },
    _columns: function () {
      var a = this.s.dt,
        b = a.columns(this.c.columns).indexes(),
        d = [];
      a.columns(':visible').every(function (a) {
        -1 !== b.indexOf(a) && d.push(a);
      });
      return d;
    },
    _editor: function (a, c, d) {
      if (this.s.lastFocus) {
        var e = this,
          m = this.s.dt,
          f = this.c.editor,
          h = this.s.lastFocus.cell,
          n = this.s.namespace;
        if (
          !(
            b('div.DTE', h.node()).length ||
            (null !== a && ((0 <= a && 9 >= a) || 11 === a || 12 === a || (14 <= a && 31 >= a) || (112 <= a && 123 >= a) || (127 <= a && 159 >= a)))
          )
        ) {
          c.stopPropagation();
          13 === a && c.preventDefault();
          var g = function () {
            f.one('open' + n, function () {
              f.off('cancelOpen' + n);
              d || b('div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea').select();
              m.keys.enable(d ? 'tab-only' : 'navigation-only');
              m.on('key-blur.editor', function (a, b, c) {
                f.displayed() && c.node() === h.node() && f.submit();
              });
              d && b(m.table().container()).addClass('dtk-focus-alt');
              f.on('preSubmitCancelled' + n, function () {
                setTimeout(function () {
                  e._focus(h, null, !1);
                }, 50);
              });
              f.on('submitUnsuccessful' + n, function () {
                e._focus(h, null, !1);
              });
              f.one('close', function () {
                m.keys.enable(!0);
                m.off('key-blur.editor');
                f.off(n);
                b(m.table().container()).removeClass('dtk-focus-alt');
              });
            })
              .one('cancelOpen' + n, function () {
                f.off(n);
              })
              .inline(h.index());
          };
          13 === a
            ? ((d = !0),
              b(k).one('keyup', function () {
                g();
              }))
            : g();
        }
      }
    },
    _emitEvent: function (a, c) {
      this.s.dt.iterator('table', function (d, e) {
        b(d.nTable).triggerHandler(a, c);
      });
    },
    _focus: function (a, c, d, e) {
      var m = this,
        g = this.s.dt,
        h = g.page.info(),
        n = this.s.lastFocus;
      e || (e = null);
      if (this.s.enable) {
        if ('number' !== typeof a) {
          if (!a.any()) return;
          var r = a.index();
          c = r.column;
          a = g.rows({filter: 'applied', order: 'applied'}).indexes().indexOf(r.row);
          if (0 > a) return;
          h.serverSide && (a += h.start);
        }
        if (-1 !== h.length && (a < h.start || a >= h.start + h.length))
          (this.s.focusDraw = !0),
            (this.s.waitingForDraw = !0),
            g
              .one('draw', function () {
                m.s.focusDraw = !1;
                m.s.waitingForDraw = !1;
                m._focus(a, c, l, e);
              })
              .page(Math.floor(a / h.length))
              .draw(!1);
        else if (-1 !== b.inArray(c, this._columns())) {
          h.serverSide && (a -= h.start);
          h = g.cells(null, c, {search: 'applied', order: 'applied'}).flatten();
          h = g.cell(h[a]);
          if (n) {
            if (n.node === h.node()) {
              this._emitEvent('key-refocus', [this.s.dt, h, e || null]);
              return;
            }
            this._blur();
          }
          this._removeOtherFocus();
          n = b(h.node());
          n.addClass(this.c.className);
          this._updateFixedColumns(c);
          if (d === l || !0 === d)
            this._scroll(b(f), b(k.body), n, 'offset'),
              (d = g.table().body().parentNode),
              d !== g.table().header().parentNode && ((d = b(d.parentNode)), this._scroll(d, d, n, 'position'));
          this.s.lastFocus = {cell: h, node: h.node(), relative: {row: g.rows({page: 'current'}).indexes().indexOf(h.index().row), column: h.index().column}};
          this._emitEvent('key-focus', [this.s.dt, h, e || null]);
          g.state.save();
        }
      }
    },
    _key: function (a) {
      if (this.s.waitingForDraw) a.preventDefault();
      else {
        var c = this.s.enable,
          d = !0 === c || 'navigation-only' === c;
        if (c && (!(0 === a.keyCode || a.ctrlKey || a.metaKey || a.altKey) || (a.ctrlKey && a.altKey))) {
          var e = this.s.lastFocus;
          if (e)
            if (this.s.dt.cell(e.node).any()) {
              e = this.s.dt;
              var m = this.s.dt.settings()[0].oScroll.sY ? !0 : !1;
              if (!this.c.keys || -1 !== b.inArray(a.keyCode, this.c.keys))
                switch (a.keyCode) {
                  case 9:
                    this._shift(a, a.shiftKey ? 'left' : 'right', !0);
                    break;
                  case 27:
                    this.s.blurable && !0 === c && this._blur();
                    break;
                  case 33:
                  case 34:
                    d && !m && (a.preventDefault(), e.page(33 === a.keyCode ? 'previous' : 'next').draw(!1));
                    break;
                  case 35:
                  case 36:
                    d &&
                      (a.preventDefault(),
                      (c = e.cells({page: 'current'}).indexes()),
                      (d = this._columns()),
                      this._focus(e.cell(c[35 === a.keyCode ? c.length - 1 : d[0]]), null, !0, a));
                    break;
                  case 37:
                    d && this._shift(a, 'left');
                    break;
                  case 38:
                    d && this._shift(a, 'up');
                    break;
                  case 39:
                    d && this._shift(a, 'right');
                    break;
                  case 40:
                    d && this._shift(a, 'down');
                    break;
                  case 113:
                    if (this.c.editor) {
                      this._editor(null, a, !0);
                      break;
                    }
                  default:
                    !0 === c && this._emitEvent('key', [e, a.keyCode, this.s.lastFocus.cell, a]);
                }
            } else this.s.lastFocus = null;
        }
      }
    },
    _removeOtherFocus: function () {
      var a = this.s.dt.table().node();
      b.fn.dataTable.tables({api: !0}).iterator('table', function (b) {
        this.table().node() !== a && this.cell.blur();
      });
    },
    _scroll: function (a, b, d, e) {
      var c = d[e](),
        f = d.outerHeight(),
        h = d.outerWidth(),
        k = b.scrollTop(),
        g = b.scrollLeft(),
        l = a.height();
      a = a.width();
      'position' === e && (c.top += parseInt(d.closest('table').css('top'), 10));
      c.top < k && b.scrollTop(c.top);
      c.left < g && b.scrollLeft(c.left);
      c.top + f > k + l && f < l && b.scrollTop(c.top + f - l);
      c.left + h > g + a && h < a && b.scrollLeft(c.left + h - a);
    },
    _shift: function (a, c, d) {
      var e = this.s.dt,
        f = e.page.info(),
        k = f.recordsDisplay,
        h = this.s.lastFocus.cell,
        g = this._columns();
      if (h) {
        var l = e.rows({filter: 'applied', order: 'applied'}).indexes().indexOf(h.index().row);
        f.serverSide && (l += f.start);
        e = e.columns(g).indexes().indexOf(h.index().column);
        f = g[e];
        'right' === c
          ? e >= g.length - 1
            ? (l++, (f = g[0]))
            : (f = g[e + 1])
          : 'left' === c
          ? 0 === e
            ? (l--, (f = g[g.length - 1]))
            : (f = g[e - 1])
          : 'up' === c
          ? l--
          : 'down' === c && l++;
        0 <= l && l < k && -1 !== b.inArray(f, g)
          ? (a && a.preventDefault(), this._focus(l, f, !0, a))
          : d && this.c.blurable
          ? this._blur()
          : a && a.preventDefault();
      }
    },
    _tabInput: function () {
      var a = this,
        c = this.s.dt,
        d = null !== this.c.tabIndex ? this.c.tabIndex : c.settings()[0].iTabIndex;
      -1 != d &&
        (this.s.tabInput ||
          ((d = b('<div><input type="text" tabindex="' + d + '"/></div>').css({position: 'absolute', height: 1, width: 0, overflow: 'hidden'})),
          d.children().on('focus', function (b) {
            var d = c.cell(':eq(0)', a._columns(), {page: 'current'});
            d.any() && a._focus(d, null, !0, b);
          }),
          (this.s.tabInput = d)),
        (d = this.s.dt.cell(':eq(0)', '0:visible', {page: 'current', order: 'current'}).node()) && b(d).prepend(this.s.tabInput));
    },
    _updateFixedColumns: function (a) {
      var b = this.s.dt,
        d = b.settings()[0];
      if (d._oFixedColumns) {
        var e = d.aoColumns.length - d._oFixedColumns.s.iRightColumns;
        (a < d._oFixedColumns.s.iLeftColumns || a >= e) && b.fixedColumns().update();
      }
    },
  });
  p.defaults = {
    blurable: !0,
    className: 'focus',
    clipboard: !0,
    clipboardOrthogonal: 'display',
    columns: '',
    editor: null,
    editOnFocus: !1,
    focus: null,
    keys: null,
    tabIndex: null,
  };
  p.version = '2.5.2';
  b.fn.dataTable.KeyTable = p;
  b.fn.DataTable.KeyTable = p;
  g.Api.register('cell.blur()', function () {
    return this.iterator('table', function (a) {
      a.keytable && a.keytable.blur();
    });
  });
  g.Api.register('cell().focus()', function () {
    return this.iterator('cell', function (a, b, d) {
      a.keytable && a.keytable.focus(b, d);
    });
  });
  g.Api.register('keys.disable()', function () {
    return this.iterator('table', function (a) {
      a.keytable && a.keytable.enable(!1);
    });
  });
  g.Api.register('keys.enable()', function (a) {
    return this.iterator('table', function (b) {
      b.keytable && b.keytable.enable(a === l ? !0 : a);
    });
  });
  g.Api.register('keys.move()', function (a) {
    return this.iterator('table', function (b) {
      b.keytable && b.keytable._shift(null, a, !1);
    });
  });
  g.ext.selector.cell.push(function (a, b, d) {
    b = b.focused;
    a = a.keytable;
    var c = [];
    if (!a || b === l) return d;
    for (var f = 0, g = d.length; f < g; f++) ((!0 === b && a.focused(d[f])) || (!1 === b && !a.focused(d[f]))) && c.push(d[f]);
    return c;
  });
  b(k).on('preInit.dt.dtk', function (a, c, d) {
    'dt' === a.namespace && ((a = c.oInit.keys), (d = g.defaults.keys), a || d) && ((d = b.extend({}, d, a)), !1 !== a && new p(c, d));
  });
  return p;
});

/*!
 Bootstrap 4 styling wrapper for KeyTable
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net-bs4', 'datatables.net-keytable'], function (a) {
        return c(a, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (a, b) {
        a || (a = window);
        (b && b.fn.dataTable) || (b = require('datatables.net-bs4')(a, b).$);
        b.fn.dataTable.KeyTable || require('datatables.net-keytable')(a, b);
        return c(b, a, a.document);
      })
    : c(jQuery, window, document);
})(function (c, a, b, d) {
  return c.fn.dataTable;
});

/*!
   Copyright 2014-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 Responsive 2.2.5
 2014-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, k, g) {
  a instanceof String && (a = String(a));
  for (var n = a.length, p = 0; p < n; p++) {
    var v = a[p];
    if (k.call(g, v, p, a)) return {i: p, v: v};
  }
  return {i: -1, v: void 0};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, k, g) {
        a != Array.prototype && a != Object.prototype && (a[k] = g.value);
      };
$jscomp.getGlobal = function (a) {
  a = ['object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global, a];
  for (var k = 0; k < a.length; ++k) {
    var g = a[k];
    if (g && g.Math == Math) return g;
  }
  throw Error('Cannot find global object');
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, k, g, n) {
  if (k) {
    g = $jscomp.global;
    a = a.split('.');
    for (n = 0; n < a.length - 1; n++) {
      var p = a[n];
      p in g || (g[p] = {});
      g = g[p];
    }
    a = a[a.length - 1];
    n = g[a];
    k = k(n);
    k != n && null != k && $jscomp.defineProperty(g, a, {configurable: !0, writable: !0, value: k});
  }
};
$jscomp.polyfill(
  'Array.prototype.find',
  function (a) {
    return a
      ? a
      : function (a, g) {
          return $jscomp.findInternal(this, a, g).v;
        };
  },
  'es6',
  'es3',
);
(function (a) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net'], function (k) {
        return a(k, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (k, g) {
        k || (k = window);
        (g && g.fn.dataTable) || (g = require('datatables.net')(k, g).$);
        return a(g, k, k.document);
      })
    : a(jQuery, window, document);
})(function (a, k, g, n) {
  function p(b, a, c) {
    var d = a + '-' + c;
    if (q[d]) return q[d];
    var f = [];
    b = b.cell(a, c).node().childNodes;
    a = 0;
    for (c = b.length; a < c; a++) f.push(b[a]);
    return (q[d] = f);
  }
  function v(b, a, c) {
    var d = a + '-' + c;
    if (q[d]) {
      b = b.cell(a, c).node();
      c = q[d][0].parentNode.childNodes;
      a = [];
      for (var f = 0, l = c.length; f < l; f++) a.push(c[f]);
      c = 0;
      for (f = a.length; c < f; c++) b.appendChild(a[c]);
      q[d] = n;
    }
  }
  var t = a.fn.dataTable,
    m = function (b, d) {
      if (!t.versionCheck || !t.versionCheck('1.10.10')) throw 'DataTables Responsive requires DataTables 1.10.10 or newer';
      this.s = {dt: new t.Api(b), columns: [], current: []};
      this.s.dt.settings()[0].responsive ||
        (d && 'string' === typeof d.details
          ? (d.details = {type: d.details})
          : d && !1 === d.details
          ? (d.details = {type: !1})
          : d && !0 === d.details && (d.details = {type: 'inline'}),
        (this.c = a.extend(!0, {}, m.defaults, t.defaults.responsive, d)),
        (b.responsive = this),
        this._constructor());
    };
  a.extend(m.prototype, {
    _constructor: function () {
      var b = this,
        d = this.s.dt,
        c = d.settings()[0],
        e = a(k).innerWidth();
      d.settings()[0]._responsive = this;
      a(k).on(
        'resize.dtr orientationchange.dtr',
        t.util.throttle(function () {
          var d = a(k).innerWidth();
          d !== e && (b._resize(), (e = d));
        }),
      );
      c.oApi._fnCallbackReg(c, 'aoRowCreatedCallback', function (c, e, r) {
        -1 !== a.inArray(!1, b.s.current) &&
          a('>td, >th', c).each(function (c) {
            c = d.column.index('toData', c);
            !1 === b.s.current[c] && a(this).css('display', 'none');
          });
      });
      d.on('destroy.dtr', function () {
        d.off('.dtr');
        a(d.table().body()).off('.dtr');
        a(k).off('resize.dtr orientationchange.dtr');
        d.cells('.dtr-control').nodes().to$().removeClass('dtr-control');
        a.each(b.s.current, function (a, d) {
          !1 === d && b._setColumnVis(a, !0);
        });
      });
      this.c.breakpoints.sort(function (b, a) {
        return b.width < a.width ? 1 : b.width > a.width ? -1 : 0;
      });
      this._classLogic();
      this._resizeAuto();
      c = this.c.details;
      !1 !== c.type &&
        (b._detailsInit(),
        d.on('column-visibility.dtr', function () {
          b._timer && clearTimeout(b._timer);
          b._timer = setTimeout(function () {
            b._timer = null;
            b._classLogic();
            b._resizeAuto();
            b._resize();
            b._redrawChildren();
          }, 100);
        }),
        d.on('draw.dtr', function () {
          b._redrawChildren();
        }),
        a(d.table().node()).addClass('dtr-' + c.type));
      d.on('column-reorder.dtr', function (a, d, c) {
        b._classLogic();
        b._resizeAuto();
        b._resize(!0);
      });
      d.on('column-sizing.dtr', function () {
        b._resizeAuto();
        b._resize();
      });
      d.on('preXhr.dtr', function () {
        var a = [];
        d.rows().every(function () {
          this.child.isShown() && a.push(this.id(!0));
        });
        d.one('draw.dtr', function () {
          b._resizeAuto();
          b._resize();
          d.rows(a).every(function () {
            b._detailsDisplay(this, !1);
          });
        });
      });
      d.on('draw.dtr', function () {
        b._controlClass();
      }).on('init.dtr', function (c, e, r) {
        'dt' === c.namespace && (b._resizeAuto(), b._resize(), a.inArray(!1, b.s.current) && d.columns.adjust());
      });
      this._resize();
    },
    _columnsVisiblity: function (b) {
      var d = this.s.dt,
        c = this.s.columns,
        e,
        f = c
          .map(function (a, b) {
            return {columnIdx: b, priority: a.priority};
          })
          .sort(function (a, b) {
            return a.priority !== b.priority ? a.priority - b.priority : a.columnIdx - b.columnIdx;
          }),
        l = a.map(c, function (c, h) {
          return !1 === d.column(h).visible() ? 'not-visible' : c.auto && null === c.minWidth ? !1 : !0 === c.auto ? '-' : -1 !== a.inArray(b, c.includeIn);
        }),
        r = 0;
      var h = 0;
      for (e = l.length; h < e; h++) !0 === l[h] && (r += c[h].minWidth);
      h = d.settings()[0].oScroll;
      h = h.sY || h.sX ? h.iBarWidth : 0;
      r = d.table().container().offsetWidth - h - r;
      h = 0;
      for (e = l.length; h < e; h++) c[h].control && (r -= c[h].minWidth);
      var k = !1;
      h = 0;
      for (e = f.length; h < e; h++) {
        var g = f[h].columnIdx;
        '-' === l[g] && !c[g].control && c[g].minWidth && (k || 0 > r - c[g].minWidth ? ((k = !0), (l[g] = !1)) : (l[g] = !0), (r -= c[g].minWidth));
      }
      f = !1;
      h = 0;
      for (e = c.length; h < e; h++)
        if (!c[h].control && !c[h].never && !1 === l[h]) {
          f = !0;
          break;
        }
      h = 0;
      for (e = c.length; h < e; h++) c[h].control && (l[h] = f), 'not-visible' === l[h] && (l[h] = !1);
      -1 === a.inArray(!0, l) && (l[0] = !0);
      return l;
    },
    _classLogic: function () {
      var b = this,
        d = this.c.breakpoints,
        c = this.s.dt,
        e = c
          .columns()
          .eq(0)
          .map(function (a) {
            var b = this.column(a),
              d = b.header().className;
            a = c.settings()[0].aoColumns[a].responsivePriority;
            b = b.header().getAttribute('data-priority');
            a === n && (a = b === n || null === b ? 1e4 : 1 * b);
            return {className: d, includeIn: [], auto: !1, control: !1, never: d.match(/\bnever\b/) ? !0 : !1, priority: a};
          }),
        f = function (b, d) {
          b = e[b].includeIn;
          -1 === a.inArray(d, b) && b.push(d);
        },
        g = function (a, c, g, l) {
          if (!g) e[a].includeIn.push(c);
          else if ('max-' === g) for (l = b._find(c).width, c = 0, g = d.length; c < g; c++) d[c].width <= l && f(a, d[c].name);
          else if ('min-' === g) for (l = b._find(c).width, c = 0, g = d.length; c < g; c++) d[c].width >= l && f(a, d[c].name);
          else if ('not-' === g) for (c = 0, g = d.length; c < g; c++) -1 === d[c].name.indexOf(l) && f(a, d[c].name);
        };
      e.each(function (b, c) {
        for (var e = b.className.split(' '), f = !1, h = 0, l = e.length; h < l; h++) {
          var k = a.trim(e[h]);
          if ('all' === k) {
            f = !0;
            b.includeIn = a.map(d, function (b) {
              return b.name;
            });
            return;
          }
          if ('none' === k || b.never) {
            f = !0;
            return;
          }
          if ('control' === k) {
            f = !0;
            b.control = !0;
            return;
          }
          a.each(d, function (b, a) {
            b = a.name.split('-');
            var d = k.match(new RegExp('(min\\-|max\\-|not\\-)?(' + b[0] + ')(\\-[_a-zA-Z0-9])?'));
            d && ((f = !0), d[2] === b[0] && d[3] === '-' + b[1] ? g(c, a.name, d[1], d[2] + d[3]) : d[2] !== b[0] || d[3] || g(c, a.name, d[1], d[2]));
          });
        }
        f || (b.auto = !0);
      });
      this.s.columns = e;
    },
    _controlClass: function () {
      if ('inline' === this.c.details.type) {
        var b = this.s.dt,
          d = a.inArray(!0, this.s.current);
        b.cells(
          null,
          function (b) {
            return b !== d;
          },
          {page: 'current'},
        )
          .nodes()
          .to$()
          .filter('.dtr-control')
          .removeClass('dtr-control');
        b.cells(null, d, {page: 'current'}).nodes().to$().addClass('dtr-control');
      }
    },
    _detailsDisplay: function (b, d) {
      var c = this,
        e = this.s.dt,
        f = this.c.details;
      if (f && !1 !== f.type) {
        var g = f.display(b, d, function () {
          return f.renderer(e, b[0], c._detailsObj(b[0]));
        });
        (!0 !== g && !1 !== g) || a(e.table().node()).triggerHandler('responsive-display.dt', [e, b, g, d]);
      }
    },
    _detailsInit: function () {
      var b = this,
        d = this.s.dt,
        c = this.c.details;
      'inline' === c.type && (c.target = 'td.dtr-control, th.dtr-control');
      d.on('draw.dtr', function () {
        b._tabIndexes();
      });
      b._tabIndexes();
      a(d.table().body()).on('keyup.dtr', 'td, th', function (b) {
        13 === b.keyCode && a(this).data('dtr-keyboard') && a(this).click();
      });
      var e = c.target;
      c = 'string' === typeof e ? e : 'td, th';
      if (e !== n || null !== e)
        a(d.table().body()).on('click.dtr mousedown.dtr mouseup.dtr', c, function (c) {
          if (a(d.table().node()).hasClass('collapsed') && -1 !== a.inArray(a(this).closest('tr').get(0), d.rows().nodes().toArray())) {
            if ('number' === typeof e) {
              var f = 0 > e ? d.columns().eq(0).length + e : e;
              if (d.cell(this).index().column !== f) return;
            }
            f = d.row(a(this).closest('tr'));
            'click' === c.type
              ? b._detailsDisplay(f, !1)
              : 'mousedown' === c.type
              ? a(this).css('outline', 'none')
              : 'mouseup' === c.type && a(this).trigger('blur').css('outline', '');
          }
        });
    },
    _detailsObj: function (b) {
      var d = this,
        c = this.s.dt;
      return a.map(this.s.columns, function (e, f) {
        if (!e.never && !e.control)
          return (
            (e = c.settings()[0].aoColumns[f]),
            {
              className: e.sClass,
              columnIndex: f,
              data: c.cell(b, f).render(d.c.orthogonal),
              hidden: c.column(f).visible() && !d.s.current[f],
              rowIndex: b,
              title: null !== e.sTitle ? e.sTitle : a(c.column(f).header()).text(),
            }
          );
      });
    },
    _find: function (b) {
      for (var a = this.c.breakpoints, c = 0, e = a.length; c < e; c++) if (a[c].name === b) return a[c];
    },
    _redrawChildren: function () {
      var b = this,
        a = this.s.dt;
      a.rows({page: 'current'}).iterator('row', function (c, d) {
        a.row(d);
        b._detailsDisplay(a.row(d), !0);
      });
    },
    _resize: function (b) {
      var d = this,
        c = this.s.dt,
        e = a(k).innerWidth(),
        f = this.c.breakpoints,
        g = f[0].name,
        r = this.s.columns,
        h,
        n = this.s.current.slice();
      for (h = f.length - 1; 0 <= h; h--)
        if (e <= f[h].width) {
          g = f[h].name;
          break;
        }
      var m = this._columnsVisiblity(g);
      this.s.current = m;
      f = !1;
      h = 0;
      for (e = r.length; h < e; h++)
        if (!1 === m[h] && !r[h].never && !r[h].control && !1 === !c.column(h).visible()) {
          f = !0;
          break;
        }
      a(c.table().node()).toggleClass('collapsed', f);
      var p = !1,
        q = 0;
      c.columns()
        .eq(0)
        .each(function (a, c) {
          !0 === m[c] && q++;
          if (b || m[c] !== n[c]) (p = !0), d._setColumnVis(a, m[c]);
        });
      p &&
        (this._redrawChildren(),
        a(c.table().node()).trigger('responsive-resize.dt', [c, this.s.current]),
        0 === c.page.info().recordsDisplay && a('td', c.table().body()).eq(0).attr('colspan', q));
    },
    _resizeAuto: function () {
      var b = this.s.dt,
        d = this.s.columns;
      if (
        this.c.auto &&
        -1 !==
          a.inArray(
            !0,
            a.map(d, function (b) {
              return b.auto;
            }),
          )
      ) {
        a.isEmptyObject(q) ||
          a.each(q, function (a) {
            a = a.split('-');
            v(b, 1 * a[0], 1 * a[1]);
          });
        b.table().node();
        var c = b.table().node().cloneNode(!1),
          e = a(b.table().header().cloneNode(!1)).appendTo(c),
          f = a(b.table().body()).clone(!1, !1).empty().appendTo(c);
        c.style.width = 'auto';
        var g = b
          .columns()
          .header()
          .filter(function (a) {
            return b.column(a).visible();
          })
          .to$()
          .clone(!1)
          .css('display', 'table-cell')
          .css('width', 'auto')
          .css('min-width', 0);
        a(f)
          .append(a(b.rows({page: 'current'}).nodes()).clone(!1))
          .find('th, td')
          .css('display', '');
        if ((f = b.table().footer())) {
          f = a(f.cloneNode(!1)).appendTo(c);
          var k = b
            .columns()
            .footer()
            .filter(function (a) {
              return b.column(a).visible();
            })
            .to$()
            .clone(!1)
            .css('display', 'table-cell');
          a('<tr/>').append(k).appendTo(f);
        }
        a('<tr/>').append(g).appendTo(e);
        'inline' === this.c.details.type && a(c).addClass('dtr-inline collapsed');
        a(c).find('[name]').removeAttr('name');
        a(c).css('position', 'relative');
        c = a('<div/>').css({width: 1, height: 1, overflow: 'hidden', clear: 'both'}).append(c);
        c.insertBefore(b.table().node());
        g.each(function (a) {
          a = b.column.index('fromVisible', a);
          d[a].minWidth = this.offsetWidth || 0;
        });
        c.remove();
      }
    },
    _responsiveOnlyHidden: function () {
      var b = this.s.dt;
      return a.map(this.s.current, function (a, c) {
        return !1 === b.column(c).visible() ? !0 : a;
      });
    },
    _setColumnVis: function (b, d) {
      var c = this.s.dt;
      d = d ? '' : 'none';
      a(c.column(b).header()).css('display', d);
      a(c.column(b).footer()).css('display', d);
      c.column(b).nodes().to$().css('display', d);
      a.isEmptyObject(q) ||
        c
          .cells(null, b)
          .indexes()
          .each(function (a) {
            v(c, a.row, a.column);
          });
    },
    _tabIndexes: function () {
      var b = this.s.dt,
        d = b.cells({page: 'current'}).nodes().to$(),
        c = b.settings()[0],
        e = this.c.details.target;
      d.filter('[data-dtr-keyboard]').removeData('[data-dtr-keyboard]');
      'number' === typeof e
        ? b.cells(null, e, {page: 'current'}).nodes().to$().attr('tabIndex', c.iTabIndex).data('dtr-keyboard', 1)
        : ('td:first-child, th:first-child' === e && (e = '>td:first-child, >th:first-child'),
          a(e, b.rows({page: 'current'}).nodes())
            .attr('tabIndex', c.iTabIndex)
            .data('dtr-keyboard', 1));
    },
  });
  m.breakpoints = [
    {name: 'desktop', width: Infinity},
    {name: 'tablet-l', width: 1024},
    {name: 'tablet-p', width: 768},
    {name: 'mobile-l', width: 480},
    {name: 'mobile-p', width: 320},
  ];
  m.display = {
    childRow: function (b, d, c) {
      if (d) {
        if (a(b.node()).hasClass('parent')) return b.child(c(), 'child').show(), !0;
      } else {
        if (b.child.isShown()) return b.child(!1), a(b.node()).removeClass('parent'), !1;
        b.child(c(), 'child').show();
        a(b.node()).addClass('parent');
        return !0;
      }
    },
    childRowImmediate: function (b, d, c) {
      if ((!d && b.child.isShown()) || !b.responsive.hasHidden()) return b.child(!1), a(b.node()).removeClass('parent'), !1;
      b.child(c(), 'child').show();
      a(b.node()).addClass('parent');
      return !0;
    },
    modal: function (b) {
      return function (d, c, e) {
        if (c) a('div.dtr-modal-content').empty().append(e());
        else {
          var f = function () {
              k.remove();
              a(g).off('keypress.dtr');
            },
            k = a('<div class="dtr-modal"/>')
              .append(
                a('<div class="dtr-modal-display"/>')
                  .append(a('<div class="dtr-modal-content"/>').append(e()))
                  .append(
                    a('<div class="dtr-modal-close">&times;</div>').click(function () {
                      f();
                    }),
                  ),
              )
              .append(
                a('<div class="dtr-modal-background"/>').click(function () {
                  f();
                }),
              )
              .appendTo('body');
          a(g).on('keyup.dtr', function (a) {
            27 === a.keyCode && (a.stopPropagation(), f());
          });
        }
        b && b.header && a('div.dtr-modal-content').prepend('<h2>' + b.header(d) + '</h2>');
      };
    },
  };
  var q = {};
  m.renderer = {
    listHiddenNodes: function () {
      return function (b, d, c) {
        var e = a('<ul data-dtr-index="' + d + '" class="dtr-details"/>'),
          f = !1;
        a.each(c, function (c, d) {
          d.hidden &&
            (a(
              '<li ' +
                (d.className ? 'class="' + d.className + '"' : '') +
                ' data-dtr-index="' +
                d.columnIndex +
                '" data-dt-row="' +
                d.rowIndex +
                '" data-dt-column="' +
                d.columnIndex +
                '"><span class="dtr-title">' +
                d.title +
                '</span> </li>',
            )
              .append(a('<span class="dtr-data"/>').append(p(b, d.rowIndex, d.columnIndex)))
              .appendTo(e),
            (f = !0));
        });
        return f ? e : !1;
      };
    },
    listHidden: function () {
      return function (b, d, c) {
        return (b = a
          .map(c, function (a) {
            var b = a.className ? 'class="' + a.className + '"' : '';
            return a.hidden
              ? '<li ' +
                  b +
                  ' data-dtr-index="' +
                  a.columnIndex +
                  '" data-dt-row="' +
                  a.rowIndex +
                  '" data-dt-column="' +
                  a.columnIndex +
                  '"><span class="dtr-title">' +
                  a.title +
                  '</span> <span class="dtr-data">' +
                  a.data +
                  '</span></li>'
              : '';
          })
          .join(''))
          ? a('<ul data-dtr-index="' + d + '" class="dtr-details"/>').append(b)
          : !1;
      };
    },
    tableAll: function (b) {
      b = a.extend({tableClass: ''}, b);
      return function (d, c, e) {
        d = a
          .map(e, function (a) {
            return (
              '<tr ' +
              (a.className ? 'class="' + a.className + '"' : '') +
              ' data-dt-row="' +
              a.rowIndex +
              '" data-dt-column="' +
              a.columnIndex +
              '"><td>' +
              a.title +
              ':</td> <td>' +
              a.data +
              '</td></tr>'
            );
          })
          .join('');
        return a('<table class="' + b.tableClass + ' dtr-details" width="100%"/>').append(d);
      };
    },
  };
  m.defaults = {
    breakpoints: m.breakpoints,
    auto: !0,
    details: {display: m.display.childRow, renderer: m.renderer.listHidden(), target: 0, type: 'inline'},
    orthogonal: 'display',
  };
  var u = a.fn.dataTable.Api;
  u.register('responsive()', function () {
    return this;
  });
  u.register('responsive.index()', function (b) {
    b = a(b);
    return {column: b.data('dtr-index'), row: b.parent().data('dtr-index')};
  });
  u.register('responsive.rebuild()', function () {
    return this.iterator('table', function (a) {
      a._responsive && a._responsive._classLogic();
    });
  });
  u.register('responsive.recalc()', function () {
    return this.iterator('table', function (a) {
      a._responsive && (a._responsive._resizeAuto(), a._responsive._resize());
    });
  });
  u.register('responsive.hasHidden()', function () {
    var b = this.context[0];
    return b._responsive ? -1 !== a.inArray(!1, b._responsive._responsiveOnlyHidden()) : !1;
  });
  u.registerPlural('columns().responsiveHidden()', 'column().responsiveHidden()', function () {
    return this.iterator(
      'column',
      function (a, d) {
        return a._responsive ? a._responsive._responsiveOnlyHidden()[d] : !1;
      },
      1,
    );
  });
  m.version = '2.2.5';
  a.fn.dataTable.Responsive = m;
  a.fn.DataTable.Responsive = m;
  a(g).on('preInit.dt.dtr', function (b, d, c) {
    'dt' === b.namespace &&
      (a(d.nTable).hasClass('responsive') || a(d.nTable).hasClass('dt-responsive') || d.oInit.responsive || t.defaults.responsive) &&
      ((b = d.oInit.responsive), !1 !== b && new m(d, a.isPlainObject(b) ? b : {}));
  });
  return m;
});

/*!
 Bootstrap 4 integration for DataTables' Responsive
 ©2016 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, c, b) {
  a instanceof String && (a = String(a));
  for (var d = a.length, e = 0; e < d; e++) {
    var f = a[e];
    if (c.call(b, f, e, a)) return {i: e, v: f};
  }
  return {i: -1, v: void 0};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, c, b) {
        a != Array.prototype && a != Object.prototype && (a[c] = b.value);
      };
$jscomp.getGlobal = function (a) {
  a = ['object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global, a];
  for (var c = 0; c < a.length; ++c) {
    var b = a[c];
    if (b && b.Math == Math) return b;
  }
  throw Error('Cannot find global object');
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, c, b, d) {
  if (c) {
    b = $jscomp.global;
    a = a.split('.');
    for (d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in b || (b[e] = {});
      b = b[e];
    }
    a = a[a.length - 1];
    d = b[a];
    c = c(d);
    c != d && null != c && $jscomp.defineProperty(b, a, {configurable: !0, writable: !0, value: c});
  }
};
$jscomp.polyfill(
  'Array.prototype.find',
  function (a) {
    return a
      ? a
      : function (a, b) {
          return $jscomp.findInternal(this, a, b).v;
        };
  },
  'es6',
  'es3',
);
(function (a) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net-bs4', 'datatables.net-responsive'], function (c) {
        return a(c, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (c, b) {
        c || (c = window);
        (b && b.fn.dataTable) || (b = require('datatables.net-bs4')(c, b).$);
        b.fn.dataTable.Responsive || require('datatables.net-responsive')(c, b);
        return a(b, c, c.document);
      })
    : a(jQuery, window, document);
})(function (a, c, b, d) {
  c = a.fn.dataTable;
  b = c.Responsive.display;
  var e = b.modal,
    f = a(
      '<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>',
    );
  b.modal = function (b) {
    return function (c, d, g) {
      if (!a.fn.modal) e(c, d, g);
      else if (!d) {
        if (b && b.header) {
          d = f.find('div.modal-header');
          var h = d.find('button').detach();
          d.empty()
            .append('<h4 class="modal-title">' + b.header(c) + '</h4>')
            .append(h);
        }
        f.find('div.modal-body').empty().append(g());
        f.appendTo('body').modal();
      }
    };
  };
  return c.Responsive;
});

/*!
 SearchPanes 1.1.1
 2019-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.getGlobal = function (e) {
  e = ['object' == typeof window && window, 'object' == typeof self && self, 'object' == typeof global && global, e];
  for (var t = 0; t < e.length; ++t) {
    var d = e[t];
    if (d && d.Math == Math) return d;
  }
  throw Error('Cannot find global object');
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.checkEs6ConformanceViaProxy = function () {
  try {
    var e = {},
      t = Object.create(
        new $jscomp.global.Proxy(e, {
          get: function (d, n, q) {
            return d == e && 'q' == n && q == t;
          },
        }),
      );
    return !0 === t.q;
  } catch (d) {
    return !1;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.arrayIteratorImpl = function (e) {
  var t = 0;
  return function () {
    return t < e.length ? {done: !1, value: e[t++]} : {done: !0};
  };
};
$jscomp.arrayIterator = function (e) {
  return {next: $jscomp.arrayIteratorImpl(e)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (e, t, d) {
        e != Array.prototype && e != Object.prototype && (e[t] = d.value);
      };
$jscomp.SYMBOL_PREFIX = 'jscomp_symbol_';
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (e, t) {
  this.$jscomp$symbol$id_ = e;
  $jscomp.defineProperty(this, 'description', {configurable: !0, writable: !0, value: t});
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
  function e(d) {
    if (this instanceof e) throw new TypeError('Symbol is not a constructor');
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (d || '') + '_' + t++, d);
  }
  var t = 0;
  return e;
})();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var e = $jscomp.global.Symbol.iterator;
  e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('Symbol.iterator'));
  'function' != typeof Array.prototype[e] &&
    $jscomp.defineProperty(Array.prototype, e, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      },
    });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var e = $jscomp.global.Symbol.asyncIterator;
  e || (e = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol('Symbol.asyncIterator'));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator();
  e = {next: e};
  e[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return e;
};
$jscomp.makeIterator = function (e) {
  var t = 'undefined' != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
  return t ? t.call(e) : $jscomp.arrayIterator(e);
};
$jscomp.owns = function (e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
};
$jscomp.polyfill = function (e, t, d, n) {
  if (t) {
    d = $jscomp.global;
    e = e.split('.');
    for (n = 0; n < e.length - 1; n++) {
      var q = e[n];
      q in d || (d[q] = {});
      d = d[q];
    }
    e = e[e.length - 1];
    n = d[e];
    t = t(n);
    t != n && null != t && $jscomp.defineProperty(d, e, {configurable: !0, writable: !0, value: t});
  }
};
$jscomp.polyfill(
  'WeakMap',
  function (e) {
    function t() {
      if (!e || !Object.seal) return !1;
      try {
        var a = Object.seal({}),
          b = Object.seal({}),
          f = new e([
            [a, 2],
            [b, 3],
          ]);
        if (2 != f.get(a) || 3 != f.get(b)) return !1;
        f.delete(a);
        f.set(b, 4);
        return !f.has(a) && 4 == f.get(b);
      } catch (h) {
        return !1;
      }
    }
    function d() {}
    function n(a) {
      var b = typeof a;
      return ('object' === b && null !== a) || 'function' === b;
    }
    function q(a) {
      if (!$jscomp.owns(a, v)) {
        var b = new d();
        $jscomp.defineProperty(a, v, {value: b});
      }
    }
    function k(a) {
      var b = Object[a];
      b &&
        (Object[a] = function (a) {
          if (a instanceof d) return a;
          q(a);
          return b(a);
        });
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
      if (e && $jscomp.ES6_CONFORMANCE) return e;
    } else if (t()) return e;
    var v = '$jscomp_hidden_' + Math.random();
    k('freeze');
    k('preventExtensions');
    k('seal');
    var w = 0,
      c = function (a) {
        this.id_ = (w += Math.random() + 1).toString();
        if (a) {
          a = $jscomp.makeIterator(a);
          for (var b; !(b = a.next()).done; ) (b = b.value), this.set(b[0], b[1]);
        }
      };
    c.prototype.set = function (a, b) {
      if (!n(a)) throw Error('Invalid WeakMap key');
      q(a);
      if (!$jscomp.owns(a, v)) throw Error('WeakMap key fail: ' + a);
      a[v][this.id_] = b;
      return this;
    };
    c.prototype.get = function (a) {
      return n(a) && $jscomp.owns(a, v) ? a[v][this.id_] : void 0;
    };
    c.prototype.has = function (a) {
      return n(a) && $jscomp.owns(a, v) && $jscomp.owns(a[v], this.id_);
    };
    c.prototype.delete = function (a) {
      return n(a) && $jscomp.owns(a, v) && $jscomp.owns(a[v], this.id_) ? delete a[v][this.id_] : !1;
    };
    return c;
  },
  'es6',
  'es3',
);
$jscomp.MapEntry = function () {};
$jscomp.polyfill(
  'Map',
  function (e) {
    function t() {
      if ($jscomp.ASSUME_NO_NATIVE_MAP || !e || 'function' != typeof e || !e.prototype.entries || 'function' != typeof Object.seal) return !1;
      try {
        var c = Object.seal({x: 4}),
          a = new e($jscomp.makeIterator([[c, 's']]));
        if ('s' != a.get(c) || 1 != a.size || a.get({x: 4}) || a.set({x: 4}, 't') != a || 2 != a.size) return !1;
        var b = a.entries(),
          f = b.next();
        if (f.done || f.value[0] != c || 's' != f.value[1]) return !1;
        f = b.next();
        return f.done || 4 != f.value[0].x || 't' != f.value[1] || !b.next().done ? !1 : !0;
      } catch (h) {
        return !1;
      }
    }
    if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
      if (e && $jscomp.ES6_CONFORMANCE) return e;
    } else if (t()) return e;
    $jscomp.initSymbolIterator();
    var d = new WeakMap(),
      n = function (c) {
        this.data_ = {};
        this.head_ = v();
        this.size = 0;
        if (c) {
          c = $jscomp.makeIterator(c);
          for (var a; !(a = c.next()).done; ) (a = a.value), this.set(a[0], a[1]);
        }
      };
    n.prototype.set = function (c, a) {
      c = 0 === c ? 0 : c;
      var b = q(this, c);
      b.list || (b.list = this.data_[b.id] = []);
      b.entry
        ? (b.entry.value = a)
        : ((b.entry = {next: this.head_, previous: this.head_.previous, head: this.head_, key: c, value: a}),
          b.list.push(b.entry),
          (this.head_.previous.next = b.entry),
          (this.head_.previous = b.entry),
          this.size++);
      return this;
    };
    n.prototype.delete = function (c) {
      c = q(this, c);
      return c.entry && c.list
        ? (c.list.splice(c.index, 1),
          c.list.length || delete this.data_[c.id],
          (c.entry.previous.next = c.entry.next),
          (c.entry.next.previous = c.entry.previous),
          (c.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    n.prototype.clear = function () {
      this.data_ = {};
      this.head_ = this.head_.previous = v();
      this.size = 0;
    };
    n.prototype.has = function (c) {
      return !!q(this, c).entry;
    };
    n.prototype.get = function (c) {
      return (c = q(this, c).entry) && c.value;
    };
    n.prototype.entries = function () {
      return k(this, function (c) {
        return [c.key, c.value];
      });
    };
    n.prototype.keys = function () {
      return k(this, function (c) {
        return c.key;
      });
    };
    n.prototype.values = function () {
      return k(this, function (c) {
        return c.value;
      });
    };
    n.prototype.forEach = function (c, a) {
      for (var b = this.entries(), f; !(f = b.next()).done; ) (f = f.value), c.call(a, f[1], f[0], this);
    };
    n.prototype[Symbol.iterator] = n.prototype.entries;
    var q = function (c, a) {
        var b;
        var f = (b = a) && typeof b;
        'object' == f || 'function' == f ? (d.has(b) ? (b = d.get(b)) : ((f = '' + ++w), d.set(b, f), (b = f))) : (b = 'p_' + b);
        if ((f = c.data_[b]) && $jscomp.owns(c.data_, b))
          for (c = 0; c < f.length; c++) {
            var h = f[c];
            if ((a !== a && h.key !== h.key) || a === h.key) return {id: b, list: f, index: c, entry: h};
          }
        return {id: b, list: f, index: -1, entry: void 0};
      },
      k = function (c, a) {
        var b = c.head_;
        return $jscomp.iteratorPrototype(function () {
          if (b) {
            for (; b.head != c.head_; ) b = b.previous;
            for (; b.next != b.head; ) return (b = b.next), {done: !1, value: a(b)};
            b = null;
          }
          return {done: !0, value: void 0};
        });
      },
      v = function () {
        var c = {};
        return (c.previous = c.next = c.head = c);
      },
      w = 0;
    return n;
  },
  'es6',
  'es3',
);
$jscomp.findInternal = function (e, t, d) {
  e instanceof String && (e = String(e));
  for (var n = e.length, q = 0; q < n; q++) {
    var k = e[q];
    if (t.call(d, k, q, e)) return {i: q, v: k};
  }
  return {i: -1, v: void 0};
};
$jscomp.polyfill(
  'Array.prototype.find',
  function (e) {
    return e
      ? e
      : function (e, d) {
          return $jscomp.findInternal(this, e, d).v;
        };
  },
  'es6',
  'es3',
);
$jscomp.iteratorFromArray = function (e, t) {
  $jscomp.initSymbolIterator();
  e instanceof String && (e += '');
  var d = 0,
    n = {
      next: function () {
        if (d < e.length) {
          var q = d++;
          return {value: t(q, e[q]), done: !1};
        }
        n.next = function () {
          return {done: !0, value: void 0};
        };
        return n.next();
      },
    };
  n[Symbol.iterator] = function () {
    return n;
  };
  return n;
};
$jscomp.polyfill(
  'Array.prototype.keys',
  function (e) {
    return e
      ? e
      : function () {
          return $jscomp.iteratorFromArray(this, function (e) {
            return e;
          });
        };
  },
  'es6',
  'es3',
);
$jscomp.polyfill(
  'Array.prototype.findIndex',
  function (e) {
    return e
      ? e
      : function (e, d) {
          return $jscomp.findInternal(this, e, d).i;
        };
  },
  'es6',
  'es3',
);
(function () {
  function e(c) {
    d = c;
    n = c.fn.dataTable;
  }
  function t(c) {
    k = c;
    v = c.fn.dataTable;
  }
  var d,
    n,
    q = (function () {
      function c(a, b, f, h, l, r) {
        var g = this;
        void 0 === r && (r = null);
        if (!n || !n.versionCheck || !n.versionCheck('1.10.0')) throw Error('SearchPane requires DataTables 1.10 or newer');
        if (!n.select) throw Error('SearchPane requires Select');
        a = new n.Api(a);
        this.classes = d.extend(!0, {}, c.classes);
        this.c = d.extend(!0, {}, c.defaults, b);
        this.customPaneSettings = r;
        this.s = {
          cascadeRegen: !1,
          clearing: !1,
          colOpts: [],
          deselect: !1,
          displayed: !1,
          dt: a,
          dtPane: void 0,
          filteringActive: !1,
          index: f,
          indexes: [],
          lastCascade: !1,
          lastSelect: !1,
          listSet: !1,
          name: void 0,
          redraw: !1,
          rowData: {arrayFilter: [], arrayOriginal: [], arrayTotals: [], bins: {}, binsOriginal: {}, binsTotal: {}, filterMap: new Map(), totalOptions: 0},
          scrollTop: 0,
          searchFunction: void 0,
          selectPresent: !1,
          serverSelect: [],
          serverSelecting: !1,
          showFiltered: !1,
          tableLength: null,
          updating: !1,
        };
        b = a.columns().eq(0).toArray().length;
        this.colExists = this.s.index < b;
        this.c.layout = h;
        b = parseInt(h.split('-')[1], 10);
        this.dom = {
          buttonGroup: d('<div/>').addClass(this.classes.buttonGroup),
          clear: d('<button type="button">&#215;</button>').addClass(this.classes.dull).addClass(this.classes.paneButton).addClass(this.classes.clearButton),
          container: d('<div/>')
            .addClass(this.classes.container)
            .addClass(this.classes.layout + (10 > b ? h : h.split('-')[0] + '-9')),
          countButton: d('<button type="button"></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton),
          dtP: d(
            '<table><thead><tr><th>' +
              (this.colExists ? d(a.column(this.colExists ? this.s.index : 0).header()).text() : this.customPaneSettings.header || 'Custom Pane') +
              '</th><th/></tr></thead></table>',
          ),
          lower: d('<div/>').addClass(this.classes.subRow2).addClass(this.classes.narrowButton),
          nameButton: d('<button type="button"></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton),
          panesContainer: l,
          searchBox: d('<input/>').addClass(this.classes.paneInputButton).addClass(this.classes.search),
          searchButton: d('<button type = "button" class="' + this.classes.searchIcon + '"></button>').addClass(this.classes.paneButton),
          searchCont: d('<div/>').addClass(this.classes.searchCont),
          searchLabelCont: d('<div/>').addClass(this.classes.searchLabelCont),
          topRow: d('<div/>').addClass(this.classes.topRow),
          upper: d('<div/>').addClass(this.classes.subRow1).addClass(this.classes.narrowSearch),
        };
        this.s.displayed = !1;
        a = this.s.dt;
        this.selections = [];
        this.s.colOpts = this.colExists ? this._getOptions() : this._getBonusOptions();
        var x = this.s.colOpts;
        h = d('<button type="button">X</button>').addClass(this.classes.paneButton);
        d(h).text(a.i18n('searchPanes.clearPane', 'X'));
        this.dom.container.addClass(x.className);
        this.dom.container.addClass(null !== this.customPaneSettings && void 0 !== this.customPaneSettings.className ? this.customPaneSettings.className : '');
        this.s.name =
          void 0 !== this.s.colOpts.name
            ? this.s.colOpts.name
            : null !== this.customPaneSettings && void 0 !== this.customPaneSettings.name
            ? this.customPaneSettings.name
            : this.colExists
            ? d(a.column(this.s.index).header()).text()
            : this.customPaneSettings.header || 'Custom Pane';
        d(l).append(this.dom.container);
        var e = a.table(0).node();
        this.s.searchFunction = function (a, b, f, h) {
          if (0 === g.selections.length || a.nTable !== e) return !0;
          a = '';
          g.colExists &&
            ((a = b[g.s.index]),
            'filter' !== x.orthogonal.filter && ((a = g.s.rowData.filterMap.get(f)), a instanceof d.fn.dataTable.Api && (a = a.toArray())));
          return g._search(a, f);
        };
        d.fn.dataTable.ext.search.push(this.s.searchFunction);
        if (this.c.clear)
          d(h).on('click', function () {
            g.dom.container.find(g.classes.search).each(function () {
              d(this).val('');
              d(this).trigger('input');
            });
            g.clearPane();
          });
        a.on('draw.dtsp', function () {
          g._adjustTopRow();
        });
        a.on('buttons-action', function () {
          g._adjustTopRow();
        });
        d(window).on(
          'resize.dtsp',
          n.util.throttle(function () {
            g._adjustTopRow();
          }),
        );
        a.on('column-reorder.dtsp', function (a, b, f) {
          g.s.index = f.mapping[g.s.index];
        });
        return this;
      }
      c.prototype.clearData = function () {
        this.s.rowData = {
          arrayFilter: [],
          arrayOriginal: [],
          arrayTotals: [],
          bins: {},
          binsOriginal: {},
          binsTotal: {},
          filterMap: new Map(),
          totalOptions: 0,
        };
      };
      c.prototype.clearPane = function () {
        this.s.dtPane.rows({selected: !0}).deselect();
        this.updateTable();
        return this;
      };
      c.prototype.destroy = function () {
        d(this.s.dtPane).off('.dtsp');
        d(this.s.dt).off('.dtsp');
        d(this.dom.nameButton).off('.dtsp');
        d(this.dom.countButton).off('.dtsp');
        d(this.dom.clear).off('.dtsp');
        d(this.dom.searchButton).off('.dtsp');
        d(this.dom.container).remove();
        for (var a = d.fn.dataTable.ext.search.indexOf(this.s.searchFunction); -1 !== a; )
          d.fn.dataTable.ext.search.splice(a, 1), (a = d.fn.dataTable.ext.search.indexOf(this.s.searchFunction));
        void 0 !== this.s.dtPane && this.s.dtPane.destroy();
        this.s.listSet = !1;
      };
      c.prototype.getPaneCount = function () {
        return void 0 !== this.s.dtPane ? this.s.dtPane.rows({selected: !0}).data().toArray().length : 0;
      };
      c.prototype.rebuildPane = function (a, b, f, h) {
        void 0 === a && (a = !1);
        void 0 === b && (b = null);
        void 0 === f && (f = null);
        void 0 === h && (h = !1);
        this.clearData();
        var l = [];
        this.s.serverSelect = [];
        var c = null;
        void 0 !== this.s.dtPane &&
          (h &&
            (this.s.dt.page.info().serverSide
              ? (this.s.serverSelect = this.s.dtPane.rows({selected: !0}).data().toArray())
              : (l = this.s.dtPane.rows({selected: !0}).data().toArray())),
          this.s.dtPane.clear().destroy(),
          (c = d(this.dom.container).prev()),
          this.destroy(),
          (this.s.dtPane = void 0),
          d.fn.dataTable.ext.search.push(this.s.searchFunction));
        this.dom.container.removeClass(this.classes.hidden);
        this.s.displayed = !1;
        this._buildPane(this.s.dt.page.info().serverSide ? this.s.serverSelect : l, a, b, f, c);
        return this;
      };
      c.prototype.removePane = function () {
        this.s.displayed = !1;
        d(this.dom.container).hide();
      };
      c.prototype.setCascadeRegen = function (a) {
        this.s.cascadeRegen = a;
      };
      c.prototype.setClear = function (a) {
        this.s.clearing = a;
      };
      c.prototype.updatePane = function (a) {
        void 0 === a && (a = !1);
        this.s.updating = !0;
        this._updateCommon(a);
        this.s.updating = !1;
      };
      c.prototype.updateTable = function () {
        this.selections = this.s.dtPane.rows({selected: !0}).data().toArray();
        this._searchExtras();
        (this.c.cascadePanes || this.c.viewTotal) && this.updatePane();
      };
      c.prototype._setListeners = function () {
        var a = this,
          b = this.s.rowData,
          f;
        this.s.dtPane.on('select.dtsp', function () {
          a.s.dt.page.info().serverSide && !a.s.updating
            ? a.s.serverSelecting ||
              ((a.s.serverSelect = a.s.dtPane.rows({selected: !0}).data().toArray()),
              (a.s.scrollTop = d(a.s.dtPane.table().node()).parent()[0].scrollTop),
              (a.s.selectPresent = !0),
              a.s.dt.draw(!1))
            : (clearTimeout(f),
              d(a.dom.clear).removeClass(a.classes.dull),
              (a.s.selectPresent = !0),
              a.s.updating || a._makeSelection(),
              (a.s.selectPresent = !1));
        });
        this.s.dtPane.on('deselect.dtsp', function () {
          f = setTimeout(function () {
            a.s.dt.page.info().serverSide && !a.s.updating
              ? a.s.serverSelecting || ((a.s.serverSelect = a.s.dtPane.rows({selected: !0}).data().toArray()), (a.s.deselect = !0), a.s.dt.draw(!1))
              : ((a.s.deselect = !0),
                0 === a.s.dtPane.rows({selected: !0}).data().toArray().length && d(a.dom.clear).addClass(a.classes.dull),
                a._makeSelection(),
                (a.s.deselect = !1),
                a.s.dt.state.save());
          }, 50);
        });
        this.s.dt.on('stateSaveParams.dtsp', function (f, l, c) {
          if (d.isEmptyObject(c)) a.s.dtPane.state.clear();
          else {
            f = [];
            if (void 0 !== a.s.dtPane) {
              f = a.s.dtPane
                .rows({selected: !0})
                .data()
                .map(function (a) {
                  return a.filter.toString();
                })
                .toArray();
              var h = d(a.dom.searchBox).val();
              var r = a.s.dtPane.order();
              var e = b.binsOriginal;
              var m = b.arrayOriginal;
            }
            void 0 === c.searchPanes && (c.searchPanes = {});
            void 0 === c.searchPanes.panes && (c.searchPanes.panes = []);
            c.searchPanes.panes.push({arrayFilter: m, bins: e, id: a.s.index, order: r, searchTerm: h, selected: f});
          }
        });
        this.s.dtPane.on('user-select.dtsp', function (a, b, f, g, c) {
          c.stopPropagation();
        });
        this.s.dtPane.on('draw.dtsp', function () {
          a._adjustTopRow();
        });
        d(this.dom.nameButton).on('click.dtsp', function () {
          var b = a.s.dtPane.order()[0][1];
          a.s.dtPane.order([0, 'asc' === b ? 'desc' : 'asc']).draw();
          a.s.dt.state.save();
        });
        d(this.dom.countButton).on('click.dtsp', function () {
          var b = a.s.dtPane.order()[0][1];
          a.s.dtPane.order([1, 'asc' === b ? 'desc' : 'asc']).draw();
          a.s.dt.state.save();
        });
        d(this.dom.clear).on('click.dtsp', function () {
          a.dom.container.find('.' + a.classes.search).each(function () {
            d(this).val('');
            d(this).trigger('input');
          });
          a.clearPane();
        });
        d(this.dom.searchButton).on('click.dtsp', function () {
          d(a.dom.searchBox).focus();
        });
        d(this.dom.searchBox).on('input.dtsp', function () {
          a.s.dtPane.search(d(a.dom.searchBox).val()).draw();
          a.s.dt.state.save();
        });
        this.s.dt.state.save();
        return !0;
      };
      c.prototype._addOption = function (a, b, f, h, l, c) {
        if (Array.isArray(a) || a instanceof n.Api)
          if ((a instanceof n.Api && ((a = a.toArray()), (b = b.toArray())), a.length === b.length))
            for (var g = 0; g < a.length; g++)
              c[a[g]] ? c[a[g]]++ : ((c[a[g]] = 1), l.push({display: b[g], filter: a[g], sort: f[g], type: h[g]})), this.s.rowData.totalOptions++;
          else throw Error('display and filter not the same length');
        else
          'string' === typeof this.s.colOpts.orthogonal
            ? (c[a] ? c[a]++ : ((c[a] = 1), l.push({display: b, filter: a, sort: f, type: h})), this.s.rowData.totalOptions++)
            : l.push({display: b, filter: a, sort: f, type: h});
      };
      c.prototype._addRow = function (a, b, f, h, c, d) {
        for (var g, l = 0, r = this.s.indexes; l < r.length; l++) {
          var e = r[l];
          e.filter === b && (g = e.index);
        }
        void 0 === g && ((g = this.s.indexes.length), this.s.indexes.push({filter: b, index: g}));
        return this.s.dtPane.row.add({
          display: '' !== a ? a : this.c.emptyMessage,
          filter: b,
          index: g,
          shown: f,
          sort: '' !== c ? c : this.c.emptyMessage,
          total: h,
          type: d,
        });
      };
      c.prototype._adjustTopRow = function () {
        var a = this.dom.container.find('.' + this.classes.subRowsContainer),
          b = this.dom.container.find('.dtsp-subRow1'),
          f = this.dom.container.find('.dtsp-subRow2'),
          h = this.dom.container.find('.' + this.classes.topRow);
        (252 > d(a[0]).width() || 252 > d(h[0]).width()) && 0 !== d(a[0]).width()
          ? (d(a[0]).addClass(this.classes.narrow),
            d(b[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch),
            d(f[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton))
          : (d(a[0]).removeClass(this.classes.narrow),
            d(b[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch),
            d(f[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton));
      };
      c.prototype._buildPane = function (a, b, f, h, c) {
        var l = this;
        void 0 === a && (a = []);
        void 0 === b && (b = !1);
        void 0 === f && (f = null);
        void 0 === h && (h = null);
        void 0 === c && (c = null);
        this.selections = [];
        var g = this.s.dt,
          e = g.column(this.colExists ? this.s.index : 0),
          u = this.s.colOpts,
          m = this.s.rowData,
          k = g.i18n('searchPanes.count', '{total}'),
          t = g.i18n('searchPanes.countFiltered', '{shown} ({total})'),
          q = g.state.loaded();
        this.s.listSet && (q = g.state());
        if (this.colExists) {
          var v = -1;
          if (q && q.searchPanes && q.searchPanes.panes)
            for (var p = 0; p < q.searchPanes.panes.length; p++)
              if (q.searchPanes.panes[p].id === this.s.index) {
                v = p;
                break;
              }
          if ((!1 === u.show || (void 0 !== u.show && !0 !== u.show)) && -1 === v)
            return this.dom.container.addClass(this.classes.hidden), (this.s.displayed = !1);
          if (!0 === u.show || -1 !== v) this.s.displayed = !0;
          if (!this.s.dt.page.info().serverSide) {
            if (0 === m.arrayFilter.length)
              if ((this._populatePane(b), (this.s.rowData.totalOptions = 0), this._detailsPane(), q && q.searchPanes && q.searchPanes.panes))
                if (-1 !== v) (m.binsOriginal = q.searchPanes.panes[v].bins), (m.arrayOriginal = q.searchPanes.panes[v].arrayFilter);
                else {
                  this.dom.container.addClass(this.classes.hidden);
                  this.s.displayed = !1;
                  return;
                }
              else (m.arrayOriginal = m.arrayTotals), (m.binsOriginal = m.binsTotal);
            p = Object.keys(m.binsOriginal).length;
            f = this._uniqueRatio(p, g.rows()[0].length);
            if (
              !1 === this.s.displayed &&
              ((void 0 === u.show && null === u.threshold ? f > this.c.threshold : f > u.threshold) || (!0 !== u.show && 1 >= p))
            ) {
              this.dom.container.addClass(this.classes.hidden);
              this.s.displayed = !1;
              return;
            }
            this.c.viewTotal && 0 === m.arrayTotals.length ? ((this.s.rowData.totalOptions = 0), this._detailsPane()) : (m.binsTotal = m.bins);
            this.dom.container.addClass(this.classes.show);
            this.s.displayed = !0;
          } else if (null !== f) {
            if (void 0 !== f.tableLength) (this.s.tableLength = f.tableLength), (this.s.rowData.totalOptions = this.s.tableLength);
            else if (null === this.s.tableLength || g.rows()[0].length > this.s.tableLength)
              (this.s.tableLength = g.rows()[0].length), (this.s.rowData.totalOptions = this.s.tableLength);
            b = g.column(this.s.index).dataSrc();
            if (void 0 !== f[b])
              for (p = 0, f = f[b]; p < f.length; p++)
                (b = f[p]),
                  this.s.rowData.arrayFilter.push({display: b.label, filter: b.value, sort: b.label, type: b.label}),
                  (this.s.rowData.bins[b.value] = this.c.viewTotal || this.c.cascadePanes ? b.count : b.total),
                  (this.s.rowData.binsTotal[b.value] = b.total);
            p = Object.keys(m.binsTotal).length;
            f = this._uniqueRatio(p, this.s.tableLength);
            if (
              !1 === this.s.displayed &&
              ((void 0 === u.show && null === u.threshold ? f > this.c.threshold : f > u.threshold) || (!0 !== u.show && 1 >= p))
            ) {
              this.dom.container.addClass(this.classes.hidden);
              this.s.displayed = !1;
              return;
            }
            this.s.displayed = !0;
          }
        } else this.s.displayed = !0;
        this._displayPane();
        if (!this.s.listSet)
          this.dom.dtP.on('stateLoadParams.dt', function (a, b, f) {
            d.isEmptyObject(g.state.loaded()) &&
              d.each(f, function (a, b) {
                delete f[a];
              });
          });
        null !== c && 0 < d(this.dom.panesContainer).has(c).length
          ? d(this.dom.panesContainer).insertAfter(c)
          : d(this.dom.panesContainer).prepend(this.dom.container);
        p = d.fn.dataTable.ext.errMode;
        d.fn.dataTable.ext.errMode = 'none';
        c = n.Scroller;
        this.s.dtPane = d(this.dom.dtP).DataTable(
          d.extend(
            !0,
            {
              columnDefs: [
                {
                  className: 'dtsp-nameColumn',
                  data: 'display',
                  render: function (a, b, f) {
                    if ('sort' === b) return f.sort;
                    if ('type' === b) return f.type;
                    var c;
                    (l.s.filteringActive || l.s.showFiltered) && l.c.viewTotal ? (c = t.replace(/{total}/, f.total)) : (c = k.replace(/{total}/, f.total));
                    for (c = c.replace(/{shown}/, f.shown); -1 !== c.indexOf('{total}'); ) c = c.replace(/{total}/, f.total);
                    for (; -1 !== c.indexOf('{shown}'); ) c = c.replace(/{shown}/, f.shown);
                    b = '<span class="' + l.classes.pill + '">' + c + '</span>';
                    if (l.c.hideCount || u.hideCount) b = '';
                    return l.c.dataLength
                      ? null !== a && a.length > l.c.dataLength
                        ? '<span title="' + a + '" class="' + l.classes.name + '">' + a.substr(0, l.c.dataLength) + '...</span>' + b
                        : '<span class="' + l.classes.name + '">' + a + '</span>' + b
                      : '<span class="' + l.classes.name + '">' + a + '</span>' + b;
                  },
                  targets: 0,
                  type: void 0 !== g.settings()[0].aoColumns[this.s.index] ? g.settings()[0].aoColumns[this.s.index]._sManualType : null,
                },
                {className: 'dtsp-countColumn ' + this.classes.badgePill, data: 'total', targets: 1, visible: !1},
              ],
              deferRender: !0,
              dom: 't',
              info: !1,
              paging: c ? !0 : !1,
              scrollY: '200px',
              scroller: c ? !0 : !1,
              select: !0,
              stateSave: g.settings()[0].oFeatures.bStateSave ? !0 : !1,
            },
            this.c.dtOpts,
            void 0 !== u ? u.dtOpts : {},
            null !== this.customPaneSettings && void 0 !== this.customPaneSettings.dtOpts ? this.customPaneSettings.dtOpts : {},
          ),
        );
        d(this.dom.dtP).addClass(this.classes.table);
        d(this.dom.searchBox).attr(
          'placeholder',
          void 0 !== u.header ? u.header : this.colExists ? g.settings()[0].aoColumns[this.s.index].sTitle : this.customPaneSettings.header || 'Custom Pane',
        );
        d.fn.dataTable.select.init(this.s.dtPane);
        d.fn.dataTable.ext.errMode = p;
        if (this.colExists) {
          e = (e = e.search()) ? e.substr(1, e.length - 2).split('|') : [];
          var w = 0;
          m.arrayFilter.forEach(function (a) {
            '' === a.filter && w++;
          });
          p = 0;
          for (c = m.arrayFilter.length; p < c; p++) {
            e = !1;
            b = 0;
            for (v = this.s.serverSelect; b < v.length; b++) (f = v[b]), f.filter === m.arrayFilter[p].filter && (e = !0);
            if (
              this.s.dt.page.info().serverSide &&
              (!this.c.cascadePanes || (this.c.cascadePanes && 0 !== m.bins[m.arrayFilter[p].filter]) || (this.c.cascadePanes && null !== h) || e)
            )
              for (
                e = this._addRow(
                  m.arrayFilter[p].display,
                  m.arrayFilter[p].filter,
                  h ? m.binsTotal[m.arrayFilter[p].filter] : m.bins[m.arrayFilter[p].filter],
                  this.c.viewTotal || h ? String(m.binsTotal[m.arrayFilter[p].filter]) : m.bins[m.arrayFilter[p].filter],
                  m.arrayFilter[p].sort,
                  m.arrayFilter[p].type,
                ),
                  void 0 !== u.preSelect && -1 !== u.preSelect.indexOf(m.arrayFilter[p].filter) && e.select(),
                  b = 0,
                  v = this.s.serverSelect;
                b < v.length;
                b++
              )
                (f = v[b]), f.filter === m.arrayFilter[p].filter && ((this.s.serverSelecting = !0), e.select(), (this.s.serverSelecting = !1));
            else
              this.s.dt.page.info().serverSide || !m.arrayFilter[p] || (void 0 === m.bins[m.arrayFilter[p].filter] && this.c.cascadePanes)
                ? this.s.dt.page.info().serverSide || this._addRow(this.c.emptyMessage, w, w, this.c.emptyMessage, this.c.emptyMessage, this.c.emptyMessage)
                : ((e = this._addRow(
                    m.arrayFilter[p].display,
                    m.arrayFilter[p].filter,
                    m.bins[m.arrayFilter[p].filter],
                    m.binsTotal[m.arrayFilter[p].filter],
                    m.arrayFilter[p].sort,
                    m.arrayFilter[p].type,
                  )),
                  void 0 !== u.preSelect && -1 !== u.preSelect.indexOf(m.arrayFilter[p].filter) && e.select());
          }
        }
        (void 0 !== u.options || (null !== this.customPaneSettings && void 0 !== this.customPaneSettings.options)) && this._getComparisonRows();
        n.select.init(this.s.dtPane);
        this.s.dtPane.draw();
        this._adjustTopRow();
        this.s.listSet || (this._setListeners(), (this.s.listSet = !0));
        for (h = 0; h < a.length; h++)
          if (((m = a[h]), void 0 !== m))
            for (p = 0, c = this.s.dtPane.rows().indexes().toArray(); p < c.length; p++)
              (e = c[p]),
                void 0 !== this.s.dtPane.row(e).data() &&
                  m.filter === this.s.dtPane.row(e).data().filter &&
                  (this.s.dt.page.info().serverSide
                    ? ((this.s.serverSelecting = !0), this.s.dtPane.row(e).select(), (this.s.serverSelecting = !1))
                    : this.s.dtPane.row(e).select());
        this.s.dt.draw();
        if (q && q.searchPanes && q.searchPanes.panes)
          for (this.c.cascadePanes || this._reloadSelect(q), a = 0, q = q.searchPanes.panes; a < q.length; a++)
            (h = q[a]),
              h.id === this.s.index && (d(this.dom.searchBox).val(h.searchTerm), d(this.dom.searchBox).trigger('input'), this.s.dtPane.order(h.order).draw());
        this.s.dt.state.save();
        return !0;
      };
      c.prototype._detailsPane = function () {
        var a = this,
          b = this.s.dt;
        this.s.rowData.arrayTotals = [];
        this.s.rowData.binsTotal = {};
        var f = this.s.dt.settings()[0];
        b.rows().every(function (b) {
          a._populatePaneArray(b, a.s.rowData.arrayTotals, f, a.s.rowData.binsTotal);
        });
      };
      c.prototype._displayPane = function () {
        var a = this.dom.container,
          b = this.s.colOpts,
          f = parseInt(this.c.layout.split('-')[1], 10);
        d(this.dom.topRow).empty();
        d(this.dom.dtP).empty();
        d(this.dom.topRow).addClass(this.classes.topRow);
        3 < f && d(this.dom.container).addClass(this.classes.smallGap);
        d(this.dom.topRow).addClass(this.classes.subRowsContainer);
        d(this.dom.upper).appendTo(this.dom.topRow);
        d(this.dom.lower).appendTo(this.dom.topRow);
        d(this.dom.searchCont).appendTo(this.dom.upper);
        d(this.dom.buttonGroup).appendTo(this.dom.lower);
        (!1 === this.c.dtOpts.searching ||
          (void 0 !== b.dtOpts && !1 === b.dtOpts.searching) ||
          !this.c.controls ||
          !b.controls ||
          (null !== this.customPaneSettings &&
            void 0 !== this.customPaneSettings.dtOpts &&
            void 0 !== this.customPaneSettings.dtOpts.searching &&
            !this.customPaneSettings.dtOpts.searching)) &&
          d(this.dom.searchBox).attr('disabled', 'disabled').removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton);
        d(this.dom.searchBox).appendTo(this.dom.searchCont);
        this._searchContSetup();
        this.c.clear && this.c.controls && b.controls && d(this.dom.clear).appendTo(this.dom.buttonGroup);
        this.c.orderable && b.orderable && this.c.controls && b.controls && d(this.dom.nameButton).appendTo(this.dom.buttonGroup);
        !this.c.hideCount &&
          !b.hideCount &&
          this.c.orderable &&
          b.orderable &&
          this.c.controls &&
          b.controls &&
          d(this.dom.countButton).appendTo(this.dom.buttonGroup);
        d(this.dom.topRow).prependTo(this.dom.container);
        d(a).append(this.dom.dtP);
        d(a).show();
      };
      c.prototype._getBonusOptions = function () {
        return d.extend(!0, {}, c.defaults, {orthogonal: {threshold: null}, threshold: null}, void 0 !== this.c ? this.c : {});
      };
      c.prototype._getComparisonRows = function () {
        var a = this.s.colOpts;
        a =
          void 0 !== a.options
            ? a.options
            : null !== this.customPaneSettings && void 0 !== this.customPaneSettings.options
            ? this.customPaneSettings.options
            : void 0;
        if (void 0 !== a) {
          var b = this.s.dt.rows({search: 'applied'}).data().toArray(),
            f = this.s.dt.rows({search: 'applied'}),
            c = this.s.dt.rows().data().toArray(),
            l = this.s.dt.rows(),
            d = [];
          this.s.dtPane.clear();
          for (var g = 0; g < a.length; g++) {
            var e = a[g],
              u = '' !== e.label ? e.label : this.c.emptyMessage,
              m = u,
              k = 'function' === typeof e.value ? e.value : [],
              n = 0,
              q = u,
              t = 0;
            if ('function' === typeof e.value) {
              for (var p = 0; p < b.length; p++) e.value.call(this.s.dt, b[p], f[0][p]) && n++;
              for (p = 0; p < c.length; p++) e.value.call(this.s.dt, c[p], l[0][p]) && t++;
              'function' !== typeof k && k.push(e.filter);
            }
            (!this.c.cascadePanes || (this.c.cascadePanes && 0 !== n)) && d.push(this._addRow(m, k, n, t, q, u));
          }
          return d;
        }
      };
      c.prototype._getOptions = function () {
        return d.extend(!0, {}, c.defaults, {orthogonal: {threshold: null}, threshold: null}, this.s.dt.settings()[0].aoColumns[this.s.index].searchPanes);
      };
      c.prototype._makeSelection = function () {
        this.updateTable();
        this.s.updating = !0;
        this.s.dt.draw();
        this.s.updating = !1;
      };
      c.prototype._populatePane = function (a) {
        void 0 === a && (a = !1);
        var b = this.s.dt;
        this.s.rowData.arrayFilter = [];
        this.s.rowData.bins = {};
        var f = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide) {
          var c = 0;
          for (
            a = ((!this.c.cascadePanes && !this.c.viewTotal) || this.s.clearing || a ? b.rows().indexes() : b.rows({search: 'applied'}).indexes()).toArray();
            c < a.length;
            c++
          )
            this._populatePaneArray(a[c], this.s.rowData.arrayFilter, f);
        }
      };
      c.prototype._populatePaneArray = function (a, b, f, c) {
        void 0 === c && (c = this.s.rowData.bins);
        var h = this.s.colOpts;
        if ('string' === typeof h.orthogonal)
          (f = f.oApi._fnGetCellData(f, a, this.s.index, h.orthogonal)), this.s.rowData.filterMap.set(a, f), this._addOption(f, f, f, f, b, c);
        else {
          var d = f.oApi._fnGetCellData(f, a, this.s.index, h.orthogonal.search);
          this.s.rowData.filterMap.set(a, d);
          c[d]
            ? c[d]++
            : ((c[d] = 1),
              this._addOption(
                d,
                f.oApi._fnGetCellData(f, a, this.s.index, h.orthogonal.display),
                f.oApi._fnGetCellData(f, a, this.s.index, h.orthogonal.sort),
                f.oApi._fnGetCellData(f, a, this.s.index, h.orthogonal.type),
                b,
                c,
              ));
          this.s.rowData.totalOptions++;
        }
      };
      c.prototype._reloadSelect = function (a) {
        if (void 0 !== a) {
          for (var b, f = 0; f < a.searchPanes.panes.length; f++)
            if (a.searchPanes.panes[f].id === this.s.index) {
              b = f;
              break;
            }
          if (void 0 !== b) {
            f = this.s.dtPane;
            var c = f
                .rows({order: 'index'})
                .data()
                .map(function (a) {
                  return null !== a.filter ? a.filter.toString() : null;
                })
                .toArray(),
              l = 0;
            for (a = a.searchPanes.panes[b].selected; l < a.length; l++) {
              b = a[l];
              var d = -1;
              null !== b && (d = c.indexOf(b.toString()));
              -1 < d && (f.row(d).select(), this.s.dt.state.save());
            }
          }
        }
      };
      c.prototype._search = function (a, b) {
        for (var f = this.s.colOpts, c = this.s.dt, l = 0, d = this.selections; l < d.length; l++) {
          var g = d[l];
          if (Array.isArray(a)) {
            if (-1 !== a.indexOf(g.filter)) return !0;
          } else if ('function' === typeof g.filter)
            if (g.filter.call(c, c.row(b).data(), b)) {
              if ('or' === f.combiner) return !0;
            } else {
              if ('and' === f.combiner) return !1;
            }
          else if (a === g.filter) return !0;
        }
        return 'and' === f.combiner ? !0 : !1;
      };
      c.prototype._searchContSetup = function () {
        this.c.controls && this.s.colOpts.controls && d(this.dom.searchButton).appendTo(this.dom.searchLabelCont);
        !1 === this.c.dtOpts.searching ||
          !1 === this.s.colOpts.dtOpts.searching ||
          (null !== this.customPaneSettings &&
            void 0 !== this.customPaneSettings.dtOpts &&
            void 0 !== this.customPaneSettings.dtOpts.searching &&
            !this.customPaneSettings.dtOpts.searching) ||
          d(this.dom.searchLabelCont).appendTo(this.dom.searchCont);
      };
      c.prototype._searchExtras = function () {
        var a = this.s.updating;
        this.s.updating = !0;
        var b = this.s.dtPane.rows({selected: !0}).data().pluck('filter').toArray(),
          f = b.indexOf(this.c.emptyMessage),
          c = d(this.s.dtPane.table().container());
        -1 < f && (b[f] = '');
        0 < b.length ? c.addClass(this.classes.selected) : 0 === b.length && c.removeClass(this.classes.selected);
        this.s.updating = a;
      };
      c.prototype._uniqueRatio = function (a, b) {
        return 0 < b && ((0 < this.s.rowData.totalOptions && !this.s.dt.page.info().serverSide) || (this.s.dt.page.info().serverSide && 0 < this.s.tableLength))
          ? a / this.s.rowData.totalOptions
          : 1;
      };
      c.prototype._updateCommon = function (a) {
        void 0 === a && (a = !1);
        if (
          !(
            this.s.dt.page.info().serverSide ||
            void 0 === this.s.dtPane ||
            (this.s.filteringActive && !this.c.cascadePanes && !0 !== a) ||
            (!0 === this.c.cascadePanes && !0 === this.s.selectPresent) ||
            (this.s.lastSelect && this.s.lastCascade)
          )
        ) {
          var b = this.s.colOpts,
            c = this.s.dtPane.rows({selected: !0}).data().toArray();
          a = d(this.s.dtPane.table().node()).parent()[0].scrollTop;
          var h = this.s.rowData;
          this.s.dtPane.clear();
          if (this.colExists) {
            0 === h.arrayFilter.length
              ? this._populatePane()
              : this.c.cascadePanes && this.s.dt.rows().data().toArray().length === this.s.dt.rows({search: 'applied'}).data().toArray().length
              ? ((h.arrayFilter = h.arrayOriginal), (h.bins = h.binsOriginal))
              : (this.c.viewTotal || this.c.cascadePanes) && this._populatePane();
            this.c.viewTotal ? this._detailsPane() : (h.binsTotal = h.bins);
            this.c.viewTotal && !this.c.cascadePanes && (h.arrayFilter = h.arrayTotals);
            for (
              var l = function (a) {
                  if (a && ((void 0 !== h.bins[a.filter] && 0 !== h.bins[a.filter] && e.c.cascadePanes) || !e.c.cascadePanes || e.s.clearing)) {
                    var b = e._addRow(
                        a.display,
                        a.filter,
                        e.c.viewTotal ? (void 0 !== h.bins[a.filter] ? h.bins[a.filter] : 0) : h.bins[a.filter],
                        e.c.viewTotal ? String(h.binsTotal[a.filter]) : h.bins[a.filter],
                        a.sort,
                        a.type,
                      ),
                      f = c.findIndex(function (b) {
                        return b.filter === a.filter;
                      });
                    -1 !== f && (b.select(), c.splice(f, 1));
                  }
                },
                e = this,
                g = 0,
                k = h.arrayFilter;
              g < k.length;
              g++
            )
              l(k[g]);
          }
          if (
            (void 0 !== b.searchPanes && void 0 !== b.searchPanes.options) ||
            void 0 !== b.options ||
            (null !== this.customPaneSettings && void 0 !== this.customPaneSettings.options)
          )
            for (
              l = function (a) {
                var b = c.findIndex(function (b) {
                  if (b.display === a.data().display) return !0;
                });
                -1 !== b && (a.select(), c.splice(b, 1));
              },
                g = 0,
                k = this._getComparisonRows();
              g < k.length;
              g++
            )
              (b = k[g]), l(b);
          for (l = 0; l < c.length; l++)
            (b = c[l]),
              (b = this._addRow(b.display, b.filter, 0, this.c.viewTotal ? b.total : 0, b.filter, b.filter)),
              (this.s.updating = !0),
              b.select(),
              (this.s.updating = !1);
          this.s.dtPane.draw();
          this.s.dtPane.table().node().parentNode.scrollTop = a;
        }
      };
      c.version = '1.1.0';
      c.classes = {
        buttonGroup: 'dtsp-buttonGroup',
        buttonSub: 'dtsp-buttonSub',
        clear: 'dtsp-clear',
        clearAll: 'dtsp-clearAll',
        clearButton: 'clearButton',
        container: 'dtsp-searchPane',
        countButton: 'dtsp-countButton',
        disabledButton: 'dtsp-disabledButton',
        dull: 'dtsp-dull',
        hidden: 'dtsp-hidden',
        hide: 'dtsp-hide',
        layout: 'dtsp-',
        name: 'dtsp-name',
        nameButton: 'dtsp-nameButton',
        narrow: 'dtsp-narrow',
        paneButton: 'dtsp-paneButton',
        paneInputButton: 'dtsp-paneInputButton',
        pill: 'dtsp-pill',
        search: 'dtsp-search',
        searchCont: 'dtsp-searchCont',
        searchIcon: 'dtsp-searchIcon',
        searchLabelCont: 'dtsp-searchButtonCont',
        selected: 'dtsp-selected',
        smallGap: 'dtsp-smallGap',
        subRow1: 'dtsp-subRow1',
        subRow2: 'dtsp-subRow2',
        subRowsContainer: 'dtsp-subRowsContainer',
        title: 'dtsp-title',
        topRow: 'dtsp-topRow',
      };
      c.defaults = {
        cascadePanes: !1,
        clear: !0,
        combiner: 'or',
        controls: !0,
        container: function (a) {
          return a.table().container();
        },
        dataLength: 30,
        dtOpts: {},
        emptyMessage: '<i>No Data</i>',
        hideCount: !1,
        layout: 'columns-3',
        name: void 0,
        orderable: !0,
        orthogonal: {display: 'display', hideCount: !1, search: 'filter', show: void 0, sort: 'sort', threshold: 0.6, type: 'type'},
        preSelect: [],
        threshold: 0.6,
        viewTotal: !1,
      };
      return c;
    })(),
    k,
    v,
    w = (function () {
      function c(a, b, f) {
        var h = this;
        void 0 === f && (f = !1);
        this.regenerating = !1;
        if (!v || !v.versionCheck || !v.versionCheck('1.10.0')) throw Error('SearchPane requires DataTables 1.10 or newer');
        if (!v.select) throw Error('SearchPane requires Select');
        var l = new v.Api(a);
        this.classes = k.extend(!0, {}, c.classes);
        this.c = k.extend(!0, {}, c.defaults, b);
        this.dom = {
          clearAll: k('<button type="button">Clear All</button>').addClass(this.classes.clearAll),
          container: k('<div/>').addClass(this.classes.panes).text(l.i18n('searchPanes.loadMessage', 'Loading Search Panes...')),
          emptyMessage: k('<div/>').addClass(this.classes.emptyMessage),
          options: k('<div/>').addClass(this.classes.container),
          panes: k('<div/>').addClass(this.classes.container),
          title: k('<div/>').addClass(this.classes.title),
          titleRow: k('<div/>').addClass(this.classes.titleRow),
          wrapper: k('<div/>'),
        };
        this.s = {colOpts: [], dt: l, filterPane: -1, panes: [], selectionList: [], serverData: {}, updating: !1};
        if (void 0 === l.settings()[0]._searchPanes)
          if (
            (l.on('xhr', function (a, b, c, f) {
              c.searchPanes &&
                c.searchPanes.options &&
                ((h.s.serverData = c.searchPanes.options),
                (h.s.serverData.tableLength = c.recordsTotal),
                (h.c.viewTotal || h.c.cascadePanes) && h._serverTotals());
            }),
            (l.settings()[0]._searchPanes = this),
            this.dom.clearAll.text(l.i18n('searchPanes.clearMessage', 'Clear All')),
            this._getState(),
            this.s.dt.settings()[0]._bInitComplete || f)
          )
            this._paneDeclare(l, a, b);
          else
            l.one('preInit.dt', function (c) {
              h._paneDeclare(l, a, b);
            });
      }
      c.prototype.clearSelections = function () {
        this.dom.container.find(this.classes.search).each(function () {
          k(this).val('');
          k(this).trigger('input');
        });
        for (var a = [], b = 0, c = this.s.panes; b < c.length; b++) {
          var h = c[b];
          void 0 !== h.s.dtPane && a.push(h.clearPane());
        }
        this.s.dt.draw();
        return a;
      };
      c.prototype.getNode = function () {
        return this.dom.container;
      };
      c.prototype.rebuild = function (a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = !1);
        k(this.dom.emptyMessage).remove();
        var c = [];
        k(this.dom.panes).empty();
        for (var h = 0, l = this.s.panes; h < l.length; h++) {
          var d = l[h];
          if (!1 === a || d.s.index === a)
            d.clearData(),
              c.push(
                d.rebuildPane(
                  void 0 !== this.s.selectionList[this.s.selectionList.length - 1]
                    ? d.s.index === this.s.selectionList[this.s.selectionList.length - 1].index
                    : !1,
                  this.s.dt.page.info().serverSide ? this.s.serverData : void 0,
                  null,
                  b,
                ),
              );
          k(this.dom.panes).append(d.dom.container);
        }
        this.c.cascadePanes || this.c.viewTotal ? this.redrawPanes(!0) : this._updateSelection();
        this._updateFilterCount();
        this._attachPaneContainer();
        this.s.dt.draw();
        return 1 === c.length ? c[0] : c;
      };
      c.prototype.redrawPanes = function (a) {
        void 0 === a && (a = !1);
        var b = this.s.dt;
        if (!this.s.updating && !this.s.dt.page.info().serverSide) {
          var c = !0,
            h = this.s.filterPane;
          if (b.rows({search: 'applied'}).data().toArray().length === b.rows().data().toArray().length) c = !1;
          else if (this.c.viewTotal)
            for (var d = 0, e = this.s.panes; d < e.length; d++) {
              var g = e[d];
              if (void 0 !== g.s.dtPane) {
                var k = g.s.dtPane.rows({selected: !0}).data().toArray().length;
                if (0 === k)
                  for (var u = 0, m = this.s.selectionList; u < m.length; u++) {
                    var n = m[u];
                    n.index === g.s.index && 0 !== n.rows.length && (k = n.rows.length);
                  }
                0 < k && -1 === h ? (h = g.s.index) : 0 < k && (h = null);
              }
            }
          e = void 0;
          d = [];
          if (this.regenerating) {
            e = -1;
            1 === d.length && (e = d[0].index);
            a = 0;
            for (d = this.s.panes; a < d.length; a++)
              if (((g = d[a]), void 0 !== g.s.dtPane)) {
                b = !0;
                g.s.filteringActive = !0;
                if ((-1 !== h && null !== h && h === g.s.index) || !1 === c || g.s.index === e) (b = !1), (g.s.filteringActive = !1);
                g.updatePane(b ? c : b);
              }
            this._updateFilterCount();
          } else {
            k = 0;
            for (u = this.s.panes; k < u.length; k++)
              if (((g = u[k]), g.s.selectPresent)) {
                this.s.selectionList.push({index: g.s.index, rows: g.s.dtPane.rows({selected: !0}).data().toArray(), protect: !1});
                b.state.save();
                break;
              } else
                g.s.deselect &&
                  ((e = g.s.index),
                  (m = g.s.dtPane.rows({selected: !0}).data().toArray()),
                  0 < m.length && this.s.selectionList.push({index: g.s.index, rows: m, protect: !0}));
            if (0 < this.s.selectionList.length)
              for (b = this.s.selectionList[this.s.selectionList.length - 1].index, k = 0, u = this.s.panes; k < u.length; k++)
                (g = u[k]), (g.s.lastSelect = g.s.index === b);
            for (g = 0; g < this.s.selectionList.length; g++)
              if (this.s.selectionList[g].index !== e || !0 === this.s.selectionList[g].protect) {
                b = !1;
                for (k = g + 1; k < this.s.selectionList.length; k++) this.s.selectionList[k].index === this.s.selectionList[g].index && (b = !0);
                b || (d.push(this.s.selectionList[g]), (this.s.selectionList[g].protect = !1));
              }
            e = -1;
            1 === d.length && (e = d[0].index);
            k = 0;
            for (u = this.s.panes; k < u.length; k++)
              if (((g = u[k]), void 0 !== g.s.dtPane)) {
                b = !0;
                g.s.filteringActive = !0;
                if ((-1 !== h && null !== h && h === g.s.index) || !1 === c || g.s.index === e) (b = !1), (g.s.filteringActive = !1);
                g.updatePane(b ? c : !1);
              }
            this._updateFilterCount();
            if (0 < d.length && (d.length < this.s.selectionList.length || a))
              for (this._cascadeRegen(d), b = d[d.length - 1].index, h = 0, a = this.s.panes; h < a.length; h++) (g = a[h]), (g.s.lastSelect = g.s.index === b);
            else if (0 < d.length)
              for (g = 0, a = this.s.panes; g < a.length; g++)
                if (((d = a[g]), void 0 !== d.s.dtPane)) {
                  b = !0;
                  d.s.filteringActive = !0;
                  if ((-1 !== h && null !== h && h === d.s.index) || !1 === c) (b = !1), (d.s.filteringActive = !1);
                  d.updatePane(b ? c : b);
                }
          }
          c || (this.s.selectionList = []);
        }
      };
      c.prototype._attach = function () {
        var a = this;
        k(this.dom.container).removeClass(this.classes.hide);
        k(this.dom.titleRow).removeClass(this.classes.hide);
        k(this.dom.titleRow).remove();
        k(this.dom.title).appendTo(this.dom.titleRow);
        this.c.clear &&
          (k(this.dom.clearAll).appendTo(this.dom.titleRow),
          k(this.dom.clearAll).on('click.dtsps', function () {
            a.clearSelections();
          }));
        k(this.dom.titleRow).appendTo(this.dom.container);
        for (var b = 0, c = this.s.panes; b < c.length; b++) k(c[b].dom.container).appendTo(this.dom.panes);
        k(this.dom.panes).appendTo(this.dom.container);
        0 === k('div.' + this.classes.container).length && k(this.dom.container).prependTo(this.s.dt);
        return this.dom.container;
      };
      c.prototype._attachExtras = function () {
        k(this.dom.container).removeClass(this.classes.hide);
        k(this.dom.titleRow).removeClass(this.classes.hide);
        k(this.dom.titleRow).remove();
        k(this.dom.title).appendTo(this.dom.titleRow);
        this.c.clear && k(this.dom.clearAll).appendTo(this.dom.titleRow);
        k(this.dom.titleRow).appendTo(this.dom.container);
        return this.dom.container;
      };
      c.prototype._attachMessage = function () {
        try {
          var a = this.s.dt.i18n('searchPanes.emptyPanes', 'No SearchPanes');
        } catch (b) {
          a = null;
        }
        if (null === a) k(this.dom.container).addClass(this.classes.hide), k(this.dom.titleRow).removeClass(this.classes.hide);
        else
          return (
            k(this.dom.container).removeClass(this.classes.hide),
            k(this.dom.titleRow).addClass(this.classes.hide),
            k(this.dom.emptyMessage).text(a),
            this.dom.emptyMessage.appendTo(this.dom.container),
            this.dom.container
          );
      };
      c.prototype._attachPaneContainer = function () {
        for (var a = 0, b = this.s.panes; a < b.length; a++) if (!0 === b[a].s.displayed) return this._attach();
        return this._attachMessage();
      };
      c.prototype._cascadeRegen = function (a) {
        this.regenerating = !0;
        var b = -1;
        1 === a.length && (b = a[0].index);
        for (var c = 0, d = this.s.panes; c < d.length; c++) {
          var e = d[c];
          e.setCascadeRegen(!0);
          e.setClear(!0);
          ((void 0 !== e.s.dtPane && e.s.index === b) || void 0 !== e.s.dtPane) && e.clearPane();
          e.setClear(!1);
        }
        this._makeCascadeSelections(a);
        this.s.selectionList = a;
        a = 0;
        for (b = this.s.panes; a < b.length; a++) (e = b[a]), e.setCascadeRegen(!1);
        this.regenerating = !1;
      };
      c.prototype._checkMessage = function () {
        for (var a = 0, b = this.s.panes; a < b.length; a++) if (!0 === b[a].s.displayed) return;
        return this._attachMessage();
      };
      c.prototype._getState = function () {
        var a = this.s.dt.state.loaded();
        a && a.searchPanes && void 0 !== a.searchPanes.selectionList && (this.s.selectionList = a.searchPanes.selectionList);
      };
      c.prototype._makeCascadeSelections = function (a) {
        for (var b = 0; b < a.length; b++)
          for (
            var c = function (c) {
                if (c.s.index === a[b].index && void 0 !== c.s.dtPane) {
                  b === a.length - 1 && (c.s.lastCascade = !0);
                  0 < c.s.dtPane.rows({selected: !0}).data().toArray().length && void 0 !== c.s.dtPane && (c.setClear(!0), c.clearPane(), c.setClear(!1));
                  for (
                    var f = function (a) {
                        c.s.dtPane.rows().every(function (b) {
                          void 0 !== c.s.dtPane.row(b).data() && void 0 !== a && c.s.dtPane.row(b).data().filter === a.filter && c.s.dtPane.row(b).select();
                        });
                      },
                      h = 0,
                      e = a[b].rows;
                    h < e.length;
                    h++
                  )
                    f(e[h]);
                  d._updateFilterCount();
                  c.s.lastCascade = !1;
                }
              },
              d = this,
              e = 0,
              k = this.s.panes;
            e < k.length;
            e++
          )
            c(k[e]);
        this.s.dt.state.save();
      };
      c.prototype._paneDeclare = function (a, b, c) {
        var f = this;
        a.columns(0 < this.c.columns.length ? this.c.columns : void 0)
          .eq(0)
          .each(function (a) {
            f.s.panes.push(new q(b, c, a, f.c.layout, f.dom.panes));
          });
        for (var d = a.columns().eq(0).toArray().length, e = this.c.panes.length, g = 0; g < e; g++)
          this.s.panes.push(new q(b, c, d + g, this.c.layout, this.dom.panes, this.c.panes[g]));
        if (0 < this.c.order.length)
          for (
            d = this.c.order.map(function (a, b, c) {
              return f._findPane(a);
            }),
              this.dom.panes.empty(),
              this.s.panes = d,
              d = 0,
              e = this.s.panes;
            d < e.length;
            d++
          )
            this.dom.panes.append(e[d].dom.container);
        this.s.dt.settings()[0]._bInitComplete
          ? this._paneStartup(a)
          : this.s.dt.settings()[0].aoInitComplete.push({
              fn: function () {
                f._paneStartup(a);
              },
            });
      };
      c.prototype._findPane = function (a) {
        for (var b = 0, c = this.s.panes; b < c.length; b++) {
          var d = c[b];
          if (a === d.s.name) return d;
        }
      };
      c.prototype._paneStartup = function (a) {
        var b = this;
        500 >= this.s.dt.page.info().recordsTotal
          ? this._startup(a)
          : setTimeout(function () {
              b._startup(a);
            }, 100);
      };
      c.prototype._serverTotals = function () {
        for (var a = !1, b = !1, c = this.s.dt, d = 0, e = this.s.panes; d < e.length; d++) {
          var r = e[d];
          if (r.s.selectPresent) {
            this.s.selectionList.push({index: r.s.index, rows: r.s.dtPane.rows({selected: !0}).data().toArray(), protect: !1});
            c.state.save();
            r.s.selectPresent = !1;
            a = !0;
            break;
          } else
            r.s.deselect &&
              ((b = r.s.dtPane.rows({selected: !0}).data().toArray()),
              0 < b.length && this.s.selectionList.push({index: r.s.index, rows: b, protect: !0}),
              (b = a = !0));
        }
        if (a) {
          r = [];
          for (c = 0; c < this.s.selectionList.length; c++) {
            d = !1;
            for (e = c + 1; e < this.s.selectionList.length; e++) this.s.selectionList[e].index === this.s.selectionList[c].index && (d = !0);
            !d && 0 < this.s.panes[this.s.selectionList[c].index].s.dtPane.rows({selected: !0}).data().toArray().length && r.push(this.s.selectionList[c]);
          }
          this.s.selectionList = r;
        } else this.s.selectionList = [];
        c = -1;
        if (b && 1 === this.s.selectionList.length)
          for (b = 0, d = this.s.panes; b < d.length; b++)
            (r = d[b]),
              (r.s.lastSelect = !1),
              (r.s.deselect = !1),
              void 0 !== r.s.dtPane && 0 < r.s.dtPane.rows({selected: !0}).data().toArray().length && (c = r.s.index);
        else if (0 < this.s.selectionList.length)
          for (b = this.s.selectionList[this.s.selectionList.length - 1].index, d = 0, e = this.s.panes; d < e.length; d++)
            (r = e[d]), (r.s.lastSelect = r.s.index === b), (r.s.deselect = !1);
        else if (0 === this.s.selectionList.length) for (b = 0, d = this.s.panes; b < d.length; b++) (r = d[b]), (r.s.lastSelect = !1), (r.s.deselect = !1);
        k(this.dom.panes).empty();
        b = 0;
        for (d = this.s.panes; b < d.length; b++)
          (r = d[b]),
            r.s.lastSelect
              ? r._setListeners()
              : r.rebuildPane(void 0, this.s.dt.page.info().serverSide ? this.s.serverData : void 0, r.s.index === c ? !0 : null, !0),
            k(this.dom.panes).append(r.dom.container),
            void 0 !== r.s.dtPane && ((k(r.s.dtPane.table().node()).parent()[0].scrollTop = r.s.scrollTop), k.fn.dataTable.select.init(r.s.dtPane));
      };
      c.prototype._startup = function (a) {
        var b = this;
        k(this.dom.container).text('');
        this._attachExtras();
        k(this.dom.container).append(this.dom.panes);
        k(this.dom.panes).empty();
        if (this.c.viewTotal && !this.c.cascadePanes) {
          var c = this.s.dt.state.loaded();
          if (null !== c && void 0 !== c && void 0 !== c.searchPanes && void 0 !== c.searchPanes.panes) {
            for (var d = !1, e = 0, r = c.searchPanes.panes; e < r.length; e++)
              if (((c = r[e]), 0 < c.selected.length)) {
                d = !0;
                break;
              }
            if (d) for (d = 0, e = this.s.panes; d < e.length; d++) (c = e[d]), (c.s.showFiltered = !0);
          }
        }
        d = 0;
        for (e = this.s.panes; d < e.length; d++)
          (c = e[d]), c.rebuildPane(void 0, this.s.dt.page.info().serverSide ? this.s.serverData : void 0), k(this.dom.panes).append(c.dom.container);
        if (this.c.viewTotal && !this.c.cascadePanes) for (d = 0, e = this.s.panes; d < e.length; d++) (c = e[d]), c.updatePane();
        this._updateFilterCount();
        this._checkMessage();
        a.on('draw.dtsps', function () {
          b._updateFilterCount();
          (!b.c.cascadePanes && !b.c.viewTotal) || b.s.dt.page.info().serverSide ? b._updateSelection() : b.redrawPanes();
          b.s.filterPane = -1;
        });
        this.s.dt.on('stateSaveParams.dtsp', function (a, c, d) {
          void 0 === d.searchPanes && (d.searchPanes = {});
          d.searchPanes.selectionList = b.s.selectionList;
        });
        this.s.dt.on('xhr', function () {
          var a = !1;
          if (!b.s.dt.page.info().serverSide)
            b.s.dt.one('draw', function () {
              if (!a) {
                a = !0;
                k(b.dom.panes).empty();
                for (var c = 0, d = b.s.panes; c < d.length; c++) {
                  var e = d[c];
                  e.clearData();
                  e.rebuildPane(
                    void 0 !== b.s.selectionList[b.s.selectionList.length - 1] ? e.s.index === b.s.selectionList[b.s.selectionList.length - 1].index : !1,
                    void 0,
                    void 0,
                    !0,
                  );
                  k(b.dom.panes).append(e.dom.container);
                }
                b.c.cascadePanes || b.c.viewTotal ? b.redrawPanes(b.c.cascadePanes) : b._updateSelection();
                b._checkMessage();
              }
            });
        });
        if (void 0 !== this.s.selectionList && 0 < this.s.selectionList.length)
          for (d = this.s.selectionList[this.s.selectionList.length - 1].index, e = 0, r = this.s.panes; e < r.length; e++)
            (c = r[e]), (c.s.lastSelect = c.s.index === d);
        0 < this.s.selectionList.length && this.c.cascadePanes && this._cascadeRegen(this.s.selectionList);
        a.columns(0 < this.c.columns.length ? this.c.columns : void 0)
          .eq(0)
          .each(function (a) {
            if (void 0 !== b.s.panes[a] && void 0 !== b.s.panes[a].s.dtPane && void 0 !== b.s.panes[a].s.colOpts.preSelect)
              for (var c = b.s.panes[a].s.dtPane.rows().data().toArray().length, d = 0; d < c; d++)
                -1 !== b.s.panes[a].s.colOpts.preSelect.indexOf(b.s.panes[a].s.dtPane.cell(d, 0).data()) &&
                  (b.s.panes[a].s.dtPane.row(d).select(), b.s.panes[a].updateTable());
          });
        this._updateFilterCount();
        a.on('destroy.dtsps', function () {
          for (var c = 0, d = b.s.panes; c < d.length; c++) d[c].destroy();
          a.off('.dtsps');
          k(b.dom.clearAll).off('.dtsps');
          k(b.dom.container).remove();
          b.clearSelections();
        });
        if (this.c.clear)
          k(this.dom.clearAll).on('click.dtsps', function () {
            b.clearSelections();
          });
        if (this.s.dt.page.info().serverSide)
          a.on('preXhr.dt', function (a, c, d) {
            void 0 === d.searchPanes && (d.searchPanes = {});
            a = 0;
            for (c = b.s.panes; a < c.length; a++) {
              var e = c[a],
                f = b.s.dt.column(e.s.index).dataSrc();
              void 0 === d.searchPanes[f] && (d.searchPanes[f] = {});
              if (void 0 !== e.s.dtPane) {
                e = e.s.dtPane.rows({selected: !0}).data().toArray();
                for (var g = 0; g < e.length; g++) d.searchPanes[f][g] = e[g].display;
              }
            }
            b.c.viewTotal && b._prepViewTotal();
          });
        else
          a.on('preXhr.dt', function (a, c, d) {
            a = 0;
            for (c = b.s.panes; a < c.length; a++) c[a].clearData();
          });
        a.settings()[0]._searchPanes = this;
      };
      c.prototype._prepViewTotal = function () {
        for (var a = this.s.filterPane, b = !1, c = 0, d = this.s.panes; c < d.length; c++) {
          var e = d[c];
          if (void 0 !== e.s.dtPane) {
            var k = e.s.dtPane.rows({selected: !0}).data().toArray().length;
            0 < k && -1 === a ? ((a = e.s.index), (b = !0)) : 0 < k && (a = null);
          }
        }
        c = 0;
        for (d = this.s.panes; c < d.length; c++)
          if (((e = d[c]), void 0 !== e.s.dtPane && ((e.s.filteringActive = !0), (-1 !== a && null !== a && a === e.s.index) || !1 === b)))
            e.s.filteringActive = !1;
      };
      c.prototype._updateFilterCount = function () {
        for (var a = 0, b = 0, c = this.s.panes; b < c.length; b++) {
          var d = c[b];
          void 0 !== d.s.dtPane && (a += d.getPaneCount());
        }
        b = this.s.dt.i18n('searchPanes.title', 'Filters Active - %d', a);
        k(this.dom.title).text(b);
        void 0 !== this.c.filterChanged && 'function' === typeof this.c.filterChanged && this.c.filterChanged(a);
      };
      c.prototype._updateSelection = function () {
        this.s.selectionList = [];
        for (var a = 0, b = this.s.panes; a < b.length; a++) {
          var c = b[a];
          void 0 !== c.s.dtPane && this.s.selectionList.push({index: c.s.index, rows: c.s.dtPane.rows({selected: !0}).data().toArray(), protect: !1});
        }
        this.s.dt.state.save();
      };
      c.version = '1.1.1';
      c.classes = {
        clear: 'dtsp-clear',
        clearAll: 'dtsp-clearAll',
        container: 'dtsp-searchPanes',
        emptyMessage: 'dtsp-emptyMessage',
        hide: 'dtsp-hidden',
        panes: 'dtsp-panesContainer',
        search: 'dtsp-search',
        title: 'dtsp-title',
        titleRow: 'dtsp-titleRow',
      };
      c.defaults = {
        cascadePanes: !1,
        clear: !0,
        container: function (a) {
          return a.table().container();
        },
        columns: [],
        filterChanged: void 0,
        layout: 'columns-3',
        order: [],
        panes: [],
        viewTotal: !1,
      };
      return c;
    })();
  (function (c) {
    'function' === typeof define && define.amd
      ? define(['jquery', 'datatables.net'], function (a) {
          return c(a, window, document);
        })
      : 'object' === typeof exports
      ? (module.exports = function (a, b) {
          a || (a = window);
          (b && b.fn.dataTable) || (b = require('datatables.net')(a, b).$);
          return c(b, a, a.document);
        })
      : c(window.jQuery, window, document);
  })(function (c, a, b) {
    function d(a, b) {
      void 0 === b && (b = !1);
      a = new h.Api(a);
      var c = a.init().searchPanes || h.defaults.searchPanes;
      return new w(a, c, b).getNode();
    }
    e(c);
    t(c);
    var h = c.fn.dataTable;
    c.fn.dataTable.SearchPanes = w;
    c.fn.DataTable.SearchPanes = w;
    c.fn.dataTable.SearchPane = q;
    c.fn.DataTable.SearchPane = q;
    h.Api.register('searchPanes.rebuild()', function () {
      return this.iterator('table', function () {
        this.searchPanes && this.searchPanes.rebuild();
      });
    });
    h.Api.register('column().paneOptions()', function (a) {
      return this.iterator('column', function (b) {
        b = this.aoColumns[b];
        b.searchPanes || (b.searchPanes = {});
        b.searchPanes.values = a;
        this.searchPanes && this.searchPanes.rebuild();
      });
    });
    a = c.fn.dataTable.Api.register;
    a('searchPanes()', function () {
      return this;
    });
    a('searchPanes.clearSelections()', function () {
      this.context[0]._searchPanes.clearSelections();
      return this;
    });
    a('searchPanes.rebuildPane()', function (a, b) {
      this.context[0]._searchPanes.rebuild(a, b);
      return this;
    });
    a('searchPanes.container()', function () {
      return this.context[0]._searchPanes.getNode();
    });
    c.fn.dataTable.ext.buttons.searchPanesClear = {
      text: 'Clear Panes',
      action: function (a, b, c, d) {
        b.searchPanes.clearSelections();
      },
    };
    c.fn.dataTable.ext.buttons.searchPanes = {
      action: function (a, b, c, d) {
        a.stopPropagation();
        this.popover(d._panes.getNode(), {align: 'dt-container'});
      },
      config: {},
      init: function (a, b, d) {
        var e = new c.fn.dataTable.SearchPanes(
            a,
            c.extend(
              {
                filterChanged: function (c) {
                  a.button(b).text(a.i18n('searchPanes.collapse', {0: 'SearchPanes', _: 'SearchPanes (%d)'}, c));
                },
              },
              d.config,
            ),
          ),
          f = a.i18n('searchPanes.collapse', 'SearchPanes', 0);
        a.button(b).text(f);
        d._panes = e;
      },
      text: 'Search Panes',
    };
    c(b).on('preInit.dt.dtsp', function (a, b, c) {
      'dt' === a.namespace && (b.oInit.searchPanes || h.defaults.searchPanes) && (b._searchPanes || d(b, !0));
    });
    h.ext.feature.push({cFeature: 'P', fnInit: d});
    h.ext.features && h.ext.features.register('searchPanes', d);
  });
})();

(function (c) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net-bs4', 'datatables.net-searchPanes'], function (a) {
        return c(a, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (a, b) {
        a || (a = window);
        (b && b.fn.dataTable) || (b = require('datatables.net-bs4')(a, b).$);
        b.fn.dataTable.searchPanes || require('datatables.net-searchPanes')(a, b);
        return c(b, a, a.document);
      })
    : c(jQuery, window, document);
})(function (c, a, b) {
  a = c.fn.dataTable;
  c.extend(!0, a.SearchPane.classes, {
    buttonGroup: 'btn-group col justify-content-end',
    disabledButton: 'disabled',
    dull: '',
    narrow: 'col',
    pane: {container: 'table'},
    paneButton: 'btn btn-light',
    pill: 'pill badge badge-pill badge-secondary',
    search: 'col-sm form-control search',
    searchCont: 'input-group col-sm',
    searchLabelCont: 'input-group-append',
    subRow1: 'dtsp-subRow1',
    subRow2: 'dtsp-subRow2',
    table: 'table table-sm table-borderless',
    topRow: 'dtsp-topRow row',
  });
  c.extend(!0, a.SearchPanes.classes, {
    clearAll: 'dtsp-clearAll col-auto btn btn-light',
    container: 'dtsp-searchPanes',
    panes: 'dtsp-panes dtsp-container',
    title: 'dtsp-title col',
    titleRow: 'dtsp-titleRow row',
  });
  return a.searchPanes;
});

/*!
   Copyright 2015-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net/extensions/select
 Select for DataTables 1.3.1
 2015-2019 SpryMedia Ltd - datatables.net/license/mit
*/
(function (f) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net'], function (k) {
        return f(k, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (k, p) {
        k || (k = window);
        (p && p.fn.dataTable) || (p = require('datatables.net')(k, p).$);
        return f(p, k, k.document);
      })
    : f(jQuery, window, document);
})(function (f, k, p, h) {
  function z(a, b, c) {
    var d = function (c, b) {
      if (c > b) {
        var d = b;
        b = c;
        c = d;
      }
      var e = !1;
      return a
        .columns(':visible')
        .indexes()
        .filter(function (a) {
          a === c && (e = !0);
          return a === b ? ((e = !1), !0) : e;
        });
    };
    var e = function (c, b) {
      var d = a.rows({search: 'applied'}).indexes();
      if (d.indexOf(c) > d.indexOf(b)) {
        var e = b;
        b = c;
        c = e;
      }
      var f = !1;
      return d.filter(function (a) {
        a === c && (f = !0);
        return a === b ? ((f = !1), !0) : f;
      });
    };
    a.cells({selected: !0}).any() || c ? ((d = d(c.column, b.column)), (c = e(c.row, b.row))) : ((d = d(0, b.column)), (c = e(0, b.row)));
    c = a.cells(c, d).flatten();
    a.cells(b, {selected: !0}).any() ? a.cells(c).deselect() : a.cells(c).select();
  }
  function v(a) {
    var b = a.settings()[0]._select.selector;
    f(a.table().container()).off('mousedown.dtSelect', b).off('mouseup.dtSelect', b).off('click.dtSelect', b);
    f('body').off(
      'click.dtSelect' +
        a
          .table()
          .node()
          .id.replace(/[^a-zA-Z0-9\-_]/g, '-'),
    );
  }
  function A(a) {
    var b = f(a.table().container()),
      c = a.settings()[0],
      d = c._select.selector,
      e;
    b.on('mousedown.dtSelect', d, function (a) {
      if (a.shiftKey || a.metaKey || a.ctrlKey)
        b.css('-moz-user-select', 'none').one('selectstart.dtSelect', d, function () {
          return !1;
        });
      k.getSelection && (e = k.getSelection());
    })
      .on('mouseup.dtSelect', d, function () {
        b.css('-moz-user-select', '');
      })
      .on('click.dtSelect', d, function (c) {
        var b = a.select.items();
        if (e) {
          var d = k.getSelection();
          if ((!d.anchorNode || f(d.anchorNode).closest('table')[0] === a.table().node()) && d !== e) return;
        }
        d = a.settings()[0];
        var l = f.trim(a.settings()[0].oClasses.sWrapper).replace(/ +/g, '.');
        if (f(c.target).closest('div.' + l)[0] == a.table().container() && ((l = a.cell(f(c.target).closest('td, th'))), l.any())) {
          var g = f.Event('user-select.dt');
          m(a, g, [b, l, c]);
          g.isDefaultPrevented() ||
            ((g = l.index()),
            'row' === b
              ? ((b = g.row), w(c, a, d, 'row', b))
              : 'column' === b
              ? ((b = l.index().column), w(c, a, d, 'column', b))
              : 'cell' === b && ((b = l.index()), w(c, a, d, 'cell', b)),
            (d._select_lastCell = g));
        }
      });
    f('body').on(
      'click.dtSelect' +
        a
          .table()
          .node()
          .id.replace(/[^a-zA-Z0-9\-_]/g, '-'),
      function (b) {
        !c._select.blurable ||
          f(b.target).parents().filter(a.table().container()).length ||
          0 === f(b.target).parents('html').length ||
          f(b.target).parents('div.DTE').length ||
          r(c, !0);
      },
    );
  }
  function m(a, b, c, d) {
    if (!d || a.flatten().length) 'string' === typeof b && (b += '.dt'), c.unshift(a), f(a.table().node()).trigger(b, c);
  }
  function B(a) {
    var b = a.settings()[0];
    if (b._select.info && b.aanFeatures.i && 'api' !== a.select.style()) {
      var c = a.rows({selected: !0}).flatten().length,
        d = a.columns({selected: !0}).flatten().length,
        e = a.cells({selected: !0}).flatten().length,
        l = function (b, c, d) {
          b.append(f('<span class="select-item"/>').append(a.i18n('select.' + c + 's', {_: '%d ' + c + 's selected', 0: '', 1: '1 ' + c + ' selected'}, d)));
        };
      f.each(b.aanFeatures.i, function (b, a) {
        a = f(a);
        b = f('<span class="select-info"/>');
        l(b, 'row', c);
        l(b, 'column', d);
        l(b, 'cell', e);
        var g = a.children('span.select-info');
        g.length && g.remove();
        '' !== b.text() && a.append(b);
      });
    }
  }
  function D(a) {
    var b = new g.Api(a);
    a.aoRowCreatedCallback.push({
      fn: function (b, d, e) {
        d = a.aoData[e];
        d._select_selected && f(b).addClass(a._select.className);
        b = 0;
        for (e = a.aoColumns.length; b < e; b++)
          (a.aoColumns[b]._select_selected || (d._selected_cells && d._selected_cells[b])) && f(d.anCells[b]).addClass(a._select.className);
      },
      sName: 'select-deferRender',
    });
    b.on('preXhr.dt.dtSelect', function () {
      var a = b
          .rows({selected: !0})
          .ids(!0)
          .filter(function (b) {
            return b !== h;
          }),
        d = b
          .cells({selected: !0})
          .eq(0)
          .map(function (a) {
            var c = b.row(a.row).id(!0);
            return c ? {row: c, column: a.column} : h;
          })
          .filter(function (b) {
            return b !== h;
          });
      b.one('draw.dt.dtSelect', function () {
        b.rows(a).select();
        d.any() &&
          d.each(function (a) {
            b.cells(a.row, a.column).select();
          });
      });
    });
    b.on('draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt', function () {
      B(b);
    });
    b.on('destroy.dtSelect', function () {
      v(b);
      b.off('.dtSelect');
    });
  }
  function C(a, b, c, d) {
    var e = a[b + 's']({search: 'applied'}).indexes();
    d = f.inArray(d, e);
    var g = f.inArray(c, e);
    if (a[b + 's']({selected: !0}).any() || -1 !== d) {
      if (d > g) {
        var u = g;
        g = d;
        d = u;
      }
      e.splice(g + 1, e.length);
      e.splice(0, d);
    } else e.splice(f.inArray(c, e) + 1, e.length);
    a[b](c, {selected: !0}).any() ? (e.splice(f.inArray(c, e), 1), a[b + 's'](e).deselect()) : a[b + 's'](e).select();
  }
  function r(a, b) {
    if (b || 'single' === a._select.style)
      (a = new g.Api(a)), a.rows({selected: !0}).deselect(), a.columns({selected: !0}).deselect(), a.cells({selected: !0}).deselect();
  }
  function w(a, b, c, d, e) {
    var f = b.select.style(),
      g = b.select.toggleable(),
      h = b[d](e, {selected: !0}).any();
    if (!h || g)
      'os' === f
        ? a.ctrlKey || a.metaKey
          ? b[d](e).select(!h)
          : a.shiftKey
          ? 'cell' === d
            ? z(b, e, c._select_lastCell || null)
            : C(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null)
          : ((a = b[d + 's']({selected: !0})), h && 1 === a.flatten().length ? b[d](e).deselect() : (a.deselect(), b[d](e).select()))
        : 'multi+shift' == f
        ? a.shiftKey
          ? 'cell' === d
            ? z(b, e, c._select_lastCell || null)
            : C(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null)
          : b[d](e).select(!h)
        : b[d](e).select(!h);
  }
  function t(a, b) {
    return function (c) {
      return c.i18n('buttons.' + a, b);
    };
  }
  function x(a) {
    a = a._eventNamespace;
    return 'draw.dt.DT' + a + ' select.dt.DT' + a + ' deselect.dt.DT' + a;
  }
  function E(a, b) {
    return (-1 !== f.inArray('rows', b.limitTo) && a.rows({selected: !0}).any()) ||
      (-1 !== f.inArray('columns', b.limitTo) && a.columns({selected: !0}).any()) ||
      (-1 !== f.inArray('cells', b.limitTo) && a.cells({selected: !0}).any())
      ? !0
      : !1;
  }
  var g = f.fn.dataTable;
  g.select = {};
  g.select.version = '1.3.1';
  g.select.init = function (a) {
    var b = a.settings()[0],
      c = b.oInit.select,
      d = g.defaults.select;
    c = c === h ? d : c;
    d = 'row';
    var e = 'api',
      l = !1,
      u = !0,
      k = !0,
      m = 'td, th',
      p = 'selected',
      n = !1;
    b._select = {};
    !0 === c
      ? ((e = 'os'), (n = !0))
      : 'string' === typeof c
      ? ((e = c), (n = !0))
      : f.isPlainObject(c) &&
        (c.blurable !== h && (l = c.blurable),
        c.toggleable !== h && (u = c.toggleable),
        c.info !== h && (k = c.info),
        c.items !== h && (d = c.items),
        (e = c.style !== h ? c.style : 'os'),
        (n = !0),
        c.selector !== h && (m = c.selector),
        c.className !== h && (p = c.className));
    a.select.selector(m);
    a.select.items(d);
    a.select.style(e);
    a.select.blurable(l);
    a.select.toggleable(u);
    a.select.info(k);
    b._select.className = p;
    f.fn.dataTable.ext.order['select-checkbox'] = function (b, a) {
      return this.api()
        .column(a, {order: 'index'})
        .nodes()
        .map(function (a) {
          return 'row' === b._select.items ? f(a).parent().hasClass(b._select.className) : 'cell' === b._select.items ? f(a).hasClass(b._select.className) : !1;
        });
    };
    !n && f(a.table().node()).hasClass('selectable') && a.select.style('os');
  };
  f.each(
    [
      {type: 'row', prop: 'aoData'},
      {type: 'column', prop: 'aoColumns'},
    ],
    function (a, b) {
      g.ext.selector[b.type].push(function (a, d, e) {
        d = d.selected;
        var c = [];
        if (!0 !== d && !1 !== d) return e;
        for (var f = 0, g = e.length; f < g; f++) {
          var h = a[b.prop][e[f]];
          ((!0 === d && !0 === h._select_selected) || (!1 === d && !h._select_selected)) && c.push(e[f]);
        }
        return c;
      });
    },
  );
  g.ext.selector.cell.push(function (a, b, c) {
    b = b.selected;
    var d = [];
    if (b === h) return c;
    for (var e = 0, f = c.length; e < f; e++) {
      var g = a.aoData[c[e].row];
      ((!0 === b && g._selected_cells && !0 === g._selected_cells[c[e].column]) || !(!1 !== b || (g._selected_cells && g._selected_cells[c[e].column]))) &&
        d.push(c[e]);
    }
    return d;
  });
  var n = g.Api.register,
    q = g.Api.registerPlural;
  n('select()', function () {
    return this.iterator('table', function (a) {
      g.select.init(new g.Api(a));
    });
  });
  n('select.blurable()', function (a) {
    return a === h
      ? this.context[0]._select.blurable
      : this.iterator('table', function (b) {
          b._select.blurable = a;
        });
  });
  n('select.toggleable()', function (a) {
    return a === h
      ? this.context[0]._select.toggleable
      : this.iterator('table', function (b) {
          b._select.toggleable = a;
        });
  });
  n('select.info()', function (a) {
    return B === h
      ? this.context[0]._select.info
      : this.iterator('table', function (b) {
          b._select.info = a;
        });
  });
  n('select.items()', function (a) {
    return a === h
      ? this.context[0]._select.items
      : this.iterator('table', function (b) {
          b._select.items = a;
          m(new g.Api(b), 'selectItems', [a]);
        });
  });
  n('select.style()', function (a) {
    return a === h
      ? this.context[0]._select.style
      : this.iterator('table', function (b) {
          b._select.style = a;
          b._select_init || D(b);
          var c = new g.Api(b);
          v(c);
          'api' !== a && A(c);
          m(new g.Api(b), 'selectStyle', [a]);
        });
  });
  n('select.selector()', function (a) {
    return a === h
      ? this.context[0]._select.selector
      : this.iterator('table', function (b) {
          v(new g.Api(b));
          b._select.selector = a;
          'api' !== b._select.style && A(new g.Api(b));
        });
  });
  q('rows().select()', 'row().select()', function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator('row', function (b, a) {
      r(b);
      b.aoData[a]._select_selected = !0;
      f(b.aoData[a].nTr).addClass(b._select.className);
    });
    this.iterator('table', function (a, d) {
      m(b, 'select', ['row', b[d]], !0);
    });
    return this;
  });
  q('columns().select()', 'column().select()', function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator('column', function (b, a) {
      r(b);
      b.aoColumns[a]._select_selected = !0;
      a = new g.Api(b).column(a);
      f(a.header()).addClass(b._select.className);
      f(a.footer()).addClass(b._select.className);
      a.nodes().to$().addClass(b._select.className);
    });
    this.iterator('table', function (a, d) {
      m(b, 'select', ['column', b[d]], !0);
    });
    return this;
  });
  q('cells().select()', 'cell().select()', function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator('cell', function (b, a, e) {
      r(b);
      a = b.aoData[a];
      a._selected_cells === h && (a._selected_cells = []);
      a._selected_cells[e] = !0;
      a.anCells && f(a.anCells[e]).addClass(b._select.className);
    });
    this.iterator('table', function (a, d) {
      m(b, 'select', ['cell', b[d]], !0);
    });
    return this;
  });
  q('rows().deselect()', 'row().deselect()', function () {
    var a = this;
    this.iterator('row', function (a, c) {
      a.aoData[c]._select_selected = !1;
      f(a.aoData[c].nTr).removeClass(a._select.className);
    });
    this.iterator('table', function (b, c) {
      m(a, 'deselect', ['row', a[c]], !0);
    });
    return this;
  });
  q('columns().deselect()', 'column().deselect()', function () {
    var a = this;
    this.iterator('column', function (a, c) {
      a.aoColumns[c]._select_selected = !1;
      var b = new g.Api(a),
        e = b.column(c);
      f(e.header()).removeClass(a._select.className);
      f(e.footer()).removeClass(a._select.className);
      b.cells(null, c)
        .indexes()
        .each(function (b) {
          var c = a.aoData[b.row],
            d = c._selected_cells;
          !c.anCells || (d && d[b.column]) || f(c.anCells[b.column]).removeClass(a._select.className);
        });
    });
    this.iterator('table', function (b, c) {
      m(a, 'deselect', ['column', a[c]], !0);
    });
    return this;
  });
  q('cells().deselect()', 'cell().deselect()', function () {
    var a = this;
    this.iterator('cell', function (a, c, d) {
      c = a.aoData[c];
      c._selected_cells[d] = !1;
      c.anCells && !a.aoColumns[d]._select_selected && f(c.anCells[d]).removeClass(a._select.className);
    });
    this.iterator('table', function (b, c) {
      m(a, 'deselect', ['cell', a[c]], !0);
    });
    return this;
  });
  var y = 0;
  f.extend(g.ext.buttons, {
    selected: {
      text: t('selected', 'Selected'),
      className: 'buttons-selected',
      limitTo: ['rows', 'columns', 'cells'],
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = '.select' + y++;
        a.on(x(c), function () {
          d.enable(E(a, c));
        });
        this.disable();
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace);
      },
    },
    selectedSingle: {
      text: t('selectedSingle', 'Selected single'),
      className: 'buttons-selected-single',
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = '.select' + y++;
        a.on(x(c), function () {
          var b = a.rows({selected: !0}).flatten().length + a.columns({selected: !0}).flatten().length + a.cells({selected: !0}).flatten().length;
          d.enable(1 === b);
        });
        this.disable();
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace);
      },
    },
    selectAll: {
      text: t('selectAll', 'Select all'),
      className: 'buttons-select-all',
      action: function () {
        this[this.select.items() + 's']().select();
      },
    },
    selectNone: {
      text: t('selectNone', 'Deselect all'),
      className: 'buttons-select-none',
      action: function () {
        r(this.settings()[0], !0);
      },
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = '.select' + y++;
        a.on(x(c), function () {
          var b = a.rows({selected: !0}).flatten().length + a.columns({selected: !0}).flatten().length + a.cells({selected: !0}).flatten().length;
          d.enable(0 < b);
        });
        this.disable();
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace);
      },
    },
  });
  f.each(['Row', 'Column', 'Cell'], function (a, b) {
    var c = b.toLowerCase();
    g.ext.buttons['select' + b + 's'] = {
      text: t('select' + b + 's', 'Select ' + c + 's'),
      className: 'buttons-select-' + c + 's',
      action: function () {
        this.select.items(c);
      },
      init: function (a) {
        var b = this;
        a.on('selectItems.dt.DT', function (a, d, e) {
          b.active(e === c);
        });
      },
    };
  });
  f(p).on('preInit.dt.dtSelect', function (a, b) {
    'dt' === a.namespace && g.select.init(new g.Api(b));
  });
  return g.select;
});

/*!
 Bootstrap 4 styling wrapper for Select
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  'function' === typeof define && define.amd
    ? define(['jquery', 'datatables.net-bs4', 'datatables.net-select'], function (a) {
        return c(a, window, document);
      })
    : 'object' === typeof exports
    ? (module.exports = function (a, b) {
        a || (a = window);
        (b && b.fn.dataTable) || (b = require('datatables.net-bs4')(a, b).$);
        b.fn.dataTable.select || require('datatables.net-select')(a, b);
        return c(b, a, a.document);
      })
    : c(jQuery, window, document);
})(function (c, a, b, d) {
  return c.fn.dataTable;
});
