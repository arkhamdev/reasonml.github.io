webpackJsonp([306],{"./node_modules/json-loader/index.js!./.cache/json/api-ast-mapper-html.json":function(e,t){e.exports={data:{file:{relativePath:"api/Ast_mapper.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Ast_helper.html" title="Ast_helper">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Asttypes.html" title="Asttypes">Next</a>\n</div>\n<h1>Module <a href="type_Ast_mapper.html">Ast_mapper</a></h1>\n\n<pre><span class="keyword">module</span> Ast_mapper: sig .. end</pre><div class="info module top">\nThe interface of a -ppx rewriter\n<p>\n\n  A -ppx rewriter is a program that accepts a serialized abstract syntax\n  tree and outputs another, possibly modified, abstract syntax tree.\n  This module encapsulates the interface between the compiler and\n  the -ppx rewriters, handling such details as the serialization format,\n  forwarding of command-line flags, and storing state.\n</p><p>\n\n  <a href="Ast_mapper.html#TYPEmapper"><code class="code">Ast_mapper.mapper</code></a> allows to implement AST rewriting using open recursion.\n  A typical mapper would be based on <a href="Ast_mapper.html#VALdefault_mapper"><code class="code">Ast_mapper.default_mapper</code></a>, a deep\n  identity mapper, and will fall back on it for handling the syntax it\n  does not modify. For example:\n</p><p>\n\n  </p><pre class="codepre">open Asttypes\nopen Parsetree\nopen Ast_mapper\n\nlet test_mapper argv =\n  { default_mapper with\n    expr = fun mapper expr -&gt;\n      match expr with\n      | { pexp_desc = Pexp_extension ({ txt = &quot;test&quot; }, PStr [])} -&gt;\n        Ast_helper.Exp.constant (Const_int 42)\n      | other -&gt; default_mapper.expr mapper other; }\n\nlet () =\n  register &quot;ppx_test&quot; test_mapper</pre>\n<p>\n\n  This -ppx rewriter, which replaces <code class="code">[%test]</code> in expressions with\n  the constant <code class="code">42</code>, can be compiled using\n  <code class="code">ocamlc -o ppx_test -I +compiler-libs ocamlcommon.cma ppx_test.ml</code>.<br>\n</p></div>\n<hr width="100%">\n<br>\n<h2 id="2_AgenericParsetreemapper">A generic Parsetree mapper</h2><br>\n\n<pre><span class="keyword">type</span> mapper = {</pre><table class="typetable">\n<tbody><tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>attribute&#xA0;: mapper -&gt; Parsetree.attribute -&gt; Parsetree.attribute;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>attributes&#xA0;: mapper -&gt; Parsetree.attribute list -&gt; Parsetree.attribute list;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>case&#xA0;: mapper -&gt; Parsetree.case -&gt; Parsetree.case;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>cases&#xA0;: mapper -&gt; Parsetree.case list -&gt; Parsetree.case list;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_declaration&#xA0;: mapper -&gt;       Parsetree.class_declaration -&gt; Parsetree.class_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_description&#xA0;: mapper -&gt;       Parsetree.class_description -&gt; Parsetree.class_description;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_expr&#xA0;: mapper -&gt; Parsetree.class_expr -&gt; Parsetree.class_expr;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_field&#xA0;: mapper -&gt; Parsetree.class_field -&gt; Parsetree.class_field;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_signature&#xA0;: mapper -&gt; Parsetree.class_signature -&gt; Parsetree.class_signature;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_structure&#xA0;: mapper -&gt; Parsetree.class_structure -&gt; Parsetree.class_structure;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_type&#xA0;: mapper -&gt; Parsetree.class_type -&gt; Parsetree.class_type;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_type_declaration&#xA0;: mapper -&gt;       Parsetree.class_type_declaration -&gt; Parsetree.class_type_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>class_type_field&#xA0;: mapper -&gt; Parsetree.class_type_field -&gt; Parsetree.class_type_field;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>constructor_declaration&#xA0;: mapper -&gt;       Parsetree.constructor_declaration -&gt; Parsetree.constructor_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>expr&#xA0;: mapper -&gt; Parsetree.expression -&gt; Parsetree.expression;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>extension&#xA0;: mapper -&gt; Parsetree.extension -&gt; Parsetree.extension;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>extension_constructor&#xA0;: mapper -&gt;       Parsetree.extension_constructor -&gt; Parsetree.extension_constructor;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>include_declaration&#xA0;: mapper -&gt;       Parsetree.include_declaration -&gt; Parsetree.include_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>include_description&#xA0;: mapper -&gt;       Parsetree.include_description -&gt; Parsetree.include_description;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>label_declaration&#xA0;: mapper -&gt;       Parsetree.label_declaration -&gt; Parsetree.label_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>location&#xA0;: mapper -&gt; Location.t -&gt; Location.t;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>module_binding&#xA0;: mapper -&gt; Parsetree.module_binding -&gt; Parsetree.module_binding;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>module_declaration&#xA0;: mapper -&gt;       Parsetree.module_declaration -&gt; Parsetree.module_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>module_expr&#xA0;: mapper -&gt; Parsetree.module_expr -&gt; Parsetree.module_expr;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>module_type&#xA0;: mapper -&gt; Parsetree.module_type -&gt; Parsetree.module_type;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>module_type_declaration&#xA0;: mapper -&gt;       Parsetree.module_type_declaration -&gt; Parsetree.module_type_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>open_description&#xA0;: mapper -&gt; Parsetree.open_description -&gt; Parsetree.open_description;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>pat&#xA0;: mapper -&gt; Parsetree.pattern -&gt; Parsetree.pattern;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>payload&#xA0;: mapper -&gt; Parsetree.payload -&gt; Parsetree.payload;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>signature&#xA0;: mapper -&gt; Parsetree.signature -&gt; Parsetree.signature;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>signature_item&#xA0;: mapper -&gt; Parsetree.signature_item -&gt; Parsetree.signature_item;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>structure&#xA0;: mapper -&gt; Parsetree.structure -&gt; Parsetree.structure;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>structure_item&#xA0;: mapper -&gt; Parsetree.structure_item -&gt; Parsetree.structure_item;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>typ&#xA0;: mapper -&gt; Parsetree.core_type -&gt; Parsetree.core_type;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>type_declaration&#xA0;: mapper -&gt; Parsetree.type_declaration -&gt; Parsetree.type_declaration;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>type_extension&#xA0;: mapper -&gt; Parsetree.type_extension -&gt; Parsetree.type_extension;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>type_kind&#xA0;: mapper -&gt; Parsetree.type_kind -&gt; Parsetree.type_kind;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>value_binding&#xA0;: mapper -&gt; Parsetree.value_binding -&gt; Parsetree.value_binding;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>value_description&#xA0;: mapper -&gt;       Parsetree.value_description -&gt; Parsetree.value_description;</code></td>\n\n</tr>\n<tr>\n<td align="left" valign="top">\n<code>&#xA0;&#xA0;</code></td>\n<td align="left" valign="top">\n<code>with_constraint&#xA0;: mapper -&gt; Parsetree.with_constraint -&gt; Parsetree.with_constraint;</code></td>\n\n</tr></tbody></table>\n}\n\n<div class="info ">\nA mapper record implements one &quot;method&quot; per syntactic category,\n    using an open recursion style: each method takes as its first\n    argument the mapper to be applied to children in the syntax\n    tree.<br>\n</div>\n\n\n<pre id="VALdefault_mapper"><span class="keyword">let</span> default_mapper: mapper;\n</pre><div class="info ">\nA default mapper, which implements a &quot;deep identity&quot; mapping.<br>\n</div>\n<br>\n<h2 id="2_Applymapperstocompilationunits">Apply mappers to compilation units</h2><br>\n\n<pre id="VALtool_name"><span class="keyword">let</span> tool_name: unit =&gt; string;\n</pre><div class="info ">\nCan be used within a ppx preprocessor to know which tool is\n    calling it <code class="code">&quot;ocamlc&quot;</code>, <code class="code">&quot;ocamlopt&quot;</code>, <code class="code">&quot;ocamldoc&quot;</code>, <code class="code">&quot;ocamldep&quot;</code>,\n    <code class="code">&quot;ocaml&quot;</code>, ...  Some global variables that reflect command-line\n    options are automatically synchronized between the calling tool\n    and the ppx preprocessor: <code class="code">Clflags.include_dirs</code>,\n    <code class="code">Config.load_path</code>, <code class="code">Clflags.open_modules</code>, <code class="code">Clflags.for_package</code>,\n    <code class="code">Clflags.debug</code>.<br>\n</div>\n\n<pre id="VALapply"><span class="keyword">let</span> apply: source::string =&gt; target::string =&gt; mapper =&gt; unit;\n</pre><div class="info ">\nApply a mapper (parametrized by the unit name) to a dumped\n    parsetree found in the <code class="code">source</code> file and put the result in the\n    <code class="code">target</code> file. The <code class="code">structure</code> or <code class="code">signature</code> field of the mapper\n    is applied to the implementation or interface.<br>\n</div>\n\n<pre id="VALrun_main"><span class="keyword">let</span> run_main: (list string =&gt; mapper) =&gt; unit;\n</pre><div class="info ">\nEntry point to call to implement a standalone -ppx rewriter from a\n    mapper, parametrized by the command line arguments.  The current\n    unit name can be obtained from <code class="code">Location.input_name</code>.  This\n    function implements proper error reporting for uncaught\n    exceptions.<br>\n</div>\n<br>\n<h2 id="2_RegistrationAPI">Registration API</h2><br>\n\n<pre id="VALregister_function"><span class="keyword">let</span> register_function: Pervasives.ref (string =&gt; (list string =&gt; mapper) =&gt; unit);\n</pre>\n<pre id="VALregister"><span class="keyword">let</span> register: string =&gt; (list string =&gt; mapper) =&gt; unit;\n</pre><div class="info ">\nApply the <code class="code">register_function</code>.  The default behavior is to run the\n    mapper immediately, taking arguments from the process command\n    line.  This is to support a scenario where a mapper is linked as a\n    stand-alone executable.\n<p>\n\n    It is possible to overwrite the <code class="code">register_function</code> to define\n    &quot;-ppx drivers&quot;, which combine several mappers in a single process.\n    Typically, a driver starts by defining <code class="code">register_function</code> to a\n    custom implementation, then lets ppx rewriters (linked statically\n    or dynamically) register themselves, and then run all or some of\n    them.  It is also possible to have -ppx drivers apply rewriters to\n    only specific parts of an AST.\n</p><p>\n\n    The first argument to <code class="code">register</code> is a symbolic name to be used by\n    the ppx driver.<br>\n</p></div>\n<br>\n<h2 id="2_Conveniencefunctionstowritemappers">Convenience functions to write mappers</h2><br>\n\n<pre id="VALmap_opt"><span class="keyword">let</span> map_opt: (&apos;a =&gt; &apos;b) =&gt; option &apos;a =&gt; option &apos;b;\n</pre>\n<pre id="VALextension_of_error"><span class="keyword">let</span> extension_of_error: Location.error =&gt; Parsetree.extension;\n</pre><div class="info ">\nEncode an error into an &apos;ocaml.error&apos; extension node which can be\n    inserted in a generated Parsetree.  The compiler will be\n    responsible for reporting the error.<br>\n</div>\n\n<pre id="VALattribute_of_warning"><span class="keyword">let</span> attribute_of_warning: Location.t =&gt; string =&gt; Parsetree.attribute;\n</pre><div class="info ">\nEncode a warning message into an &apos;ocaml.ppwarning&apos; attribute which can be\n    inserted in a generated Parsetree.  The compiler will be\n    responsible for reporting the warning.<br>\n</div>\n<br>\n<h2 id="2_Helperfunctionstocallexternalmappers">Helper functions to call external mappers</h2><br>\n\n<pre id="VALadd_ppx_context_str"><span class="keyword">let</span> add_ppx_context_str: tool_name::string =&gt; Parsetree.structure =&gt; Parsetree.structure;\n</pre><div class="info ">\nExtract information from the current environment and encode it\n    into an attribute which is prepended to the list of structure\n    items in order to pass the information to an external\n    processor.<br>\n</div>\n\n<pre id="VALadd_ppx_context_sig"><span class="keyword">let</span> add_ppx_context_sig: tool_name::string =&gt; Parsetree.signature =&gt; Parsetree.signature;\n</pre><div class="info ">\nSame as <code class="code">add_ppx_context_str</code>, but for signatures.<br>\n</div>\n\n<pre id="VALdrop_ppx_context_str"><span class="keyword">let</span> drop_ppx_context_str: restore::bool =&gt; Parsetree.structure =&gt; Parsetree.structure;\n</pre><div class="info ">\nDrop the ocaml.ppx.context attribute from a structure.  If\n    <code class="code">restore</code> is true, also restore the associated data in the current\n    process.<br>\n</div>\n\n<pre id="VALdrop_ppx_context_sig"><span class="keyword">let</span> drop_ppx_context_sig: restore::bool =&gt; Parsetree.signature =&gt; Parsetree.signature;\n</pre><div class="info ">\nSame as <code class="code">drop_ppx_context_str</code>, but for signatures.<br>\n</div>\n<br>\n<h2 id="2_Cookies">Cookies</h2><br>\n<br>\n<h2 id="2_Cookies">Cookies</h2><br>\n<br>\nCookies are used to pass information from a ppx processor to\n    a further invocation of itself, when called from the OCaml\n    toplevel (or other tools that support cookies).<br>\n\n<pre id="VALset_cookie"><span class="keyword">let</span> set_cookie: string =&gt; Parsetree.expression =&gt; unit;\n</pre>\n<pre id="VALget_cookie"><span class="keyword">let</span> get_cookie: string =&gt; option Parsetree.expression;\n</pre></div>'}}},pathContext:{relativePath:"api/Ast_mapper.html"}}}});
//# sourceMappingURL=path---api-ast-mapper-html-0e2f61964bc0ab33ac0d.js.map