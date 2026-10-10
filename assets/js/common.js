$(document).ready(function () {
  // Native buttons support Enter and Space; keep disclosure state in sync.
  $(".links button[data-disclosure]").click(function () {
    const $button = $(this);
    const $entry = $button.closest(".links").parent();
    const $panel = $(document.getElementById($button.attr("aria-controls")));
    if (!$panel.length) return;

    const expanded = !$panel.hasClass("open");
    $entry.children(".hidden").removeClass("open").attr("aria-hidden", "true");
    $entry.find(".links button[data-disclosure]").attr("aria-expanded", "false");
    $panel.toggleClass("open", expanded).attr("aria-hidden", String(!expanded));
    $button.attr("aria-expanded", String(expanded));
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
