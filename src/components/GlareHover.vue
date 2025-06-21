<template>
  <div
    class="relative grid place-items-center overflow-hidden border cursor-pointer"
    :class="className"
    :style="wrapperStyle"
    @mouseenter="animateIn"
    @mouseleave="animateOut"
  >
    <div ref="overlayRef" :style="overlayStyle"></div>
    <slot />
  </div>
</template>
<script setup>
import { ref, computed, watchEffect } from 'vue'
// Props
const props = defineProps({
  width: { type: String, default: '500px' },
  height: { type: String, default: '500px' },
  background: { type: String, default: '#000' },
  borderRadius: { type: String, default: '10px' },
  borderColor: { type: String, default: '#333' },
  glareColor: { type: String, default: '#ffffff' },
  glareOpacity: { type: Number, default: 0.5 },
  glareAngle: { type: Number, default: -45 },
  glareSize: { type: Number, default: 250 },
  transitionDuration: { type: Number, default: 650 },
  playOnce: { type: Boolean, default: false },
  className: { type: String, default: '' },
})
// Refs
const overlayRef = ref(null)
// ✅ حساب rgba من hex
const rgba = computed(() => {
  const hex = props.glareColor.replace('#', '')
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${props.glareOpacity})`
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16)
    const g = parseInt(hex[1] + hex[1], 16)
    const b = parseInt(hex[2] + hex[2], 16)
    return `rgba(${r}, ${g}, ${b}, ${props.glareOpacity})`
  }
  return props.glareColor
})
// ✅ overlay style
const overlayStyle = computed(() => ({
  position: 'absolute',
  inset: 0,
  zIndex: 10,
  background: `linear-gradient(${props.glareAngle}deg,
    hsla(0,0%,0%,0) 60%,
    ${rgba.value} 70%,
    hsla(0,0%,0%,0) 100%)`,
  backgroundSize: `${props.glareSize}% ${props.glareSize}%, 100% 100%`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-100% -100%, 0 0',
  pointerEvents: 'none',
}))
// ✅ wrapper style
const wrapperStyle = computed(() => ({
  width: '100%',
  height: '100%',
  background: props.background,
  borderRadius: props.borderRadius,
  borderColor: props.borderColor,
}))
// ✅ animation handlers
function animateIn() {
  const el = overlayRef.value
  if (!el) return
  el.style.transition = 'none'
  el.style.backgroundPosition = '-100% -100%, 0 0'
  void el.offsetHeight // force reflow
  el.style.transition = `${props.transitionDuration}ms ease`
  el.style.backgroundPosition = '100% 100%, 0 0'
}
function animateOut() {
  const el = overlayRef.value
  if (!el) return
  if (props.playOnce) {
    el.style.transition = 'none'
    el.style.backgroundPosition = '-100% -100%, 0 0'
  } else {
    el.style.transition = `${props.transitionDuration}ms ease`
    el.style.backgroundPosition = '-100% -100%, 0 0'
  }
}
</script>
