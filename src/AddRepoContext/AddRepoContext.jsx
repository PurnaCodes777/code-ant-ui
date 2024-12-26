import { createContext, useState } from "react"
import projectsData from "../mockData";

export const RepoContext = createContext();



const AddRepoContext = ({ children }) => {

    // Main state which renders repo data
    const [fakeRepoData, setFakeRepoData] = useState(projectsData);

    const [showRepo, setShowRepo] = useState(false);
    const [formRepoData, setFormRepoData] = useState({

        name: '',
        visibility: '',
        size: '',
        updated: '',
        language: 'JavaScript'

    });






    const values = {
        showRepo,
        setShowRepo,
        formRepoData,
        setFormRepoData,
        fakeRepoData,
        setFakeRepoData

    }

    return (
        <RepoContext.Provider value={values}>
            {children}
        </RepoContext.Provider>
    )
}

export default AddRepoContext