import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
// import es from "date-fns/locale/es";
import {
  CalendarWrapper,
  Header,
  DaysRow,
  Row,
  Cell,
  ChangeButton,
  ScrollBox,
} from "./style";
import { HorizontalContent, VerticalContent } from "../utils";
import Button from "../button";
import TextBox from "../textBox";
import { InfoBox } from "../utils/style";

const Calendar: React.FC = () => {
  // 用useState管理当前日期状态和选中日期状态
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 月份增减
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  // 渲染日历顶部日期
  const renderHeader = () => (
    <Header>
      <ChangeButton onClick={prevMonth}>{"<"}</ChangeButton>
      <span>{format(currentDate, "MMMM yyyy")}</span>
      <ChangeButton onClick={nextMonth}>{">"}</ChangeButton>
    </Header>
  );

  // 渲染星期的头部，从周一开始。
  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEE";
    const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

    // 循环生成星期名称，并将其放入 DaysRow 中。
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="day-name" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <DaysRow>{days}</DaysRow>;
  };

  // 计算当前月份的开始和结束日期，以及日历显示的开始和结束日期。
  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;
    let dayCounter = 0; // 用于计数行数

    while (day <= endDate || dayCounter < 6) {
      // 确保至少有六行
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isToday = isSameDay(day, new Date());
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        days.push(
          <Cell
            className={`${!isSameMonth(day, monthStart) ? "disabled" : ""} ${
              isToday ? "today" : ""
            } ${isSelected ? "selected" : ""}`}
            key={day.toString()}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <span>{format(day, "d")}</span>
          </Cell>
        );
        day = addDays(day, 1);
      }
      rows.push(<Row key={day.toString()}>{days}</Row>);
      days = [];
      dayCounter++;
    }
    return <div style={{ margin: "0 10px" }}>{rows}</div>;
  };

  return (
    <CalendarWrapper>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <HorizontalContent height="xxSmall" backgroundColor="white">
        <Button
          width="realThird"
          height="large"
          border="none"
          borderRadius="none"
          color="white"
          fontSize="xSmall"
          backgroundColor="pink"
          hoverBackgroundColor="#B6004C"
        >
          <TextBox>Actividades</TextBox>
        </Button>
        <Button
          width="realThird"
          height="large"
          border="none"
          borderRadius="none"
          color="white"
          fontSize="xSmall"
          backgroundColor="pink"
          hoverBackgroundColor="#B6004C"
        >
          <TextBox>Publicaciones</TextBox>
        </Button>
        <Button
          width="realThird"
          height="large"
          border="none"
          borderRadius="none"
          color="white"
          fontSize="xSmall"
          backgroundColor="pink"
          hoverBackgroundColor="#B6004C"
        >
          <TextBox>Cumpleaños</TextBox>
        </Button>
      </HorizontalContent>

      <ScrollBox>
        <VerticalContent
          width="whole"
          height="xxSmall"
          borderBottom="1px solid #BDBDBD"
          justifyContent="center"
        >
          <InfoBox style={{ fontSize: "12px", color: "#333333" }}>
            Boletin diario
          </InfoBox>
          <InfoBox
            style={{ fontSize: "12px", color: "#000000", fontWeight: "700" }}
          >
            Sábado 25 de abril 2020 | 10am
          </InfoBox>
        </VerticalContent>
        <VerticalContent
          width="whole"
          height="xxSmall"
          borderBottom="1px solid #BDBDBD"
        >
          <InfoBox style={{ fontSize: "12px", color: "#333333" }}>
            Indice de precios
          </InfoBox>
          <InfoBox
            style={{ fontSize: "12px", color: "#000000", fontWeight: "700" }}
          >
            Sábado 25 de abril 2020 | 10am
          </InfoBox>
          <InfoBox
            style={{ fontSize: "12px", color: "#000000", fontWeight: "700" }}
          >
            Sábado 25 de abril 2020 | 10am
          </InfoBox>
        </VerticalContent>
      </ScrollBox>
    </CalendarWrapper>
  );
};

export default Calendar;
