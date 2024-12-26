import { useContext, useEffect, useState } from "react"
import RepoCard from "../RepoCard/RepoCard"
import projectsData from "../../mockData"
import { RepoContext } from "../../AddRepoContext/AddRepoContext";


const Main = () => {

    // const [repoData, setRepoData] = useState(projectsData);
    const { formRepoData, fakeRepoData, setFakeRepoData } = useContext(RepoContext);





    return (
        <>
            <div className="repo-list h-[500px] overflow-y-scroll ">
                {fakeRepoData.map((item, index) => {
                    return (
                        <RepoCard
                            key={index}
                            name={item.name}
                            visibility={item.visibility}
                            language={item.language}
                            size={item.size}
                            updated={item.updated}
                        />

                    )
                })}
            </div>
        </>
    )
}

export default Main