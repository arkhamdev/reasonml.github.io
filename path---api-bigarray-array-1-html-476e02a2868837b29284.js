webpackJsonp([304],{"./node_modules/json-loader/index.js!./.cache/json/api-bigarray-array-1-html.json":function(a,e){a.exports={data:{file:{relativePath:"api/Bigarray.Array1.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Bigarray.Genarray.html" title="Bigarray.Genarray">Previous</a>\n&#xA0;<a class="up" href="Bigarray.html" title="Bigarray">Up</a>\n&#xA0;<a class="post" href="Bigarray.Array2.html" title="Bigarray.Array2">Next</a>\n</div>\n<h1>Module <a href="type_Bigarray.Array1.html">Bigarray.Array1</a></h1>\n\n<pre><span class="keyword">module</span> Array1: sig .. end</pre><div class="info module top">\nOne-dimensional arrays. The <code class="code">Array1</code> structure provides operations\n   similar to those of\n   <a href="Bigarray.Genarray.html"><code class="code">Bigarray.Genarray</code></a>, but specialized to the case of one-dimensional arrays.\n   (The <code class="code">Array2</code> and <code class="code">Array3</code> structures below provide operations\n   specialized for two- and three-dimensional arrays.)\n   Statically knowing the number of dimensions of the array allows\n   faster operations, and more precise static type-checking.<br>\n</div>\n<hr width="100%">\n\n<pre id="TYPEt"><span class="keyword">type</span> t &apos;a &apos;b &apos;c;\n</pre>\n<div class="info ">\nThe type of one-dimensional big arrays whose elements have\n     OCaml type <code class="code">&apos;a</code>, representation kind <code class="code">&apos;b</code>, and memory layout <code class="code">&apos;c</code>.<br>\n</div>\n\n\n<pre id="VALcreate"><span class="keyword">let</span> create: Bigarray.kind &apos;a &apos;b =&gt; Bigarray.layout &apos;c =&gt; int =&gt; t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\n<code class="code">Array1.create kind layout dim</code> returns a new bigarray of\n     one dimension, whose size is <code class="code">dim</code>.  <code class="code">kind</code> and <code class="code">layout</code>\n     determine the array element kind and the array layout\n     as described for <code class="code">Genarray.create</code>.<br>\n</div>\n\n<pre id="VALdim"><span class="keyword">let</span> dim: t &apos;a &apos;b &apos;c =&gt; int;\n</pre><div class="info ">\nReturn the size (dimension) of the given one-dimensional\n     big array.<br>\n</div>\n\n<pre id="VALkind"><span class="keyword">let</span> kind: t &apos;a &apos;b &apos;c =&gt; Bigarray.kind &apos;a &apos;b;\n</pre><div class="info ">\nReturn the kind of the given big array.<br>\n</div>\n\n<pre id="VALlayout"><span class="keyword">let</span> layout: t &apos;a &apos;b &apos;c =&gt; Bigarray.layout &apos;c;\n</pre><div class="info ">\nReturn the layout of the given big array.<br>\n</div>\n\n<pre id="VALget"><span class="keyword">let</span> get: t &apos;a &apos;b &apos;c =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">Array1.get a x</code>, or alternatively <code class="code">a.{x}</code>,\n     returns the element of <code class="code">a</code> at index <code class="code">x</code>.\n     <code class="code">x</code> must be greater or equal than <code class="code">0</code> and strictly less than\n     <code class="code">Array1.dim a</code> if <code class="code">a</code> has C layout.  If <code class="code">a</code> has Fortran layout,\n     <code class="code">x</code> must be greater or equal than <code class="code">1</code> and less or equal than\n     <code class="code">Array1.dim a</code>.  Otherwise, <code class="code">Invalid_argument</code> is raised.<br>\n</div>\n\n<pre id="VALset"><span class="keyword">let</span> set: t &apos;a &apos;b &apos;c =&gt; int =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">Array1.set a x v</code>, also written <code class="code">a.{x} &lt;- v</code>,\n     stores the value <code class="code">v</code> at index <code class="code">x</code> in <code class="code">a</code>.\n     <code class="code">x</code> must be inside the bounds of <code class="code">a</code> as described in\n     <a href="Bigarray.Array1.html#VALget"><code class="code">Bigarray.Array1.get</code></a>;\n     otherwise, <code class="code">Invalid_argument</code> is raised.<br>\n</div>\n\n<pre id="VALsub"><span class="keyword">let</span> sub: t &apos;a &apos;b &apos;c =&gt; int =&gt; int =&gt; t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nExtract a sub-array of the given one-dimensional big array.\n     See <code class="code">Genarray.sub_left</code> for more details.<br>\n</div>\n\n<pre id="VALblit"><span class="keyword">let</span> blit: t &apos;a &apos;b &apos;c =&gt; t &apos;a &apos;b &apos;c =&gt; unit;\n</pre><div class="info ">\nCopy the first big array to the second big array.\n     See <code class="code">Genarray.blit</code> for more details.<br>\n</div>\n\n<pre id="VALfill"><span class="keyword">let</span> fill: t &apos;a &apos;b &apos;c =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\nFill the given big array with the given value.\n     See <code class="code">Genarray.fill</code> for more details.<br>\n</div>\n\n<pre id="VALof_array"><span class="keyword">let</span> of_array: Bigarray.kind &apos;a &apos;b =&gt; Bigarray.layout &apos;c =&gt; array &apos;a =&gt; t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nBuild a one-dimensional big array initialized from the\n     given array.<br>\n</div>\n\n<pre id="VALmap_file"><span class="keyword">let</span> map_file:\n  Unix.file_descr =&gt;\n  pos::int64? =&gt;\n  Bigarray.kind &apos;a &apos;b =&gt;\n  Bigarray.layout &apos;c =&gt;\n  bool =&gt;\n  int =&gt;\n  t &apos;a &apos;b &apos;c;\n</pre><div class="info ">\nMemory mapping of a file as a one-dimensional big array.\n     See <a href="Bigarray.Genarray.html#VALmap_file"><code class="code">Bigarray.Genarray.map_file</code></a> for more details.<br>\n</div>\n\n<pre id="VALunsafe_get"><span class="keyword">let</span> unsafe_get: t &apos;a &apos;b &apos;c =&gt; int =&gt; &apos;a;\n</pre><div class="info ">\nLike <a href="Bigarray.Array1.html#VALget"><code class="code">Bigarray.Array1.get</code></a>, but bounds checking is not always performed.\n      Use with caution and only when the program logic guarantees that\n      the access is within bounds.<br>\n</div>\n\n<pre id="VALunsafe_set"><span class="keyword">let</span> unsafe_set: t &apos;a &apos;b &apos;c =&gt; int =&gt; &apos;a =&gt; unit;\n</pre><div class="info ">\nLike <a href="Bigarray.Array1.html#VALset"><code class="code">Bigarray.Array1.set</code></a>, but bounds checking is not always performed.\n      Use with caution and only when the program logic guarantees that\n      the access is within bounds.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Bigarray.Array1.html"}}}});
//# sourceMappingURL=path---api-bigarray-array-1-html-476e02a2868837b29284.js.map