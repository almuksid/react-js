# Day1. Components, Reusable components, Ui Section, Props, Argument, Parameter, Attribute, Event Handleing, State Managements, sibling
1. React-এ Component হলো UI এর ছোট ছোট অংশ।
2. UI মানে User Interface। একটা ওয়েবসাইটে অনেক Section থাকে। Hero section, Product section, Contact section, Footer section, React এ প্রতিটা section আলাদা component করা হয়।
3. Props মানে data পাঠানো parent component থেকে child component এ।
4. React-এ attribute হলো JSX-এর মধ্যে props পাঠানোর মাধ্যম। HTML-এর মতো দেখায়, কিন্তু সত্যি বলতে এগুলো props নামের object তৈরির উপাদান।
5. Attribute হচ্ছে HTML এর property। src, alt এইগুলো attribute
6. Parameter হলো সেই ভেরিয়েবল, যেটা function-এ argument ধরার জন্য ব্যবহৃত হয়। অর্থাৎ parameter হচ্ছে function definition এর অংশ।
7. Parameter মানে function এর ভেতরে data নেওয়ার variable. function add(a,b){} a, b এগুলো parameter
8. Argument মানে হচ্ছে — যখন তুমি কোনো function কল করো, তখন ব্র্যাকেট () এর ভিতরে যা পাঠাও, সেটা argument।
9. Sibling কী? Sibling মানে হলো একই parent এর child element গুলো। অর্থাৎ, যদি দুইটা element এর parent একই হয়, তাহলে তারা sibling।

- Components has 2 lears
1. Presentation Lear
2. Data/ Logic0 Lear
i) Props (Another components will pass me the data as arguments)
ii) State (Dynamic Data -> Changable Data -> User Integrations)

- React শেখার সঠিক order:

1️⃣ JavaScript ES6
2️⃣ Component
3️⃣ JSX
4️⃣ Props
5️⃣ Event Handling
6️⃣ State (useState)
7️⃣ List Rendering
8️⃣ Form Handling
9️⃣ API Call (Axios)
🔟 Routing

## 01. Make a biodata project
- Create a reusable components/function. and call his parameters name (props)
- Optional rendering 
```jsx        
{props.address && <p>Address : {props.address}</p>}
```
'argument' gula ka 'attribute' ear moto kora pas korce
---


