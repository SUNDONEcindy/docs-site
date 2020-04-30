(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{329:function(e,t,o){"use strict";o.r(t);var r=o(3),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installing-node-js-on-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-on-z-os"}},[e._v("#")]),e._v(" Installing Node.js on z/OS")]),e._v(" "),o("p",[e._v("Before you install Zowe™, you must install IBM SDK for Node.js on the same z/OS server that hosts the Zowe Application Server. Review the information in this topic to obtain and install Node.js.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#supported-nodejs-versions"}},[e._v("Supported Node.js versions")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#how-to-obtain-ibm-sdk-for-nodejs---zos"}},[e._v("How to obtain IBM SDK for Node.js - z/OS")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#hardware-and-software-prerequisites"}},[e._v("Hardware and software prerequisites")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#installing-the-pax-edition-of-nodejs---zos"}},[e._v("Installing the PAX edition of Node.js - z/OS")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#installing-the-smpe-edition-of-nodejs---zos"}},[e._v("Installing the SMP/E edition of Node.js - z/OS")])])]),e._v(" "),o("h2",{attrs:{id:"supported-node-js-versions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-node-js-versions"}},[e._v("#")]),e._v(" Supported Node.js versions")]),e._v(" "),o("p",[e._v("The following Node.js versions are supported to run Zowe. See the "),o("a",{attrs:{href:"#hardware-and-software-prerequisites"}},[e._v("Hardware and software prerequisites")]),e._v(" section for the prerequisites that are required by Zowe.")]),e._v(" "),o("p",[e._v("The corresponding "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSWLKB/welcome_nodesdk_family.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Knowledge Center for Node.js - z/OS"),o("OutboundLink")],1),e._v(" lists all the prerequisites for Node.js. Some software packages, which might be listed as prerequisites there, are "),o("strong",[e._v("NOT")]),e._v(" required by Zowe. Specifically, you do "),o("strong",[e._v("NOT")]),e._v(" need to install Python, Make, Perl, or C/C++ runtime or compiler.  If you can run "),o("code",[e._v("node --version")]),e._v(" successfully, you have installed the prerequisites required by Zowe.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("v6.x starting with v6.14.4")]),e._v(" "),o("ul",[o("li",[e._v("z/OS V2R2 with PTF UI46658 or z/OS V2R3")])])]),e._v(" "),o("li",[o("p",[e._v("v8.x (except v8.16.1)")]),e._v(" "),o("ul",[o("li",[e._v("z/OS V2R2: PTFs UI62788, UI46658, UI62416 (APARs PH10606, PI79959, PH10740)")]),e._v(" "),o("li",[e._v("z/OS V2R3: PTFs UI61308, UI61376, and UI61747 (APARs PH07107, PH08353, and PH09543)")])]),e._v(" "),o("p",[o("strong",[e._v("Known issue:")]),e._v(" There is a known issue with node.js v8.16.1 and Zowe desktop encoding. See the "),o("a",{attrs:{href:"https://github.com/ibmruntimes/node/issues/142",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub issue"),o("OutboundLink")],1),e._v(" for details.")]),e._v(" "),o("p",[o("strong",[e._v("Workaround:")]),e._v(" Use node.js v8.16.2 or later, which is available at "),o("a",{attrs:{href:"https://www.ibm.com/ca-en/marketplace/sdk-nodejs-compiler-zos",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.ibm.com/ca-en/marketplace/sdk-nodejs-compiler-zos"),o("OutboundLink")],1),e._v(". Download the "),o("code",[e._v("pax.Z")]),e._v(" file.")])]),e._v(" "),o("li",[o("p",[e._v("v12.x")])])]),e._v(" "),o("h2",{attrs:{id:"how-to-obtain-ibm-sdk-for-node-js-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-obtain-ibm-sdk-for-node-js-z-os"}},[e._v("#")]),e._v(" How to obtain IBM SDK for Node.js - z/OS")]),e._v(" "),o("p",[e._v("You can obtain IBM SDK for Node.js - z/OS for free in one of the following ways:")]),e._v(" "),o("ul",[o("li",[e._v("Order the SMP/E edition through your IBM representative for production use")]),e._v(" "),o("li",[e._v("Use the PAX evaluation edition for non-production deployments")])]),e._v(" "),o("p",[e._v("For more information, see the blog "),o("a",{attrs:{href:"https://developer.ibm.com/mainframe/2019/04/17/ibm-sdk-for-node-js-z-os-at-no-charge/",target:"_blank",rel:"noopener noreferrer"}},[e._v('"How to obtain IBM SDK for Node.js - z/OS, at no charge"'),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"hardware-and-software-prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-and-software-prerequisites"}},[e._v("#")]),e._v(" Hardware and software prerequisites")]),e._v(" "),o("p",[e._v("To install Node.js for Zowe, the following requirements must be met.")]),e._v(" "),o("p",[o("strong",[e._v("Hardware:")])]),e._v(" "),o("p",[e._v("IBM zEnterprise® 196 (z196) or newer")]),e._v(" "),o("p",[o("strong",[e._v("Software:")])]),e._v(" "),o("ul",[o("li",[e._v("z/OS UNIX System Services enabled")]),e._v(" "),o("li",[e._v("Integrated Cryptographic Service Facility (ICSF) configured and started on systems where Node.js is run.")])]),e._v(" "),o("h3",{attrs:{id:"configuring-icsf"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-icsf"}},[e._v("#")]),e._v(" Configuring ICSF")]),e._v(" "),o("p",[e._v("This section summarizes the high-level steps that you can follow to configure and start ICSF. For more information, refer to "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.csfb200/in2.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICSF System Programmer's Guide"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.3.0/com.ibm.zos.v2r3.csfb300/abstract.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICSF Administrator's Guide"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Add "),o("code",[e._v("CSF.SCSFMOD0")]),e._v(" to the LNKLST concatenation.")])]),e._v(" "),o("li",[o("p",[e._v("APF authorize "),o("code",[e._v("CSF.SCSFMOD0")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Modify "),o("code",[e._v("IKJTSOxx")]),e._v(" to add "),o("code",[e._v("CSFDAUTH")]),e._v(" and "),o("code",[e._v("CSFDPKDS")]),e._v(" in the "),o("code",[e._v("AUTHPGM")]),e._v(" parameter list and in the "),o("code",[e._v("AUTHTSF")]),e._v(" parameter list.")])]),e._v(" "),o("li",[o("p",[e._v("Create the following ICSF Key Data Sets:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Cryptographic Key Data Set (CKDS)")]),e._v(" "),o("p",[e._v("Sample JCL: "),o("code",[e._v("SYS1.SAMPLIB(CSFCKDS)")])])]),e._v(" "),o("li",[o("p",[e._v("Public Key Data Set (PKDS)")]),e._v(" "),o("p",[e._v("Sample JCL: "),o("code",[e._v("SYS1.SAMPLIB(CSFPKDS)")])])]),e._v(" "),o("li",[o("p",[e._v("(Optional) If you want to have PKCS#11 support through ICSF, you should create Token Key Data Set (TKDS)")]),e._v(" "),o("p",[e._v("Sample JCL: "),o("code",[e._v("SYS1.SAMPLIB(CSFTKDS)")])])])])]),e._v(" "),o("li",[o("p",[e._v("Copy ICSF Installation Options sample ("),o("code",[e._v("SYS1.SAMPLIB(CSFPRM00)")]),e._v(") to the system PARMLIB data set, and change the name of the data set on the CKDSN and PKDSN statements to the name of data sets you created previously.")])]),e._v(" "),o("li",[o("p",[e._v("Create ICSF startup procedure. Copy "),o("code",[e._v("SYS1.SAMPLIB(CSF)")]),e._v(" to the system PROCLIB and change the data set name in the "),o("code",[e._v("CSFPARM DD")]),e._v(" statement to the name of the installation options data set you provided previously.")])]),e._v(" "),o("li",[o("p",[e._v("(Optional) Define a RACF Started Procedure profile for CSF procedure in "),o("code",[e._v("CLASS(STARTED)")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Start ICSF ("),o("code",[e._v("S CSF")]),e._v(").")])])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" You might need IPL before starting ICSF.")]),e._v(" "),o("h2",{attrs:{id:"installing-the-pax-edition-of-node-js-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-pax-edition-of-node-js-z-os"}},[e._v("#")]),e._v(" Installing the PAX edition of Node.js - z/OS")]),e._v(" "),o("p",[e._v("Follow these steps to install the PAX edition of Node.js - z/OS to run Zowe.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Download the pax.Z file to a z/OS machine.")])]),e._v(" "),o("li",[o("p",[e._v("Extract the pax.Z file inside an installation directory of your choice. For example:")]),e._v(" "),o("p",[o("code",[e._v("pax -rf <path_to_pax.Z_file> -x pax")])])]),e._v(" "),o("li",[o("p",[e._v("Add the full path of your installation directory to your PATH environment variable:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("export PATH=<installation_directory>/bin/:$PATH\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Run the following command from the command line to verify the installation.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("node --version\n")])])]),o("p",[e._v("If Node.js is installed correctly, the version of Node.js is displayed.")])]),e._v(" "),o("li",[o("p",[e._v("After you install Node.js, set the "),o("em",[e._v("NODE_HOME")]),e._v(" environment variable to the directory where Node.js is installed. For example, "),o("code",[e._v("NODE_HOME=/proj/mvd/node/installs/node-v6.14.4-os390-s390x")]),e._v(".")])])]),e._v(" "),o("h2",{attrs:{id:"installing-the-smp-e-edition-of-node-js-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-smp-e-edition-of-node-js-z-os"}},[e._v("#")]),e._v(" Installing the SMP/E edition of Node.js - z/OS")]),e._v(" "),o("p",[e._v("To install the SMP/E edition of Node.js, see the "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSWLKB/welcome_nodesdk_family.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation for IBM SDK for Node.js - z/OS"),o("OutboundLink")],1),e._v(". Remember that the software packages Perl, Python, Make, or C/C++ runtime or compiler that the Node.js documentation might mention are "),o("strong",[e._v("NOT")]),e._v(" needed by Zowe.")])])}),[],!1,null,null,null);t.default=s.exports}}]);