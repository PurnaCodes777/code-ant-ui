import { useState } from "react"
import RepoCard from "../RepoCard/RepoCard"
import projectsData from "../../mockData"


const Main = () => {

    const [repoData, setRepoData] = useState(projectsData);


    return (
        <>
            <div className="repo-list h-[500px] overflow-y-scroll ">
                {repoData.map((item, index) => {
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