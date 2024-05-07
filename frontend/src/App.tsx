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

  const handleCreateAccount = useCallback(async () => {
    try {
      const { data } = await api.post('accounts', { id });

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
              </div>
            </CardContent>
            <CardFooter className="flex">
              <Button type="submit">Criar</Button>
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
