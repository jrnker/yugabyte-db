import{a as I,_ as z,j as p}from"./useTheme-ed20be1d.js";import{S as E,F as S}from"./FormControlLabel-80de5ea0.js";import{_ as C}from"./extends-98964cd2.js";import{r as o}from"./index-f2bd0723.js";import"./index-e297e3bd.js";import{w as q,c as B,a as $}from"./capitalize-6c71ac81.js";import{c as u}from"./createSvgIcon-e57f0ca4.js";import{T as F}from"./Typography-ee7f0f8e.js";import"./useFormControl-21824096.js";import"./IconButton-ce51819d.js";import"./ButtonBase-bbb043b6.js";import"./index-0a26bc51.js";import"./_commonjsHelpers-042e6b4d.js";import"./TransitionGroupContext-06ba0be2.js";import"./useIsFocusVisible-bfbe563c.js";import"./assertThisInitialized-e784747a.js";const H=u(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),M=u(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),L=u(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));var N=function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:I(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:I(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}},j=o.createElement(M,null),A=o.createElement(H,null),O=o.createElement(L,null),W=o.forwardRef(function(e,l){var m=e.checkedIcon,T=m===void 0?j:m,t=e.classes,f=e.color,h=f===void 0?"secondary":f,b=e.icon,P=b===void 0?A:b,y=e.indeterminate,n=y===void 0?!1:y,v=e.indeterminateIcon,g=v===void 0?O:v,_=e.inputProps,k=e.size,r=k===void 0?"medium":k,w=z(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),s=n?g:P,c=n?g:T;return o.createElement(E,C({type:"checkbox",classes:{root:B(t.root,t["color".concat($(h))],n&&t.indeterminate),checked:t.checked,disabled:t.disabled},color:h,inputProps:C({"data-indeterminate":n},_),icon:o.cloneElement(s,{fontSize:s.props.fontSize===void 0&&r==="small"?r:s.props.fontSize}),checkedIcon:o.cloneElement(c,{fontSize:c.props.fontSize===void 0&&r==="small"?r:c.props.fontSize}),ref:l},w))});const Y=q(N,{name:"MuiCheckbox"})(W),d=({label:a,labelProps:e,...l})=>p(S,{control:p(Y,{color:"primary",...l}),label:p(F,{component:"span",variant:"body2",...e,children:a})});try{d.displayName="YBCheckbox",d.__docgenInfo={description:"",displayName:"YBCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},inputProps:{defaultValue:null,description:"[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.",name:"inputProps",required:!1,type:{name:"InputBaseComponentProps"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:'TypographyProps<"span", {}>'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},disableFocusRipple:{defaultValue:null,description:"",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},edge:{defaultValue:null,description:`If given, uses a negative margin to counteract the padding on one
side (this is often helpful for aligning the left or right
side of the icon with content above or below, without ruining the border
size and shape).`,name:"edge",required:!1,type:{name:'false | "start" | "end"'}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},buttonRef:{defaultValue:null,description:"@ignore Use that prop to pass a ref to the native button component.\n@deprecated Use `ref` instead.",name:"buttonRef",required:!1,type:{name:"Ref<unknown>"}},centerRipple:{defaultValue:null,description:"If `true`, the ripples will be centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:null,description:"If `true`, the touch ripple effect will be disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:null,description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}}}}}catch{}const se={title:"Components/YBCheckbox",component:d,tags:["autodocs"],parameters:{controls:{exclude:["action","inputProps","focusVisibleClassName","onFocusVisible","ref","TouchRippleProps"],sort:"alpha"}},argTypes:{label:{control:{type:"text"}}}},i={args:{disabled:!1,centerRipple:!1,label:"Test",disableFocusRipple:!1,disableTouchRipple:!1,indeterminate:!1}};var R,x,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    disabled: false,
    centerRipple: false,
    label: 'Test',
    disableFocusRipple: false,
    disableTouchRipple: false,
    indeterminate: false
  }
}`,...(V=(x=i.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};const ce=["Checkbox"];export{i as Checkbox,ce as __namedExportsOrder,se as default};
//# sourceMappingURL=YBCheckbox.stories-cd130c4b.js.map