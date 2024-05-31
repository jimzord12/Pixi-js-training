import "./style.css";

const lessons = ["drawSimpleSprite", "drawRect", "drawMovingSprite"];

const importLesson = async (lessonIndex: number): Promise<void> => {
  const prefix = "./Lessons/" + (lessonIndex + 1) + "_";
  const fullPath = prefix + lessons[lessonIndex] + ".ts";

  const lessonCode = import(fullPath);
  console.log(`🔃 Lesson [${lessonIndex + 1}] - Loading 🔃`);
  console.log(`🔃 PATH: ${fullPath} 🔃`);

  lessonCode.then(() => {
    console.log(`✨ Lesson [${lessonIndex + 1}] - Loaded ✨`);
  });
};

importLesson(2);
