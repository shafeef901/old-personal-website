function waterRippleTwo(e) {



  function k() {
    A();
    r.putImageData(v, 0, 0)
  }

  function L(e, t) {
    e <<= 0;
    t <<= 0;
    for (var n = t - h; n < t + h; n++) {
      for (var r = e - h; r < e + h; r++) {
        p[l + n * i + r] += 50
      }
    }
  }

  function A() {
    var e, t, n, r, a, f;
    var h = l;
    l = c;
    c = h;
    var g = 0;
    var y = i,
      b = s,
      w = p,
      E = d,
      S = v.data,
      x = m.data,
      T = rippleRes.data,
      N = textureRes.data,
      C = o,
      k = u;
    for (var L = 0; L < b; L++) {
      for (var A = 0; A < y; A++) {
        var O = c + g,
          M = l + g;
        n = w[M - y] + w[M + y] + w[M - 2] + w[M + 2] >> 1;
        n -= w[O];
        n -= n >> 5;
        w[O] = n;
        n = 1024 - n;
        f = E[g];
        E[g] = n;
        if (f != n) {
          e = ((A - C) * n / 1024 << 0) + C;
          t = ((L - k) * n / 1024 << 0) + k;
          if (e >= y) e = y - 1;
          if (e < 0) e = 0;
          if (t >= b) t = b - 1;
          if (t < 0) t = 0;
          a = (e + t * y) * 4;
          r = g * 4;
          S[r] = x[a];
          S[r + 1] = x[a + 1];
          S[r + 2] = x[a + 2];
          S[r + 3] = x[a + 3];
          if (w[O] === 0) {
            S[r + 3] = 0
          } else {
            S[r + 3] = 255
          }
        }++g
      }
    }
  }
  var t = document.getElementById("image-2");
  var n = document.createElement("canvas"),
    r = n.getContext("2d"),
    i = x,
    s = y,
    o = i >> 1,
    u = s >> 1,
    a = i * (s + 2) * 2,
    f = 30,
    l = i,
    c = i * (s + 3),
    h = 5,
    p = [],
    d = [],
    v, m, g = 20,
    b = g * 2,
    w = s / g;
  n.width = i;
  n.height = s;
  var E = t.width / 2;
  var S = t.height / 2;
  var T = o - E;
  var N = u - S;
  // console.log(o);
  // console.log(u);
  // console.log(E + " x " + S);
  // console.log(N + " x " + T);
  r.drawImage(t, T, N);
  n.style.left = t.offsetLeft + "px";
  n.style.top = t.offsetTop + "px";
  t.parentNode.insertBefore(n, t);

  setTimeout(function() {
    n.style.opacity = 1;
  }, 2000);

  v = r.getImageData(0, 0, i, s);
  rippleRes = r.getImageData(0, 0, i, s);
  m = r.getImageData(0, 0, i, s);
  textureRes = r.getImageData(0, 0, i, s);
  for (var C = 0; C < a; C++) {
    d[C] = p[C] = 0
  }
  n.onmousemove = function(e) {
    e.preventDefault();
    L(e.offsetX || e.layerX, e.offsetY || e.layerY);
    console.log(e.offsetX)
  };
  document.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var t = e.changedTouches[0];
    L(t.screenX, t.screenY)
  }, false);
  setInterval(k, f);
  var O = Math.random;
  setInterval(function() {
    L(O() * i, O() * s)
  }, 700)
}
window.b = "";
window.a = 255;
var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName("body")[0],
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  y = w.innerHeight || e.clientHeight || g.clientHeight;