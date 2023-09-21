# Server-side installation overview

Review this overview to learn about the options to install Zowe server-side components, and the roles and responsibilities to perform this installation.

* [Zowe server-side components in the installation](#zowe-server-side-components-in-the-installation)
* [Installation of Zowe runtime](#installation-of-zowe-runtime)
* [Zowe runtime installation methods and roadmap](#zowe-runtime-installation-methods-and-roadmap)
    * [Details of runtime installation methods ](#details-of-runtime-installation-methods)
* [Roles and responsibilities for server-side component installation](#roles-and-responsibilities-for-server-side-component-installation)
    * [Tasks performed by the security administrator](#tasks-performed-by-the-security-administrator)
    * [Tasks performed by the storage administrator](#tasks-performed-by-the-storage-administrator)
    * [Tasks performed by the network administrator](#tasks-performed-by-the-network-administrator)
    * [Tasks performed by the system programmer](#tasks-performed-by-the-system-programmer)

## Complete installation ecosystem

The following diagram presents the full ecosytem of options that can be used to install Zowe server-side components.
![4-installation-methods](../images/install/4-installation-methods.png)

## Zowe server-side components in the installation

The following Zowe server-side components are included in this installation: 

* **Zowe Application Framework**  
A web user interface (UI) that provides a virtual desktop containing several apps allowing access to z/OS functions.  <details><summary>Click here for more information about Zowe Application Framework.</summary> Zowe™ Application Framework includes apps for traditional access such as a 3270 terminal and a VT Terminal, as well as an editor and explorers for working with JES, MVS Data Sets, and Unix System Services.
</details>

*  **Zowe API Mediation Layer (API ML)**  
Zowe API Mediation Layer provides a reverse proxy and enables REST APIs by providing a single point of access for mainframe service REST APIs.<details><summary>Click here for more information about API Mediation Layer.</summary> Such APIs  work with z/OSMF. The API ML has a discovery service allowing for dynamic onboarding of the services. The Gateway is also responsible for authentication and provisioning of Single Sign On functionality across onboarded services. Certain API ML features, such as a certificate or user mapping, are also dependent on other Zowe components, such as ZSS.</details>

* **Zowe System Services (ZSS)** 
Working closely with the Zowe Cross Memory server (ZIS), ZSS serves as one of the primary, authenticated back-ends that communicates with z/OS and provides Zowe with a number of APIs including z/OS Unix files and data sets, control of the plug-ins and services lifecycle, and security management. ZSS is part of the Application Framework. API Mediation Layer also relies on ZSS for certain functionality, such as identity mapping, or SAF Identity Tokens. <details><summary>Click here for more information about Zowe System Services.</summary> The Zowe Desktop delegates a number of its services to ZSS which it accesses through the default http port `7557`. ZSS is written in C and uses native calls to z/OS to provide its services.</details>

## Installation of Zowe runtime

Zowe runtime refers to the full, unarchived set of binaries, executable files, scripts, and other elements that are run when Zowe is started.
Runtime installation includes the following projects:  
* Zowe Application Framework
* Zowe API Mediation Layer
* Zowe System Services (ZSS)


**Important:** To run all of these server-side components, or to run Zowe Application Framework, installation of the Zowe Cross Memory Server (ZIS) is required. The Zowe cross memory server (ZIS) provides privileged cross-memory services to the Zowe Desktop and runs as an APF-authorized program.<details><summary> Click here for more information about ZIS.</summary>The same cross memory server can be used by multiple Zowe desktops. The cross memory server is needed to be able to log on to the Zowe desktop and operate its apps such as the Code Editor.</details>


For more information about the Zowe cross memory server, see [Installing and configuring the Zowe cross memory server (ZWESISTC)](./user-guide/configure-xmem-server).

## Zowe runtime installation methods and roadmap

To get started with installing Zowe runtime, select your installation method from the following options. (Details of each installation method are described later in this article).

* SMP/E build
* Convenience build
* Portable software instance (PSWI)
* Containerization build  
    **Note:** The containerization build makes it possible for some UNIX components to run in a container rather than under USS. For more information about this build method, see [Installing Zowe Containers](k8s-introduction.md).

Zowe server-side components can be installed either on z/OS only, or both on z/OS and in containers.

The following diagram presents a roadmap for installation using the three primary installation methods. If you plan to install these components using a container build, see Installing Zowe Containers.

![Install the Zowe z/OS runtime](../images/install/install.png)

The Zowe z/OS binaries are distributed in the following installation formats. Each of these  formats contain the same contents, but the installation methods vary. 
### Details of runtime installation methods

Select from the following methods to install the Zowe server-side components on z/OS. 
<!-- Add the advantages and disadvantanges to each method -->

   - **SMP/E build**

     The Zowe z/OS binaries are packaged as the following files that you can download. You install this build through SMP/E.  
     - A pax.Z file, which contains an archive (compressed copy) of the FMIDs to be installed.
     - A readme file, which contains a sample job to decompress the pax.Z file, transform it into a format that SMP/E can process, and invoke SMP/E to extract and expand the compressed SMP/E input data sets.

     To obtain and install the SMP/E build, see [Installing Zowe SMP/E](install-zowe-smpe.md).

   - **Convenience build**

     Zowe z/OS binaries are packaged as a PAX file which is a full product install. Transfer this PAX file to a USS directory and expand its contents. Use the [zwe](installandconfig.md#zwe-server-command) command `zwe install` to extract a number of PDS members which contain load modules, JCL scripts, and PARMLIB entries. 

     To obtain and install the convenience build, see [Installing Zowe runtime from a convenience build](install-zowe-zos-convenience-build.md).

   - **Portable Software Instance (PSWI)**

     You can acquire and install the Zowe z/OS PAX file as a portable software instance (PSWI) using z/OSMF.

     To obtain and install the PSWI, see [Installing Zowe from a Portable Software Instance](install-zowe-pswi.md).

   **Note:** While the procedures to obtain and install the SMP/E build, the convenience build, or PSWI are different, configuration of a Zowe runtime is the same for all three installation methods.

Successful installation of either an SMP/E build or a convenience build creates the following artifacts:
* A zFS folder that contains the unconfigured Zowe runtime directory
* A utility library `SZWEEXEC` that contains utilities
* A SAMPLIB library `SZWESAMP` that contains sample members
* A load library `SZWEAUTH` that contains load modules. 

The steps to prepare the z/OS environment to launch Zowe are the same for all installation methods.

## Roles and responsibilities for server-side component installation

### Tasks performed by the security administrator

To configure Zowe security for production environments, it is likely that your organization's security administrator will be required to perform various tasks. For more information, see [Address security requirements](./address-security-requirements#tasks-performed-by-your-security-administrator).

### Tasks performed by the storage administrator

Before starting installation, notify the storage administrator to reserve enough space for USS, directory storage space, and any other storage requrements to install Zowe. For more information , see [Address storage requirements](./address-storage-requirements.md).

### Tasks performed by the network administrator

Notify your organization's network administrator to assign port numbers, reserve these port numbers, and arrange them for you. For more information about network setup, see [Address network requirements](./address-network-requirements.md).

### Tasks performed by the system programmer

In most cases, the system programmer performs Zowe installation and configuration and starts Zowe. System programmers are typically knowledgeable about SMP/E, z/OSMF workflows, and regular maintanance procedures. This role also regularly prepares jobs for other administrators.

## Next steps

Once you successfully install Zowe server-side components, you are ready to configure these z/OS components. Choose from the following options to initialize Zowe z/OS runtime:

* [Initialize Zowe manually using the _init_ command group](../user-guide/initialize-zos-system.md)
* [Configure Zowe with z/OSMF workflows](../user-guide/configure-zowe-zosmf-workflow.md)
