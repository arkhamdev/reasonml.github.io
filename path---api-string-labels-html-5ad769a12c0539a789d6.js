webpackJsonp([199],{"./node_modules/json-loader/index.js!./.cache/json/api-string-labels-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/StringLabels.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="String.html" title="String">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Sys.html" title="Sys">Next</a>\n</div>\n<h1>Module <a href="type_StringLabels.html">StringLabels</a></h1>\n\n<pre><span class="keyword">module</span> StringLabels: sig .. end</pre><div class="info module top">\nString operations.<br>\n</div>\n<hr width="100%">\n\n<pre id="VALlength"><span class="keyword">let</span> length: string =&gt; int;\n</pre><div class="info ">\nReturn the length (number of characters) of the given string.<br>\n</div>\n\n<pre id="VALget"><span class="keyword">let</span> get: string =&gt; int =&gt; char;\n</pre><div class="info ">\n<code class="code">String.get s n</code> returns the character at index <code class="code">n</code> in string <code class="code">s</code>.\n   You can also write <code class="code">s.[n]</code> instead of <code class="code">String.get s n</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n</code> not a valid index in <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALset"><span class="keyword">let</span> set: bytes =&gt; int =&gt; char =&gt; unit;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>This is a deprecated alias of <a href="BytesLabels.html#VALset"><code class="code">BytesLabels.set</code></a>.<br>\n<code class="code">String.set s n c</code> modifies byte sequence <code class="code">s</code> in place,\n   replacing the byte at index <code class="code">n</code> with <code class="code">c</code>.\n   You can also write <code class="code">s.[n] &lt;- c</code> instead of <code class="code">String.set s n c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n</code> is not a valid index in <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALcreate"><span class="keyword">let</span> create: int =&gt; bytes;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>This is a deprecated alias of <a href="BytesLabels.html#VALcreate"><code class="code">BytesLabels.create</code></a>.<br>\n<code class="code">String.create n</code> returns a fresh byte sequence of length <code class="code">n</code>.\n   The sequence is uninitialized and contains arbitrary bytes.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre id="VALmake"><span class="keyword">let</span> make: int =&gt; char =&gt; string;\n</pre><div class="info ">\n<code class="code">String.make n c</code> returns a fresh string of length <code class="code">n</code>,\n   filled with the character <code class="code">c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre id="VALinit"><span class="keyword">let</span> init: int =&gt; f::(int =&gt; char) =&gt; string;\n</pre><div class="info ">\n<code class="code">init n f</code> returns a string of length <code class="code">n</code>,\n    with character <code class="code">i</code> initialized to the result of <code class="code">f i</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">n &lt; 0</code> or <code class="code">n &gt; </code><a href="Sys.html#VALmax_string_length"><code class="code">Sys.max_string_length</code></a>.<br>\n</p></div>\n\n<pre id="VALcopy"><span class="keyword">let</span> copy: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the given string.<br>\n</div>\n\n<pre id="VALsub"><span class="keyword">let</span> sub: string =&gt; pos::int =&gt; len::int =&gt; string;\n</pre><div class="info ">\n<code class="code">String.sub s start len</code> returns a fresh string of length <code class="code">len</code>,\n   containing the substring of <code class="code">s</code> that starts at position <code class="code">start</code> and\n   has length <code class="code">len</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> and <code class="code">len</code> do not\n   designate a valid substring of <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALfill"><span class="keyword">let</span> fill: bytes =&gt; pos::int =&gt; len::int =&gt; char =&gt; unit;\n</pre><div class="info ">\n<span class="warning">Deprecated.</span>This is a deprecated alias of <a href="BytesLabels.html#VALfill"><code class="code">BytesLabels.fill</code></a>.<br>\n<code class="code">String.fill s start len c</code> modifies byte sequence <code class="code">s</code> in place,\n   replacing <code class="code">len</code> bytes by <code class="code">c</code>, starting at <code class="code">start</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> and <code class="code">len</code> do not\n   designate a valid substring of <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALblit"><span class="keyword">let</span> blit: src::string =&gt; src_pos::int =&gt; dst::bytes =&gt; dst_pos::int =&gt; len::int =&gt; unit;\n</pre><div class="info ">\n<code class="code">String.blit src srcoff dst dstoff len</code> copies <code class="code">len</code> bytes\n   from the string <code class="code">src</code>, starting at index <code class="code">srcoff</code>,\n   to byte sequence <code class="code">dst</code>, starting at character number <code class="code">dstoff</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">srcoff</code> and <code class="code">len</code> do not\n   designate a valid range of <code class="code">src</code>, or if <code class="code">dstoff</code> and <code class="code">len</code>\n   do not designate a valid range of <code class="code">dst</code>.<br>\n</p></div>\n\n<pre id="VALconcat"><span class="keyword">let</span> concat: sep::string =&gt; list string =&gt; string;\n</pre><div class="info ">\n<code class="code">String.concat sep sl</code> concatenates the list of strings <code class="code">sl</code>,\n   inserting the separator string <code class="code">sep</code> between each.<br>\n</div>\n\n<pre id="VALiter"><span class="keyword">let</span> iter: f::(char =&gt; unit) =&gt; string =&gt; unit;\n</pre><div class="info ">\n<code class="code">String.iter f s</code> applies function <code class="code">f</code> in turn to all\n   the characters of <code class="code">s</code>.  It is equivalent to\n   <code class="code">f s.[0]; f s.[1]; ...; f s.[String.length s - 1]; ()</code>.<br>\n</div>\n\n<pre id="VALiteri"><span class="keyword">let</span> iteri: f::(int =&gt; char =&gt; unit) =&gt; string =&gt; unit;\n</pre><div class="info ">\nSame as <a href="String.html#VALiter"><code class="code">String.iter</code></a>, but the\n   function is applied to the index of the element as first argument\n   (counting from 0), and the character itself as second argument.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALmap"><span class="keyword">let</span> map: f::(char =&gt; char) =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">String.map f s</code> applies function <code class="code">f</code> in turn to all\n   the characters of <code class="code">s</code> and stores the results in a new string that\n   is returned.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALmapi"><span class="keyword">let</span> mapi: f::(int =&gt; char =&gt; char) =&gt; string =&gt; string;\n</pre><div class="info ">\n<code class="code">String.mapi f s</code> calls <code class="code">f</code> with each character of <code class="code">s</code> and its\n    index (in increasing index order) and stores the results in a new\n    string that is returned.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n\n<pre id="VALtrim"><span class="keyword">let</span> trim: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, without leading and trailing\n   whitespace.  The characters regarded as whitespace are: <code class="code">&apos; &apos;</code>,\n   <code class="code">&apos;\\012&apos;</code>, <code class="code">&apos;\\n&apos;</code>, <code class="code">&apos;\\r&apos;</code>, and <code class="code">&apos;\\t&apos;</code>.  If there is no leading nor\n   trailing whitespace character in the argument, return the original\n   string itself, not a copy.<br>\n<b>Since</b> 4.00.0<br>\n</div>\n\n<pre id="VALescaped"><span class="keyword">let</span> escaped: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with special characters\n   represented by escape sequences, following the lexical\n   conventions of OCaml.  If there is no special\n   character in the argument, return the original string itself,\n   not a copy. Its inverse function is Scanf.unescaped.<br>\n</div>\n\n<pre id="VALindex"><span class="keyword">let</span> index: string =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.index s c</code> returns the index of the first\n   occurrence of character <code class="code">c</code> in string <code class="code">s</code>.\n<p>\n\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALrindex"><span class="keyword">let</span> rindex: string =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.rindex s c</code> returns the index of the last\n   occurrence of character <code class="code">c</code> in string <code class="code">s</code>.\n<p>\n\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALindex_from"><span class="keyword">let</span> index_from: string =&gt; int =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.index_from s i c</code> returns the index of the\n   first occurrence of character <code class="code">c</code> in string <code class="code">s</code> after position <code class="code">i</code>.\n   <code class="code">String.index s c</code> is equivalent to <code class="code">String.index_from s 0 c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">i</code> is not a valid position in <code class="code">s</code>.\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code> after position <code class="code">i</code>.<br>\n</p></div>\n\n<pre id="VALrindex_from"><span class="keyword">let</span> rindex_from: string =&gt; int =&gt; char =&gt; int;\n</pre><div class="info ">\n<code class="code">String.rindex_from s i c</code> returns the index of the\n   last occurrence of character <code class="code">c</code> in string <code class="code">s</code> before position <code class="code">i+1</code>.\n   <code class="code">String.rindex s c</code> is equivalent to\n   <code class="code">String.rindex_from s (String.length s - 1) c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">i+1</code> is not a valid position in <code class="code">s</code>.\n   Raise <code class="code">Not_found</code> if <code class="code">c</code> does not occur in <code class="code">s</code> before position <code class="code">i+1</code>.<br>\n</p></div>\n\n<pre id="VALcontains"><span class="keyword">let</span> contains: string =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">String.contains s c</code> tests if character <code class="code">c</code>\n   appears in the string <code class="code">s</code>.<br>\n</div>\n\n<pre id="VALcontains_from"><span class="keyword">let</span> contains_from: string =&gt; int =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">String.contains_from s start c</code> tests if character <code class="code">c</code>\n   appears in <code class="code">s</code> after position <code class="code">start</code>.\n   <code class="code">String.contains s c</code> is equivalent to\n   <code class="code">String.contains_from s 0 c</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">start</code> is not a valid position in <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALrcontains_from"><span class="keyword">let</span> rcontains_from: string =&gt; int =&gt; char =&gt; bool;\n</pre><div class="info ">\n<code class="code">String.rcontains_from s stop c</code> tests if character <code class="code">c</code>\n   appears in <code class="code">s</code> before position <code class="code">stop+1</code>.\n<p>\n\n   Raise <code class="code">Invalid_argument</code> if <code class="code">stop &lt; 0</code> or <code class="code">stop+1</code> is not a valid\n   position in <code class="code">s</code>.<br>\n</p></div>\n\n<pre id="VALuppercase"><span class="keyword">let</span> uppercase: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with all lowercase letters\n   translated to uppercase, including accented letters of the ISO\n   Latin-1 (8859-1) character set.<br>\n</div>\n\n<pre id="VALlowercase"><span class="keyword">let</span> lowercase: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with all uppercase letters\n   translated to lowercase, including accented letters of the ISO\n   Latin-1 (8859-1) character set.<br>\n</div>\n\n<pre id="VALcapitalize"><span class="keyword">let</span> capitalize: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with the first character set to uppercase.<br>\n</div>\n\n<pre id="VALuncapitalize"><span class="keyword">let</span> uncapitalize: string =&gt; string;\n</pre><div class="info ">\nReturn a copy of the argument, with the first character set to lowercase.<br>\n</div>\n\n<pre id="TYPEt"><span class="keyword">type</span> t = string;\n</pre>\n<div class="info ">\nAn alias for the type of strings.<br>\n</div>\n\n\n<pre id="VALcompare"><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nThe comparison function for strings, with the same specification as\n    <a href="Pervasives.html#VALcompare"><code class="code">Pervasives.compare</code></a>.  Along with the type <code class="code">t</code>, this function <code class="code">compare</code>\n    allows the module <code class="code">String</code> to be passed as argument to the functors\n    <a href="Set.Make.html"><code class="code">Set.Make</code></a> and <a href="Map.Make.html"><code class="code">Map.Make</code></a>.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/StringLabels.html"}}}});
//# sourceMappingURL=path---api-string-labels-html-5ad769a12c0539a789d6.js.map