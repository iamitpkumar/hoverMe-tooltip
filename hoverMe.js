(function($){
  $.fn.HoverMe = function(options){
    // Default settings
    let settings = $.extend({
      position: 'top',
      color: '#333',
      textColor: '#fff',
      borderRadius: '4px',
      fontSize: '14px',
      padding: '6px 10px'
    }, options);

    this.hover(function(e){
      let title = $(this).data("title");
      // Priority: data-position > options.position > default
      let pos = $(this).data("position") || settings.position;
      // Priority: data-color > options.color > default  
      let bgColor = $(this).data("color") || settings.color;
      let textColor = $(this).data("text-color") || settings.textColor;

      // create tooltip with dynamic styling
      let $tooltip = $("<div class='hoverme-tooltip'></div>")
        .text(title)
        .css({
          'background-color': bgColor,
          'color': textColor,
          'border-radius': settings.borderRadius,
          'font-size': settings.fontSize,
          'padding': settings.padding
        })
        .appendTo("body");

      // position tooltip
      let offset = $(this).offset();
      let w = $(this).outerWidth();
      let h = $(this).outerHeight();
      let tw = $tooltip.outerWidth();
      let th = $tooltip.outerHeight();

      let top, left;
      let arrowLeft, arrowTop;

      if(pos === "top") {
        top = offset.top - th - 10;
        left = offset.left + w/2 - tw/2;
        $tooltip.addClass("hoverme-top");
        
        // Calculate arrow position - center it on the element
        let elementCenter = offset.left + w/2;
        let tooltipLeft = left;
        arrowLeft = elementCenter - tooltipLeft - 6; // 6 is half the arrow width (border width)
        
        // Ensure arrow stays within tooltip bounds
        arrowLeft = Math.max(6, Math.min(arrowLeft, tw - 6));
      }
      else if(pos === "bottom") {
        top = offset.top + h + 10;
        left = offset.left + w/2 - tw/2;
        $tooltip.addClass("hoverme-bottom");
        
        let elementCenter = offset.left + w/2;
        let tooltipLeft = left;
        arrowLeft = elementCenter - tooltipLeft - 6;
        arrowLeft = Math.max(6, Math.min(arrowLeft, tw - 6));
      }
      else if(pos === "left") {
        top = offset.top + h/2 - th/2;
        left = offset.left - tw - 10;
        $tooltip.addClass("hoverme-left");
        
        let elementCenter = offset.top + h/2;
        let tooltipTop = top;
        arrowTop = elementCenter - tooltipTop - 6;
        arrowTop = Math.max(6, Math.min(arrowTop, th - 6));
      }
      else {
        top = offset.top + h/2 - th/2;
        left = offset.left + w + 10;
        $tooltip.addClass("hoverme-right");
        
        let elementCenter = offset.top + h/2;
        let tooltipTop = top;
        arrowTop = elementCenter - tooltipTop - 6;
        arrowTop = Math.max(6, Math.min(arrowTop, th - 6));
      }

      // Position the tooltip
      $tooltip.css({top: top, left: left});

      // Position the arrow
      if(pos === "top" || pos === "bottom") {
        $tooltip.find("::after").length || $tooltip.css("--arrow-left", arrowLeft + "px");
        // Use a more direct approach for arrow positioning
        $tooltip[0].style.setProperty("--arrow-left", arrowLeft + "px");
      } else {
        $tooltip[0].style.setProperty("--arrow-top", arrowTop + "px");
      }

      // Update CSS to use the custom properties and set arrow color
      if(pos === "top") {
        $tooltip.addClass("hoverme-top");
        $tooltip[0].style.setProperty("--after-left", arrowLeft + "px");
        $tooltip[0].style.setProperty("--arrow-color", bgColor);
      } else if(pos === "bottom") {
        $tooltip.addClass("hoverme-bottom");  
        $tooltip[0].style.setProperty("--after-left", arrowLeft + "px");
        $tooltip[0].style.setProperty("--arrow-color", bgColor);
      } else if(pos === "left") {
        $tooltip.addClass("hoverme-left");
        $tooltip[0].style.setProperty("--after-top", arrowTop + "px");
        $tooltip[0].style.setProperty("--arrow-color", bgColor);
      } else {
        $tooltip.addClass("hoverme-right");
        $tooltip[0].style.setProperty("--after-top", arrowTop + "px");
        $tooltip[0].style.setProperty("--arrow-color", bgColor);
      }

      // Show tooltip
      $tooltip.css({opacity: 1});

      $(this).data("tooltip", $tooltip);
    }, function(){
      let $tooltip = $(this).data("tooltip");
      if($tooltip) {
        $tooltip.remove();
      }
    });
    return this;
  };
})(jQuery);

// Add dynamic CSS for arrow positioning and colors
$("<style>").text(`
  .hoverme-top::after {
    left: var(--after-left, 50%);
    transform: translateX(-50%);
    border-top-color: var(--arrow-color, #333);
  }
  .hoverme-bottom::after {
    left: var(--after-left, 50%);
    transform: translateX(-50%);
    border-bottom-color: var(--arrow-color, #333);
  }
  .hoverme-left::after {
    top: var(--after-top, 50%);
    transform: translateY(-50%);
    border-left-color: var(--arrow-color, #333);
  }
  .hoverme-right::after {
    top: var(--after-top, 50%);
    transform: translateY(-50%);
    border-right-color: var(--arrow-color, #333);
  }
`).appendTo("head");