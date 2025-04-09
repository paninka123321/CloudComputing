
# CloudComputing
Here is a place for the development of cloud computing application.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Users role
If user has an account then it have a special role. Depending on his role it have access to different sections. Available role are:
- student - place for children, where they show their emotions, play games;
- teacher - interface for educator where he has acess to his class (children in class). He can find here games for kids, dashboard with scores of children, and chat with parrents;
- parent - account for parent of each children, here parent will see the scores of kids and alerts if some comes, also there is a place for chatting with teacher.

If user is unlogged then his role is None, and has only access for basic section like 'about us' or section with psychological information. This all sections are also available for user (without children as this information will be too serious for them).


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Firebase 

Currently, we use it as a tool for user registration and keeping users -> login, logout, password change.
