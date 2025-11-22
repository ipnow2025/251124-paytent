(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PresentationPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$cover$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/cover-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$01$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/chapter-01-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ip$2d$reality$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/ip-reality-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$why$2d$not$2d$managed$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/why-not-managed-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ip$2d$judgment$2d$core$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/ip-judgment-core-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$current$2d$issues$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/current-issues-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$02$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/chapter-02-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$annuity$2d$management$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/annuity-management-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$competitive$2d$advantage$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/competitive-advantage-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$03$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/chapter-03-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$service$2d$advantages$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/service-advantages-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$services$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/services-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$cross$2d$check$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/cross-check-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$data$2d$services$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/data-services-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$tech$2d$valuation$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/tech-valuation-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$patent$2d$value$2d$info$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/patent-value-info-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$04$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/chapter-04-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$why$2d$paytent$2d$ai$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/why-paytent-ai-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$paytent$2d$ai$2d$features$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/paytent-ai-features-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$paytent$2d$vs$2d$ai$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/paytent-vs-ai-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ai$2d$calendar$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/ai-calendar-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$paytent$2d$ai$2d$adoption$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/paytent-ai-adoption-slide.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$thank$2d$you$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slides/thank-you-slide.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const slides = [
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$cover$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoverSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$01$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chapter01Slide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ip$2d$reality$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IpRealitySlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$why$2d$not$2d$managed$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhyNotManagedSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ip$2d$judgment$2d$core$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IpJudgmentCoreSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$current$2d$issues$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentIssuesSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$02$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chapter02Slide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$annuity$2d$management$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnnuityManagementSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$competitive$2d$advantage$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompetitiveAdvantageSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$03$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chapter03Slide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$service$2d$advantages$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceAdvantagesSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$services$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServicesSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$cross$2d$check$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrossCheckSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$data$2d$services$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataServicesSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$tech$2d$valuation$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechValuationSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$patent$2d$value$2d$info$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PatentValueInfoSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$chapter$2d$04$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chapter04Slide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$why$2d$paytent$2d$ai$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhyPaytentAiSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$paytent$2d$ai$2d$features$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaytentAiFeaturesSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$paytent$2d$vs$2d$ai$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaytentVsAiSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ai$2d$calendar$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiCalendarSlide"],
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ai$2d$calendar$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiCalendarSlide"], {
            isPage22: true
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$ai$2d$calendar$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiCalendarSlide"], {
            isPage23: true
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$paytent$2d$ai$2d$adoption$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaytentAiAdoptionSlide"],
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slides$2f$thank$2d$you$2d$slide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThankYouSlide"]
];
function PresentationPage() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PresentationPage.useEffect": ()=>{
            const handleKeyDown = {
                "PresentationPage.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "ArrowRight" || e.key === " ") {
                        e.preventDefault();
                        nextSlide();
                    } else if (e.key === "ArrowLeft") {
                        e.preventDefault();
                        prevSlide();
                    }
                }
            }["PresentationPage.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "PresentationPage.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["PresentationPage.useEffect"];
        }
    }["PresentationPage.useEffect"], [
        currentSlide
    ]);
    const nextSlide = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % slides.length);
    };
    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + slides.length) % slides.length);
    };
    const CurrentSlideComponent = slides[currentSlide];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center p-4 md:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[1920px] aspect-video bg-card rounded-lg shadow-2xl overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentSlideComponent, {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-6 right-8 text-sm text-muted-foreground",
                            children: [
                                currentSlide + 1,
                                " / ",
                                slides.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex items-center justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: prevSlide,
                        disabled: currentSlide === 0,
                        variant: "outline",
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1",
                        children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide(index),
                                className: `h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"}`
                            }, index, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: nextSlide,
                        disabled: currentSlide === slides.length - 1,
                        variant: "outline",
                        size: "icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(PresentationPage, "/jm+XmndjAYlDCFyCnfFEXJOloU=");
_c = PresentationPage;
var _c;
__turbopack_context__.k.register(_c, "PresentationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b6d25ba0._.js.map