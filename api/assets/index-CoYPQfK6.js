import { r as reactExports, V as jsxRuntimeExports } from "./server-Cz7IVtPL.js";
import { f as frame, c as cancelFrame, s as supportsViewTimeline, a as supportsScrollTimeline, p as progress, v as velocityPerSecond, i as isHTMLElement, b as interpolate, d as defaultOffset$1, e as clamp, n as noop, r as resize, g as frameData, u as useConstant, h as useIsomorphicLayoutEffect, j as invariant, m as motionValue, k as createLucideIcon, l as motion, L as Link, A as AnimatePresence } from "./router-qszA5GkW.js";
import { s as stagger, w as wordReveal, f as fadeUp } from "./animations-B6IlXGQN.js";
import { u as useTransform, W as WhyChooseUs } from "./WhyChooseUs-CyBID-b4.js";
import { P as PracticeAreas } from "./PracticeAreas-Dab7adUM.js";
import { A as AttorneysSection } from "./AttorneysSection-BMPrhwVh.js";
import { C as CaseStudies } from "./CaseStudies-CzPBWWCT.js";
import { S as SectionHeader } from "./SectionHeader-D5MkZIr0.js";
import { A as ArrowUpRight } from "./arrow-up-right-BuSwavEi.js";
import { C as CTABanner } from "./CTABanner-BpEysZLB.js";
import { C as ContactSection } from "./ContactSection-aK2o5vAm.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./check-BALCcIkd.js";
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const { currentTime } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.preUpdate(onFrame, true);
  return () => cancelFrame(onFrame);
}
function canUseNativeTimeline(target) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() : supportsScrollTimeline();
}
const maxElapsed = 50;
const createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
const createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
const keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const { length, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = Math.abs(element[`scroll${position}`]);
  axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}
function calcInset(element, container) {
  const inset = { x: 0, y: 0 };
  let current = element;
  while (current && current !== container) {
    if (isHTMLElement(current)) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const { x, y } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}
const namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (edge in namedEdges) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber;
    } else if (edge.endsWith("%")) {
      edge = asNumber / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}
const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}
const ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};
const point = { x: 0, y: 0 };
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
  const { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset$1(offsetDefinition), { clamp: false });
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: (time) => {
      measure(element, options.target, info);
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}
const scrollListeners = /* @__PURE__ */ new WeakMap();
const resizeListeners = /* @__PURE__ */ new WeakMap();
const onScrollHandlers = /* @__PURE__ */ new WeakMap();
const scrollSize = /* @__PURE__ */ new WeakMap();
const dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
const getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
  if (!container)
    return noop;
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) {
        handler.measure(frameData.timestamp);
      }
      frame.preUpdate(notifyAll);
    };
    const notifyAll = () => {
      for (const handler of containerHandlers) {
        handler.notify();
      }
    };
    const listener2 = () => frame.read(measureAll);
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2);
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2);
    listener2();
  }
  if (trackContentSize && !dimensionCheckProcesses.has(container)) {
    const listener2 = scrollListeners.get(container);
    const size = {
      width: container.scrollWidth,
      height: container.scrollHeight
    };
    scrollSize.set(container, size);
    const checkScrollDimensions = () => {
      const newWidth = container.scrollWidth;
      const newHeight = container.scrollHeight;
      if (size.width !== newWidth || size.height !== newHeight) {
        listener2();
        size.width = newWidth;
        size.height = newHeight;
      }
    };
    const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
    dimensionCheckProcesses.set(container, dimensionCheckProcess);
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers)
      return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size)
      return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      resizeListeners.get(container)?.();
      window.removeEventListener("resize", scrollListener);
    }
    const dimensionCheckProcess = dimensionCheckProcesses.get(container);
    if (dimensionCheckProcess) {
      cancelFrame(dimensionCheckProcess);
      dimensionCheckProcesses.delete(container);
    }
    scrollSize.delete(container);
  };
}
const presets = [
  [ScrollOffset.Enter, "entry"],
  [ScrollOffset.Exit, "exit"],
  [ScrollOffset.Any, "cover"],
  [ScrollOffset.All, "contain"]
];
const stringToProgress = {
  start: 0,
  end: 1
};
function parseStringOffset(s) {
  const parts = s.trim().split(/\s+/);
  if (parts.length !== 2)
    return void 0;
  const a = stringToProgress[parts[0]];
  const b = stringToProgress[parts[1]];
  if (a === void 0 || b === void 0)
    return void 0;
  return [a, b];
}
function normaliseOffset(offset) {
  if (offset.length !== 2)
    return void 0;
  const result = [];
  for (const item of offset) {
    if (Array.isArray(item)) {
      result.push(item);
    } else if (typeof item === "string") {
      const parsed = parseStringOffset(item);
      if (!parsed)
        return void 0;
      result.push(parsed);
    } else {
      return void 0;
    }
  }
  return result;
}
function matchesPreset(offset, preset) {
  const normalised = normaliseOffset(offset);
  if (!normalised)
    return false;
  for (let i = 0; i < 2; i++) {
    const o = normalised[i];
    const p = preset[i];
    if (o[0] !== p[0] || o[1] !== p[1])
      return false;
  }
  return true;
}
function offsetToViewTimelineRange(offset) {
  if (!offset) {
    return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  }
  for (const [preset, name] of presets) {
    if (matchesPreset(offset, preset)) {
      return { rangeStart: `${name} 0%`, rangeEnd: `${name} 100%` };
    }
  }
  return void 0;
}
const timelineCache = /* @__PURE__ */ new Map();
function scrollTimelineFallback(options) {
  const currentTime = { value: 0 };
  const cancel = scrollInfo((info) => {
    currentTime.value = info[options.axis].progress * 100;
  }, options);
  return { currentTime, cancel };
}
function getTimeline({ source, container, ...options }) {
  const { axis } = options;
  if (source)
    container = source;
  let containerCache = timelineCache.get(container);
  if (!containerCache) {
    containerCache = /* @__PURE__ */ new Map();
    timelineCache.set(container, containerCache);
  }
  const targetKey = options.target ?? "self";
  let targetCache = containerCache.get(targetKey);
  if (!targetCache) {
    targetCache = {};
    containerCache.set(targetKey, targetCache);
  }
  const axisKey = axis + (options.offset ?? []).join(",");
  if (!targetCache[axisKey]) {
    if (options.target && canUseNativeTimeline(options.target)) {
      const range = offsetToViewTimelineRange(options.offset);
      if (range) {
        targetCache[axisKey] = new ViewTimeline({
          subject: options.target,
          axis
        });
      } else {
        targetCache[axisKey] = scrollTimelineFallback({
          container,
          ...options
        });
      }
    } else if (canUseNativeTimeline()) {
      targetCache[axisKey] = new ScrollTimeline({
        source: container,
        axis
      });
    } else {
      targetCache[axisKey] = scrollTimelineFallback({
        container,
        ...options
      });
    }
  }
  return targetCache[axisKey];
}
function attachToAnimation(animation, options) {
  const timeline = getTimeline(options);
  const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
  const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
  return animation.attachTimeline({
    timeline: useNative ? timeline : void 0,
    ...range && useNative && {
      rangeStart: range.rangeStart,
      rangeEnd: range.rangeEnd
    },
    observe: (valueAnimation) => {
      valueAnimation.pause();
      return observeTimeline((progress2) => {
        valueAnimation.time = valueAnimation.iterationDuration * progress2;
      }, timeline);
    }
  });
}
function isOnScrollWithInfo(onScroll) {
  return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
  if (isOnScrollWithInfo(onScroll)) {
    return scrollInfo((info) => {
      onScroll(info[options.axis].progress, info);
    }, options);
  } else {
    return observeTimeline(onScroll, getTimeline(options));
  }
}
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
  if (!container)
    return noop;
  const optionsWithDefaults = { axis, container, ...options };
  return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
const createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
const isRefPending = (ref) => {
  if (!ref)
    return false;
  return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
  return {
    factory: (animation) => scroll(animation, {
      ...options,
      axis,
      container: container?.current || void 0,
      target: target?.current || void 0
    }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (v) => v,
    duration: 1
  };
}
function canAccelerateScroll(target, offset) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
}
function useScroll({ container, target, ...options } = {}) {
  const values = useConstant(createScrollMotionValues);
  if (canAccelerateScroll(target, options.offset)) {
    values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
    values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
  }
  const scrollAnimation = reactExports.useRef(null);
  const needsStart = reactExports.useRef(false);
  const start = reactExports.useCallback(() => {
    scrollAnimation.current = scroll((_progress, { x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: container?.current || void 0,
      target: target?.current || void 0
    });
    return () => {
      scrollAnimation.current?.();
    };
  }, [container, target, JSON.stringify(options.offset)]);
  useIsomorphicLayoutEffect(() => {
    needsStart.current = false;
    if (isRefPending(container) || isRefPending(target)) {
      needsStart.current = true;
      return;
    } else {
      return start();
    }
  }, [start]);
  reactExports.useEffect(() => {
    if (needsStart.current) {
      invariant(!isRefPending(container));
      invariant(!isRefPending(target));
      return start();
    } else {
      return;
    }
  }, [start]);
  return values;
}
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
const __iconNode$1 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const headline = ["Your", "Trusted", "Law", "Firm,", "For", "Your", "Legal", "Solutions."];
function HeroSection() {
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: containerRef,
      onMouseMove: handleMouseMove,
      className: "spotlight relative min-h-screen flex items-center overflow-hidden grain bg-bg-primary",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y, opacity }, className: "absolute inset-0 -z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop",
              alt: "Law firm interior",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-bg-primary/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "aurora-orb animate-aurora",
              style: {
                top: "-10%",
                left: "-10%",
                width: 620,
                height: 620,
                background: "radial-gradient(circle, rgba(201,168,76,0.25), transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "aurora-orb animate-aurora",
              style: {
                bottom: "-15%",
                right: "-10%",
                width: 720,
                height: 720,
                background: "radial-gradient(circle, rgba(201,168,76,0.35), transparent 65%)",
                animationDelay: "-5s"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "aurora-orb animate-aurora",
              style: {
                top: "30%",
                right: "20%",
                width: 380,
                height: 380,
                background: "radial-gradient(circle, rgba(43,76,140,0.30), transparent 65%)",
                animationDelay: "-9s"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: "hidden", animate: "visible", variants: stagger, className: "max-w-5xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: wordReveal, className: "flex items-center gap-3 mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[10px] uppercase text-gold tracking-[0.3em]", children: "Trusted Legal Excellence Since 1998" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-[52px] leading-[1.05] md:text-[78px] lg:text-[96px] tracking-tight", children: headline.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: wordReveal, className: "inline-block mr-[0.25em]", children: i === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-light text-gold", children: w }) : w }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                variants: wordReveal,
                className: "mt-8 max-w-xl text-text-secondary text-lg leading-relaxed",
                children: "At Veritas Law, we provide strategic legal solutions backed by experience, integrity, and unwavering dedication to every client we represent."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: wordReveal, className: "mt-10 flex flex-wrap gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/contact",
                  className: "group inline-flex items-center gap-3 bg-gold text-white font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold/90 transition-colors",
                  children: [
                    "Get a Free Consultation",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/case-studies",
                  className: "inline-flex items-center gap-3 border border-text-primary/40 text-text-primary font-accent text-[11px] uppercase tracking-[0.2em] px-7 py-4 hover:bg-gold hover:border-gold hover:text-white transition-all",
                  children: "Explore Our Work"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: wordReveal,
                className: "mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, i)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-text-secondary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-primary font-medium", children: "4.9" }),
                      " · 600+ Reviews"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline h-4 w-px bg-gold/30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-text-secondary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-primary font-medium", children: "25+" }),
                    " Years Experience"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline h-4 w-px bg-gold/30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-text-secondary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-primary font-medium", children: "1,200+" }),
                    " Cases Won"
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.9, delay: 0.8 },
              className: "hidden xl:flex absolute right-10 bottom-24 gap-4",
              children: [
                {
                  name: "James Harrington",
                  role: "Senior Partner",
                  img: "https://randomuser.me/api/portraits/men/41.jpg"
                },
                {
                  name: "Amara Osei",
                  role: "Partner, Criminal",
                  img: "https://randomuser.me/api/portraits/women/68.jpg"
                }
              ].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "glass-card p-4 w-56 rounded-sm border-gold/20 hover:border-gold/50",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: a.img,
                        alt: a.name,
                        className: "h-12 w-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base text-text-primary", children: a.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-[10px] uppercase text-gold tracking-[0.2em]", children: a.role })
                    ] })
                  ] })
                },
                a.name
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1, y: [0, 8, 0] },
            transition: { opacity: { delay: 1.6 }, y: { duration: 1.8, repeat: Infinity } },
            className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-gold",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5" })
          }
        )
      ]
    }
  );
}
const items$1 = [
  "Rated #1 Law Firm 2024",
  "ABA Certified",
  "Forbes Legal Elite",
  "600+ 5-Star Reviews",
  "Licensed in 12 States",
  "Chambers Ranked",
  "Super Lawyers 2025"
];
function TrustBar() {
  const loop = [...items$1, ...items$1];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-gold/20 bg-bg-secondary py-5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused]", children: loop.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "flex items-center gap-8 px-8 font-accent text-[11px] uppercase text-gold/60 tracking-[0.25em]",
      children: [
        item,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "◆" })
      ]
    },
    i
  )) }) });
}
const items = [
  {
    quote: "Veritas Law guided our company through a regulatory minefield with calm and clarity. They are unlike any firm I've worked with.",
    name: "Eleanor Whitfield",
    role: "CEO, Whitfield Holdings",
    img: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    quote: "From day one I felt like their only client. Their preparation, integrity, and outcome speak for themselves.",
    name: "Marcus Reyes",
    role: "Personal Injury Client",
    img: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    quote: "They turned an impossible immigration case into permanent residency for our entire family. We will be forever grateful.",
    name: "Priya Nair",
    role: "Immigration Client",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (paused) return;
    const t2 = setInterval(() => setI((v) => (v + 1) % items.length), 6e3);
    return () => clearInterval(t2);
  }, [paused]);
  const t = items[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      className: "relative py-28 lg:py-40 bg-bg-primary overflow-hidden grain",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grid place-items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-[700px] w-[700px] rounded-full",
            style: { background: "radial-gradient(circle, rgba(138,43,226,0.10), transparent 60%)" }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-12 left-1/2 -translate-x-1/2 font-display text-[260px] leading-none text-gold/10 select-none pointer-events-none", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl px-6 lg:px-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mb-8", children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-gold text-gold" }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.blockquote,
            {
              initial: { opacity: 0, x: 60 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -60 },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-text-primary", children: [
                  '"',
                  t.quote,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-10 flex items-center justify-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: t.img,
                      alt: t.name,
                      className: "h-12 w-12 rounded-full object-cover grayscale"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-text-primary", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-[10px] uppercase tracking-[0.22em] text-gold", children: t.role })
                  ] })
                ] })
              ]
            },
            i
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center gap-2", children: items.map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setI(j),
              className: `h-1.5 transition-all ${j === i ? "w-8 bg-gold" : "w-4 bg-border"}`,
              "aria-label": `Go to testimonial ${j + 1}`
            },
            j
          )) })
        ] })
      ]
    }
  );
}
const articles = [
  {
    tag: "Corporate",
    title: "What the New SEC Disclosure Rules Mean for Mid-Market Boards",
    date: "May 2026",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
  },
  {
    tag: "Immigration",
    title: "Updated Visa Pathways for Skilled Workers in 2026",
    date: "April 2026",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800"
  },
  {
    tag: "Litigation",
    title: "AI Evidence in Federal Court: A Practitioner's Guide",
    date: "March 2026",
    read: "10 min",
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800"
  }
];
function Insights() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-28 lg:py-40 bg-bg-secondary border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        label: "Journal",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Legal ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-light", children: "Insights" }),
          " & News."
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: stagger,
        className: "mt-14 grid grid-cols-1 md:grid-cols-3 gap-6",
        children: articles.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { variants: fadeUp, className: "group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-bg-primary border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: a.img,
                alt: a.title,
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 px-3 py-1 bg-bg-primary/80 backdrop-blur border border-gold/40 font-accent text-[10px] uppercase tracking-[0.22em] text-gold", children: a.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl text-text-primary group-hover:text-gold transition-colors", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-accent text-[10px] uppercase tracking-[0.22em] text-text-tertiary", children: [
              a.date,
              " · ",
              a.read
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-gold font-accent text-[10px] uppercase tracking-[0.22em]", children: [
              "Read ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
            ] })
          ] })
        ] }, a.title))
      }
    )
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PracticeAreas, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AttorneysSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Insights, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
  ] });
}
export {
  Index as component
};
