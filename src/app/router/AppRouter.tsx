import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import Loading from "../../pages/additional/Loading";
import Overview from "../../pages/services/overview/Overview";
import InstallationGuide from "../../pages/services/installationGuide/InstallationGuide";
import Snapshot from "../../pages/services/snapshot/Snapshot";
import StateSync from "../../pages/services/stateSync/StateSync";
import Endpoints from "../../pages/services/endpoints/Endpoints";

const NotFound = React.lazy(() => import("../../pages/additional/NotFound"))
const Staking = React.lazy(() => import("../../pages/services/StakingNetworks"))
const Services = React.lazy(() => import("../../pages/general/Services"))
const Networks = React.lazy(() => import("../../pages/general/Networks"))
const Features = React.lazy(() => import("../../pages/general/Features"))
const AboutUs = React.lazy(() => import("../../pages/general/AboutUs"))

const StateSyncNetworks = React.lazy(() => import("../../pages/services/stateSync/StateSyncNetworks"))
const InstallationGuideNetworks = React.lazy(() => import("../../pages/services/installationGuide/InstallationGuideNetworks"))
const SnapshotNetworks = React.lazy(() => import("../../pages/services/snapshot/SnapshotNetworks"))
const EndpointsNetworks = React.lazy(() => import("../../pages/services/endpoints/EndpointsNetworks"))

// const Overview = React.lazy(() => import("../../pages/services/overview/Overview"))
// const InstallationGuide = React.lazy(() => import("../../pages/services/installationGuide/InstallationGuide"))
// const StateSync = React.lazy(() => import("../../pages/services/stateSync/StateSync"))
// const Snapshot = React.lazy(() => import("../../pages/services/snapshot/Snapshot"))
// const Endpoints = React.lazy(() => import("../../pages/services/endpoints/Endpoints"))


const AppRouter = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/" element={<AboutUs/>} />
                <Route path="/features" element={<Features/>} />
                <Route path="/networks" element={<Networks/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/staking" element={<Staking/>} />

                <Route path="/services/installation-guide" element={<InstallationGuideNetworks/>} />
                <Route path="/services/snapshot" element={<SnapshotNetworks/>} />
                <Route path="/services/state-sync" element={<StateSyncNetworks/>} />
                <Route path="/services/endpoints" element={<EndpointsNetworks/>} />

                <Route path="/services/:name" element={<Overview/>} />
                <Route path="/services/installation-guide/:name" element={<InstallationGuide/>} />
                <Route path="/services/snapshot/:name" element={<Snapshot/>} />
                <Route path="/services/state-sync/:name" element={<StateSync/>} />
                <Route path="/services/endpoints/:name" element={<Endpoints/>} />

                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;