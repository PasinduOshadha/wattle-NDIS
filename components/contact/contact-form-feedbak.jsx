import React, { useEffect, useState } from 'react';
import { postContacts, postFeedback } from '../Services/API/Post';

const ContactFormSection = () => {

    const [msg, setmsg] = React.useState(null)

    const [firstName, setfirstName] = useState("");
    const [subject, setsubject] = useState("Complaint");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const [date, setdate] = useState("");
    const [pNumber, setpNumber] = useState("");
    const [org, setorg] = useState("");
    const [role, setrole] = useState("Participant");

    const [pName, setpName] = useState("");
    const [pAddress, setpAddress] = useState("");
    const [body, setbody] = useState("");
    const [services, setservices] = useState("");
    const [pDate, setpDate] = useState("");

    const [FName, setFName] = useState("");
    const [Fdetails, setFdetails] = useState("");
    const [FActions, setFActions] = useState("");



    const [errfirstName, seterrfirstName] = useState(false);
    const [errsubject, seterrsubject] = useState(false);
    const [errmessage, seterrmessage] = useState(false);
    const [erremail, seterremail] = useState(false);

    const [errDate, seterrDate] = useState(false);
    const [errpNumber, seterrpNumber] = useState(false);
    const [errorg, seterrorg] = useState(false);
    const [errrole, seterrrole] = useState(false);

    const [errPname, seterrPname] = useState(false);
    const [errPAdd, seterrPAdd] = useState(false);
    const [errbody, seterrbody] = useState(false);
    const [errservices, seterrservices] = useState(false);
    const [errpDate, seterrpDate] = useState(false);



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
            reason: subject,
            date: date,
            organization: org,
            phone: pNumber,
            role: role,

            pName: pName,
            pAddress: pAddress,
            body: body,
            services: services,
            pDate: pDate,

            FName: FName,
            feedback: Fdetails,
            actions: FActions
            // message: message,
        };

        console.log("obj", obj);

        if (firstName === "") {
            seterrfirstName(true);
        }
        if (subject === "") {
            seterrsubject(true);
        }
        // if (email === "") {
        //     seterremail(true);
        // }
        if (!date) {
            seterrDate(true)
        }
        if (!org) {
            seterrorg(true)
        }
        if (!pNumber) {
            seterrpNumber(true)
        }
        if (!role) {
            seterrrole(true)
        }
        if (!pName) {
            seterrPname(true)
        }
        if (!pAddress) {
            seterrPAdd(true)
        }
        if (!body) {
            seterrbody(true)
        }
        if (!services) {
            seterrservices(true)
        }
        if (!pDate) {
            seterrpDate(true)
        }

        // if (message === "") {
        //     seterrmessage(true);
        // }




        if (
            firstName !== "" &&
            // email !== "" &&
            subject !== "" &&
            date !== "" &&
            org !== "" &&
            pNumber !== "" &&
            role !== "" &&
            pName !== "" &&
            pAddress !== "" &&
            body !== "" &&
            pDate !== "" &&
            services !== ""

        ) {
            postFeedback(obj)
                .then((res) => {
                    console.log("res", res);
                    setmsg("Your feedback has been successfully submitted")

                    setfirstName("");
                    setemail("")
                    setsubject("")
                    setmessage("")

                    setdate("")
                    setorg("")
                    setpNumber("")
                    setrole("")
                    setpName("")
                    setpAddress("")
                    setbody("")
                    setservices("")
                    setpDate("");
                    setFName("")
                    setFActions("")
                    setFdetails("")


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
        <section className="">
            <div className="">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="contact-wrapper">
                            <div className="contact-wrapper-content2">
                                <div className="section-title">
                                    {/* <span className="section-subtitle">Details of NDIS Participant</span> */}
                                    {/* <h2 className="section-main-title mb-35">Send Us A Message
                                        For Next Project</h2> */}
                                </div>
                                <div className="contact-form">
                                    <form >
                                        <div className="row">
                                            <div className="col-sm-12">
                                   
                                                <div className="single-input-field field-message">
                                                    <label>Reason for Feedback</label>
                                                    <select
                                                        value={subject}
                                                        onChange={(e) => {
                                                            setsubject(e.target.value);
                                                            seterrsubject(false);
                                                        }}
                                                    >
                                                        <option value="Complaint">Complaint</option>
                                                        <option value="Suggestion">Suggestion</option>
                                                        <option value="Compliment">Compliment</option>

                                                    </select>
                                                    {/* <input type="text" placeholder="Reason for Feedback "
                                                        value={subject}
                                                        onChange={(e) => {
                                                            setsubject(e.target.value);
                                                            seterrsubject(false);
                                                        }}
                                                    /> */}
                                                    {errsubject && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <span className="section-subtitle mt-30">Details of Person Providing Feedback</span>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-message">
                                                    <input type="date" placeholder="Date
"
                                                        value={date}
                                                        onChange={(e) => {
                                                            setdate(e.target.value);
                                                            seterrDate(false);
                                                        }}
                                                    />
                                                    {errDate && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Name
"
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
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="Organization"
                                                        value={org}
                                                        onChange={(e) => {
                                                            setorg(e.target.value);
                                                            seterrorg(false);
                                                        }}
                                                    />
                                                    {errorg && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-number">
                                                    <input type="text" placeholder="Phone Number"
                                                        value={pNumber}
                                                        onChange={(e) => {
                                                            setpNumber(e.target.value);
                                                            seterrpNumber(false);
                                                        }}
                                                    />
                                                    {errpNumber && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <label>Role</label>
                                                    <select
                                                        value={role}
                                                        onChange={(e) => {
                                                            setrole(e.target.value);
                                                            seterrrole(false);
                                                        }}
                                                    >
                                                        <option value="Participant">Participant</option>
                                                        <option value="Family Member">Family Member</option>
                                                        <option value="Representative">Representative</option>
                                                        <option value="Carer">Carer</option>
                                                        <option value="Worker">Worker</option>

                                                    </select>
                                                    {/* <input type="text" placeholder="Role"
                                                        value={role}
                                                        onChange={(e) => {
                                                            setrole(e.target.value);
                                                            seterrrole(false);
                                                        }}
                                                    /> */}
                                                    {errrole && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>


                                            <span className="section-subtitle mt-30">Participant Details</span>

                                            <div className="col-sm-12">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Name
"
                                                        value={pName}
                                                        onChange={(e) => {
                                                            setpName(e.target.value);
                                                            seterrPname(false);
                                                        }}
                                                    />
                                                    {errPname && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="Address"
                                                        value={pAddress}
                                                        onChange={(e) => {
                                                            setpAddress(e.target.value);
                                                            seterrPAdd(false);
                                                        }}
                                                    />
                                                    {errPAdd && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <textarea name="message" id="message" placeholder="Funding Body"
                                                        value={body}
                                                        onChange={(e) => {
                                                            setbody(e.target.value);
                                                            seterrbody(false);
                                                        }}
                                                    ></textarea>

                                                    {errbody && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="Services Accessed"
                                                        value={services}
                                                        onChange={(e) => {
                                                            setservices(e.target.value);
                                                            seterrservices(false);
                                                        }}
                                                    />
                                                    {errservices && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <input type="date" placeholder="Date"
                                                        value={pDate}
                                                        onChange={(e) => {
                                                            setpDate(e.target.value);
                                                            seterrpDate(false);
                                                        }}
                                                    />
                                                    {errpDate && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="section-title">
                                                <span className="section-subtitle mt-30">Details of Feedback
                                                </span>
                                                {/* <h2 className="section-main-title mb-35">Send Us A Message
                                        For Next Project</h2> */}
                                            </div>
                                            <div className="contact-form">
                                                <form >
                                                    <div className="row">

                                                        <div className="col-sm-12">
                                                            <div className="single-input-field field-message">
                                                                <input type="text" placeholder="Name if Staff/Provider
"
                                                                    value={FName}
                                                                    onChange={(e) => {
                                                                        setFName(e.target.value);
                                                                        // seterrsubject(false);
                                                                    }}
                                                                />
                                                                {/* {errsubject && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )} */}
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12">
                                                            <div className="single-input-field field-message">

                                                                <textarea name="message" id="message" placeholder="Details if Feedback"
                                                                    value={Fdetails}
                                                                    onChange={(e) => {
                                                                        setFdetails(e.target.value);
                                                                        // seterrmessage(false);
                                                                    }}
                                                                ></textarea>

                                                                {/* {errsubject && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )} */}
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12">
                                                            <div className="single-input-field field-message">
                                                                <textarea name="message" id="message" placeholder="Actions Taken"
                                                                    value={FActions}
                                                                    onChange={(e) => {
                                                                        setFActions(e.target.value);
                                                                        // seterrmessage(false);
                                                                    }}
                                                                ></textarea>

                                                                {/* {errsubject && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )} */}
                                                            </div>
                                                        </div>

                                                        {/* <div className="col-sm-12">
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
                                            </div> */}
                                                    </div>
                                                    <div style={{ marginBottom: "20px" }} >
                                                        {true && (
                                                            <span className="error" style={{ color: "green" }} >{msg}</span>
                                                        )}
                                                    </div>
                                                    <div className="contact-btn">
                                                        <button className="fill-btn"
                                                            onClick={contactUs}
                                                        ><i className="fal fa-farm"></i><span>Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* <div className="col-sm-12">
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
                                            </div> */}
                                        </div>
                                        {/* <div style={{ marginBottom: "20px" }} >
                                            {true && (
                                                <span className="error" style={{ color: "green" }} >{msg}</span>
                                            )}
                                        </div>
                                        <div className="contact-btn">
                                            <button className="fill-btn"
                                                onClick={contactUs}
                                            ><i className="fal fa-farm"></i><span>Get a Quote</span></button>
                                        </div> */}
                                    </form>
                                </div>
                            </div>




                            {/* <div className="contact-wrapper-img">
                                <img src="/assets/img/about/contact-img.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;