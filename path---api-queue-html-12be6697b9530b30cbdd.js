webpackJsonp([218],{"./node_modules/json-loader/index.js!./.cache/json/api-queue-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Queue.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Printf.html" title="Printf">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Random.html" title="Random">Next</a>\n</div>\n<h1>Module <a href="type_Queue.html">Queue</a></h1>\n\n<pre><span class="keyword">module</span> Queue: sig .. end</pre><div class="info module top">\nFirst-in first-out queues.\n<p>\n\n   This module implements queues (FIFOs), with in-place modification.\n</p><p>\n\n   <b>Warning</b> This module is not thread-safe: each <a href="Queue.html#TYPEt"><code class="code">Queue.t</code></a> value\n   must be protected from concurrent access (e.g. with a <code class="code">Mutex.t</code>).\n   Failure to do so can lead to a crash.<br>\n</p></div>\n<hr width="100%">\n\n<pre id="TYPEt"><span class="keyword">type</span> t &apos;a;\n</pre>\n<div class="info ">\nThe type of queues containing elements of type <code class="code">&apos;a</code>.<br>\n</div>\n\n\n<pre id="EXCEPTIONEmpty"><span class="keyword">exception</span> Empty;\n</pre>\n<div class="info ">\nRaised when <a href="Queue.html#VALtake"><code class="code">Queue.take</code></a> or <a href="Queue.html#VALpeek"><code class="code">Queue.peek</code></a> is applied to an empty queue.<br>\n</div>\n\n<pre id="VALcreate"><span class="keyword">let</span> create: unit =&gt; t &apos;a;\n</pre><div class="info ">\nReturn a new queue, initially empty.<br>\n</div>\n\n<pre id="VALadd"><span class="keyword">let</span> add: &apos;a =&gt; t &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">add x q</code> adds the element <code class="code">x</code> at the end of the queue <code class="code">q</code>.<br>\n</div>\n\n<pre id="VALpush"><span class="keyword">let</span> push: &apos;a =&gt; t &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">push</code> is a synonym for <code class="code">add</code>.<br>\n</div>\n\n<pre id="VALtake"><span class="keyword">let</span> take: t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">take q</code> removes and returns the first element in queue <code class="code">q</code>,\n   or raises <code class="code">Empty</code> if the queue is empty.<br>\n</div>\n\n<pre id="VALpop"><span class="keyword">let</span> pop: t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">pop</code> is a synonym for <code class="code">take</code>.<br>\n</div>\n\n<pre id="VALpeek"><span class="keyword">let</span> peek: t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">peek q</code> returns the first element in queue <code class="code">q</code>, without removing\n   it from the queue, or raises <code class="code">Empty</code> if the queue is empty.<br>\n</div>\n\n<pre id="VALtop"><span class="keyword">let</span> top: t &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">top</code> is a synonym for <code class="code">peek</code>.<br>\n</div>\n\n<pre id="VALclear"><span class="keyword">let</span> clear: t &apos;a =&gt; unit;\n</pre><div class="info ">\nDiscard all elements from a queue.<br>\n</div>\n\n<pre id="VALcopy"><span class="keyword">let</span> copy: t &apos;a =&gt; t &apos;a;\n</pre><div class="info ">\nReturn a copy of the given queue.<br>\n</div>\n\n<pre id="VALis_empty"><span class="keyword">let</span> is_empty: t &apos;a =&gt; bool;\n</pre><div class="info ">\nReturn <code class="code">true</code> if the given queue is empty, <code class="code">false</code> otherwise.<br>\n</div>\n\n<pre id="VALlength"><span class="keyword">let</span> length: t &apos;a =&gt; int;\n</pre><div class="info ">\nReturn the number of elements in a queue.<br>\n</div>\n\n<pre id="VALiter"><span class="keyword">let</span> iter: (&apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">iter f q</code> applies <code class="code">f</code> in turn to all elements of <code class="code">q</code>,\n   from the least recently entered to the most recently entered.\n   The queue itself is unchanged.<br>\n</div>\n\n<pre id="VALfold"><span class="keyword">let</span> fold: (&apos;b =&gt; &apos;a =&gt; &apos;b) =&gt; &apos;b =&gt; t &apos;a =&gt; &apos;b;\n</pre><div class="info ">\n<code class="code">fold f accu q</code> is equivalent to <code class="code">List.fold_left f accu l</code>,\n   where <code class="code">l</code> is the list of <code class="code">q</code>&apos;s elements. The queue remains\n   unchanged.<br>\n</div>\n\n<pre id="VALtransfer"><span class="keyword">let</span> transfer: t &apos;a =&gt; t &apos;a =&gt; unit;\n</pre><div class="info ">\n<code class="code">transfer q1 q2</code> adds all of <code class="code">q1</code>&apos;s elements at the end of\n   the queue <code class="code">q2</code>, then clears <code class="code">q1</code>. It is equivalent to the\n   sequence <code class="code">iter (fun x -&gt; add x q2) q1; clear q1</code>, but runs\n   in constant time.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Queue.html"}}}});
//# sourceMappingURL=path---api-queue-html-12be6697b9530b30cbdd.js.map