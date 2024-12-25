

const AddRepoForm = () => {
    return (
        <div className="w-[500px] h-[500px] bg-slate-100 z-[100] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border">
            <h1>Add a Repository</h1>
            <div>
                <form action="/">
                    <div>
                        <div>
                            <p>Name of the Repository</p>
                            <input type="text" placeholder="Repository name" />
                        </div>
                        <div>
                            <p>Set Visibility</p>
                            <input name="visibility" type="radio" value='Public' />
                            <input name="visibility" type="radio" value='Private' />
                        </div>
                        <div>
                            <p>Select Technology</p>
                            <select name="language">
                                <option value="JavaScript">JavaScript</option>
                                <option value="React">React</option>
                                <option value="Python">Python</option>
                                <option value="Java">Java</option>
                            </select>
                        </div>
                        <div>
                            <p>File Size</p>
                            <input type="text" placeholder="Format: 1024 KB" />
                        </div>
                        <div>
                            <p>Updated</p>
                            <input type="text" placeholder="2 days" />
                        </div>
                    </div>
                    <div>
                        <button type="submit">Add</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddRepoForm