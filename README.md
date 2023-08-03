Inspired By:

-   https://memo.d.foundation/Why-We-Chose-Our-Tech-Stack-Accelerating-Development-with-a-Robust-Frontend-Solution-93761293924d438c9a86bcd4d937eb7f
-   https://github.com/trankhacvy/takeaway-ui

---

### React

With a decade of evolution under its belt, **[React](https://reactjs.org/)** has
proven itself as a stable, high-performance, and user-friendly frontend
framework. It strikes the perfect balance of stability, performance, and
usability, earning its place as our go-to choice for the frontend foundation.
Although React has a steeper learning curve compared to some other frontend
frameworks, its vast ecosystem, extensive documentation, and strong community
support make it a worthwhile investment for long-term projects.

### React Context

We don't advocate for any specific state management library. React Context API
simplifies data transfer through the component tree without resorting to manual
prop drilling. Most applications don't require complex global state management,
and React Context is more than sufficient for tackling simpler problems. Our
philosophy for React state management is to keep state as local as possible and
utilize React Context when prop drilling becomes unwieldy. Some developers might
consider React Context less powerful than other state management libraries like
Redux or MobX, but for many projects, the simplicity and native integration of
React Context prove to be advantageous. By avoiding unnecessary complexity, we
can focus on delivering efficient and maintainable applications.

### TypeScript

Integrating **[TypeScript](https://www.typescriptlang.org/)** into our codebase
offers numerous benefits for developing medium to large-scale applications. By
using TypeScript, we can identify bugs at compile-time, code with confidence
through features such as auto-completion, definition jumping, and source
documentation, and synchronize API interfaces between backend and frontend using
Swagger JSON documentation. Furthermore, TypeScript streamlines the refactoring
and renaming processes, ultimately enhancing our development workflow and the
quality of the applications we deliver.

We recognize that TypeScript might initially seem daunting for developers who
are more familiar with JavaScript. However, we've found that by providing
comprehensive onboarding materials and ongoing support, our team can quickly
adapt to TypeScript and leverage its benefits to ensure a more robust and
maintainable codebase. Additionally, TypeScript's compatibility with JavaScript
means that we can gradually migrate portions of our codebase, reducing the risk
and impact of transitioning to a new language.

### SWR

**[SWR](https://swr.vercel.app/)** functions as our backend data caching layer,
ensuring a responsive and dynamic UI. By presenting cached data first (stale),
revalidating with a fetch request, and ultimately updating with current data,
our UI remains lively and up-to-date. One potential drawback of SWR is the
possibility of over-fetching or under-fetching data in some scenarios, which may
lead to performance issues.

To address these concerns, we fine-tune SWR configurations to optimize data
fetching strategies based on the specific requirements of each application. This
approach ensures optimal performance and data freshness while minimizing any
potential drawbacks of SWR integration.

### React Hook Forms

We endorse **[React Hook Forms](https://react-hook-form.com/)** for form
management, thanks to its exceptional balance of performance and developer
experience. While React Hook Forms may not be as feature-rich as some other form
libraries like Formik, its focus on simplicity and performance ensures that we
can create efficient and maintainable forms for most use cases. When additional
functionality is needed, React Hook Forms can be easily extended with custom
components or third-party libraries, providing a flexible and adaptable solution
for form management.

### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) resolves common CSS frustrations and
accelerates development for developers of all skill levels. Key benefits
include:

-   Consistency: utility classes adhere to system constraints, preventing
    arbitrary values
-   Simplified naming: no need for complex namespacing techniques like BEM
-   Lean production build: automatically removes unused CSS for optimized
    bundles
-   Mobile-first: apply utilities easily at specific breakpoints
-   Customization: JIT and **`tailwind.config.js`** allow extensive
    personalization

Although TailwindCSS may initially appear verbose and lead to larger HTML files,
the framework's automatic removal of unused CSS in production builds ensures
that the final bundle remains lean and performant. Additionally, the
utility-first approach quickly becomes intuitive, leading to faster development
and easier maintenance.

##

### Service Connector: Fetch API

The service connector layer is responsible for handling communication between
the frontend and backend services. We utilize the Fetch API for all our API
calls. By integrating the
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
with SWR, we can efficiently manage API requests, caching, and error handling.
This combination ensures a fast and reactive user experience while maintaining a
clean and organized codebase.

### State Management: React Context and SWR

In the state management layer, React Context is used for managing local state,
while SWR handles global state and caching. This combination allows us to manage
state effectively at different levels of the application, ensuring that
components have access to the data they need without unnecessary prop drilling.
The use of React Context and SWR enables smooth data flow and seamless updates
across components, resulting in a highly reactive and efficient user interface.

### Logic: React Hooks

The logic layer encapsulates the application's business logic and separates it
from UI components. By using React Hooks, we can create reusable and composable
logic that can be easily integrated into our components. Custom hooks help
abstract complex logic and manage side effects, promoting code reusability and
maintainability while ensuring a clear separation of concerns. This approach
allows developers to focus on specific parts of the application logic, making it
easier to understand, test, and debug.

### UI: TailwindCSS and RadixUI

In the UI layer, we combine **TailwindCSS** and **RadixUI** to create visually
appealing and accessible user interfaces. TailwindCSS streamlines the design
process with utility classes, responsive design, and customization options,
while RadixUI provides fully accessible, unstyled UI components that integrate
seamlessly with TailwindCSS.

It's worth noting that while popular libraries like
**[Ant Design](https://ant.design/)** and
**[Material-UI](https://material-ui.com/)** offer comprehensive, ready-to-use UI
components, they may impose constraints on design flexibility and sometimes
require additional customization efforts to match the desired look and feel of
an application. In contrast, TailwindCSS and RadixUI provide a more flexible and
lightweight approach to styling and building UI components.

One potential drawback of using TailwindCSS and RadixUI is the need to assemble
and style components from scratch, which may seem time-consuming initially.
However, by investing in creating reusable and customizable components tailored
to our design requirements, we ensure a more consistent and maintainable
codebase. Additionally, this approach allows us to retain full control over the
appearance and behavior of our components, avoiding the need to override default
styles provided by pre-built component libraries.

### Testing

not yet
