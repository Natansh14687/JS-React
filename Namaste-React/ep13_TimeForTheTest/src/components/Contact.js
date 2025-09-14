const Contact = ()=>{
    return(
        <div className="text-center mt-4">
            <h1 className="font-bold text-xl">This is Contact section...</h1>
            <form className="mt-4">
                <input type="text" placeholder="name" className="border p-2 mx-4" />
                <input type="text" placeholder="message" className="border p-2 mx-4" />
                <button className="border p-2 mx-4 px-4 rounded bg-black text-white font-bold">Submit</button>
            </form>
        </div>

    )
}
export default Contact;