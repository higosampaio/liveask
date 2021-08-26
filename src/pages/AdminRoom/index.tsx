import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { useRoom } from "../../hooks/useRoom";
import { useTheme } from "../../hooks/useTheme";
import { database } from "../../services/firebase";
import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";
import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";
import { Container } from "../../styles/room";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, roomTitle } = useRoom(roomId);
  const { colors } = useContext(ThemeContext);
  const { toggleTheme, theme } = useTheme();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <Container>
      <header>
        <div className="content">
          <img src={logoImg} alt="" />
          <div>
            <Switch
              onChange={toggleTheme}
              checked={theme.title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.15, colors.background)}
              onColor={colors.primary}
            />
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{roomTitle}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions
            .slice(0)
            .reverse()
            .map((question) => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          handleCheckQuestionAsAnswered(question.id)
                        }
                      >
                        <img
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Dar destaque à pergunta" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </Question>
              );
            })}
        </div>
      </main>
    </Container>
  );
}
