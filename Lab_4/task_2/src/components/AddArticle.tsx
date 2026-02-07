const AddArticle = ({ name, title, summary, onChangeTitle, onChangeSummary, onAddClick }) => {
    return (
        <section>
            <h1>{name}</h1>
            <input
                placeholder="Title"
                value={title}
                onChange={onChangeTitle}
            />
            <input
                placeholder="Summary"
                value={summary}
                onChange={onChangeSummary}
            />
        </section>
    )

}

export default AddArticle;