```javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```
```javascript
// app/page.js
export default function Home() {
  return (
    <div>Home Page</div>
  );
}
```
```javascript
// app/users/[id]/page.js
export default function User({params}) {
  return (
    <div>User {params.id}</div>
  );
}
```