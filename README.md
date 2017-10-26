# issue-antd-menuitem

Reproduce an issue on Antd's Menu Item with React 16.0.0
```
% git clone https://github.com/harryzhux/issue-antd-menuitem
% cd issue-antd-menuitem
% npm install
% npm start
```
This should open the browser @http://localhost:3000.
Click the mouse over the down-arrow button to show the imenu items and use Inpect to see the warnings:

Warning: Stateless function components cannot be given refs. Attempts to access this ref will fail.null

The "null" part is fixed by facebook React team (see https://github.com/facebook/react/issues/10831).

