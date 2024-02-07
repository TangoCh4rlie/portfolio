export const ContactFrom = () => {
    return (
        <div className="z-10 bg-white-c">
            <form className="flex flex-col items-center">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactFrom;