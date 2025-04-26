(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._label_hpfhs_5{text-anchor:middle;font-size:16px}._symbol_hpfhs_10{stroke-width:1px;stroke:#000}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const co = {
  display_type: "canvas",
  // {svg{canvas}}
  debug: !1,
  controls_border: "",
  display_border: "",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1005, height: 1005 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function ue(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function fo(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Wr(t) {
  let e, n, r;
  t.length !== 2 ? (e = ue, n = (s, u) => ue(t(s), u), r = (s, u) => t(s) - u) : (e = t === ue || t === fo ? t : ho, n = t, r = t);
  function i(s, u, c = 0, p = s.length) {
    if (c < p) {
      if (e(u, u) !== 0) return p;
      do {
        const h = c + p >>> 1;
        n(s[h], u) < 0 ? c = h + 1 : p = h;
      } while (c < p);
    }
    return c;
  }
  function o(s, u, c = 0, p = s.length) {
    if (c < p) {
      if (e(u, u) !== 0) return p;
      do {
        const h = c + p >>> 1;
        n(s[h], u) <= 0 ? c = h + 1 : p = h;
      } while (c < p);
    }
    return c;
  }
  function a(s, u, c = 0, p = s.length) {
    const h = i(s, u, c, p - 1);
    return h > c && r(s[h - 1], u) > -r(s[h], u) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function ho() {
  return 0;
}
function po(t) {
  return t === null ? NaN : +t;
}
const go = Wr(ue), yo = go.right;
Wr(po).center;
const _o = Math.sqrt(50), mo = Math.sqrt(10), vo = Math.sqrt(2);
function pe(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= _o ? 10 : o >= mo ? 5 : o >= vo ? 2 : 1;
  let s, u, c;
  return i < 0 ? (c = Math.pow(10, -i) / a, s = Math.round(t * c), u = Math.round(e * c), s / c < t && ++s, u / c > e && --u, c = -c) : (c = Math.pow(10, i) * a, s = Math.round(t / c), u = Math.round(e / c), s * c < t && ++s, u * c > e && --u), u < s && 0.5 <= n && n < 2 ? pe(t, e, n * 2) : [s, u, c];
}
function wo(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? pe(e, t, n) : pe(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let c = 0; c < s; ++c) u[c] = (o - c) / -a;
    else for (let c = 0; c < s; ++c) u[c] = (o - c) * a;
  else if (a < 0) for (let c = 0; c < s; ++c) u[c] = (i + c) / -a;
  else for (let c = 0; c < s; ++c) u[c] = (i + c) * a;
  return u;
}
function an(t, e, n) {
  return e = +e, t = +t, n = +n, pe(t, e, n)[2];
}
function bo(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? an(e, t, n) : an(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Qt(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function xo(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var Mo = { value: () => {
} };
function In() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new le(n);
}
function le(t) {
  this._ = t;
}
function $o(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
le.prototype = In.prototype = {
  constructor: le,
  on: function(t, e) {
    var n = this._, r = $o(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = To(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = nr(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = nr(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new le(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function To(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function nr(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Mo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var sn = "http://www.w3.org/1999/xhtml";
const rr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: sn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ae(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), rr.hasOwnProperty(e) ? { space: rr[e], local: t } : t;
}
function Ao(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === sn && e.documentElement.namespaceURI === sn ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function So(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Zr(t) {
  var e = Ae(t);
  return (e.local ? So : Ao)(e);
}
function Eo() {
}
function Rn(t) {
  return t == null ? Eo : function() {
    return this.querySelector(t);
  };
}
function Po(t) {
  typeof t != "function" && (t = Rn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), u, c, p = 0; p < a; ++p)
      (u = o[p]) && (c = t.call(u, u.__data__, p, o)) && ("__data__" in u && (c.__data__ = u.__data__), s[p] = c);
  return new F(r, this._parents);
}
function zo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Co() {
  return [];
}
function Jr(t) {
  return t == null ? Co : function() {
    return this.querySelectorAll(t);
  };
}
function Oo(t) {
  return function() {
    return zo(t.apply(this, arguments));
  };
}
function ko(t) {
  typeof t == "function" ? t = Oo(t) : t = Jr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, u, c = 0; c < s; ++c)
      (u = a[c]) && (r.push(t.call(u, u.__data__, c, a)), i.push(u));
  return new F(r, i);
}
function Qr(t) {
  return function() {
    return this.matches(t);
  };
}
function jr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Io = Array.prototype.find;
function Ro(t) {
  return function() {
    return Io.call(this.children, t);
  };
}
function Do() {
  return this.firstElementChild;
}
function Fo(t) {
  return this.select(t == null ? Do : Ro(typeof t == "function" ? t : jr(t)));
}
var Lo = Array.prototype.filter;
function qo() {
  return Array.from(this.children);
}
function Ho(t) {
  return function() {
    return Lo.call(this.children, t);
  };
}
function Bo(t) {
  return this.selectAll(t == null ? qo : Ho(typeof t == "function" ? t : jr(t)));
}
function No(t) {
  typeof t != "function" && (t = Qr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, c = 0; c < a; ++c)
      (u = o[c]) && t.call(u, u.__data__, c, o) && s.push(u);
  return new F(r, this._parents);
}
function ti(t) {
  return new Array(t.length);
}
function Xo() {
  return new F(this._enter || this._groups.map(ti), this._parents);
}
function de(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
de.prototype = {
  constructor: de,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Go(t) {
  return function() {
    return t;
  };
}
function Uo(t, e, n, r, i, o) {
  for (var a = 0, s, u = e.length, c = o.length; a < c; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new de(t, o[a]);
  for (; a < u; ++a)
    (s = e[a]) && (i[a] = s);
}
function Yo(t, e, n, r, i, o, a) {
  var s, u, c = /* @__PURE__ */ new Map(), p = e.length, h = o.length, l = new Array(p), f;
  for (s = 0; s < p; ++s)
    (u = e[s]) && (l[s] = f = a.call(u, u.__data__, s, e) + "", c.has(f) ? i[s] = u : c.set(f, u));
  for (s = 0; s < h; ++s)
    f = a.call(t, o[s], s, o) + "", (u = c.get(f)) ? (r[s] = u, u.__data__ = o[s], c.delete(f)) : n[s] = new de(t, o[s]);
  for (s = 0; s < p; ++s)
    (u = e[s]) && c.get(l[s]) === u && (i[s] = u);
}
function Ko(t) {
  return t.__data__;
}
function Vo(t, e) {
  if (!arguments.length) return Array.from(this, Ko);
  var n = e ? Yo : Uo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Go(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), c = 0; c < o; ++c) {
    var p = r[c], h = i[c], l = h.length, f = Wo(t.call(p, p && p.__data__, c, r)), d = f.length, g = s[c] = new Array(d), y = a[c] = new Array(d), _ = u[c] = new Array(l);
    n(p, h, g, y, _, f, e);
    for (var $ = 0, T = 0, m, x; $ < d; ++$)
      if (m = g[$]) {
        for ($ >= T && (T = $ + 1); !(x = y[T]) && ++T < d; ) ;
        m._next = x || null;
      }
  }
  return a = new F(a, r), a._enter = s, a._exit = u, a;
}
function Wo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Zo() {
  return new F(this._exit || this._groups.map(ti), this._parents);
}
function Jo(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Qo(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var c = n[u], p = r[u], h = c.length, l = s[u] = new Array(h), f, d = 0; d < h; ++d)
      (f = c[d] || p[d]) && (l[d] = f);
  for (; u < i; ++u)
    s[u] = n[u];
  return new F(s, this._parents);
}
function jo() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ta(t) {
  t || (t = ea);
  function e(h, l) {
    return h && l ? t(h.__data__, l.__data__) : !h - !l;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, u = i[o] = new Array(s), c, p = 0; p < s; ++p)
      (c = a[p]) && (u[p] = c);
    u.sort(e);
  }
  return new F(i, this._parents).order();
}
function ea(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function na() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ra() {
  return Array.from(this);
}
function ia() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function oa() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function aa() {
  return !this.node();
}
function sa(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function ua(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function la(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ca(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function fa(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ha(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function pa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function da(t, e) {
  var n = Ae(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? la : ua : typeof e == "function" ? n.local ? pa : ha : n.local ? fa : ca)(n, e));
}
function ei(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ga(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ya(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function _a(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function ma(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ga : typeof e == "function" ? _a : ya)(t, e, n ?? "")) : Et(this.node(), t);
}
function Et(t, e) {
  return t.style.getPropertyValue(e) || ei(t).getComputedStyle(t, null).getPropertyValue(e);
}
function va(t) {
  return function() {
    delete this[t];
  };
}
function wa(t, e) {
  return function() {
    this[t] = e;
  };
}
function ba(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function xa(t, e) {
  return arguments.length > 1 ? this.each((e == null ? va : typeof e == "function" ? ba : wa)(t, e)) : this.node()[t];
}
function ni(t) {
  return t.trim().split(/^|\s+/);
}
function Dn(t) {
  return t.classList || new ri(t);
}
function ri(t) {
  this._node = t, this._names = ni(t.getAttribute("class") || "");
}
ri.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ii(t, e) {
  for (var n = Dn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function oi(t, e) {
  for (var n = Dn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ma(t) {
  return function() {
    ii(this, t);
  };
}
function $a(t) {
  return function() {
    oi(this, t);
  };
}
function Ta(t, e) {
  return function() {
    (e.apply(this, arguments) ? ii : oi)(this, t);
  };
}
function Aa(t, e) {
  var n = ni(t + "");
  if (arguments.length < 2) {
    for (var r = Dn(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Ta : e ? Ma : $a)(n, e));
}
function Sa() {
  this.textContent = "";
}
function Ea(t) {
  return function() {
    this.textContent = t;
  };
}
function Pa(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function za(t) {
  return arguments.length ? this.each(t == null ? Sa : (typeof t == "function" ? Pa : Ea)(t)) : this.node().textContent;
}
function Ca() {
  this.innerHTML = "";
}
function Oa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ka(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ia(t) {
  return arguments.length ? this.each(t == null ? Ca : (typeof t == "function" ? ka : Oa)(t)) : this.node().innerHTML;
}
function Ra() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Da() {
  return this.each(Ra);
}
function Fa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function La() {
  return this.each(Fa);
}
function qa(t) {
  var e = typeof t == "function" ? t : Zr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ha() {
  return null;
}
function Ba(t, e) {
  var n = typeof t == "function" ? t : Zr(t), r = e == null ? Ha : typeof e == "function" ? e : Rn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Na() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Xa() {
  return this.each(Na);
}
function Ga() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ua() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ya(t) {
  return this.select(t ? Ua : Ga);
}
function Ka(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Va(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Wa(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Za(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Ja(t, e, n) {
  return function() {
    var r = this.__on, i, o = Va(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Qa(t, e, n) {
  var r = Wa(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, c = s.length, p; u < c; ++u)
        for (i = 0, p = s[u]; i < o; ++i)
          if ((a = r[i]).type === p.type && a.name === p.name)
            return p.value;
    }
    return;
  }
  for (s = e ? Ja : Za, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function ai(t, e, n) {
  var r = ei(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function ja(t, e) {
  return function() {
    return ai(this, t, e);
  };
}
function ts(t, e) {
  return function() {
    return ai(this, t, e.apply(this, arguments));
  };
}
function es(t, e) {
  return this.each((typeof e == "function" ? ts : ja)(t, e));
}
function* ns() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var si = [null];
function F(t, e) {
  this._groups = t, this._parents = e;
}
function Yt() {
  return new F([[document.documentElement]], si);
}
function rs() {
  return this;
}
F.prototype = Yt.prototype = {
  constructor: F,
  select: Po,
  selectAll: ko,
  selectChild: Fo,
  selectChildren: Bo,
  filter: No,
  data: Vo,
  enter: Xo,
  exit: Zo,
  join: Jo,
  merge: Qo,
  selection: rs,
  order: jo,
  sort: ta,
  call: na,
  nodes: ra,
  node: ia,
  size: oa,
  empty: aa,
  each: sa,
  attr: da,
  style: ma,
  property: xa,
  classed: Aa,
  text: za,
  html: Ia,
  raise: Da,
  lower: La,
  append: qa,
  insert: Ba,
  remove: Xa,
  clone: Ya,
  datum: Ka,
  on: Qa,
  dispatch: es,
  [Symbol.iterator]: ns
};
function S(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], si);
}
function is(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function un(t, e) {
  if (t = is(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const os = { passive: !1 }, Lt = { capture: !0, passive: !1 };
function Ze(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function as(t) {
  var e = t.document.documentElement, n = S(t).on("dragstart.drag", At, Lt);
  "onselectstart" in e ? n.on("selectstart.drag", At, Lt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ss(t, e) {
  var n = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  e && (r.on("click.drag", At, Lt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const jt = (t) => () => t;
function ln(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: c,
  dispatch: p
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: p }
  });
}
ln.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function us(t) {
  return !t.ctrlKey && !t.button;
}
function ls() {
  return this.parentNode;
}
function cs(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function fs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function hs() {
  var t = us, e = ls, n = cs, r = fs, i = {}, o = In("start", "drag", "end"), a = 0, s, u, c, p, h = 0;
  function l(m) {
    m.on("mousedown.drag", f).filter(r).on("touchstart.drag", y).on("touchmove.drag", _, os).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function f(m, x) {
    if (!(p || !t.call(this, m, x))) {
      var E = T(this, e.call(this, m, x), m, x, "mouse");
      E && (S(m.view).on("mousemove.drag", d, Lt).on("mouseup.drag", g, Lt), as(m.view), Ze(m), c = !1, s = m.clientX, u = m.clientY, E("start", m));
    }
  }
  function d(m) {
    if (At(m), !c) {
      var x = m.clientX - s, E = m.clientY - u;
      c = x * x + E * E > h;
    }
    i.mouse("drag", m);
  }
  function g(m) {
    S(m.view).on("mousemove.drag mouseup.drag", null), ss(m.view, c), At(m), i.mouse("end", m);
  }
  function y(m, x) {
    if (t.call(this, m, x)) {
      var E = m.changedTouches, P = e.call(this, m, x), C = E.length, G, W;
      for (G = 0; G < C; ++G)
        (W = T(this, P, m, x, E[G].identifier, E[G])) && (Ze(m), W("start", m, E[G]));
    }
  }
  function _(m) {
    var x = m.changedTouches, E = x.length, P, C;
    for (P = 0; P < E; ++P)
      (C = i[x[P].identifier]) && (At(m), C("drag", m, x[P]));
  }
  function $(m) {
    var x = m.changedTouches, E = x.length, P, C;
    for (p && clearTimeout(p), p = setTimeout(function() {
      p = null;
    }, 500), P = 0; P < E; ++P)
      (C = i[x[P].identifier]) && (Ze(m), C("end", m, x[P]));
  }
  function T(m, x, E, P, C, G) {
    var W = o.copy(), M = un(G || E, x), U, O, q;
    if ((q = n.call(m, new ln("beforestart", {
      sourceEvent: E,
      target: l,
      identifier: C,
      active: a,
      x: M[0],
      y: M[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), P)) != null)
      return U = q.x - M[0] || 0, O = q.y - M[1] || 0, function Jt(at, ht, xt) {
        var L = M, We;
        switch (at) {
          case "start":
            i[C] = Jt, We = a++;
            break;
          case "end":
            delete i[C], --a;
          // falls through
          case "drag":
            M = un(xt || ht, x), We = a;
            break;
        }
        W.call(
          at,
          m,
          new ln(at, {
            sourceEvent: ht,
            subject: q,
            target: l,
            identifier: C,
            active: We,
            x: M[0] + U,
            y: M[1] + O,
            dx: M[0] - L[0],
            dy: M[1] - L[1],
            dispatch: W
          }),
          P
        );
      };
  }
  return l.filter = function(m) {
    return arguments.length ? (t = typeof m == "function" ? m : jt(!!m), l) : t;
  }, l.container = function(m) {
    return arguments.length ? (e = typeof m == "function" ? m : jt(m), l) : e;
  }, l.subject = function(m) {
    return arguments.length ? (n = typeof m == "function" ? m : jt(m), l) : n;
  }, l.touchable = function(m) {
    return arguments.length ? (r = typeof m == "function" ? m : jt(!!m), l) : r;
  }, l.on = function() {
    var m = o.on.apply(o, arguments);
    return m === o ? l : m;
  }, l.clickDistance = function(m) {
    return arguments.length ? (h = (m = +m) * m, l) : Math.sqrt(h);
  }, l;
}
function Fn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function ui(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Kt() {
}
var qt = 0.7, ge = 1 / qt, St = "\\s*([+-]?\\d+)\\s*", Ht = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ps = /^#([0-9a-f]{3,8})$/, ds = new RegExp(`^rgb\\(${St},${St},${St}\\)$`), gs = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), ys = new RegExp(`^rgba\\(${St},${St},${St},${Ht}\\)$`), _s = new RegExp(`^rgba\\(${Y},${Y},${Y},${Ht}\\)$`), ms = new RegExp(`^hsl\\(${Ht},${Y},${Y}\\)$`), vs = new RegExp(`^hsla\\(${Ht},${Y},${Y},${Ht}\\)$`), ir = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Fn(Kt, yt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: or,
  // Deprecated! Use color.formatHex.
  formatHex: or,
  formatHex8: ws,
  formatHsl: bs,
  formatRgb: ar,
  toString: ar
});
function or() {
  return this.rgb().formatHex();
}
function ws() {
  return this.rgb().formatHex8();
}
function bs() {
  return li(this).formatHsl();
}
function ar() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = ps.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? sr(e) : n === 3 ? new R(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? te(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? te(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ds.exec(t)) ? new R(e[1], e[2], e[3], 1) : (e = gs.exec(t)) ? new R(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ys.exec(t)) ? te(e[1], e[2], e[3], e[4]) : (e = _s.exec(t)) ? te(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ms.exec(t)) ? cr(e[1], e[2] / 100, e[3] / 100, 1) : (e = vs.exec(t)) ? cr(e[1], e[2] / 100, e[3] / 100, e[4]) : ir.hasOwnProperty(t) ? sr(ir[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function sr(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function te(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new R(t, e, n, r);
}
function xs(t) {
  return t instanceof Kt || (t = yt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function cn(t, e, n, r) {
  return arguments.length === 1 ? xs(t) : new R(t, e, n, r ?? 1);
}
function R(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Fn(R, cn, ui(Kt, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(gt(this.r), gt(this.g), gt(this.b), ye(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ur,
  // Deprecated! Use color.formatHex.
  formatHex: ur,
  formatHex8: Ms,
  formatRgb: lr,
  toString: lr
}));
function ur() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}`;
}
function Ms() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}${dt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function lr() {
  const t = ye(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${gt(this.r)}, ${gt(this.g)}, ${gt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ye(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function gt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function dt(t) {
  return t = gt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function cr(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new B(t, e, n, r);
}
function li(t) {
  if (t instanceof B) return new B(t.h, t.s, t.l, t.opacity);
  if (t instanceof Kt || (t = yt(t)), !t) return new B();
  if (t instanceof B) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new B(a, s, u, t.opacity);
}
function $s(t, e, n, r) {
  return arguments.length === 1 ? li(t) : new B(t, e, n, r ?? 1);
}
function B(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Fn(B, $s, ui(Kt, {
  brighter(t) {
    return t = t == null ? ge : Math.pow(ge, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new R(
      Je(t >= 240 ? t - 240 : t + 120, i, r),
      Je(t, i, r),
      Je(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new B(fr(this.h), ee(this.s), ee(this.l), ye(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ye(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${fr(this.h)}, ${ee(this.s) * 100}%, ${ee(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function fr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ee(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Je(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Ln = (t) => () => t;
function Ts(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function As(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Ss(t) {
  return (t = +t) == 1 ? ci : function(e, n) {
    return n - e ? As(e, n, t) : Ln(isNaN(e) ? n : e);
  };
}
function ci(t, e) {
  var n = e - t;
  return n ? Ts(t, n) : Ln(isNaN(t) ? e : t);
}
const _e = function t(e) {
  var n = Ss(e);
  function r(i, o) {
    var a = n((i = cn(i)).r, (o = cn(o)).r), s = n(i.g, o.g), u = n(i.b, o.b), c = ci(i.opacity, o.opacity);
    return function(p) {
      return i.r = a(p), i.g = s(p), i.b = u(p), i.opacity = c(p), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Es(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Ps(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function zs(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = qn(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Cs(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function H(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Os(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = qn(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var fn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qe = new RegExp(fn.source, "g");
function ks(t) {
  return function() {
    return t;
  };
}
function Is(t) {
  return function(e) {
    return t(e) + "";
  };
}
function fi(t, e) {
  var n = fn.lastIndex = Qe.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", e = e + ""; (r = fn.exec(t)) && (i = Qe.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: H(r, i) })), n = Qe.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Is(u[0].x) : ks(e) : (e = u.length, function(c) {
    for (var p = 0, h; p < e; ++p) s[(h = u[p]).i] = h.x(c);
    return s.join("");
  });
}
function qn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Ln(e) : (n === "number" ? H : n === "string" ? (r = yt(e)) ? (e = r, _e) : fi : e instanceof yt ? _e : e instanceof Date ? Cs : Ps(e) ? Es : Array.isArray(e) ? zs : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Os : H)(t, e);
}
function Rs(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var hr = 180 / Math.PI, hn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function hi(t, e, n, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (u = t * n + e * r) && (n -= t * u, r -= e * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), t * r < e * n && (t = -t, e = -e, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * hr,
    skewX: Math.atan(u) * hr,
    scaleX: a,
    scaleY: s
  };
}
var ne;
function Ds(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? hn : hi(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Fs(t) {
  return t == null || (ne || (ne = document.createElementNS("http://www.w3.org/2000/svg", "g")), ne.setAttribute("transform", t), !(t = ne.transform.baseVal.consolidate())) ? hn : (t = t.matrix, hi(t.a, t.b, t.c, t.d, t.e, t.f));
}
function pi(t, e, n, r) {
  function i(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, p, h, l, f, d) {
    if (c !== h || p !== l) {
      var g = f.push("translate(", null, e, null, n);
      d.push({ i: g - 4, x: H(c, h) }, { i: g - 2, x: H(p, l) });
    } else (h || l) && f.push("translate(" + h + e + l + n);
  }
  function a(c, p, h, l) {
    c !== p ? (c - p > 180 ? p += 360 : p - c > 180 && (c += 360), l.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: H(c, p) })) : p && h.push(i(h) + "rotate(" + p + r);
  }
  function s(c, p, h, l) {
    c !== p ? l.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: H(c, p) }) : p && h.push(i(h) + "skewX(" + p + r);
  }
  function u(c, p, h, l, f, d) {
    if (c !== h || p !== l) {
      var g = f.push(i(f) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: H(c, h) }, { i: g - 2, x: H(p, l) });
    } else (h !== 1 || l !== 1) && f.push(i(f) + "scale(" + h + "," + l + ")");
  }
  return function(c, p) {
    var h = [], l = [];
    return c = t(c), p = t(p), o(c.translateX, c.translateY, p.translateX, p.translateY, h, l), a(c.rotate, p.rotate, h, l), s(c.skewX, p.skewX, h, l), u(c.scaleX, c.scaleY, p.scaleX, p.scaleY, h, l), c = p = null, function(f) {
      for (var d = -1, g = l.length, y; ++d < g; ) h[(y = l[d]).i] = y.x(f);
      return h.join("");
    };
  };
}
var Ls = pi(Ds, "px, ", "px)", "deg)"), qs = pi(Fs, ", ", ")", ")"), Pt = 0, It = 0, Ot = 0, di = 1e3, me, Rt, ve = 0, _t = 0, Se = 0, Bt = typeof performance == "object" && performance.now ? performance : Date, gi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ee() {
  return _t || (gi(Hs), _t = Bt.now() + Se);
}
function Hs() {
  _t = 0;
}
function Nt() {
  this._call = this._time = this._next = null;
}
Nt.prototype = yi.prototype = {
  constructor: Nt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ee() : +n) + (e == null ? 0 : +e), !this._next && Rt !== this && (Rt ? Rt._next = this : me = this, Rt = this), this._call = t, this._time = n, pn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, pn());
  }
};
function yi(t, e, n) {
  var r = new Nt();
  return r.restart(t, e, n), r;
}
function Bs() {
  Ee(), ++Pt;
  for (var t = me, e; t; )
    (e = _t - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Pt;
}
function pr() {
  _t = (ve = Bt.now()) + Se, Pt = It = 0;
  try {
    Bs();
  } finally {
    Pt = 0, Xs(), _t = 0;
  }
}
function Ns() {
  var t = Bt.now(), e = t - ve;
  e > di && (Se -= e, ve = t);
}
function Xs() {
  for (var t, e = me, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : me = n);
  Rt = t, pn(r);
}
function pn(t) {
  if (!Pt) {
    It && (It = clearTimeout(It));
    var e = t - _t;
    e > 24 ? (t < 1 / 0 && (It = setTimeout(pr, t - Bt.now() - Se)), Ot && (Ot = clearInterval(Ot))) : (Ot || (ve = Bt.now(), Ot = setInterval(Ns, di)), Pt = 1, gi(pr));
  }
}
function dr(t, e, n) {
  var r = new Nt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Gs(t, e, n) {
  var r = new Nt(), i = e;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Ee() : +s, r._restart(function u(c) {
      c += i, r._restart(u, i += a, s), o(c);
    }, a, s);
  }, r.restart(t, e, n), r;
}
var Us = In("start", "end", "cancel", "interrupt"), Ys = [], _i = 0, gr = 1, dn = 2, ce = 3, yr = 4, gn = 5, fe = 6;
function Pe(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Ks(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Us,
    tween: Ys,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: _i
  });
}
function Hn(t, e) {
  var n = N(t, e);
  if (n.state > _i) throw new Error("too late; already scheduled");
  return n;
}
function V(t, e) {
  var n = N(t, e);
  if (n.state > ce) throw new Error("too late; already running");
  return n;
}
function N(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Ks(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = yi(o, 0, n.time);
  function o(c) {
    n.state = gr, n.timer.restart(a, n.delay, n.time), n.delay <= c && a(c - n.delay);
  }
  function a(c) {
    var p, h, l, f;
    if (n.state !== gr) return u();
    for (p in r)
      if (f = r[p], f.name === n.name) {
        if (f.state === ce) return dr(a);
        f.state === yr ? (f.state = fe, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete r[p]) : +p < e && (f.state = fe, f.timer.stop(), f.on.call("cancel", t, t.__data__, f.index, f.group), delete r[p]);
      }
    if (dr(function() {
      n.state === ce && (n.state = yr, n.timer.restart(s, n.delay, n.time), s(c));
    }), n.state = dn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === dn) {
      for (n.state = ce, i = new Array(l = n.tween.length), p = 0, h = -1; p < l; ++p)
        (f = n.tween[p].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = f);
      i.length = h + 1;
    }
  }
  function s(c) {
    for (var p = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(u), n.state = gn, 1), h = -1, l = i.length; ++h < l; )
      i[h].call(t, p);
    n.state === gn && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = fe, n.timer.stop(), delete r[e];
    for (var c in r) return;
    delete t.__transition;
  }
}
function Vs(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > dn && r.state < gn, r.state = fe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Ws(t) {
  return this.each(function() {
    Vs(this, t);
  });
}
function Zs(t, e) {
  var n, r;
  return function() {
    var i = V(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Js(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = V(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, u = 0, c = i.length; u < c; ++u)
        if (i[u].name === e) {
          i[u] = s;
          break;
        }
      u === c && i.push(s);
    }
    o.tween = i;
  };
}
function Qs(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = N(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Zs : Js)(n, t, e));
}
function Bn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = V(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return N(i, r).value[e];
  };
}
function mi(t, e) {
  var n;
  return (typeof e == "number" ? H : e instanceof yt ? _e : (n = yt(e)) ? (e = n, _e) : fi)(t, e);
}
function js(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function tu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function eu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function nu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function ru(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function iu(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function ou(t, e) {
  var n = Ae(t), r = n === "transform" ? qs : mi;
  return this.attrTween(t, typeof e == "function" ? (n.local ? iu : ru)(n, r, Bn(this, "attr." + t, e)) : e == null ? (n.local ? tu : js)(n) : (n.local ? nu : eu)(n, r, e));
}
function au(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function su(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function uu(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && su(t, o)), n;
  }
  return i._value = e, i;
}
function lu(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && au(t, o)), n;
  }
  return i._value = e, i;
}
function cu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ae(t);
  return this.tween(n, (r.local ? uu : lu)(r, e));
}
function fu(t, e) {
  return function() {
    Hn(this, t).delay = +e.apply(this, arguments);
  };
}
function hu(t, e) {
  return e = +e, function() {
    Hn(this, t).delay = e;
  };
}
function pu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? fu : hu)(e, t)) : N(this.node(), e).delay;
}
function du(t, e) {
  return function() {
    V(this, t).duration = +e.apply(this, arguments);
  };
}
function gu(t, e) {
  return e = +e, function() {
    V(this, t).duration = e;
  };
}
function yu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? du : gu)(e, t)) : N(this.node(), e).duration;
}
function _u(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    V(this, t).ease = e;
  };
}
function mu(t) {
  var e = this._id;
  return arguments.length ? this.each(_u(e, t)) : N(this.node(), e).ease;
}
function vu(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    V(this, t).ease = n;
  };
}
function wu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(vu(this._id, t));
}
function bu(t) {
  typeof t != "function" && (t = Qr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, c = 0; c < a; ++c)
      (u = o[c]) && t.call(u, u.__data__, c, o) && s.push(u);
  return new et(r, this._parents, this._name, this._id);
}
function xu(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = e[s], c = n[s], p = u.length, h = a[s] = new Array(p), l, f = 0; f < p; ++f)
      (l = u[f] || c[f]) && (h[f] = l);
  for (; s < r; ++s)
    a[s] = e[s];
  return new et(a, this._parents, this._name, this._id);
}
function Mu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function $u(t, e, n) {
  var r, i, o = Mu(e) ? Hn : V;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function Tu(t, e) {
  var n = this._id;
  return arguments.length < 2 ? N(this.node(), n).on.on(t) : this.each($u(n, t, e));
}
function Au(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Su() {
  return this.on("end.remove", Au(this._id));
}
function Eu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Rn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, c = o[a] = new Array(u), p, h, l = 0; l < u; ++l)
      (p = s[l]) && (h = t.call(p, p.__data__, l, s)) && ("__data__" in p && (h.__data__ = p.__data__), c[l] = h, Pe(c[l], e, n, l, c, N(p, n)));
  return new et(o, this._parents, e, n);
}
function Pu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Jr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], c = u.length, p, h = 0; h < c; ++h)
      if (p = u[h]) {
        for (var l = t.call(p, p.__data__, h, u), f, d = N(p, n), g = 0, y = l.length; g < y; ++g)
          (f = l[g]) && Pe(f, e, n, g, l, d);
        o.push(l), a.push(p);
      }
  return new et(o, a, e, n);
}
var zu = Yt.prototype.constructor;
function Cu() {
  return new zu(this._groups, this._parents);
}
function Ou(t, e) {
  var n, r, i;
  return function() {
    var o = Et(this, t), a = (this.style.removeProperty(t), Et(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function vi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ku(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Et(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Iu(t, e, n) {
  var r, i, o;
  return function() {
    var a = Et(this, t), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Et(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s));
  };
}
function Ru(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var u = V(this, t), c = u.on, p = u.value[o] == null ? s || (s = vi(e)) : void 0;
    (c !== n || i !== p) && (r = (n = c).copy()).on(a, i = p), u.on = r;
  };
}
function Du(t, e, n) {
  var r = (t += "") == "transform" ? Ls : mi;
  return e == null ? this.styleTween(t, Ou(t, r)).on("end.style." + t, vi(t)) : typeof e == "function" ? this.styleTween(t, Iu(t, r, Bn(this, "style." + t, e))).each(Ru(this._id, t)) : this.styleTween(t, ku(t, r, e), n).on("end.style." + t, null);
}
function Fu(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Lu(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Fu(t, a, n)), r;
  }
  return o._value = e, o;
}
function qu(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Lu(t, e, n ?? ""));
}
function Hu(t) {
  return function() {
    this.textContent = t;
  };
}
function Bu(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Nu(t) {
  return this.tween("text", typeof t == "function" ? Bu(Bn(this, "text", t)) : Hu(t == null ? "" : t + ""));
}
function Xu(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Gu(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Xu(i)), e;
  }
  return r._value = t, r;
}
function Uu(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Gu(t));
}
function Yu() {
  for (var t = this._name, e = this._id, n = wi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, c = 0; c < s; ++c)
      if (u = a[c]) {
        var p = N(u, e);
        Pe(u, t, n, c, a, {
          time: p.time + p.delay + p.duration,
          delay: 0,
          duration: p.duration,
          ease: p.ease
        });
      }
  return new et(r, this._parents, t, n);
}
function Ku() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var c = V(this, r), p = c.on;
      p !== t && (e = (t = p).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(u)), c.on = e;
    }), i === 0 && o();
  });
}
var Vu = 0;
function et(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function wi() {
  return ++Vu;
}
var Z = Yt.prototype;
et.prototype = {
  constructor: et,
  select: Eu,
  selectAll: Pu,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: bu,
  merge: xu,
  selection: Cu,
  transition: Yu,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: Tu,
  attr: ou,
  attrTween: cu,
  style: Du,
  styleTween: qu,
  text: Nu,
  textTween: Uu,
  remove: Su,
  tween: Qs,
  delay: pu,
  duration: yu,
  ease: mu,
  easeVarying: wu,
  end: Ku,
  [Symbol.iterator]: Z[Symbol.iterator]
};
function Wu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Zu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Wu
};
function Ju(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Qu(t) {
  var e, n;
  t instanceof et ? (e = t._id, t = t._name) : (e = wi(), (n = Zu).time = Ee(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, c = 0; c < s; ++c)
      (u = a[c]) && Pe(u, t, e, c, a, n || Ju(u, e));
  return new et(r, this._parents, t, e);
}
Yt.prototype.interrupt = Ws;
Yt.prototype.transition = Qu;
const yn = Math.PI, _n = 2 * yn, pt = 1e-6, ju = _n - pt;
function bi(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function tl(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return bi;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class xi {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? bi : tl(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, o, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, o) {
    if (e = +e, n = +n, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - e, c = i - n, p = a - e, h = s - n, l = p * p + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (l > pt) if (!(Math.abs(h * u - c * p) > pt) || !o)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let f = r - a, d = i - s, g = u * u + c * c, y = f * f + d * d, _ = Math.sqrt(g), $ = Math.sqrt(l), T = o * Math.tan((yn - Math.acos((g + l - y) / (2 * _ * $))) / 2), m = T / $, x = T / _;
      Math.abs(m - 1) > pt && this._append`L${e + m * p},${n + m * h}`, this._append`A${o},${o},0,0,${+(h * f > p * d)},${this._x1 = e + x * u},${this._y1 = n + x * c}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), c = e + s, p = n + u, h = 1 ^ a, l = a ? i - o : o - i;
    this._x1 === null ? this._append`M${c},${p}` : (Math.abs(this._x1 - c) > pt || Math.abs(this._y1 - p) > pt) && this._append`L${c},${p}`, r && (l < 0 && (l = l % _n + _n), l > ju ? this._append`A${r},${r},0,1,${h},${e - s},${n - u}A${r},${r},0,1,${h},${this._x1 = c},${this._y1 = p}` : l > pt && this._append`A${r},${r},0,${+(l >= yn)},${h},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function X() {
  return new xi();
}
X.prototype = xi.prototype;
function el(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function we(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function zt(t) {
  return t = we(Math.abs(t)), t ? t[1] : NaN;
}
function nl(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(n.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function rl(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var il = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function be(t) {
  if (!(e = il.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Nn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
be.prototype = Nn.prototype;
function Nn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Nn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ol(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Mi;
function al(t, e) {
  var n = we(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (Mi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + we(t, Math.max(0, e + o - 1))[0];
}
function _r(t, e) {
  var n = we(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const mr = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: el,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => _r(t * 100, e),
  r: _r,
  s: al,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function vr(t) {
  return t;
}
var wr = Array.prototype.map, br = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function sl(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? vr : nl(wr.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? vr : rl(wr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function c(h) {
    h = be(h);
    var l = h.fill, f = h.align, d = h.sign, g = h.symbol, y = h.zero, _ = h.width, $ = h.comma, T = h.precision, m = h.trim, x = h.type;
    x === "n" ? ($ = !0, x = "g") : mr[x] || (T === void 0 && (T = 12), m = !0, x = "g"), (y || l === "0" && f === "=") && (y = !0, l = "0", f = "=");
    var E = g === "$" ? n : g === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", P = g === "$" ? r : /[%p]/.test(x) ? a : "", C = mr[x], G = /[defgprs%]/.test(x);
    T = T === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function W(M) {
      var U = E, O = P, q, Jt, at;
      if (x === "c")
        O = C(M) + O, M = "";
      else {
        M = +M;
        var ht = M < 0 || 1 / M < 0;
        if (M = isNaN(M) ? u : C(Math.abs(M), T), m && (M = ol(M)), ht && +M == 0 && d !== "+" && (ht = !1), U = (ht ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + U, O = (x === "s" ? br[8 + Mi / 3] : "") + O + (ht && d === "(" ? ")" : ""), G) {
          for (q = -1, Jt = M.length; ++q < Jt; )
            if (at = M.charCodeAt(q), 48 > at || at > 57) {
              O = (at === 46 ? i + M.slice(q + 1) : M.slice(q)) + O, M = M.slice(0, q);
              break;
            }
        }
      }
      $ && !y && (M = e(M, 1 / 0));
      var xt = U.length + M.length + O.length, L = xt < _ ? new Array(_ - xt + 1).join(l) : "";
      switch ($ && y && (M = e(L + M, L.length ? _ - O.length : 1 / 0), L = ""), f) {
        case "<":
          M = U + M + O + L;
          break;
        case "=":
          M = U + L + M + O;
          break;
        case "^":
          M = L.slice(0, xt = L.length >> 1) + U + M + O + L.slice(xt);
          break;
        default:
          M = L + U + M + O;
          break;
      }
      return o(M);
    }
    return W.toString = function() {
      return h + "";
    }, W;
  }
  function p(h, l) {
    var f = c((h = be(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(zt(l) / 3))) * 3, g = Math.pow(10, -d), y = br[8 + d / 3];
    return function(_) {
      return f(g * _) + y;
    };
  }
  return {
    format: c,
    formatPrefix: p
  };
}
var re, ze, $i;
ul({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ul(t) {
  return re = sl(t), ze = re.format, $i = re.formatPrefix, re;
}
function ll(t) {
  return Math.max(0, -zt(Math.abs(t)));
}
function cl(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zt(e) / 3))) * 3 - zt(Math.abs(t)));
}
function fl(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, zt(e) - zt(t)) + 1;
}
function hl(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function pl(t) {
  return function() {
    return t;
  };
}
function dl(t) {
  return +t;
}
var xr = [0, 1];
function Tt(t) {
  return t;
}
function mn(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : pl(isNaN(e) ? NaN : 0.5);
}
function gl(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function yl(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = mn(i, r), o = n(a, o)) : (r = mn(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function _l(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = mn(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var u = yo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function ml(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function vl() {
  var t = xr, e = xr, n = qn, r, i, o, a = Tt, s, u, c;
  function p() {
    var l = Math.min(t.length, e.length);
    return a !== Tt && (a = gl(t[0], t[l - 1])), s = l > 2 ? _l : yl, u = c = null, h;
  }
  function h(l) {
    return l == null || isNaN(l = +l) ? o : (u || (u = s(t.map(r), e, n)))(r(a(l)));
  }
  return h.invert = function(l) {
    return a(i((c || (c = s(e, t.map(r), H)))(l)));
  }, h.domain = function(l) {
    return arguments.length ? (t = Array.from(l, dl), p()) : t.slice();
  }, h.range = function(l) {
    return arguments.length ? (e = Array.from(l), p()) : e.slice();
  }, h.rangeRound = function(l) {
    return e = Array.from(l), n = Rs, p();
  }, h.clamp = function(l) {
    return arguments.length ? (a = l ? !0 : Tt, p()) : a !== Tt;
  }, h.interpolate = function(l) {
    return arguments.length ? (n = l, p()) : n;
  }, h.unknown = function(l) {
    return arguments.length ? (o = l, h) : o;
  }, function(l, f) {
    return r = l, i = f, p();
  };
}
function wl() {
  return vl()(Tt, Tt);
}
function bl(t, e, n, r) {
  var i = bo(t, e, n), o;
  switch (r = be(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = cl(i, a)) && (r.precision = o), $i(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = fl(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = ll(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ze(r);
}
function xl(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return wo(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return bl(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, c, p = 10;
    for (s < a && (c = a, a = s, s = c, c = i, i = o, o = c); p-- > 0; ) {
      if (c = an(a, s, n), c === u)
        return r[i] = a, r[o] = s, e(r);
      if (c > 0)
        a = Math.floor(a / c) * c, s = Math.ceil(s / c) * c;
      else if (c < 0)
        a = Math.ceil(a * c) / c, s = Math.floor(s * c) / c;
      else
        break;
      u = c;
    }
    return t;
  }, t;
}
function lt() {
  var t = wl();
  return t.copy = function() {
    return ml(t, lt());
  }, hl.apply(t, arguments), xl(t);
}
function Dt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Dt.prototype = {
  constructor: Dt,
  scale: function(t) {
    return t === 1 ? this : new Dt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Dt(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Dt.prototype;
var Ti = typeof global == "object" && global && global.Object === Object && global, Ml = typeof self == "object" && self && self.Object === Object && self, rt = Ti || Ml || Function("return this")(), K = rt.Symbol, Ai = Object.prototype, $l = Ai.hasOwnProperty, Tl = Ai.toString, kt = K ? K.toStringTag : void 0;
function Al(t) {
  var e = $l.call(t, kt), n = t[kt];
  try {
    t[kt] = void 0;
    var r = !0;
  } catch {
  }
  var i = Tl.call(t);
  return r && (e ? t[kt] = n : delete t[kt]), i;
}
var Sl = Object.prototype, El = Sl.toString;
function Pl(t) {
  return El.call(t);
}
var zl = "[object Null]", Cl = "[object Undefined]", Mr = K ? K.toStringTag : void 0;
function vt(t) {
  return t == null ? t === void 0 ? Cl : zl : Mr && Mr in Object(t) ? Al(t) : Pl(t);
}
function ct(t) {
  return t != null && typeof t == "object";
}
var Ol = "[object Symbol]";
function Vt(t) {
  return typeof t == "symbol" || ct(t) && vt(t) == Ol;
}
function Wt(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var D = Array.isArray, $r = K ? K.prototype : void 0, Tr = $r ? $r.toString : void 0;
function Si(t) {
  if (typeof t == "string")
    return t;
  if (D(t))
    return Wt(t, Si) + "";
  if (Vt(t))
    return Tr ? Tr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var kl = /\s/;
function Il(t) {
  for (var e = t.length; e-- && kl.test(t.charAt(e)); )
    ;
  return e;
}
var Rl = /^\s+/;
function Dl(t) {
  return t && t.slice(0, Il(t) + 1).replace(Rl, "");
}
function nt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ar = NaN, Fl = /^[-+]0x[0-9a-f]+$/i, Ll = /^0b[01]+$/i, ql = /^0o[0-7]+$/i, Hl = parseInt;
function Bl(t) {
  if (typeof t == "number")
    return t;
  if (Vt(t))
    return Ar;
  if (nt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Dl(t);
  var n = Ll.test(t);
  return n || ql.test(t) ? Hl(t.slice(2), n ? 2 : 8) : Fl.test(t) ? Ar : +t;
}
var Nl = 1 / 0, Xl = 17976931348623157e292;
function je(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Bl(t), t === Nl || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Xl;
  }
  return t === t ? t : 0;
}
function Ce(t) {
  return t;
}
var Gl = "[object AsyncFunction]", Ul = "[object Function]", Yl = "[object GeneratorFunction]", Kl = "[object Proxy]";
function Ei(t) {
  if (!nt(t))
    return !1;
  var e = vt(t);
  return e == Ul || e == Yl || e == Gl || e == Kl;
}
var tn = rt["__core-js_shared__"], Sr = function() {
  var t = /[^.]+$/.exec(tn && tn.keys && tn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Vl(t) {
  return !!Sr && Sr in t;
}
var Wl = Function.prototype, Zl = Wl.toString;
function wt(t) {
  if (t != null) {
    try {
      return Zl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Jl = /[\\^$.*+?()[\]{}|]/g, Ql = /^\[object .+?Constructor\]$/, jl = Function.prototype, tc = Object.prototype, ec = jl.toString, nc = tc.hasOwnProperty, rc = RegExp(
  "^" + ec.call(nc).replace(Jl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ic(t) {
  if (!nt(t) || Vl(t))
    return !1;
  var e = Ei(t) ? rc : Ql;
  return e.test(wt(t));
}
function oc(t, e) {
  return t == null ? void 0 : t[e];
}
function bt(t, e) {
  var n = oc(t, e);
  return ic(n) ? n : void 0;
}
var vn = bt(rt, "WeakMap");
function ac(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function sc(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var uc = 800, lc = 16, cc = Date.now;
function fc(t) {
  var e = 0, n = 0;
  return function() {
    var r = cc(), i = lc - (r - n);
    if (n = r, i > 0) {
      if (++e >= uc)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function hc(t) {
  return function() {
    return t;
  };
}
var xe = function() {
  try {
    var t = bt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), pc = xe ? function(t, e) {
  return xe(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hc(e),
    writable: !0
  });
} : Ce, dc = fc(pc);
function gc(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var yc = 9007199254740991, _c = /^(?:0|[1-9]\d*)$/;
function Oe(t, e) {
  var n = typeof t;
  return e = e ?? yc, !!e && (n == "number" || n != "symbol" && _c.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function mc(t, e, n) {
  e == "__proto__" && xe ? xe(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function ke(t, e) {
  return t === e || t !== t && e !== e;
}
var vc = Object.prototype, wc = vc.hasOwnProperty;
function bc(t, e, n) {
  var r = t[e];
  (!(wc.call(t, e) && ke(r, n)) || n === void 0 && !(e in t)) && mc(t, e, n);
}
var Er = Math.max;
function xc(t, e, n) {
  return e = Er(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = Er(r.length - e, 0), a = Array(o); ++i < o; )
      a[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(a), ac(t, this, s);
  };
}
function Mc(t, e) {
  return dc(xc(t, e, Ce), t + "");
}
var $c = 9007199254740991;
function Xn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= $c;
}
function Ct(t) {
  return t != null && Xn(t.length) && !Ei(t);
}
function Tc(t, e, n) {
  if (!nt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Ct(n) && Oe(e, n.length) : r == "string" && e in n) ? ke(n[e], t) : !1;
}
var Ac = Object.prototype;
function Pi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Ac;
  return t === n;
}
function zi(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Sc = "[object Arguments]";
function Pr(t) {
  return ct(t) && vt(t) == Sc;
}
var Ci = Object.prototype, Ec = Ci.hasOwnProperty, Pc = Ci.propertyIsEnumerable, Gn = Pr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Pr : function(t) {
  return ct(t) && Ec.call(t, "callee") && !Pc.call(t, "callee");
};
function zc() {
  return !1;
}
var Oi = typeof exports == "object" && exports && !exports.nodeType && exports, zr = Oi && typeof module == "object" && module && !module.nodeType && module, Cc = zr && zr.exports === Oi, Cr = Cc ? rt.Buffer : void 0, Oc = Cr ? Cr.isBuffer : void 0, wn = Oc || zc, kc = "[object Arguments]", Ic = "[object Array]", Rc = "[object Boolean]", Dc = "[object Date]", Fc = "[object Error]", Lc = "[object Function]", qc = "[object Map]", Hc = "[object Number]", Bc = "[object Object]", Nc = "[object RegExp]", Xc = "[object Set]", Gc = "[object String]", Uc = "[object WeakMap]", Yc = "[object ArrayBuffer]", Kc = "[object DataView]", Vc = "[object Float32Array]", Wc = "[object Float64Array]", Zc = "[object Int8Array]", Jc = "[object Int16Array]", Qc = "[object Int32Array]", jc = "[object Uint8Array]", tf = "[object Uint8ClampedArray]", ef = "[object Uint16Array]", nf = "[object Uint32Array]", A = {};
A[Vc] = A[Wc] = A[Zc] = A[Jc] = A[Qc] = A[jc] = A[tf] = A[ef] = A[nf] = !0;
A[kc] = A[Ic] = A[Yc] = A[Rc] = A[Kc] = A[Dc] = A[Fc] = A[Lc] = A[qc] = A[Hc] = A[Bc] = A[Nc] = A[Xc] = A[Gc] = A[Uc] = !1;
function rf(t) {
  return ct(t) && Xn(t.length) && !!A[vt(t)];
}
function of(t) {
  return function(e) {
    return t(e);
  };
}
var ki = typeof exports == "object" && exports && !exports.nodeType && exports, Ft = ki && typeof module == "object" && module && !module.nodeType && module, af = Ft && Ft.exports === ki, en = af && Ti.process, Or = function() {
  try {
    var t = Ft && Ft.require && Ft.require("util").types;
    return t || en && en.binding && en.binding("util");
  } catch {
  }
}(), kr = Or && Or.isTypedArray, Ii = kr ? of(kr) : rf, sf = Object.prototype, uf = sf.hasOwnProperty;
function Ri(t, e) {
  var n = D(t), r = !n && Gn(t), i = !n && !r && wn(t), o = !n && !r && !i && Ii(t), a = n || r || i || o, s = a ? zi(t.length, String) : [], u = s.length;
  for (var c in t)
    (e || uf.call(t, c)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Oe(c, u))) && s.push(c);
  return s;
}
function Di(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var lf = Di(Object.keys, Object), cf = Object.prototype, ff = cf.hasOwnProperty;
function hf(t) {
  if (!Pi(t))
    return lf(t);
  var e = [];
  for (var n in Object(t))
    ff.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Ie(t) {
  return Ct(t) ? Ri(t) : hf(t);
}
function pf(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var df = Object.prototype, gf = df.hasOwnProperty;
function yf(t) {
  if (!nt(t))
    return pf(t);
  var e = Pi(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !gf.call(t, r)) || n.push(r);
  return n;
}
function _f(t) {
  return Ct(t) ? Ri(t, !0) : yf(t);
}
var mf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vf = /^\w*$/;
function Un(t, e) {
  if (D(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Vt(t) ? !0 : vf.test(t) || !mf.test(t) || e != null && t in Object(e);
}
var Xt = bt(Object, "create");
function wf() {
  this.__data__ = Xt ? Xt(null) : {}, this.size = 0;
}
function bf(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var xf = "__lodash_hash_undefined__", Mf = Object.prototype, $f = Mf.hasOwnProperty;
function Tf(t) {
  var e = this.__data__;
  if (Xt) {
    var n = e[t];
    return n === xf ? void 0 : n;
  }
  return $f.call(e, t) ? e[t] : void 0;
}
var Af = Object.prototype, Sf = Af.hasOwnProperty;
function Ef(t) {
  var e = this.__data__;
  return Xt ? e[t] !== void 0 : Sf.call(e, t);
}
var Pf = "__lodash_hash_undefined__";
function zf(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Xt && e === void 0 ? Pf : e, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = wf;
mt.prototype.delete = bf;
mt.prototype.get = Tf;
mt.prototype.has = Ef;
mt.prototype.set = zf;
function Cf() {
  this.__data__ = [], this.size = 0;
}
function Re(t, e) {
  for (var n = t.length; n--; )
    if (ke(t[n][0], e))
      return n;
  return -1;
}
var Of = Array.prototype, kf = Of.splice;
function If(t) {
  var e = this.__data__, n = Re(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : kf.call(e, n, 1), --this.size, !0;
}
function Rf(t) {
  var e = this.__data__, n = Re(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Df(t) {
  return Re(this.__data__, t) > -1;
}
function Ff(t, e) {
  var n = this.__data__, r = Re(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function it(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = Cf;
it.prototype.delete = If;
it.prototype.get = Rf;
it.prototype.has = Df;
it.prototype.set = Ff;
var Gt = bt(rt, "Map");
function Lf() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Gt || it)(),
    string: new mt()
  };
}
function qf(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function De(t, e) {
  var n = t.__data__;
  return qf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Hf(t) {
  var e = De(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Bf(t) {
  return De(this, t).get(t);
}
function Nf(t) {
  return De(this, t).has(t);
}
function Xf(t, e) {
  var n = De(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function ot(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = Lf;
ot.prototype.delete = Hf;
ot.prototype.get = Bf;
ot.prototype.has = Nf;
ot.prototype.set = Xf;
var Gf = "Expected a function";
function Yn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Gf);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Yn.Cache || ot)(), n;
}
Yn.Cache = ot;
var Uf = 500;
function Yf(t) {
  var e = Yn(t, function(r) {
    return n.size === Uf && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Kf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vf = /\\(\\)?/g, Wf = Yf(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Kf, function(n, r, i, o) {
    e.push(i ? o.replace(Vf, "$1") : r || n);
  }), e;
});
function Fe(t) {
  return t == null ? "" : Si(t);
}
function Le(t, e) {
  return D(t) ? t : Un(t, e) ? [t] : Wf(Fe(t));
}
function Zt(t) {
  if (typeof t == "string" || Vt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Kn(t, e) {
  e = Le(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Zt(e[n++])];
  return n && n == r ? t : void 0;
}
function Zf(t, e, n) {
  var r = t == null ? void 0 : Kn(t, e);
  return r === void 0 ? n : r;
}
function qe(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Ir = K ? K.isConcatSpreadable : void 0;
function Jf(t) {
  return D(t) || Gn(t) || !!(Ir && t && t[Ir]);
}
function Fi(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = Jf), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? qe(i, s) : i[i.length] = s;
  }
  return i;
}
function Qf(t) {
  var e = t == null ? 0 : t.length;
  return e ? Fi(t) : [];
}
var jf = Di(Object.getPrototypeOf, Object);
function th(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + e];
  return o;
}
function eh(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, th(t, e, n);
}
var nh = "\\ud800-\\udfff", rh = "\\u0300-\\u036f", ih = "\\ufe20-\\ufe2f", oh = "\\u20d0-\\u20ff", ah = rh + ih + oh, sh = "\\ufe0e\\ufe0f", uh = "\\u200d", lh = RegExp("[" + uh + nh + ah + sh + "]");
function Li(t) {
  return lh.test(t);
}
function ch(t) {
  return t.split("");
}
var qi = "\\ud800-\\udfff", fh = "\\u0300-\\u036f", hh = "\\ufe20-\\ufe2f", ph = "\\u20d0-\\u20ff", dh = fh + hh + ph, gh = "\\ufe0e\\ufe0f", yh = "[" + qi + "]", bn = "[" + dh + "]", xn = "\\ud83c[\\udffb-\\udfff]", _h = "(?:" + bn + "|" + xn + ")", Hi = "[^" + qi + "]", Bi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ni = "[\\ud800-\\udbff][\\udc00-\\udfff]", mh = "\\u200d", Xi = _h + "?", Gi = "[" + gh + "]?", vh = "(?:" + mh + "(?:" + [Hi, Bi, Ni].join("|") + ")" + Gi + Xi + ")*", wh = Gi + Xi + vh, bh = "(?:" + [Hi + bn + "?", bn, Bi, Ni, yh].join("|") + ")", xh = RegExp(xn + "(?=" + xn + ")|" + bh + wh, "g");
function Mh(t) {
  return t.match(xh) || [];
}
function $h(t) {
  return Li(t) ? Mh(t) : ch(t);
}
function Th(t) {
  return function(e) {
    e = Fe(e);
    var n = Li(e) ? $h(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? eh(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var Ah = Th("toUpperCase");
function Sh(t) {
  return Ah(Fe(t).toLowerCase());
}
function Eh() {
  this.__data__ = new it(), this.size = 0;
}
function Ph(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function zh(t) {
  return this.__data__.get(t);
}
function Ch(t) {
  return this.__data__.has(t);
}
var Oh = 200;
function kh(t, e) {
  var n = this.__data__;
  if (n instanceof it) {
    var r = n.__data__;
    if (!Gt || r.length < Oh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new ot(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function tt(t) {
  var e = this.__data__ = new it(t);
  this.size = e.size;
}
tt.prototype.clear = Eh;
tt.prototype.delete = Ph;
tt.prototype.get = zh;
tt.prototype.has = Ch;
tt.prototype.set = kh;
function Vn(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function Ui() {
  return [];
}
var Ih = Object.prototype, Rh = Ih.propertyIsEnumerable, Rr = Object.getOwnPropertySymbols, Yi = Rr ? function(t) {
  return t == null ? [] : (t = Object(t), Vn(Rr(t), function(e) {
    return Rh.call(t, e);
  }));
} : Ui, Dh = Object.getOwnPropertySymbols, Fh = Dh ? function(t) {
  for (var e = []; t; )
    qe(e, Yi(t)), t = jf(t);
  return e;
} : Ui;
function Ki(t, e, n) {
  var r = e(t);
  return D(t) ? r : qe(r, n(t));
}
function Dr(t) {
  return Ki(t, Ie, Yi);
}
function Lh(t) {
  return Ki(t, _f, Fh);
}
var Mn = bt(rt, "DataView"), $n = bt(rt, "Promise"), Tn = bt(rt, "Set"), Fr = "[object Map]", qh = "[object Object]", Lr = "[object Promise]", qr = "[object Set]", Hr = "[object WeakMap]", Br = "[object DataView]", Hh = wt(Mn), Bh = wt(Gt), Nh = wt($n), Xh = wt(Tn), Gh = wt(vn), J = vt;
(Mn && J(new Mn(new ArrayBuffer(1))) != Br || Gt && J(new Gt()) != Fr || $n && J($n.resolve()) != Lr || Tn && J(new Tn()) != qr || vn && J(new vn()) != Hr) && (J = function(t) {
  var e = vt(t), n = e == qh ? t.constructor : void 0, r = n ? wt(n) : "";
  if (r)
    switch (r) {
      case Hh:
        return Br;
      case Bh:
        return Fr;
      case Nh:
        return Lr;
      case Xh:
        return qr;
      case Gh:
        return Hr;
    }
  return e;
});
var Nr = rt.Uint8Array;
function Uh() {
  var t = arguments.length;
  if (!t)
    return [];
  for (var e = Array(t - 1), n = arguments[0], r = t; r--; )
    e[r - 1] = arguments[r];
  return qe(D(n) ? sc(n) : [n], Fi(e));
}
var Yh = "__lodash_hash_undefined__";
function Kh(t) {
  return this.__data__.set(t, Yh), this;
}
function Vh(t) {
  return this.__data__.has(t);
}
function Me(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new ot(); ++e < n; )
    this.add(t[e]);
}
Me.prototype.add = Me.prototype.push = Kh;
Me.prototype.has = Vh;
function Wh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Zh(t, e) {
  return t.has(e);
}
var Jh = 1, Qh = 2;
function Vi(t, e, n, r, i, o) {
  var a = n & Jh, s = t.length, u = e.length;
  if (s != u && !(a && u > s))
    return !1;
  var c = o.get(t), p = o.get(e);
  if (c && p)
    return c == e && p == t;
  var h = -1, l = !0, f = n & Qh ? new Me() : void 0;
  for (o.set(t, e), o.set(e, t); ++h < s; ) {
    var d = t[h], g = e[h];
    if (r)
      var y = a ? r(g, d, h, e, t, o) : r(d, g, h, t, e, o);
    if (y !== void 0) {
      if (y)
        continue;
      l = !1;
      break;
    }
    if (f) {
      if (!Wh(e, function(_, $) {
        if (!Zh(f, $) && (d === _ || i(d, _, n, r, o)))
          return f.push($);
      })) {
        l = !1;
        break;
      }
    } else if (!(d === g || i(d, g, n, r, o))) {
      l = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), l;
}
function Wi(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function jh(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var tp = 1, ep = 2, np = "[object Boolean]", rp = "[object Date]", ip = "[object Error]", op = "[object Map]", ap = "[object Number]", sp = "[object RegExp]", up = "[object Set]", lp = "[object String]", cp = "[object Symbol]", fp = "[object ArrayBuffer]", hp = "[object DataView]", Xr = K ? K.prototype : void 0, nn = Xr ? Xr.valueOf : void 0;
function pp(t, e, n, r, i, o, a) {
  switch (n) {
    case hp:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case fp:
      return !(t.byteLength != e.byteLength || !o(new Nr(t), new Nr(e)));
    case np:
    case rp:
    case ap:
      return ke(+t, +e);
    case ip:
      return t.name == e.name && t.message == e.message;
    case sp:
    case lp:
      return t == e + "";
    case op:
      var s = Wi;
    case up:
      var u = r & tp;
      if (s || (s = jh), t.size != e.size && !u)
        return !1;
      var c = a.get(t);
      if (c)
        return c == e;
      r |= ep, a.set(t, e);
      var p = Vi(s(t), s(e), r, i, o, a);
      return a.delete(t), p;
    case cp:
      if (nn)
        return nn.call(t) == nn.call(e);
  }
  return !1;
}
var dp = 1, gp = Object.prototype, yp = gp.hasOwnProperty;
function _p(t, e, n, r, i, o) {
  var a = n & dp, s = Dr(t), u = s.length, c = Dr(e), p = c.length;
  if (u != p && !a)
    return !1;
  for (var h = u; h--; ) {
    var l = s[h];
    if (!(a ? l in e : yp.call(e, l)))
      return !1;
  }
  var f = o.get(t), d = o.get(e);
  if (f && d)
    return f == e && d == t;
  var g = !0;
  o.set(t, e), o.set(e, t);
  for (var y = a; ++h < u; ) {
    l = s[h];
    var _ = t[l], $ = e[l];
    if (r)
      var T = a ? r($, _, l, e, t, o) : r(_, $, l, t, e, o);
    if (!(T === void 0 ? _ === $ || i(_, $, n, r, o) : T)) {
      g = !1;
      break;
    }
    y || (y = l == "constructor");
  }
  if (g && !y) {
    var m = t.constructor, x = e.constructor;
    m != x && "constructor" in t && "constructor" in e && !(typeof m == "function" && m instanceof m && typeof x == "function" && x instanceof x) && (g = !1);
  }
  return o.delete(t), o.delete(e), g;
}
var mp = 1, Gr = "[object Arguments]", Ur = "[object Array]", ie = "[object Object]", vp = Object.prototype, Yr = vp.hasOwnProperty;
function wp(t, e, n, r, i, o) {
  var a = D(t), s = D(e), u = a ? Ur : J(t), c = s ? Ur : J(e);
  u = u == Gr ? ie : u, c = c == Gr ? ie : c;
  var p = u == ie, h = c == ie, l = u == c;
  if (l && wn(t)) {
    if (!wn(e))
      return !1;
    a = !0, p = !1;
  }
  if (l && !p)
    return o || (o = new tt()), a || Ii(t) ? Vi(t, e, n, r, i, o) : pp(t, e, u, n, r, i, o);
  if (!(n & mp)) {
    var f = p && Yr.call(t, "__wrapped__"), d = h && Yr.call(e, "__wrapped__");
    if (f || d) {
      var g = f ? t.value() : t, y = d ? e.value() : e;
      return o || (o = new tt()), i(g, y, n, r, o);
    }
  }
  return l ? (o || (o = new tt()), _p(t, e, n, r, i, o)) : !1;
}
function Wn(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ct(t) && !ct(e) ? t !== t && e !== e : wp(t, e, n, r, Wn, i);
}
var bp = 1, xp = 2;
function Mp(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], u = t[s], c = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var p = new tt(), h;
      if (!(h === void 0 ? Wn(c, u, bp | xp, r, p) : h))
        return !1;
    }
  }
  return !0;
}
function Zi(t) {
  return t === t && !nt(t);
}
function $p(t) {
  for (var e = Ie(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Zi(i)];
  }
  return e;
}
function Ji(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Tp(t) {
  var e = $p(t);
  return e.length == 1 && e[0][2] ? Ji(e[0][0], e[0][1]) : function(n) {
    return n === t || Mp(n, t, e);
  };
}
function Ap(t, e) {
  return t != null && e in Object(t);
}
function Qi(t, e, n) {
  e = Le(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = Zt(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Xn(i) && Oe(a, i) && (D(t) || Gn(t)));
}
function Sp(t, e) {
  return t != null && Qi(t, e, Ap);
}
var Ep = 1, Pp = 2;
function zp(t, e) {
  return Un(t) && Zi(e) ? Ji(Zt(t), e) : function(n) {
    var r = Zf(n, t);
    return r === void 0 && r === e ? Sp(n, t) : Wn(e, r, Ep | Pp);
  };
}
function ji(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Cp(t) {
  return function(e) {
    return Kn(e, t);
  };
}
function Op(t) {
  return Un(t) ? ji(Zt(t)) : Cp(t);
}
function He(t) {
  return typeof t == "function" ? t : t == null ? Ce : typeof t == "object" ? D(t) ? zp(t[0], t[1]) : Tp(t) : Op(t);
}
function kp(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var Ip = kp();
function Rp(t, e) {
  return t && Ip(t, e, Ie);
}
function Dp(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Ct(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var Zn = Dp(Rp);
function Fp(t) {
  return ct(t) && Ct(t);
}
function Lp(t) {
  return typeof t == "function" ? t : Ce;
}
function Ut(t, e) {
  var n = D(t) ? gc : Zn;
  return n(t, Lp(e));
}
function qp(t, e) {
  return Wt(e, function(n) {
    return [n, t[n]];
  });
}
function Hp(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Bp = "[object Map]", Np = "[object Set]";
function Xp(t) {
  return function(e) {
    var n = J(e);
    return n == Bp ? Wi(e) : n == Np ? Hp(e) : qp(e, t(e));
  };
}
var to = Xp(Ie);
function Gp(t, e) {
  var n = [];
  return Zn(t, function(r, i, o) {
    e(r, i, o) && n.push(r);
  }), n;
}
function eo(t, e) {
  var n = D(t) ? Vn : Gp;
  return n(t, He(e));
}
function Up(t, e) {
  var n = -1, r = Ct(t) ? Array(t.length) : [];
  return Zn(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function ft(t, e) {
  var n = D(t) ? Wt : Up;
  return n(t, He(e));
}
function Yp(t, e) {
  return t > e;
}
var Kp = Object.prototype, Vp = Kp.hasOwnProperty;
function Wp(t, e) {
  return t != null && Vp.call(t, e);
}
function An(t, e) {
  return t != null && Qi(t, e, Wp);
}
var Zp = "[object Boolean]";
function Jp(t) {
  return t === !0 || t === !1 || ct(t) && vt(t) == Zp;
}
function Qp(t, e, n) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var o = t[r], a = e(o);
    if (a != null && (s === void 0 ? a === a && !Vt(a) : n(a, s)))
      var s = a, u = o;
  }
  return u;
}
function jp(t, e) {
  return t && t.length ? Qp(t, He(e), Yp) : void 0;
}
function td(t, e, n, r) {
  if (!nt(t))
    return t;
  e = Le(e, t);
  for (var i = -1, o = e.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Zt(e[i]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var p = s[u];
      c = void 0, c === void 0 && (c = nt(p) ? p : Oe(e[i + 1]) ? [] : {});
    }
    bc(s, u, c), s = s[u];
  }
  return t;
}
function ed(t, e, n) {
  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
    var a = e[r], s = Kn(t, a);
    n(s, a) && td(o, Le(a, t), s);
  }
  return o;
}
function Be(t, e) {
  if (t == null)
    return {};
  var n = Wt(Lh(t), function(r) {
    return [r];
  });
  return e = He(e), ed(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var nd = Math.ceil, rd = Math.max;
function id(t, e, n, r) {
  for (var i = -1, o = rd(nd((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function od(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && Tc(e, n, r) && (n = r = void 0), e = je(e), n === void 0 ? (n = e, e = 0) : n = je(n), r = r === void 0 ? e < n ? 1 : -1 : je(r), id(e, n, r);
  };
}
var ut = od();
function ad() {
  var t = arguments, e = Fe(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
var sd = Math.max;
function ud(t) {
  if (!(t && t.length))
    return [];
  var e = 0;
  return t = Vn(t, function(n) {
    if (Fp(n))
      return e = sd(n.length, e), !0;
  }), zi(e, function(n) {
    return Wt(t, ji(n));
  });
}
var $e = Mc(ud);
const ld = (t, e, n = 12, r = 12) => {
  const i = lt().domain([0, n]).range([0, t]), o = lt().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return ut((n + 1) * (r + 1)).map(function(u) {
        return { m: u % (n + 1), n: Math.floor(u / (n + 1)), x: i(u % (n + 1)), y: o(Math.floor(u / (n + 1))) };
      });
    },
    position: function(u, c) {
      typeof u == "number" && (u = [u]), typeof c == "number" && (c = [c]);
      const p = Qf(ft(c, function(h) {
        return ft(
          u,
          function(l) {
            return { x: i(l), y: o(h) };
          }
        );
      }));
      return p.length == 1 ? p[0] : p;
    }
  };
}, cd = "_widget_18g36_1", fd = "_label_18g36_19", hd = "_lit_18g36_24", pd = "_button_18g36_29", dd = "_symbol_18g36_29", gd = "_radio_18g36_29", yd = "_radiobutton_18g36_29", _d = "_selected_18g36_35", md = "_toggle_18g36_35", vd = "_slider_18g36_44", wd = "_track_18g36_44", bd = "_track_overlay_18g36_48", xd = "_handle_18g36_55", v = {
  widget: cd,
  label: fd,
  lit: hd,
  button: pd,
  symbol: dd,
  radio: gd,
  radiobutton: yd,
  selected: _d,
  toggle: md,
  slider: vd,
  track: wd,
  track_overlay: bd,
  handle: xd
}, Ne = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Jn = (t, e, n) => {
  var r, i, o, a;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Md = (t = 1) => {
  const e = X();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, $d = (t = 1) => {
  const e = X(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Td = (t = 1) => {
  const e = X();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Ad = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = X();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, Sd = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], c = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(u[0] + c[0], u[1] + c[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, Ed = (t = 1) => {
  const e = X(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, Pd = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], c = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(u[0] + c[0], u[1] + c[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, zd = (t = 1) => {
  var e = X(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, Cd = (t = 1) => {
  const e = X(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, Sn = (t) => {
  switch (t) {
    case "play":
      return Md;
    case "forward":
      return $d;
    case "back":
      return Td;
    case "pause":
      return Ad;
    case "reload":
      return Sd;
    case "capture":
      return Ed;
    case "rewind":
      return Pd;
    case "stop":
      return zd;
    case "push":
      return Cd;
  }
}, Qn = () => {
  const t = "button";
  var e = Ne(), n = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, c = function(d) {
  }, p = ["play"], h = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return c = d, this;
      c(d);
    },
    actions: function(d) {
      return typeof d > "u" ? p : (p = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    click: function() {
      h = (h + 1) % p.length, c(), S(this.parentNode).select("." + v.symbol).attr("d", Sn(p[h])(r * n));
    },
    press: function(d) {
      h = (h + 1) % p.length, c(), d.select("#button_" + e).select("." + v.symbol).attr("d", Sn(p[h])(r * n));
    }
  };
}, no = () => {
  const t = "slider", e = ze(".3f");
  var n = Ne(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", c = null, p = function(_) {
  }, h = function(_) {
  }, l = [0, 1], f = 0, d = null, g = lt().domain(l).range([0, r]).clamp(!0);
  const y = function(_, $, T = l) {
    const m = _.select("#slider_" + n);
    g.domain(T), f = $, m.selectAll("." + v.handle).transition().attr("cx", g($)), a && m.select("." + v.label).text(d + " = " + e(f)), p(), h();
  };
  return {
    type: t,
    scale: g,
    id: function(_) {
      return typeof _ > "u" ? n : (n = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? c : (c = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return p = _, this;
      p(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return h = _, this;
      h(_);
    },
    range: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? f : (f = _, this);
    },
    reset: y,
    click: y
  };
}, Od = () => {
  const t = "toggle";
  var e = Ne(), n = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(h) {
  }, u = 0;
  return {
    type: t,
    id: function(h) {
      return typeof h > "u" ? e : (e = h, this);
    },
    size: function(h) {
      return typeof h > "u" ? n : (n = h, this);
    },
    position: function(h) {
      return typeof h > "u" ? r : (r = h, this);
    },
    x: function(h) {
      return typeof h > "u" ? r.x : (r.x = h, this);
    },
    y: function(h) {
      return typeof h > "u" ? r.y : (r.y = h, this);
    },
    label: function(h) {
      return typeof h > "u" ? i : (i = h, this);
    },
    labelposition: function(h) {
      return typeof h > "u" ? o : (o = h, this);
    },
    fontsize: function(h) {
      return typeof h > "u" ? a : (a = h, this);
    },
    update: function(h) {
      if (typeof h == "function")
        return s = h, this;
      s(h);
    },
    value: function(h) {
      return typeof h > "u" ? u : (u = h, this);
    },
    click: function() {
      u = !u;
      const h = S(this.parentNode);
      h.select("." + v.handle).transition().attr("cx", u ? 2 * n : 0), h.classed(v.selected, u), s();
    },
    reset: function(h, l) {
      u = l;
      const f = h.select("#toggle_" + e);
      f.selectAll("." + v.handle).transition().attr("cx", u ? 2 * n : 0), f.classed(v.selected, u), s();
    }
  };
}, kd = () => {
  const t = "radio";
  var e = Ne(), n = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", c = null, p = function(g) {
  }, h = [], l = 0;
  return {
    type: t,
    id: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    buttonsize: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    buttonpadding: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    orientation: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    shape: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return p = g, this;
      p(g);
    },
    choices: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    click: function(g, y) {
      l = y, S(this.parentNode).selectAll("." + v.symbol).classed(v.selected, (_) => _ == l), p();
    },
    reset: function(g, y) {
      l = y, g.select("#radio_" + e).selectAll("." + v.symbol).classed(v.selected, (_) => _ == l), p();
    }
  };
}, Id = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", v.widget + " " + v.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", v.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(v.lit, !0), S(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(v.lit, !1), S(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), a.append("path").attr("d", Sn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", v.symbol), r) {
    const u = Jn(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, ro = (t, e) => {
  const n = X();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, Rd = (t, e) => {
  const n = ze(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", v.widget + " " + v.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const c = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", ro(t.size(), t.girth())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * c).attr("height", 2 * c).attr("transform", "translate(" + -c + "," + -c + ")").attr("class", v.track_overlay).on("click", function(d) {
    const g = un(d, this)[0];
    t.value(a.invert(g)), t.update(), t.update_end(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + n(t.value()));
  }).call(
    hs().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var p, h, l, f = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Qt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Qt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Qt([t.girth() / 2, t.knob()]) + 7 : -Qt([t.girth() / 2, t.knob()]) - 7, p = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, l = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", f = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", v.label).style("text-anchor", l).style("alignment-baseline", f).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + p + "," + h + ")"), u;
}, Dd = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", v.widget + " " + v.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(v.selected, t.value() == 1);
  if (s.append("path").attr("d", ro(2 * t.size(), 2 * t.size())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", v.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Jn(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, Fd = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = xo(a), u = lt().domain([0, a - 1]).range([0, t.size()]), c = lt().domain([0, a - 1]).range([0, t.size()]), p = document.createElementNS("http://www.w3.org/2000/svg", "g"), l = S(p).attr("class", v.widget + " " + v.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + v.radiobutton).data(s).enter().append("g").attr("class", v.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + c(y) + ")" : "translate(" + u(y) + ",0)");
  var f, d;
  t.shape() == "rect" ? (f = l.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = l.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = l.append("circle").attr("r", i / 2), d = l.append("circle").attr("r", o / 2)), f.attr("class", v.background).on("mouseover", function() {
    S(this).classed(v.lit, !0), S(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(v.lit, !1), S(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), d.attr("class", v.symbol), d.filter((y) => y == t.value()).classed(v.selected, !0), l.on("click", t.click);
  const g = Jn(t.buttonsize(), t.buttonsize(), r);
  return l.append("text").attr("class", v.label).text(function(y, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), p;
}, oe = (t, e) => {
  switch (t.type) {
    case "button":
      return Id(t);
    case "slider":
      return Rd(t);
    case "radio":
      return Fd(t);
    case "toggle":
      return Dd(t);
  }
}, Ld = (t, e) => {
  const n = ld(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = S("#" + t).classed("explorable " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height);
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && o.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && o.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: n };
}, w = {
  widgets: {
    payoff_slider_size: 180,
    payoff_slider_gap: 1.5,
    payoff_slider_hgap: 6,
    payoff_slider_girth: 12,
    payoff_slider_knob: 14,
    payoff_slider_anchor: { x: 0.5, y: 10 },
    payoff_slider_labels: {
      T: "T",
      R: "R",
      S: "S",
      P: "P"
    },
    slider_size: 180,
    slider_girth: 12,
    slider_knob: 14,
    slider_anchor: { x: 6.5, y: 5.5 },
    toggle_anchor: { x: 5.5, y: 3 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 2.5, y: 2 },
    backbutton_anchor: { x: 3.5, y: 5 },
    resetbutton_anchor: { x: 1.5, y: 5 },
    radio_size: 40,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "rect",
    lattice_anchor: { x: 1, y: 7 },
    ic_anchor: { x: 6.5, y: 7 },
    legend_anchor: { x: 5.5, y: 1 },
    legend_gap: 1.75,
    legend_size: 10,
    legend_vgap: 0.5
  },
  simulation: {
    delay: 10,
    colors: {
      D: "black",
      DD: "black",
      C: "teal",
      CC: "teal",
      CD: "aqua",
      DC: "white"
    },
    legend: {
      D: "D",
      C: "C",
      DD: "D→D",
      CC: "C→C",
      CD: "D→C",
      DC: "C→D"
    }
  }
}, b = {
  N: { hex: 50, square: 100 },
  boundary: "periodic",
  T: {
    range: [1.5, 2.5],
    default: 1.85,
    group: "payoff"
  },
  R: {
    range: [0.5, 1],
    default: 1,
    group: "payoff"
  },
  S: {
    range: [0, 0.1],
    default: 0,
    group: "payoff"
  },
  P: {
    range: [0, 0.2],
    default: 0.05,
    group: "payoff"
  },
  defector_concentration: {
    range: [0, 1],
    default: 0.1
  },
  initial_condition: {
    choices: ["random", "defector seed"],
    default: 1
  },
  lattice_type: {
    choices: ["square", "hexagonal"],
    default: 0
  },
  show_transition_states: {
    default: !0
  }
  // all_parameters: {
  // default: false
  // }
}, Xe = (t) => ft(to(t), (e) => {
  e[1].id = e[0], e[1].label = ad(Sh(e[0]), /_/g, " ");
}), Ge = (t) => ft(to(t), (e) => e[1]), Ue = (t, e) => Ut(t, (n, r) => n.widget = e[r]), qd = (t) => Be(t, (e) => An(e, "range") && !An(e, "group")), Hd = (t) => Be(t, (e) => e.group == "payoff"), Bd = (t) => Be(t, (e) => Jp(e.default)), Nd = (t) => Be(t, (e) => An(e, "choices")), Xd = "_legend_hpfhs_1", Gd = "_label_hpfhs_5", Ud = "_symbol_hpfhs_10", Mt = {
  legend: Xd,
  label: Gd,
  symbol: Ud
}, jn = qd(b), io = Bd(b), oo = Nd(b), tr = Hd(b);
Xe(jn);
Xe(io);
Xe(oo);
Xe(tr);
const ao = Ge(jn), so = Ge(io), uo = Ge(oo), lo = Ge(tr), En = ft(
  so,
  (t) => Od().id(t.id).label(t.label).value(t.default)
);
Ue(so, En);
const Pn = ft(
  lo,
  (t) => no().id(t.id).label(w.widgets.payoff_slider_labels[t.id]).range(t.range).value(t.default).girth(w.widgets.payoff_slider_girth).knob(w.widgets.payoff_slider_knob).size(w.widgets.payoff_slider_size).show(!0)
), zn = ft(
  ao,
  (t) => no().id(t.id).label(t.label).range(t.range).value(t.default).girth(w.widgets.slider_girth).knob(w.widgets.slider_knob).size(w.widgets.slider_size)
), he = ft(
  uo,
  (t) => kd().choices(t.choices).id(t.id).value(t.default).orientation(w.widgets.radio_orientation).labelposition(w.widgets.radio_label_position)
);
Ue(lo, Pn);
Ue(ao, zn);
Ue(uo, he);
const st = Qn().actions(["play", "pause"]), Ye = Qn().actions(["back"]), Ke = Qn().actions(["rewind"]), Yd = [st, Ye, Ke], Kd = (t, e) => {
  var n = ["CC", "DD", "CD", "DC"].map((l, f) => {
    const d = e.position(w.widgets.legend_anchor.x + f * w.widgets.legend_gap, w.widgets.legend_anchor.y);
    return {
      s: w.simulation.legend[l],
      c: w.simulation.colors[l],
      x: d.x,
      y: d.y,
      vgap: e.position(0, w.widgets.legend_vgap)
    };
  }), r = ["C", "D"].map((l, f) => {
    const d = e.position(w.widgets.legend_anchor.x + (f + 2) * w.widgets.legend_gap, w.widgets.legend_anchor.y);
    return {
      s: w.simulation.legend[l],
      c: w.simulation.colors[l],
      x: d.x,
      y: d.y,
      vgap: e.position(0, w.widgets.legend_vgap)
    };
  });
  const i = t.selectAll("#legend1").data(n).enter().append("g").attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").attr("id", "legend1").style("opacity", b.show_transition_states.widget.value() ? 1 : 0).attr("class", Mt.legend), o = t.selectAll("#legend2").data(r).enter().append("g").attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").attr("id", "legend2").style("opacity", b.show_transition_states.widget.value() ? 0 : 1).attr("class", Mt.legend);
  o.append("text").text((l) => l.s).attr("class", Mt.label), o.append("circle").style("fill", (l) => l.c).attr("r", w.widgets.legend_size).attr("transform", (l) => "translate(0," + l.vgap.y + ")").attr("class", Mt.symbol), i.append("text").text((l) => l.s).attr("class", Mt.label), i.append("circle").style("fill", (l) => l.c).attr("r", w.widgets.legend_size).attr("transform", (l) => "translate(0," + l.vgap.y + ")").attr("class", Mt.symbol);
  const a = e.position(w.widgets.payoff_slider_anchor.x, ut(2).map((l) => w.widgets.payoff_slider_anchor.y + w.widgets.payoff_slider_gap * l)), s = e.position(w.widgets.payoff_slider_anchor.x + w.widgets.payoff_slider_hgap, ut(2).map((l) => w.widgets.payoff_slider_anchor.y + w.widgets.payoff_slider_gap * l)), u = e.position(w.widgets.toggle_anchor.x, w.widgets.toggle_anchor.y), c = e.position(w.widgets.lattice_anchor.x, w.widgets.lattice_anchor.y), p = e.position(w.widgets.ic_anchor.x, w.widgets.ic_anchor.y), h = e.position(w.widgets.slider_anchor.x, w.widgets.slider_anchor.y);
  Pn.forEach((l, f) => {
    f < 2 && l.position(a[f]), f >= 2 < 4 && l.position(s[f - 2]);
  }), En[0].position(u).labelposition(w.widgets.toggle_label_pos), he[0].position(c).size(w.widgets.radio_size).shape(w.widgets.radio_shape), he[1].position(p).size(w.widgets.radio_size).shape(w.widgets.radio_shape), zn[0].position(h), st.position(e.position(w.widgets.playbutton_anchor.x, w.widgets.playbutton_anchor.y)).size(w.widgets.playbutton_size), Ke.position(e.position(w.widgets.backbutton_anchor.x, w.widgets.backbutton_anchor.y)), Ye.position(e.position(w.widgets.resetbutton_anchor.x, w.widgets.resetbutton_anchor.y)), t.selectAll(null).data(Uh(zn, Pn)).enter().append(oe), t.selectAll(null).data(En).enter().append(oe), t.selectAll(null).data(Yd).enter().append(oe), t.selectAll(null).data(he).enter().append(oe), b.initial_condition.widget.value() == 1 ? (t.select("#slider_" + b.defector_concentration.widget.id()).transition().style("opacity", 0), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.handle).style("pointer-events", "none"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.track_overlay).style("pointer-events", "none"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.label).style("pointer-events", "none")) : (t.select("#slider_" + b.defector_concentration.widget.id()).transition().style("opacity", 1), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.handle).style("pointer-events", "all"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.track_overlay).style("pointer-events", "all"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.label).style("pointer-events", "none"));
}, Vd = (t) => {
  Ut(jn, (e) => e.widget.reset(t, e.default)), Ut(tr, (e) => e.widget.reset(t, e.default));
};
function Ve(t, e) {
  return [t % e, Math.floor(t / e)];
}
const Wd = {
  n4: $e([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: $e([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function rn(t, e, n = "periodic", r = "n8") {
  const i = [];
  return Wd[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = Ve(t, e), c = u[0], p = u[1], h = c + s, l = p + a;
    (n == "dirichlet" ? !(a == 0 && s == 0) && h < e && l < e && h >= 0 && l >= 0 : !(a == 0 && s == 0)) && i.push(e * ((l + e) % e) + (h + e) % e);
  }), i;
}
const Zd = function(t) {
  var e = "periodic", n = 1, r = "n8";
  const i = 2 * t + 1;
  var o = n / i, a = o;
  const s = ut(i * i).map(function(l) {
    const f = Ve(l, i);
    return {
      m: f[0],
      n: f[1],
      x: o * (f[0] + 0.5) - n / 2,
      y: a * (f[1] + 0.5) - n / 2
    };
  });
  s.forEach(function(l, f) {
    l.neighbors = rn(f, i, e, r).map((d) => s[d]), l.cell = () => [
      { x: l.x + o / 2, y: l.y + a / 2 },
      { x: l.x - o / 2, y: l.y + a / 2 },
      { x: l.x - o / 2, y: l.y - a / 2 },
      { x: l.x + o / 2, y: l.y - a / 2 },
      { x: l.x + o / 2, y: l.y + a / 2 }
    ], l.random_interior_point = () => ({
      x: l.x + o * (Math.random() - 0.5),
      y: l.y + a * (Math.random() - 0.5)
    });
  });
  const u = function(l) {
    return typeof l < "u" ? (s.forEach(function(f) {
      f.x = (f.m + 0.5) * l / i - l / 2, f.y = (f.n + 0.5) * l / i - l / 2;
    }), n = l, o = n / i, a = n / i, this.L = n, this) : n;
  }, c = function(l) {
    return typeof l < "u" ? (s.forEach(function(f, d) {
      f.neighbors = rn(d, i, l, r).map((g) => s[g]);
    }), e = l, s.forEach((f) => {
      f.is_boundary = e == "dirichlet" && (f.n == 0 || f.n == 2 * t || f.m == 0 || f.m == 2 * t);
    }), this) : e;
  }, p = function(l) {
    return typeof l < "u" ? (s.forEach(function(f, d) {
      f.neighbors = rn(d, i, e, l).map((g) => s[g]);
    }), r = l, this) : r;
  }, h = function() {
    return e === "periodic" ? null : eo(s, (l) => l.n == 0 || l.n == 2 * t || l.m == 0 || l.m == 2 * t);
  };
  return {
    type: "square",
    L: n,
    N: t,
    size: i * i,
    hood: p,
    nodes: s,
    scale: u,
    boundary: c,
    boundary_cells: h
  };
}, ae = [1, 0], se = [0.5, Math.sqrt(3) / 2], I = [
  { l: 1, m: 0, n: -1 },
  { l: 1, m: -1, n: 0 },
  { l: 0, m: -1, n: 1 },
  { l: 0, m: 1, n: -1 },
  { l: -1, m: 0, n: 1 },
  { l: -1, m: 1, n: 0 }
], Kr = [
  [I[0], I[1]],
  [I[1], I[2]],
  [I[2], I[4]],
  [I[4], I[5]],
  [I[5], I[3]],
  [I[3], I[0]]
];
function z(t) {
  return "id_l" + t.l + "m" + t.m + "n" + t.n;
}
const Jd = function(t) {
  var e = "periodic", n = 1, r = n / (2 * t + 1);
  const i = [], o = {};
  ut(-t, t + 1).forEach(function(l) {
    ut(-t, t + 1).forEach(function(f) {
      ut(-t, t + 1).forEach(function(d) {
        l + f + d == 0 && i.push({
          l,
          m: f,
          n: d,
          x: r * l * ae[0] + r * f * se[0],
          y: r * l * ae[1] + r * f * se[1]
        });
      });
    });
  }), i.forEach(function(l) {
    o[z(l)] = l, l.cell = () => {
      const f = 1 / Math.sqrt(3);
      return [
        { x: l.x + r / 2, y: l.y + f * r / 2 },
        { x: l.x, y: l.y + f * r },
        { x: l.x - r / 2, y: l.y + f * r / 2 },
        { x: l.x - r / 2, y: l.y - f * r / 2 },
        { x: l.x, y: l.y - f * r },
        { x: l.x + r / 2, y: l.y - f * r / 2 },
        { x: l.x + r / 2, y: l.y + f * r / 2 }
      ];
    }, l.random_interior_point = () => {
      const f = 1 / Math.sqrt(3), d = Math.random(), g = Math.random(), y = Math.floor(Math.random() * 6) * 2 * Math.PI / 6, _ = r / 2 * Math.sqrt(d), $ = r / 2 * Math.sqrt(d) * f * (1 - 2 * g), T = Math.cos(y) * _ - Math.sin(y) * $, m = Math.sin(y) * _ + Math.cos(y) * $;
      return {
        x: l.x + T,
        y: l.y + m
      };
    };
  }), h(i);
  const a = function(l) {
    return typeof l < "u" ? (n = l, r = n / (2 * t + 1), i.forEach((f) => {
      f.x = r * f.l * ae[0] + r * f.m * se[0], f.y = r * f.l * ae[1] + r * f.m * se[1];
    }), this.L = n, this) : n;
  }, s = function(l) {
    var f = 1 / Math.sqrt(3);
    return [
      { x: l.x + Scale / t / 2, y: l.y + f / 2 * Scale / t },
      { x: l.x, y: l.y + f * Scale / t },
      { x: l.x - Scale / t / 2, y: l.y + f / 2 * Scale / t },
      { x: l.x - Scale / t / 2, y: l.y - f / 2 * Scale / t },
      { x: l.x, y: l.y - f * Scale / t },
      { x: l.x + Scale / t / 2, y: l.y - f / 2 * Scale / t },
      { x: l.x + Scale / t / 2, y: l.y + f / 2 * Scale / t }
    ];
  }, u = function(l) {
    return typeof l < "u" ? (l == "dirichlet" ? (e = "dirichlet", p(i)) : (e = "periodic", h(i)), i.forEach((f) => {
      f.is_boundary = e == "dirichlet" && (f.n == -t || f.n == t || f.l == -t || f.l == t || f.m == -t || f.m == t);
    }), this) : e;
  }, c = function() {
    return e === "periodic" ? null : eo(i, (l) => l.n == -t || l.n == t || l.l == -t || l.l == t || l.m == -t || l.m == t);
  };
  return {
    type: "hexagonal",
    L: n,
    N: t,
    size: 1 + 3 * t * (t + 1),
    nodes: i,
    scale: a,
    boundary: u,
    boundary_cells: c,
    cell: s
  };
  function p(l) {
    l.forEach(function(f) {
      f.neighbors = [], I.forEach(function(d) {
        const g = z({ l: f.l + d.l, m: f.m + d.m, n: f.n + d.n }), y = o[g];
        typeof y < "u" && f.neighbors.push(y);
      });
    }), l.forEach(function(f) {
      f.triangles = [], Kr.forEach(function(d) {
        const g = z({ l: f.l + d[0].l, m: f.m + d[0].m, n: f.n + d[0].n }), y = z({ l: f.l + d[1].l, m: f.m + d[1].m, n: f.n + d[1].n });
        typeof o[g] < "u" && typeof o[y] < "u" && f.triangles.push([o[g], o[y]]);
      });
    });
  }
  function h(l) {
    l.forEach(function(f) {
      f.neighbors = [], I.forEach(function(d) {
        var g = z({ l: f.l + d.l, m: f.m + d.m, n: f.n + d.n });
        typeof o[g] > "u" && (f.l + d.l == t + 1 && Math.abs(f.m + d.m) <= t + 1 && Math.abs(f.n + d.n) <= t && (g = z({ l: f.l + d.l - (2 * t + 1), m: f.m + d.m + (t + 1), n: f.n + d.n + t })), f.l + d.l == -(t + 1) && Math.abs(f.m + d.m) <= t + 1 && Math.abs(f.n + d.n) <= t && (g = z({ l: f.l + d.l + (2 * t + 1), m: f.m + d.m - (t + 1), n: f.n + d.n - t })), f.m + d.m == t + 1 && Math.abs(f.l + d.l) <= t && Math.abs(f.n + d.n) <= t + 1 && (g = z({ m: f.m + d.m - (2 * t + 1), n: f.n + d.n + (t + 1), l: f.l + d.l + t })), f.m + d.m == -(t + 1) && Math.abs(f.l + d.l) <= t && Math.abs(f.n + d.n) <= t + 1 && (g = z({ m: f.m + d.m + (2 * t + 1), n: f.n + d.n - (t + 1), l: f.l + d.l - t })), f.n + d.n == t + 1 && Math.abs(f.l + d.l) <= t + 1 && Math.abs(f.m + d.m) <= t && (g = z({ n: f.n + d.n - (2 * t + 1), l: f.l + d.l + (t + 1), m: f.m + d.m + t })), f.n + d.n == -(t + 1) && Math.abs(f.l + d.l) <= t + 1 && Math.abs(f.m + d.m) <= t && (g = z({ n: f.n + d.n + (2 * t + 1), l: f.l + d.l - (t + 1), m: f.m + d.m - t }))), f.neighbors.push(o[g]);
      });
    }), l.forEach(function(f) {
      f.triangles = [], Kr.forEach(function(d) {
        var g = [];
        d.forEach(function(y, _) {
          var $ = z({ l: f.l + y.l, m: f.m + y.m, n: f.n + y.n });
          typeof o[$] > "u" && (f.l + y.l == t + 1 && Math.abs(f.m + y.m) <= t + 1 && Math.abs(f.n + y.n) <= t && z({ l: f.l + y.l - (2 * t + 1), m: f.m + y.m + (t + 1), n: f.n + y.n + t }), f.l + y.l == -(t + 1) && Math.abs(f.m + y.m) <= t + 1 && Math.abs(f.n + y.n) <= t && z({ l: f.l + y.l + (2 * t + 1), m: f.m + y.m - (t + 1), n: f.n + y.n - t }), f.m + y.m == t + 1 && Math.abs(f.l + y.l) <= t && Math.abs(f.n + y.n) <= t + 1 && z({ m: f.m + y.m - (2 * t + 1), n: f.n + y.n + (t + 1), l: f.l + y.l + t }), f.m + y.m == -(t + 1) && Math.abs(f.l + y.l) <= t && Math.abs(f.n + y.n) <= t + 1 && z({ m: f.m + y.m + (2 * t + 1), n: f.n + y.n - (t + 1), l: f.l + y.l - t }), f.n + y.n == t + 1 && Math.abs(f.l + y.l) <= t + 1 && Math.abs(f.m + y.m) <= t && z({ n: f.n + y.n - (2 * t + 1), l: f.l + y.l + (t + 1), m: f.m + y.m + t }), f.n + y.n == -(t + 1) && Math.abs(f.l + y.l) <= t + 1 && Math.abs(f.m + y.m) <= t && z({ n: f.n + y.n + (2 * t + 1), l: f.l + y.l - (t + 1), m: f.m + y.m - t })), g[_] = $;
        }), f.triangles.push([o[g[0]], o[g[1]]]);
      });
    });
  }
}, Qd = {
  n4: $e([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: $e([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function on(t, e, n = "periodic", r = "n8") {
  const i = [];
  return Qd[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = Ve(t, e), c = u[0], p = u[1], h = c + s, l = p + a;
    (n == "dirichlet" ? !(a == 0 && s == 0) && h < e && l < e && h >= 0 && l >= 0 : !(a == 0 && s == 0)) && i.push(e * ((l + e) % e) + (h + e) % e);
  }), i;
}
const jd = function(t) {
  var e = "periodic", n = t, r = "n8";
  const i = ut(t * t).map(function(u) {
    const c = Ve(u, t);
    return {
      x: c[0],
      y: c[1]
    };
  });
  return i.forEach(function(u, c) {
    u.neighbors = on(c, t, e, r).map((p) => i[p]), u.cell = () => [
      { x: u.x, y: u.y },
      { x: u.x + 1, y: u.y },
      { x: u.x + 1, y: u.y + 1 },
      { x: u.x, y: u.y + 1 },
      { x: u.x, y: u.y }
    ];
  }), {
    type: "square",
    L: n,
    N: t,
    size: t,
    hood: function(u) {
      return typeof u < "u" ? (i.forEach(function(c, p) {
        c.neighbors = on(p, t, e, u).map((h) => i[h]);
      }), r = u, this) : r;
    },
    nodes: i,
    scale: function(u) {
      return t;
    },
    boundary: function(u) {
      return typeof u < "u" ? (i.forEach(function(c, p) {
        c.neighbors = on(p, t, u, r).map((h) => i[h]);
      }), e = u, this) : e;
    }
  };
}, t0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hex: Jd,
  square: Zd,
  square_simple: jd
}, Symbol.toStringTag, { value: "Module" }));
var j = [];
const e0 = () => {
  b.timer = {}, b.tick = 0;
  const t = b.lattice_type.widget.value() == 1 ? b.N.hex : b.N.square;
  j = t0[b.lattice_type.widget.value() == 1 ? "hex" : "square"](t).boundary(b.boundary).nodes, b.initial_condition.widget.value() == 0 ? Ut(j, (n) => {
    n.state = Math.random() < b.defector_concentration.widget.value() ? "D" : "C", n.previous_state = n.state;
  }) : (j.forEach((n) => n.state = "C"), j.filter((n) => n.x == 0 && n.y == 0).forEach((n) => {
    n.state = "D";
  }), j.forEach((n) => {
    n.previous_state = n.state;
  }));
}, n0 = () => {
  b.tick++;
  const t = b.R.widget.value(), e = b.S.widget.value(), n = b.T.widget.value(), r = b.P.widget.value();
  j.forEach((i) => {
    let o = i.neighbors.filter((c) => c.state == "D").length, a = i.neighbors.filter((c) => c.state == "C").length;
    i.state == "D" ? o++ : a++;
    const s = t * a + e * o, u = n * a + r * o;
    i.score = i.state == "D" ? u : s, i.score += 1e-3 * Math.random(), i.previous_state = i.state;
  }), j.forEach((i) => {
    const o = i.score, a = jp(i.neighbors, (u) => u.score), s = a.score;
    i.state = s >= o ? a.previous_state : i.previous_state;
  });
}, Te = w.simulation.colors, Q = lt().domain([-0.5, 0.5]), Cn = lt().domain([-0.5, 0.5]);
var k, On, kn;
function r0() {
  j.forEach((t) => {
    const e = t.cell();
    e.length;
    const n = b.show_transition_states.widget.value() ? Te[t.state + t.previous_state] : Te[t.state];
    k.fillStyle = n, k.strokeStyle = n, k.lineWidth = 0, k.fillRect(Q(e[0].x), Q(e[0].y), Q(e[2].x) - Q(e[0].x), Q(e[2].y) - Q(e[0].y));
  });
}
function i0() {
  j.forEach((t) => {
    const e = t.cell(), n = e.length, r = b.show_transition_states.widget.value() ? Te[t.state + t.previous_state] : Te[t.state];
    k.fillStyle = r, k.strokeStyle = r, k.lineWidth = 1, k.beginPath(), k.moveTo(Q(e[0].x), Cn(e[0].y)), Ut(e, (i, o) => k.lineTo(Q(e[(o + 1) % n].x), Cn(e[(o + 1) % n].y))), k.fill(), k.stroke(), k.closePath();
  });
}
const er = (t, e) => {
  k.clearRect(0, 0, On, kn), b.lattice_type.widget.value() == 0 ? r0() : i0();
}, o0 = (t, e) => {
  er();
}, a0 = (t, e) => {
  On = e.display_size.width, kn = e.display_size.height, Q.range([0, On]), Cn.range([0, kn]), k = t.node().getContext("2d"), er();
};
function s0(t, e) {
  n0(), er();
}
function $t(t, e) {
  e0(), a0(t, e);
}
function u0(t, e) {
  o0();
}
var Vr = {};
const l0 = (t, e) => {
  st.value() == 1 ? Vr = Gs(() => s0(), w.simulation.delay) : Vr.stop();
};
function c0(t) {
  b.initial_condition.widget.value() == 1 ? (t.select("#slider_" + b.defector_concentration.widget.id()).transition().style("opacity", 0), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.handle).style("pointer-events", "none"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.track_overlay).style("pointer-events", "none"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.label).style("pointer-events", "none")) : (t.select("#slider_" + b.defector_concentration.widget.id()).transition().style("opacity", 1), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.handle).style("pointer-events", "all"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.track_overlay).style("pointer-events", "all"), t.select("#slider_" + b.defector_concentration.widget.id()).select("." + v.label).style("pointer-events", "none"));
}
const f0 = (t, e, n) => {
  Ke.update(() => {
    Vd(e), $t(t, n);
  }), st.update(() => l0()), Ye.update(() => $t(t, n)), b.lattice_type.widget.update(
    () => {
      $t(t, n);
    }
  ), b.defector_concentration.widget.update(() => $t(t, n)), b.initial_condition.widget.update(() => {
    c0(e), $t(t, n);
  }), b.show_transition_states.widget.update(() => {
    u0(), e.selectAll("#legend1").transition().style("opacity", b.show_transition_states.widget.value() ? 1 : 0), e.selectAll("#legend2").transition().style("opacity", b.show_transition_states.widget.value() ? 0 : 1);
  });
}, h0 = {
  name: "@explorables/prisoners_kaleidoscope",
  title: "The Prisoner's Kaleidoscope",
  subtitle: "The prisoner's dilemma game on a lattice",
  description: "This explorable illustrates a famous game theoretic model, known as the prisoner's dilemma. On a lattice it can yield beautiful patterns and chaos.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function p0(t, e = co) {
  const n = Ld(t, e), r = n.display, i = n.controls, o = n.grid;
  return Kd(i, o), f0(r, i, e), $t(r, e), {
    halt() {
      st.value() === 1 && st.press(i);
    },
    reset() {
      st.value() === 1 && st.press(i), Ke.press(i), Ye.press(i);
    },
    config: e,
    meta: h0
  };
}
export {
  co as config,
  p0 as default,
  p0 as load,
  h0 as meta
};
