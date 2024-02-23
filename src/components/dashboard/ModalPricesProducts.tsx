import { VictoryChart, VictoryBar, VictoryTheme } from "victory";


export function ModalPricesProduct() {

  return (
    <div className="absolute w-full h-full inset-0 bg-[rgba(0,0,0,0.4)]">
      <div className="w-full max-w-screen-sm h-full bg-project-gray-850 py-10">
        <h1 className="text-3xl text-center text-project-gray-300">Histórico do produto</h1>
        <VictoryChart theme={VictoryTheme.grayscale} domainPadding={20} height={300} width={400}>
          <VictoryBar
            categories={{ x: ["Jan", "Fev", "Mar", "Abr", "Maio"] }}
            barRatio={0.4}
            animate={{
              duration: 3000,
              onLoad: { duration: 1000 }
            }}
            alignment="end"
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5},
              { x: 4, y: 4},
              { x: 5, y: 6 }
            ]}
          />

        </VictoryChart>
      </div>
    </div>
  )
}