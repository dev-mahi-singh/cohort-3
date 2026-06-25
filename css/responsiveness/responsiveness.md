Responsiveness

Units

- px - fixed
- % - depends on parent
- vw - veiwport width | Depends on screen's width
- vh - viewport height | Depends on screen's height
- vmax - viewport maximum | width jyada to vw and height jyada to vh
- vmin - viewport minimum | width kam to vw and height kam to vh
- em - font-size depends on parent | when parent's font-size value change child's em value also change
- rem - (1 rem = 16px)

- ch - character's width
- ex - character's height

min-height:100px = minimum 100px hogi agar extend hona hoga to ho jayegi
max-height:100px = maximum 100px hogi us se jyada nahi badegi and content agar 100px se kam hai to apni height bhi kam ho jayegi

min-width = same as min-height (works on inline-block elements)
max-width = same as max-height (works on inline-block elements)

clamp(min, preferred, max)

media queries