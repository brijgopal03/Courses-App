
# Course App

This is a **Course App** built using React. The app fetches course data from an API and allows users to filter courses by categories. Users can also like or dislike a course, with toast notifications appearing to confirm their actions.

## Features

- **Course Data Fetching**: All course data is dynamically fetched via an API call.
- **Filtering**: Courses can be filtered by different categories like Development, Business, Design, and Lifestyle.
- **Toast Notifications**: Toast messages appear when a user likes or dislikes a course, providing instant feedback.
- **Responsive UI**: The UI is built to be responsive and user-friendly across various devices.

## Tech Stack

- **Frontend**: React
- **Hooks Used**: 
  - `useState`: To manage state like course data and user selections.
  - `useEffect`: To fetch course data from the API when the component mounts.
- **UI Framework**: Tailwind CSS for styling
- **API**: External API for fetching course data.
- **Toast Library**: Used to display notifications when interacting with courses.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/brijgopal03/Courses-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Course-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

The app will now be running on `http://localhost:3000`.

## Usage

1. On the homepage, you will see a list of top courses fetched from an external API.
2. You can filter the courses using the buttons provided (Development, Business, Design, Lifestyle).
3. To like or dislike a course, click the heart icon on the course card.
4. A toast notification will appear to confirm your action.

## Code Structure

- **`src/components`**: Contains all reusable components like `Card`, `Filter`,`Navbar` etc.
- **`src/index.js`**: Contains root element to render App and ToastContainer components.
- **`src/data.js`**: Contains API service code to fetch the course data.
- **`src/App.js`**: The main entry point that handles routing and page rendering.

## API Integration

- The course data is fetched from an external API when the component mounts using the `useEffect` hook.
- Example API call:

  ```javascript
  useEffect(() => {
    fetch('https://api.example.com/courses')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => toast.error('Error fetching courses:', error));
  }, []);
  ```

## Toast Notifications

- To add a toast notification, the app uses a toast library like `react-toastify`. Here's an example of how it's used:

  ```javascript
  import { toast } from 'react-toastify';

  const handleLike = (courseId) => {
    // Like logic here
    toast.success('You liked this course!');
  };

  const handleDislike = (courseId) => {
    // Dislike logic here
    toast.error('You disliked this course!');
  };
  ```

## Screenshots

![Course App Screenshot](https://github.com/user-attachments/assets/c12f875e-a0fa-4bcb-9d6a-07f76ca2fbe0)


## License

This project is licensed under me - see the [Brijgopal](https://www.linkedin.com/in/brijgopal-dalmia-36a508224/)  for details.
