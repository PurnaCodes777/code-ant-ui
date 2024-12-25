import { createContext, useState } from "react"

export const RepoContext = createContext();



const AddRepoContext = ({ children }) => {

    const [showRepo, setShowRepo] = useState(false);

    const values = {
        showRepo,
        setShowRepo
    }

    return (
        <RepoContext.Provider value={values}>
            {children}
        </RepoContext.Provider>
    )
}

export default AddRepoContext