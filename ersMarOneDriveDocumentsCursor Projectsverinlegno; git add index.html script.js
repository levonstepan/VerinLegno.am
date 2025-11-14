warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'script.js', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/index.html b/index.html[m
[1mindex 4069947..c6c1eb4 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -238,7 +238,7 @@[m
     </section>[m
 [m
     <!-- Workshops Section -->[m
[31m-    <section id="workshops" class="section workshops-section" style="display: block; visibility: visible; opacity: 1; min-height: 400px;">[m
[32m+[m[32m    <section id="gago" class="section workshops-section" style="display: block; visibility: visible; opacity: 1; min-height: 400px;">[m
         <div class="container">[m
             <div class="section-header">[m
                 <span class="section-badge">Professional Training</span>[m
[1mdiff --git a/script.js b/script.js[m
[1mindex 8fa45ce..44660c2 100644[m
[1m--- a/script.js[m
[1m+++ b/script.js[m
[36m@@ -242,7 +242,7 @@[m [mfunction createScrollToTopButton() {[m
         font-size: 24px;[m
         cursor: pointer;[m
         opacity: 0;[m
[31m-        visibility: visible;[m
[32m+[m[32m        visibility: hidden;[m
         transition: all 0.3s ease;[m
         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);[m
         z-index: 999;[m
[36m@@ -256,7 +256,7 @@[m [mfunction createScrollToTopButton() {[m
             scrollBtn.style.visibility = 'visible';[m
         } else {[m
             scrollBtn.style.opacity = '0';[m
[31m-            scrollBtn.style.visibility = 'visible';[m
[32m+[m[32m            scrollBtn.style.visibility = 'hidden';[m
         }[m
     });[m
     [m
