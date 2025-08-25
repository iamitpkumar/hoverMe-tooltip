# HoverMe Tooltip 🎯

A lightweight, customizable jQuery tooltip plugin with smart arrow positioning. The tooltip arrow always points to the center of the hovered element, regardless of tooltip size or element dimensions.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![jQuery](https://img.shields.io/badge/jQuery-3.6+-blue.svg)
![Size](https://img.shields.io/badge/size-~2KB-green.svg)

## ✨ Features

- **Smart Arrow Positioning** - Arrow always points to the center of the hovered element
- **Four Positions** - Top, bottom, left, and right positioning
- **Fully Customizable** - Colors, sizes, fonts, and more
- **Data Attribute Support** - Override settings per element
- **Lightweight** - Only ~2KB minified
- **Smooth Animations** - CSS transitions for smooth show/hide effects
- **Responsive** - Works on all screen sizes
- **Easy Integration** - Drop-in solution with minimal setup

## 🚀 Quick Start

### 1. Include Dependencies

```html
<link rel="stylesheet" href="hoverMe.css" />
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="hoverMe.js"></script>
```

### 2. Add HTML

```html
<button data-title="Hello World!">Hover me</button>
<button data-title="I'm on the bottom!" data-position="bottom">Bottom tooltip</button>
```

### 3. Initialize

```javascript
$("[data-title]").HoverMe();
```

That's it! 🎉

## 📖 Documentation

### Basic Usage

```javascript
// Initialize with defaults
$("[data-title]").HoverMe();

// Initialize with custom options
$("[data-title]").HoverMe({
  position: 'top',
  color: '#333',
  textColor: '#fff'
});
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `position` | String | `'top'` | Default position: `'top'`, `'bottom'`, `'left'`, `'right'` |
| `color` | String | `'#333'` | Background color of the tooltip |
| `textColor` | String | `'#fff'` | Text color of the tooltip |
| `borderRadius` | String | `'4px'` | Border radius of the tooltip |
| `fontSize` | String | `'14px'` | Font size of the tooltip text |
| `padding` | String | `'6px 10px'` | Internal padding of the tooltip |

### Data Attributes

You can override options for individual elements using data attributes:

```html
<!-- Custom position -->
<button data-title="I'm on the left!" data-position="left">Left tooltip</button>

<!-- Custom colors -->
<button data-title="Success message" 
        data-color="#10b981" 
        data-text-color="#fff">Success</button>

<!-- Override multiple properties -->
<button data-title="Custom tooltip" 
        data-position="bottom"
        data-color="#dc2626" 
        data-text-color="#fff">Custom Red</button>
```

### Available Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-title` | Tooltip text (required) | `data-title="Hello World!"` |
| `data-position` | Tooltip position | `data-position="bottom"` |
| `data-color` | Background color | `data-color="#ff0000"` |
| `data-text-color` | Text color | `data-text-color="#ffffff"` |

## 🎨 Examples

### Theme Examples

```javascript
// Success theme
$(".success").HoverMe({
  color: '#10b981',
  textColor: '#fff'
});

// Error theme  
$(".error").HoverMe({
  color: '#dc2626',
  textColor: '#fff'
});

// Dark theme
$(".dark").HoverMe({
  color: '#1f2937',
  textColor: '#f9fafb'
});
```

### Mixed Usage

```html
<!-- Uses plugin defaults -->
<button data-title="Default blue tooltip">Default</button>

<!-- Override just the color -->
<span data-title="Green tooltip" data-color="#059669" data-text-color="#fff">Success</span>

<!-- Different position -->
<div data-title="Bottom tooltip" data-position="bottom">Hover for bottom</div>
```

## 🎯 Smart Arrow Positioning

Unlike other tooltip plugins, HoverMe ensures the arrow always points to the **center** of the hovered element:

- ✅ **Smart**: Arrow points to element center
- ✅ **Adaptive**: Works with any element size  
- ✅ **Responsive**: Handles viewport boundaries
- ✅ **Consistent**: Same behavior across all positions

```html
<!-- Arrow points to center regardless of button width -->
<button data-title="Very long tooltip text" class="narrow-btn">Narrow</button>
<button data-title="Short" class="wide-btn">Very Wide Button</button>
```

## 🛠️ Advanced Usage

### Multiple Instances

```javascript
// Different themes for different sections
$(".header [data-title]").HoverMe({
  color: '#2563eb',
  position: 'bottom'
});

$(".sidebar [data-title]").HoverMe({
  color: '#7c3aed',
  position: 'right'
});
```

### Dynamic Content

```javascript
// Add tooltips to dynamically created elements
$(document).on('mouseenter', '.dynamic-tooltip', function() {
  if (!$(this).data('tooltip-initialized')) {
    $(this).HoverMe({
      color: '#ea580c'
    });
    $(this).data('tooltip-initialized', true);
    $(this).trigger('mouseenter');
  }
});
```

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Setup

```bash
git clone https://github.com/iamitpkumar/hoverme-tooltip.git
cd hoverme-tooltip
# Open index.html in your browser to test
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [@iamitpkumar](https://github.com/iamitpkumar)
