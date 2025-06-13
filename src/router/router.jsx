import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import JobDetails from "../components/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJobs from "../pages/ApplyJobs/ApplyJobs";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import AllJobs from "../pages/AllJobs/AllJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";


const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:3000/jobs'),
                Component: Home
            },
            {
                path: "registration",
                Component: Registration
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "jobdetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                element: (
                    <PrivateRoute>
                        <JobDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "applyjobs/:id",
                element: (
                    <PrivateRoute>
                        <ApplyJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "myapplications",
                element: (
                    <PrivateRoute>
                        <MyApplications />
                    </PrivateRoute>
                ),
            },
            {
                path: "addjobs",
                element: (
                    <PrivateRoute>
                        <AddJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "mypostedjobs",
                element: (
                    <PrivateRoute>
                        <MyPostedJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "alljobs",
                loader: () => fetch('http://localhost:3000/jobs'),
                element: (
                    <PrivateRoute>
                        <AllJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "applications/:job_id",
                loader: ({params}) => fetch(`http://localhost:3000/applications/jobs/${params.job_id}`),
                element: (
                    <PrivateRoute>
                        <ViewApplications />
                    </PrivateRoute>
                ),
            },
        ]
    },
]);

export default router;