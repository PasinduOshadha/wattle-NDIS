import React, { useEffect, useState } from 'react';
import { postContacts, postReferrel } from '../Services/API/Post';

const ContactFormSection = () => {

    const [msg, setmsg] = React.useState(null)

    const [firstName, setfirstName] = useState("");
    const [subject, setsubject] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");

    const [phone, setphone] = useState("");
    const [ndis, setndis] = useState("");
    const [dob, setdob] = useState("");
    const [manager, setmanager] = useState("");
    const [address, setaddress] = useState("");


    const [Rname, setRname] = useState("");
    const [RLname, setRLname] = useState("");
    const [Rnumber, setRnumber] = useState("");
    const [Remail, setRemail] = useState("");
    const [Rorg, setRorg] = useState("");
    const [Rrelation, setRrelation] = useState("");


    const [errfirstName, seterrfirstName] = useState(false);
    const [errsubject, seterrsubject] = useState(false);
    const [errmessage, seterrmessage] = useState(false);
    const [erremail, seterremail] = useState(false);

    const [errphone, seterrphone] = useState(false);
    const [errndis, seterrndis] = useState(false);
    const [errdob, seterrdob] = useState(false);
    const [errmanager, seterrmanager] = useState(false);
    const [erraddress, seterraddress] = useState(false);



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
            phone:phone,
            ndis:ndis,
            dob:dob,
            manager:manager,
            address:address,

            refName:Rname,
            refLname:RLname,
            refPhone:Rnumber,
            refEmail:Remail,
            refOrg:Rorg,
            refRelation:Rrelation
            // subject: subject,
            // message: message,
        };

        console.log("obj", obj);

        if (firstName === "") {
            seterrfirstName(true);
        }
        // if (subject === "") {
        //     seterrsubject(true);
        // }
        if (email === "") {
            seterremail(true);
        }

        if (!phone) {
            seterrphone(true);
        }

        if (!ndis) {
            seterrndis(true);
        }

        if (!dob) {
            seterrdob(true);
        }

        if (!manager) {
            seterrmanager(true);
        }

        if (!address) {
            seterraddress(true);
        }

        // if (message === "") {
        //     seterrmessage(true);
        // }




        if (
            firstName !== "" &&
            email !== "" &&
            phone &&
            ndis &&
            dob &&
            manager &&
            address
            // subject !== "" &&
            // message !== ""

        ) {
            postReferrel(obj)
                .then((res) => {
                    console.log("res", res);
                    setmsg("Your referrel has been successfully submitted")

                    setfirstName("");
                    setemail("")
                    setsubject("")
                    setmessage("")

                    setphone("")
                    setndis("")
                    setdob("")
                    setmanager("")
                    setaddress("")

                    setRname("")
                    setRLname("")
                    setRnumber("")
                    setRemail("")
                    setRorg("")
                    setRrelation("")


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
                                    <span className="section-subtitle">Details of NDIS Participant</span>
                                    {/* <h2 className="section-main-title mb-35">Send Us A Message
                                        For Next Project</h2> */}
                                </div>
                                <div className="contact-form">
                                    <form >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Name of Participants
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
                                                    <input type="text" placeholder="Phone Number"
                                                        value={phone}
                                                        onChange={(e) => {
                                                            setphone(e.target.value);
                                                            seterrphone(false);
                                                        }}
                                                    />
                                                    {errphone && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="NDIS Number"
                                                        value={ndis}
                                                        onChange={(e) => {
                                                            setndis(e.target.value);
                                                            seterrndis(false);
                                                        }}
                                                    />
                                                    {errndis && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="DOB"
                                                        value={dob}
                                                        onChange={(e) => {
                                                            setdob(e.target.value);
                                                            seterrdob(false);
                                                        }}
                                                    />
                                                    {errdob && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-email">
                                                    <input type="text" placeholder="Email"
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
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Name if NDIS Plan Manager
"
                                                        value={manager}
                                                        onChange={(e) => {
                                                            setmanager(e.target.value);
                                                            seterrmanager(false);
                                                        }}
                                                    />
                                                    {errmanager && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="Address"
                                                        value={address}
                                                        onChange={(e) => {
                                                            setaddress(e.target.value);
                                                            seterraddress(false);
                                                        }}
                                                    />
                                                    {erraddress && (
                                                        <div className="error" style={{ color: "red" }}>
                                                            This Field is Requied
                                                        </div>
                                                    )}
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


                                <div className="section-title">
                                    <span className="section-subtitle mt-30">Details of Person Making Referral ( If same as above , please leave blank)
                                    </span>
                                    {/* <h2 className="section-main-title mb-35">Send Us A Message
                                        For Next Project</h2> */}
                                </div>
                                <div className="contact-form">
                                    <form >
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="First Name
"
                                                        value={Rname}
                                                        onChange={(e) => {
                                                            setRname(e.target.value);
                                                            // seterrfirstName(false);
                                                        }}
                                                    />
                                                    {/* {errfirstName && (
                                                            <div className="error" style={{ color: "red" }}>
                                                                This Field is Requied
                                                            </div>
                                                        )} */}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Last Name
"
                                                        value={RLname}
                                                        onChange={(e) => {
                                                            setRLname(e.target.value);
                                                            // seterrfirstName(false);
                                                        }}
                                                    />
                                                    {/* {errfirstName && (
                                                            <div className="error" style={{ color: "red" }}>
                                                                This Field is Requied
                                                            </div>
                                                        )} */}
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input-field field-number">
                                                    <input type="text" placeholder="Phone Number"
                                                        value={Rnumber}
                                                        onChange={(e) => {
                                                            setRnumber(e.target.value);
                                                            // seterremail(false);
                                                        }}
                                                    />
                                                    {/* {erremail && (
                                                            <div className="error" style={{ color: "red" }}>
                                                                This Field is Requied
                                                            </div>
                                                        )} */}
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="single-input-field field-email">
                                                    <input type="text" placeholder="Email"
                                                        value={Remail}
                                                        onChange={(e) => {
                                                            setRemail(e.target.value);
                                                            // seterremail(false);
                                                        }}
                                                    />
                                                    {/* {erremail && (
                                                            <div className="error" style={{ color: "red" }}>
                                                                This Field is Requied
                                                            </div>
                                                        )} */}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-name">
                                                    <input type="text" placeholder="Organization & Position
"
                                                        value={Rorg}
                                                        onChange={(e) => {
                                                            setRorg(e.target.value);
                                                            // seterrfirstName(false);
                                                        }}
                                                    />
                                                    {/* {errfirstName && (
                                                            <div className="error" style={{ color: "red" }}>
                                                                This Field is Requied
                                                            </div>
                                                        )} */}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="single-input-field field-message">
                                                    <input type="text" placeholder="Relationship to NDIS Participant"
                                                        value={Rrelation}
                                                        onChange={(e) => {
                                                            setRrelation(e.target.value);
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