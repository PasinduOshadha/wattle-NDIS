import React, { useEffect, useState } from 'react';
import { postContacts } from '../Services/API/Post';

const ContactFormSection = () => {

    const [msg, setmsg] = React.useState(null)

    const [firstName, setfirstName] = useState("");
    const [subject, setsubject] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const [errfirstName, seterrfirstName] = useState(false);
    const [errsubject, seterrsubject] = useState(false);
    const [errmessage, seterrmessage] = useState(false);
    const [erremail, seterremail] = useState(false);


    React.useEffect(() => {
        if (msg !== null) {
            setTimeout(() => {
                setmsg(null);
            }, 6000);
        }

    }, [msg])


    const contactUs = (event) => {

        event.preventDefault();

        const obj = {
            name: firstName,
            email: email,
            subject: subject,
            message: message,
        };

        console.log("obj", obj);

        if (firstName === "") {
            seterrfirstName(true);
        }
        if (subject === "") {
            seterrsubject(true);
        }
        if (email === "") {
            seterremail(true);
        }

        if (message === "") {
            seterrmessage(true);
        }

        


        if (
            firstName !== "" &&
            email !== "" &&
            subject !== "" &&
            message !== ""

        ) {
            postContacts(obj)
                .then((res) => {
                    console.log("res", res);
                    setmsg("Your enquiry has been successfully submitted")

                    setfirstName("");
                    setemail("")
                    setsubject("")
                    setmessage("")

                    // alert("Submited..!!")
                    // this.setState(
                    //   {
                    //     name: "",
                    //     email: "",
                    //     contact:"",
                    //     memberNo:"",
                    //     webSite: "",
                    //     message: "",
                    //     toaster: true,
                    //     msg: "Your enquiry has been successfully submitted",
                    //   }
                    //   //   () => {
                    //   //     setTimeout(this.setState({toaster: false}),4000);
                    //   //   }
                    // );
                })
                .catch((error) => {
                    console.log("error", error);
                    // setmsg(error.response.data.message)
                    // setTimeout(setmsg(null),4000);
                    // this.setState({});
                });

        }



    };

    return (
        <section className="contact-area pt-120">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="contact-wrapper">
                            <div className="contact-wrapper-content">
                                <div className="section-title">
                                    <span className="section-subtitle">call to action</span>
                                    <h2 className="section-main-title mb-35">Send Us A Message</h2>
                                </div>
                                <div className="contact-form">
                                    <form >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Enter full name"
                                                        value={firstName}
                                                        onChange={(e) => {
                                                            setfirstName(e.target.value);
                                                            seterrfirstName(false);
                                                        }}
                                                    />
                                                    {errfirstName && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-email">
                                                    <input type="text" placeholder="email address"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setemail(e.target.value);
                                                            seterremail(false);
                                                        }}
                                                    />
                                                    {erremail && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="subject"
                                                        value={subject}
                                                        onChange={(e) => {
                                                            setsubject(e.target.value);
                                                            seterrsubject(false);
                                                        }}
                                                    />
                                                    {errsubject && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <textarea name="message" id="message" placeholder="message"
                                                        value={message}
                                                        onChange={(e) => {
                                                            setmessage(e.target.value);
                                                            seterrmessage(false);
                                                        }}
                                                    ></textarea>
                                                    {errmessage && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginBottom: "20px" }} >
                                            {true && (
                                                <span className="error" style={{ color: "green" }} >{msg}</span>
                                            )}
                                        </div>
                                        <div className="contact-btn">
                                            <button className="fill-btn"
                                                onClick={contactUs}
                                            ><i className="fal fa-farm"></i><span>Send Message</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="contact-wrapper-img">
                                <img src="/assets/img/about/464x750px_Contact-right-.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;