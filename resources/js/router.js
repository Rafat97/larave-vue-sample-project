// import Hello from "./views/Hello";
const Home = () =>  import("./views/Home")
const Hello = () =>  import("./views/Hello")
const Insert = () =>  import("./views/Insert.vue")
const View = () =>  import("./views/View.vue")
const Edit = () =>  import("./views/Edit.vue")
const NotFound = () =>  import("./views/NotFound.vue")

const ALL_ROUTER = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    // {
    //     path: "/hello",
    //     name: "hello",
    //     component: Hello,
    // },
    {
        path: "/insert",
        name: "insert",
        component: Insert,
    },
    {
        path: "/view",
        name: "view",
        component: View,
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: Edit,
    },
    {
        // will match everything
        path: '*',
        name: "404",
        component: NotFound,
      }
];

export default ALL_ROUTER;
