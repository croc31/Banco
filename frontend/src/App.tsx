import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCallback, useState } from "react"
import api from "./services/api"
import { Terminal } from "lucide-react"

export function App() {
  const [result, setResult] = useState({});
  const [id, setId] = useState('');
  const [isPoupanca, setIsPoupanca] = useState('');
  const [idDebit, setidDebit] = useState('');
  const [idCredit, setidCredit] = useState('');
  const [value, setValue] = useState('');

  const handleCreateAccount = useCallback(async () => {
    try {
      const { data } = await api.post('accounts', { id, isPoupanca});

      setResult(data);
    } catch (error) {
      console.log({ error })
    }
  }, [id]);

  const handleCheckAccountBalance = useCallback(async () => {
    try {
      const { data } = await api.get(`accounts/${id}`);

      setResult(data);
    } catch (error) {
      console.log({ error })
    }
  }, [id])

  const handleTransaction = useCallback(async () => {
    try {
      const { data } = await api.get('transaction',{idDebit, idCredit, value});

      setResult(data);
    } catch (error) {
      console.log({ error })
    }
  }, [id])

  const handleCredit = useCallback(async () => {
    try {
      const { data } = await api.get('credit',{ idCredit, value});

      setResult(data);
    } catch (error) {
      console.log({ error })
    }
  }, [id])

  const handleDebit = useCallback(async () => {
    try {
      const { data } = await api.get('debit',{ idDebit, value});

      setResult(data);
    } catch (error) {
      console.log({ error })
    }
  }, [id])

  return (
    <main>
      <div className="flex p-16 gap-4">
        <Card className="w-[350px]">
          <form onSubmit={event => {
            handleCreateAccount();
            event.preventDefault();
          }}>
            <CardHeader>
              <CardTitle>Criar conta</CardTitle>
              <CardDescription>Digite um número para sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="id">Número da conta</Label>
                  <Input id="id" placeholder="12345" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="isPoupanca">Esta conta é poupanca?</Label>
                  <Form.Check id="isPoupanca"  value={isPoupanca} onChange={(event) => setIsPoupanca(event.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex">
              <Button type="submit">Criar</Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="w-[350px]">
          <form onSubmit={event => {
            handleCheckAccountBalance();
            event.preventDefault();
          }}>
            <CardHeader>
              <CardTitle>Consultar saldo</CardTitle>
              <CardDescription>Digite o número da sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="id">Número da conta</Label>
                  <Input id="id" placeholder="12345" value={id} onChange={(event) => setId(event.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex">
              <Button type="submit">Consultar</Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="w-[350px]">
          <form onSubmit={event => {
            handleTransaction();
            event.preventDefault();
          }}>
            <CardHeader>
              <CardTitle>Transação</CardTitle>
              <CardDescription>Digite o número da conta de onde será feito o débito, a conta do crédito e o valor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="idDebit">Número da conta</Label>
                  <Input id="idDebit" placeholder="12345" value={idDebit} onChange={(event) => setidDebit(event.target.value)} />
                </div>
              </div>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="idCredit">Número da conta</Label>
                  <Input id="idCredit" placeholder="12345" value={idCredit} onChange={(event) => setidCredit(event.target.value)} />
                </div>
              </div>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="value">Número da conta</Label>
                  <Input id="value" placeholder="12.11" value={value} onChange={(event) => setValue(event.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex">
              <Button type="submit">Consultar</Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="w-[350px]">
          <form onSubmit={event => {
            handleCredit();
            event.preventDefault();
          }}>
            <CardHeader>
              <CardTitle>Crédito</CardTitle>
              <CardDescription>Digite o número da conta de onde será feito crédito e o valor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="idCredit">Número da conta</Label>
                  <Input id="idCredit" placeholder="12345" value={idCredit} onChange={(event) => setidCredit(event.target.value)} />
                </div>
              </div>
              
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="value">Número da conta</Label>
                  <Input id="value" placeholder="12.11" value={value} onChange={(event) => setValue(event.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex">
              <Button type="submit">Consultar</Button>
            </CardFooter>
          </form>
        </Card>

        <Card className="w-[350px]">
          <form onSubmit={event => {
            handleDebit();
            event.preventDefault();
          }}>
            <CardHeader>
              <CardTitle>Débito</CardTitle>
              <CardDescription>Digite o número da conta de onde será feito débito e o valor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="idDebit">Número da conta</Label>
                  <Input id="idDebit" placeholder="12345" value={idDebit} onChange={(event) => setidDebit(event.target.value)} />
                </div>
              </div>
              
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="value">Número da conta</Label>
                  <Input id="value" placeholder="12.11" value={value} onChange={(event) => setValue(event.target.value)} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex">
              <Button type="submit">Consultar</Button>
            </CardFooter>
          </form>
        </Card>
      </div>

      <div className="flex p-16">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Resultado</AlertTitle>
          <AlertDescription>
            {JSON.stringify(result)}
          </AlertDescription>
        </Alert>
      </div>
    </main>
  )
}
