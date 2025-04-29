
// هذا السكريبت يساعد في توجيه المسارات بشكل صحيح في تطبيق الصفحة الواحدة (SPA) على GitHub Pages
(function() {
  // إذا كانت هذه صفحة 404.html، احصل على المسار من هاش URL
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  
  // إذا كان هناك مسار محفوظ، قم بتوجيه المستخدم إليه
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();
