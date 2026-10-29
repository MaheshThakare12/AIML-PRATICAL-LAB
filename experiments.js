/**
 * AIML Experiment Book - Experiment Registry
 * 
 * Each entry maps an experiment number to its HTML file and metadata.
 * - file: relative path from the dashboard (index.html) to the experiment HTML
 * - title: short title shown on the card
 * - topic: broad category for filtering
 * - available: true if the HTML file exists; false if the file is missing
 *
 * To add a missing experiment:
 *   1. Place the HTML file in the experiments/ folder.
 *   2. Set "available" to true and update "file" with the filename.
 *   3. Refresh index.html in your browser.
 */
const EXPERIMENTS = [
  {
    id: 1,
    file: "experiments/1st.html",
    title: "A* Search – City Route Finder",
    topic: "Search Algorithms",
    available: true
  },
  {
    id: 2,
    file: "experiments/2nd.html",
    title: "A* Search – Variation / Extension",
    topic: "Search Algorithms",
    available: true
  },
  {
    id: 3,
    file: "experiments/3rd.html",
    title: "A* Search – 8×8 Grid Pathfinding",
    topic: "Search Algorithms",
    available: true
  },
  {
    id: 4,
    file: "experiments/4th.html",
    title: "N-Queens Problem Using CSP and Backtracking",
    topic: "CSP & Search",
    available: true
  },
  {
    id: 5,
    file: "experiments/5th.html",
    title: "Sudoku Solver Using CSP and Backtracking",
    topic: "CSP & Search",
    available: true
  },
  {
    id: 6,
    file: "experiments/6th.html",
    title: "Examination Timetable Scheduling Using CSP",
    topic: "CSP & Search",
    available: true
  },
  {
    id: 7,
    file: "experiments/7th.html",
    title: "Tic-Tac-Toe with Minimax",
    topic: "Game AI",
    available: true
  },
  {
    id: 8,
    file: "experiments/8th.html",
    title: "8-Puzzle Solver (A*)",
    topic: "Search Algorithms",
    available: true
  },
  {
    id: 9,
    file: "experiments/9th.html",
    title: "EDA & Regression – Data Preprocessing",
    topic: "Machine Learning",
    available: true
  },
  {
    id: 10,
    file: "experiments/10th.html",
    title: "Feature Engineering & ML Pipeline",
    topic: "Machine Learning",
    available: true
  },
  {
    id: 11,
    file: "experiments/11th.html",
    title: "Classification with Preprocessing Pipeline",
    topic: "Machine Learning",
    available: true
  },
  {
    id: 12,
    file: "experiments/12th.html",
    title: "Linear Regression – Student Scores",
    topic: "Regression",
    available: true
  },
  {
    id: 13,
    file: null,
    title: "Experiment 13",
    topic: "Pending",
    available: false
  },
  {
    id: 14,
    file: "experiments/14th.html",
    title: "Loan Approval Prediction – Decision Tree",
    topic: "Decision Trees",
    available: true
  },
  {
    id: 15,
    file: "experiments/15th.html",
    title: "Customer Churn Prediction – Decision Tree",
    topic: "Decision Trees",
    available: true
  },
  {
    id: 16,
    file: "experiments/16th.html",
    title: "Diabetes Classification – Decision Tree",
    topic: "Decision Trees",
    available: true
  },
  {
    id: 17,
    file: "experiments/17th.html",
    title: "Decision Tree Optimization (Entropy & Gini)",
    topic: "Decision Trees",
    available: true
  },
  {
    id: 18,
    file: "experiments/18th.html",
    title: "Iris Flower Classification – KNN",
    topic: "KNN",
    available: true
  },
  {
    id: 19,
    file: "experiments/19th.html",
    title: "Student Performance Classification – KNN",
    topic: "KNN",
    available: true
  },
  {
    id: 20,
    file: "experiments/20th.html",
    title: "Diabetes Classification – KNN",
    topic: "KNN",
    available: true
  },
  {
    id: 21,
    file: "experiments/21th.html",
    title: "SMS Spam Detection – Naïve Bayes",
    topic: "Naïve Bayes",
    available: true
  },
  {
    id: 22,
    file: "experiments/22th.html",
    title: "Iris Classification – Gaussian Naïve Bayes",
    topic: "Naïve Bayes",
    available: true
  },
  {
    id: 23,
    file: "experiments/23th.html",
    title: "Decision Tree vs Random Forest",
    topic: "Ensemble Methods",
    available: true
  },
  {
    id: 24,
    file: "experiments/24th.html",
    title: "Titanic Survival Prediction – Random Forest",
    topic: "Ensemble Methods",
    available: true
  },
  {
    id: 25,
    file: "experiments/25th.html",
    title: "Customer Segmentation – K-Means",
    topic: "Clustering",
    available: true
  },
  {
    id: 26,
    file: "experiments/26th.html",
    title: "Student Grouping – K-Means",
    topic: "Clustering",
    available: true
  },
  {
    id: 27,
    file: "experiments/27th.html",
    title: "Mall Customer Clustering – K-Means",
    topic: "Clustering",
    available: true
  },
  {
    id: 28,
    file: "experiments/28th.html",
    title: "K-Means Evaluation (Silhouette & Elbow)",
    topic: "Clustering",
    available: true
  },
  {
    id: 29,
    file: null,
    title: "Experiment 29",
    topic: "Pending",
    available: false
  },
  {
    id: 30,
    file: null,
    title: "Experiment 30",
    topic: "Pending",
    available: false
  },
  {
    id: 31,
    file: null,
    title: "Experiment 31",
    topic: "Pending",
    available: false
  },
  {
    id: 32,
    file: null,
    title: "Experiment 32",
    topic: "Pending",
    available: false
  },
  {
    id: 33,
    file: null,
    title: "Experiment 33",
    topic: "Pending",
    available: false
  }
];
